---
title: Hermes WebUI v Dockeru
description: Nasazení komunitního webového rozhraní pro Hermes Agent v Dockeru za reverzní proxy Traefik s vlastní doménou.
created: 2026-05-21
updated: 2026-05-21
---
[Hermes WebUI](https://github.com/nesquena/hermes-webui) je komunitní browserové rozhraní pro [Hermes Agent](../hermes-agent). Tříbloková Claude-style stránka: vlevo sessions, uprostřed chat, vpravo workspace. Plná parita s CLI — vše co umí terminál umí i toto UI.

## ✅ Předpoklady

- Server s nainstalovaným Hermes Agentem **pod běžným uživatelem** (ne pod rootem) — official installer ho dá do `~/.hermes/hermes-agent/`
- UID uživatele ≠ 0 (root). `WANTED_UID=0` způsobuje smyčku init skriptu — kontejner se musí přepínat na non-root usera, viz [docker_init.bash](https://github.com/nesquena/hermes-webui/blob/main/docker_init.bash)
- Docker + reverzní proxy Traefik s Let's Encrypt (viz níže)
- DNS A záznam pro doménu ukazující na server

## 🔀 Traefik jako reverzní proxy

WebUI samotné nemá HTTPS ani autentizační vrstvu pro public přístup. Traefik řeší TLS (Let's Encrypt přes HTTP challenge) a routování na základě `Host()` pravidla v Docker labelech.

Externí síť `webproxy`, do které se připojují všechny veřejně dostupné služby:

```bash
docker network create webproxy
```

`traefik/compose.yaml`:

```yaml
services:
  traefik:
    container_name: traefik
    pull_policy: always
    image: traefik:latest
    restart: unless-stopped
    command:
      # --- Providers ---
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"

      # --- Entry points ---
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"

      # --- Redirect HTTP -> HTTPS ---
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entryPoint.scheme=https"

      # --- Globální TLS resolver ---
      - "--entrypoints.websecure.http.tls.certResolver=le"

      # --- Let's Encrypt (ACME) ---
      - "--certificatesresolvers.le.acme.httpchallenge=true"
      - "--certificatesresolvers.le.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.le.acme.email=you@example.com"
      - "--certificatesresolvers.le.acme.storage=/letsencrypt/acme.json"

      # --- Dashboard vypnut ---
      - "--api.dashboard=false"
      - "--api.insecure=false"
    ports:
      - "80:80"
      - "443:443"
    networks:
      - webproxy
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "letsencrypt:/letsencrypt"

volumes:
  letsencrypt:

networks:
  webproxy:
    external: true
```

Po `docker compose up -d` Traefik poslouchá na 80/443, automaticky vystavuje Let's Encrypt certifikáty pro každou službu s labelem `traefik.enable=true` a routuje podle `Host()` pravidla.

## 📁 Layout na hostu

Hermes nainstalovaný oficiálním installerem jako `linuxuser` (UID 1000):

```
/home/linuxuser/.hermes/
├── hermes-agent/          # zdrojový kód agenta s pyproject.toml
├── config.yaml            # provider, model, klíče
├── .env                   # API klíče
├── skills/
├── memories/
└── webui/                 # state webui (vytvoří se sám)
/home/linuxuser/workspace/ # výchozí pracovní adresář
```

## 🐳 Docker Compose

```yaml
services:
  hermes-webui:
    container_name: hermes-webui
    image: ghcr.io/nesquena/hermes-webui:latest
    pull_policy: always
    restart: unless-stopped
    networks:
      - webproxy
    environment:
      WANTED_UID: 1000                                     # UID linuxusera
      WANTED_GID: 1000
      HERMES_WEBUI_HOST: 0.0.0.0                           # bind na všechny rozhraní (default 127.0.0.1)
      HERMES_WEBUI_PORT: 8787
      HERMES_WEBUI_STATE_DIR: /home/hermeswebui/.hermes/webui
      HERMES_WEBUI_AUTO_INSTALL: 1                         # automatická instalace agent závislostí
      HERMES_WEBUI_PASSWORD: <silné-heslo>                 # vyžadováno při vystavení mimo localhost
    volumes:
      - /home/linuxuser/.hermes:/home/hermeswebui/.hermes
      - /home/linuxuser/workspace:/workspace
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.hermes.rule=Host(`ai.example.com`)"
      - "traefik.http.services.hermes.loadbalancer.server.port=8787"

networks:
  webproxy:
    external: true
```

## 🚀 První spuštění

```bash
# Instalace Hermes Agenta jako non-root uživatel
sudo -iu linuxuser bash -c \
  'curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash'

# Konfigurace providera a klíčů
sudo -iu linuxuser hermes model

# Start kontejneru
docker compose up -d

# Sledování logů — první start trvá déle (auto-install agent závislostí do venv)
docker logs -f hermes-webui
```

## 🔑 Klíčové proměnné prostředí

| Proměnná                   | Význam                                                    |
| -------------------------- | --------------------------------------------------------- |
| `WANTED_UID` / `WANTED_GID` | UID/GID hostového uživatele s `.hermes`. **Nesmí být 0.** |
| `HERMES_WEBUI_HOST`        | `0.0.0.0` při použití s reverzní proxy                    |
| `HERMES_WEBUI_PORT`        | Default `8787`                                            |
| `HERMES_WEBUI_STATE_DIR`   | Kam ukládat sessions a state webui                        |
| `HERMES_WEBUI_AUTO_INSTALL` | `1` = doinstaluje agent závislosti do `/app/venv`         |
| `HERMES_WEBUI_PASSWORD`    | Heslo pro autentizaci (povinné při public přístupu)       |

## 🩺 Ověření po spuštění

```bash
# Kontejner běží a je healthy
docker ps | grep hermes-webui

# Agent dir nalezen (NE "NOT FOUND")
docker logs hermes-webui 2>&1 | grep "agent dir"
# → agent dir : /home/hermeswebui/.hermes/hermes-agent

# Endpoint odpovídá
curl -sI https://ai.example.com/ | head -3
```

## 🔗 Související

- [Hermes Agent](../hermes-agent) — popis samotného agenta
- [hermes-webui na GitHubu](https://github.com/nesquena/hermes-webui)
- [Oficiální docker-compose příklad](https://github.com/nesquena/hermes-webui/blob/main/docker-compose.yml)
- [docs/docker.md](https://github.com/nesquena/hermes-webui/blob/main/docs/docker.md) — multi-container setupy a troubleshooting

## Zdroje

- [get-hermes.ai](https://get-hermes.ai/#install) — landing page s instalací (accessed 2026-05-21)
- [github.com/nesquena/hermes-webui README](https://github.com/nesquena/hermes-webui) (accessed 2026-05-21)
- [Issue #1695 — AIAgent not available](https://github.com/nesquena/hermes-webui/issues/1695) (accessed 2026-05-21)
