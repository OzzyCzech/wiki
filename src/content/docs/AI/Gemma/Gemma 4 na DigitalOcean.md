---
title: Gemma 4 na DigitalOcean GPU Droplet
description: Jak spustit Gemma 4 přes Ollama na DigitalOcean GPU Droplet s Debian 13 a RTX 4000 Ada.
created: 2026-04-09
updated: 2026-04-12
---

Praktický návod, jak spustit Gemma 4 přes [Ollama](https://ollama.com/) na [DigitalOcean GPU Droplet](https://www.digitalocean.com/products/gradient/gpu-droplets). Postup je ověřený na Debianu 13 (Trixie) s kartou RTX 4000 Ada (20 GB VRAM), stav k dubnu 2026.

## Modely

| Model | Architektura | Kontext | Modality | Min. VRAM (Q4) |
|-------|-------------|---------|----------|----------------|
| `gemma4:e2b` | Dense, 2.3B | 128K | Text, obraz, audio | ~3.2 GB |
| `gemma4:e4b` *(= latest)* | Dense, 4.5B | 128K | Text, obraz, audio | ~5 GB |
| `gemma4:26b` | MoE, 3.8B aktivní / 128 expertů | 256K | Text, obraz | ~15.6 GB |
| `gemma4:31b` | Dense, 30.7B | 256K | Text, obraz | ~17.4 GB |

:::tip
Pro RTX 4000 Ada (20 GB) je `gemma4:26b` ideální volba — MoE aktivuje jen 3.8B parametrů na token, takže je rychlý jako 4B model, ale kvalitou se blíží 31B.
:::

## GPU Droplet

[DigitalOcean GPU Droplets](https://www.digitalocean.com/products/gradient/gpu-droplets) — RTX 4000 Ada, 1× GPU, 20 GB VRAM, 8 vCPU, 32 GB RAM.

## Instalace

DigitalOcean GPU Droplet s Debian 13 nemá předinstalované NVIDIA ovladače ani CUDA. Bez `nvidia-cuda-toolkit` Ollama GPU nevidí a model poběží na CPU.

```bash
# Non-free repo (nutné pro NVIDIA na Debianu)
echo "deb http://deb.debian.org/debian trixie main contrib non-free non-free-firmware" \
  > /etc/apt/sources.list.d/nvidia.list
apt-get update

# Ovladače + CUDA
apt-get install -y linux-headers-amd64 nvidia-driver firmware-misc-nonfree nvidia-cuda-toolkit

# Načtení kernel modulu
modprobe nvidia

# Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Stažení modelu a spuštění
ollama pull gemma4:26b
ollama run gemma4:26b
```

### Vzdálený přístup k API

Pokud chcete k Ollama API přistupovat vzdáleně:

```bash
mkdir -p /etc/systemd/system/ollama.service.d
cat > /etc/systemd/system/ollama.service.d/override.conf <<EOF
[Service]
Environment="OLLAMA_HOST=0.0.0.0:11434"
Environment="OLLAMA_ORIGINS=*"
EOF
systemctl daemon-reload && systemctl restart ollama
```

## Parametry generování

Doporučené výchozí hodnoty pro Gemma 4:

```bash
/set parameter temperature 1.0
/set parameter top_p 0.95
/set parameter top_k 64
/set parameter num_ctx 32768
```

Při spuštění můžete přidat `--keepalive 30m`, aby model zůstal načtený v paměti a nezdržoval se při každém novém dotazu:

```bash
ollama run gemma4:26b --keepalive 30m
```

## Thinking mode

Gemma 4 podporuje "thinking mode" — model si před odpovědí projde interní fázi uvažování. Zapnete ho přidáním tokenu `<|think|>` do systémového promptu nebo parametrem `enable_thinking=True` v chat template.

## Ověření GPU

```bash
ollama ps
# Hledejte "100% GPU" ve sloupci PROCESSOR
```

:::note
`nvidia-smi` na Debianu 13 nefunguje, protože balíček neobsahuje příslušnou binárku. Místo toho použijte `ollama ps` nebo `lsmod | grep nvidia`.
:::

## Sources

- [Gemma 4 + Ollama Local Setup](https://findskill.ai/blog/gemma-4-ollama-local-setup/) — parametry, architektura modelů, best practices
- [ollama.com/library/gemma4](https://ollama.com/library/gemma4) — dostupné tagy a doporučené parametry
