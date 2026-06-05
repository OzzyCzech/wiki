---
title: AI Providers
description: Hostingoví poskytovatelé inference pro open-weight modely (Llama, Qwen, Gemma) s OpenAI-kompatibilním API — porovnání a doporučení.
created: 2026-06-05
updated: 2026-06-05
---

Poskytovatelé inference pro open-weight modely (Llama, Qwen, Gemma) s OpenAI-kompatibilním API. Výběr podle ceny, spolehlivosti (SLA), latence a data residency.

## Primární

- **[Nebius](https://nebius.com)** — EU-friendly host (datacentra ve Finsku a Francii + US), dedikované endpointy s 99.9% SLA a autoscalingem; zero-retention mód a jasná data residency. Amsterdamská firma na Nasdaqu (NBIS), bez vazby na Čínu/Rusko. Patří k nejlevnějším seriózním hostům pro Llama 3.3 70B; v katalogu Llama, Qwen 3.6 a Gemma.
- **[Together AI](https://www.together.ai)** — nejčastěji doporučovaný produkční host open-weight modelů, US. Nejširší katalog (Llama 3.3 70B, Qwen 3.6, Gemma pod jednou střechou), silný fine-tuning, spolehlivý provoz a nízká TTFT (~220 ms P50). Předvídatelné účtování bez skrytých poplatků; dražší než Nebius.

## Zálohy

- **[Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)** — OpenAI-kompatibilní inference na edge (300+ PoP), nízká latence a štědrý free tier. Vstup levný, ale výstup výrazně dražší než alternativy → vhodné jako fallback pro nárazový/nízký objem, nevhodné pro output-heavy provoz. Pozor na egress poplatky a účtování streamovacího času.
- **[OpenRouter](https://openrouter.ai/)** — router přes 300+ modelů přes jedno OpenAI-kompatibilní API; při výpadku přepne na jiného poskytovatele. Nabízí jedny z nejnižších cen za Llama 3.3 70B i free endpoint s limity. Bez SLA (více výpadků za posledních měsíců) → jen jako sekundární vrstva, ne sólo produkce; maskuje, kde data fyzicky běží. Viz též [AI Tools](../ai-tools/).

## Výběr poskytovatele

| Kritérium | Doporučení |
| --- | --- |
| Nejnižší cena + EU data residency | Nebius |
| Spolehlivost a fine-tuning | Together AI |
| Edge latence / nárazový objem | Cloudflare Workers AI |
| Fallback a routing přes více modelů | OpenRouter |
