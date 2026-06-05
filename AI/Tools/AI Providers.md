---
title: AI Providers
description: Hostingoví poskytovatelé inference pro open-weight modely (Llama, Qwen, Gemma) s OpenAI-kompatibilním API — porovnání ceny, SLA, latence a data residency.
created: 2026-06-05
updated: 2026-06-05
---

Poskytovatelé inference pro open-weight modely (Llama, Qwen, Gemma) s OpenAI-kompatibilním API. Ceny jsou orientační pro Llama 3.3 70B (vstup/výstup za 1M tokenů) a v čase se mění.

## [Nebius](https://nebius.com)

Primární, EU-friendly. OpenAI-kompatibilní API s dedikovanými endpointy, 99.9% SLA a autoscalingem.

- EU datacentra (Finsko, Francie) + US → vhodné, pokud je data residency téma; zero-retention mód
- Llama 3.3 70B ~$0.13/$0.40 — jeden z nejlevnějších seriózních hostů
- Katalog: Llama, Qwen 3.6, Gemma
- Amsterdamská firma, Nasdaq (NBIS), žádná vazba na Čínu/Rusko

## [Together AI](https://www.together.ai)

Primární, US, „common" volba. Nejčastěji doporučovaný produkční host open-weight modelů, OpenAI-kompatibilní.

- Nejširší katalog (Llama 3.3 70B, Qwen 3.6, Gemma pod jednou střechou), silný fine-tuning
- Spolehlivý provoz, ~220 ms P50 TTFT; $5 kredit na start, bez minim
- Llama 3.3 70B ~$0.88/$0.88 — dražší než Nebius, ale předvídatelné a bez skrytých poplatků

## [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)

Záloha. OpenAI-kompatibilní inference běžící na edge (300+ PoP), nízká latence.

- Štědrý free tier: 10 000 Neuronů/den zdarma, pak $0.011 / 1 000 Neuronů
- Llama 3.3 70B fp8-fast za $0.293 vstup / $2.253 výstup → vstup levný, výstup drahý (3–7× víc než alternativy)
- Vhodné pro nárazový/nízký objem; nevhodné pro output-heavy provoz
- Pozor na egress ($0.09/GB) a účtování streamovacího času

## [OpenRouter](https://openrouter.ai/)

Alternativní záloha (router). Router přes 300+ modelů přes jedno OpenAI-kompatibilní API; při výpadku přepne na jiného poskytovatele. Bez měsíčního poplatku. Viz též [AI Tools](../ai-tools/).

- Llama 3.3 70B nejlevněji (~$0.10/$0.32) + free endpoint (20 req/min, 200 req/den)
- 5,5% poplatek při nákupu kreditu (5,0% krypto, min. $0.80), žádné objemové slevy
- Bez SLA (3 výpadky za 8 měsíců po 35–50 min); maskuje, kde data fyzicky běží

## Sources

- [Nebius — Artificial Analysis](https://artificialanalysis.ai/providers/nebius) — cena a výkon Llama 3.3 70B
- [Llama 3.3 70B providers — Artificial Analysis](https://artificialanalysis.ai/models/llama-3-3-instruct-70b/providers) — porovnání hostů, TTFT
- [Together AI pricing](https://www.together.ai/pricing) — ceník a fine-tuning
