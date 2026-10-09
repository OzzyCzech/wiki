---
title: Gemma 4 na DigitalOcean GPU Droplet
description: Gemma 4 přes Ollama na DigitalOcean GPU Droplet — výběr modelu, ovladače, paměť, thinking a vzdálené API přes SSH.
created: 2026-04-09
updated: 2026-10-09
---

Praktický návod pro Gemma 4 přes [Ollama](https://ollama.com/) na DigitalOcean GPU Droplet, aktualizovaný k **9. říjnu 2026**. Původní poznámky vycházely z Debianu 13 a RTX 4000 Ada s 20 GB VRAM; pro nový server DigitalOcean doporučuje obraz AI/ML-ready s připravenými ovladači. Níže uvedený postup je kontrolovaný podle dokumentace, nebyl znovu spuštěn na živém Dropletu.

## Modely

[Gemma 4](https://ai.google.dev/gemma/docs/core/model_card_4) má pět velikostí a licenci Apache 2.0. E2B/E4B uvádějí efektivní počet parametrů, který je menší než celkový počet včetně embeddingů.

| Tag Ollamy | Architektura / parametry | Max. kontext | Vstupy modelu |
|---|---|---|---|
| `gemma4:e2b` | Dense, 2.3B efektivní / 5.1B s embeddingy | 128K | Text, obraz, audio |
| `gemma4:e4b` | Dense, 4.5B efektivní / 8B s embeddingy | 128K | Text, obraz, audio |
| `gemma4:12b` | Dense Unified, 11.95B | 256K | Text, obraz, audio |
| `gemma4:26b` | MoE, 25.2B celkem / 3.8B aktivní | 256K | Text, obraz |
| `gemma4:31b` | Dense, 30.7B | 256K | Text, obraz |

Modelová schopnost není totéž co podpora v runtime. Aktuální [katalog Ollamy](https://ollama.com/library/gemma4) označuje tyto lokální tagy jako text/obraz; z tabulky nelze vyvozovat, že Ollama API přijímá audio. Video model zpracovává jako sekvenci snímků. Výstupem je text.

### Velikost modelu a VRAM

Katalog Ollamy uvádí následující rozsahy velikostí souborů napříč variantami tagu, **nikoli minimální VRAM**:

| Tag | Velikost v katalogu |
|---|---|
| `gemma4:e2b` | 4.6–7.5 GB |
| `gemma4:e4b` | 6.6–9.5 GB |
| `gemma4:12b` | 7.7–8.0 GB |
| `gemma4:26b` | 16–19 GB |
| `gemma4:31b` | 19–20 GB |

`gemma4` / `latest` aktuálně odpovídá E4B. Pro opakovatelné nasazení zvolte explicitní tag a zaznamenejte verzi Ollamy, ID modelu z `ollama list` a kvantizaci z `ollama show`.

[Delší kontext](https://docs.ollama.com/context-length) vyžaduje další paměť pro KV cache; spotřebu zvyšují také souběžné požadavky. Maximum 256K neznamená, že ho lze použít na 20GB kartě. Aktuální výchozí kontext Ollamy je pro GPU pod 24 GiB pouze 4K.

:::tip
Pro RTX 4000 Ada s 20 GB VRAM doporučuji začít E4B nebo 12B s kontextem 8K a změřit spotřebu. 26B lze vyzkoušet s vhodnou kvantizací a menším kontextem; 31B nechává podle velikosti vah velmi malou rezervu. Jde o odhad podle paměťových nároků, ne o potvrzený benchmark. MoE snižuje výpočet na token, ale v paměti stále potřebuje váhy expertů.
:::

## GPU Droplet

[Oficiální konfigurace DigitalOcean](https://docs.digitalocean.com/products/droplets/details/features/) zahrnují:

| GPU | VRAM | RAM Dropletu | vCPU |
|---|---|---|---|
| RTX 4000 Ada | 20 GB | 32 GiB | 8 |
| RTX 6000 Ada | 48 GB | 64 GiB | 8 |
| L40S | 48 GB | 64 GiB | 8 |

Dostupnost podle regionu ověřte při vytváření serveru. Pro větší modely a kontext dává 48GB karta více paměťové rezervy; konkrétní kapacitu je třeba změřit.

## Instalace

### Nový server: AI/ML-ready obraz

DigitalOcean [doporučuje AI/ML-ready obraz](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/) pro NVIDIA, aktuálně založený na Ubuntu 24.04. Ovladače a potřebný GPU software jsou předinstalované. Nezaměňujte ho s obrazem inference-optimized, který obsahuje vlastní stack s vLLM.

Po připojení přes SSH nejprve ověřte GPU:

```bash
nvidia-smi
```

Potom nainstalujte nebo aktualizujte Ollamu a stáhněte model:

```bash
curl -fsSL https://ollama.com/install.sh | sh
sudo systemctl enable --now ollama
ollama --version
ollama pull gemma4:12b
ollama show gemma4:12b
ollama run gemma4:12b
```

### Stávající čistý Debian 13

Na běžném distribučním obrazu se ovladače instalují ručně. Ollama pro současné NVIDIA GPU vyžaduje kompatibilní ovladač **550 nebo novější**; balíček `nvidia-cuda-toolkit` sám o sobě není podmínkou detekce GPU.

V existující konfiguraci APT povolte komponenty `contrib non-free non-free-firmware` pro Debian Trixie. U formátu deb822 jde o řádek `Components:` v příslušném `.sources` souboru. Nepřidávejte duplicitní repozitář vedle již nastavených zdrojů.

```bash
sudo apt-get update
sudo apt-get install -y linux-headers-amd64 nvidia-driver nvidia-smi
sudo reboot
```

Po restartu a opětovném připojení spusťte `nvidia-smi`, potom instalaci Ollamy z předchozí sekce. Pokud hlavičky neodpovídají běžícímu kernelu, doplňte správný balíček hlaviček pro tento kernel; chyby DKMS řešte před spuštěním modelu.

`nvidia-smi` je v Debianu 13 dostupný jako [samostatný balíček](https://packages.debian.org/trixie/nvidia-smi). Chybějící příkaz tedy řešte instalací balíčku; chybu komunikace s GPU řešte kontrolou ovladače.

## Parametry generování

Výchozí sampling doporučený pro Gemma 4 je `temperature=1.0`, `top_p=0.95`, `top_k=64`. V interaktivním `ollama run` nastavte:

```text
/set parameter temperature 1.0
/set parameter top_p 0.95
/set parameter top_k 64
/set parameter num_ctx 8192
```

`num_ctx=8192` je zde konzervativní počáteční volba pro 20GB kartu. Zvětšujte ho podle měření; 32768 není univerzální doporučení.

Pro API použijte `options` a `keep_alive`, které ponechá model načtený mezi požadavky:

```bash
curl --fail-with-body http://localhost:11434/api/chat \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "gemma4:12b",
    "messages": [{"role": "user", "content": "Vysvětli princip MoE."}],
    "options": {
      "temperature": 1.0,
      "top_p": 0.95,
      "top_k": 64,
      "num_ctx": 8192
    },
    "think": false,
    "keep_alive": "30m",
    "stream": false
  }'
```

## Thinking mode

Gemma 4 podporuje přepínatelné uvažování. V aktuálním Ollama API použijte `"think": true` nebo `false`; odpověď a uvažování jsou oddělené v `message.content` a `message.thinking`. Podporu zvoleného modelu zjistíte přes `/api/show`:

```bash
curl --fail-with-body http://localhost:11434/api/show \
  -H 'Content-Type: application/json' \
  -d '{"model": "gemma4:12b"}'
```

Kontrolujte metadata `capabilities` a `thinking`. Token `<|think|>` a `enable_thinking` patří k přímé práci s chat template; při volání Ollamy používejte její rozhraní. Další ukázky jsou v [Gemma 4 API](../gemma-4-api).

## Ověření GPU a řešení problémů

Po načtení modelu:

```bash
ollama ps
nvidia-smi
sudo journalctl -u ollama -n 100 --no-pager
```

- **100% GPU** v `ollama ps` znamená úplné načtení na GPU; směs CPU/GPU znamená částečný offload, který může zpomalovat generování.
- **Nedostatek paměti** — zmenšete kontext, souběh nebo model; `ollama stop gemma4:12b` uvolní načtený model.
- **GPU není detekováno** — nejprve opravte ovladač a případné chyby DKMS, ověřte `nvidia-smi`, potom restartujte Ollamu.
- **Chybí capabilities / model nejde načíst** — aktualizujte Ollamu a znovu stáhněte tag.

## Vzdálený přístup k API

Lokální Ollama API nemá autentizaci. Pro přístup z notebooku ponechte server na výchozím `127.0.0.1:11434` a otevřete SSH tunel; nahraďte `user@droplet` svým SSH účtem a adresou:

```bash
ssh -N -L 11434:127.0.0.1:11434 user@droplet
```

Na notebooku pak fungují stejné požadavky na `http://localhost:11434` jako na serveru. Pokud port používá místní Ollama, zvolte například `-L 11435:127.0.0.1:11434` a volejte port 11435.

:::caution
Nastavení `OLLAMA_HOST=0.0.0.0:11434` a `OLLAMA_ORIGINS=*` odstraní omezení adresy a původu, ale nepřidá přihlášení. Pro sdílenou službu použijte autentizovanou HTTPS proxy a firewall; port Ollamy nezpřístupňujte přímo veřejně.
:::

## Sources

Oficiální zdroje, ověřeno 2026-10-09:

- [Gemma 4 model card](https://ai.google.dev/gemma/docs/core/model_card_4) — parametry, kontext, modality, licence a sampling
- [Ollama Gemma 4](https://ollama.com/library/gemma4) — tagy, velikosti a runtime modality
- [Ollama Linux](https://docs.ollama.com/linux) a [GPU support](https://docs.ollama.com/gpu) — instalace a ovladače
- [Ollama context length](https://docs.ollama.com/context-length) a [FAQ](https://docs.ollama.com/faq) — paměť, offload a keep-alive
- [Ollama chat API](https://docs.ollama.com/api/chat), [thinking](https://docs.ollama.com/capabilities/thinking) a [authentication](https://docs.ollama.com/api/authentication) — parametry a přístup
- [DigitalOcean Droplet features](https://docs.digitalocean.com/products/droplets/details/features/) a [recommended GPU setup](https://docs.digitalocean.com/products/droplets/getting-started/recommended-gpu-setup/) — konfigurace GPU a systémové obrazy
- [Debian Trixie nvidia-driver](https://packages.debian.org/trixie/nvidia-driver) a [nvidia-smi](https://packages.debian.org/trixie/nvidia-smi) — distribuční balíčky
