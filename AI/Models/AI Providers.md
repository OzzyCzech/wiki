---
title: AI Providers
description: Významní poskytovatelé inference pro open-weight modely, API gatewaye a velké cloudy — hosting, ceny, kompatibilita API a data residency.
created: 2026-06-05
updated: 2026-10-09
---

Výběr významných služeb pro inference open-weight modelů (Llama, Qwen, Gemma, DeepSeek, gpt-oss). **Přímý host** provozuje modely; **gateway** sjednocuje API a směruje požadavky k dalším poskytovatelům. Některé služby nabízejí i proprietární modely.

Ověřeno k **9. 10. 2026**. U tokenových cen je pořadí **vstup/výstup za 1M tokenů v USD**. Katalogy i ceny se mění; OpenAI-kompatibilní API obvykle znamená Chat Completions, nikoli automaticky podporu všech funkcí OpenAI API.

## Přímí poskytovatelé inference

### [Nebius Token Factory](https://nebius.com/services/token-factory)

Host open-weight modelů s důrazem na produkční provoz a evropskou infrastrukturu.

- OpenAI-kompatibilní API, serverless a batch inference, dedikované endpointy a fine-tuning.
- Nabízí zero-retention inference v EU i USA. Pro data residency je potřeba vybrat odpovídající endpoint.
- [Ceník](https://nebius.com/token-factory/prices), [zdroj: funkce a EU/US inference](https://nebius.com/newsroom/nebius-launches-nebius-token-factory-to-deliver-production-ai-inference-at-scale).

### [Together AI](https://www.together.ai)

Široký katalog open-weight modelů a zázemí pro fine-tuning i dedikovaný provoz.

- Serverless API, dedikované GPU endpointy a fine-tuning; textové, obrazové i další modely.
- [OpenAI-kompatibilní API](https://docs.together.ai/docs/inference/openai-compatibility) pro snadné přepnutí klienta.
- Llama 3.3 70B: **$1.04/$1.04** podle [ceníku](https://www.together.ai/pricing); cenu vždy vztáhnout ke konkrétní variantě modelu a režimu služby.

### [Fireworks AI](https://fireworks.ai/inference)

Produkční inference open-weight modelů s optimalizovaným servingem a návazností na trénování.

- Široký katalog včetně Qwen, DeepSeek, Kimi a Llama; text i vision.
- Serverless, on-demand a rezervovaná kapacita; fine-tuning a nasazení upravených modelů na stejné platformě.
- OpenAI i Anthropic-kompatibilní API. [Zdroj: inference a nabídka nasazení](https://fireworks.ai/inference).

### [DeepInfra](https://deepinfra.com)

Univerzální inference platforma pro open-weight modely a více modalit.

- Vedle LLM nabízí embeddings, reranking, obrázky, video a audio; také privátní modely a GPU instance.
- [OpenAI-kompatibilní Chat Completions](https://docs.deepinfra.com/chat/overview), streaming, tool calling a structured outputs podle modelu.
- Kandidát při porovnávání nákladů napříč open-weight modely; sazby jsou v [katalogu](https://deepinfra.com/models). [Zdroj: přehled platformy](https://docs.deepinfra.com/).

### [GroqCloud](https://groq.com/platform)

Inference na specializovaných LPU akcelerátorech, zaměřená na rychlé generování odpovědí.

- Kandidát pro interaktivní chat, hlasové aplikace a agentní smyčky citlivé na rychlost odpovědi. [Zdroj: LPU a modality](https://console.groq.com/landing/hackathon).
- [API je převážně OpenAI-kompatibilní](https://console.groq.com/docs/openai), ale některé parametry nejsou podporované.
- Ověřit konkrétní [modely](https://console.groq.com/docs/models) a [rate limits](https://console.groq.com/docs/rate-limits); rychlost hardwaru sama nezaručuje dostupnou kapacitu.

### [Cerebras Inference](https://inference-docs.cerebras.ai/)

Inference na wafer-scale hardwaru, také zaměřená na rychlé generování.

- Kandidát pro coding, reasoning a agentní aplikace citlivé na dobu generování.
- OpenAI-kompatibilní rozhraní a dedikovaná inference s rezervovanou kapacitou.
- Výběr podmínit dostupností konkrétního modelu, limity a cenou. [Zdroj: dokumentace a aktuální nabídka](https://inference-docs.cerebras.ai/).

### [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai/)

Spravovaná inference integrovaná s ekosystémem Cloudflare Workers.

- Praktická volba pro aplikace ve Workers; [OpenAI-kompatibilní endpointy](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/).
- **10 000 Neuronů/den zdarma**, nad limit **$0.011 / 1 000 Neuronů** na Workers Paid; některé modely vyžadují placenou metodu účtování.
- Llama 3.3 70B `fp8-fast`: **$0.293/$2.253** — u dlouhých výstupů sledovat hlavně výstupní sazbu. [Zdroj: ceník](https://developers.cloudflare.com/workers-ai/platform/pricing/).

### [DigitalOcean Inference](https://docs.digitalocean.com/products/inference/)

Spravovaná inference v DigitalOcean s vlastním hostingem i přístupem k modelům třetích stran.

- OpenAI-kompatibilní API; katalog zahrnuje Llama, DeepSeek, Qwen a Kimi i proprietární modely.
- **Serverless** se účtuje podle tokenů a vyžaduje předplacený zůstatek; **dedikovaná inference** podle GPU hodin.
- Praktická volba pro aplikace již provozované v DigitalOcean. [Zdroj: serverless vs. dedicated](https://docs.digitalocean.com/products/inference/how-to/si-overview/), [ceník](https://docs.digitalocean.com/products/inference/details/pricing/).

## API gatewaye a agregátory

### [OpenRouter](https://openrouter.ai/)

Jedno API pro open-weight i proprietární modely od mnoha poskytovatelů.

- Sjednocené účtování, směrování a fallback při nedostupnosti poskytovatele.
- Lze určit povolené poskytovatele, pořadí a požadavky na práci s daty; data residency posuzovat pro skutečného hosta i gateway.
- Cenu modelu a poplatky za kredity či BYOK ověřovat odděleně. [Zdroj: provider routing](https://openrouter.ai/docs/guides/routing/provider-selection), [ceny a plány](https://openrouter.ai/pricing). Viz též [AI Tools](../../tools/ai-tools/).

### [Vercel AI Gateway](https://vercel.com/ai-gateway)

Gateway s jednotným klíčem, účtováním a přehledem spotřeby; přirozená integrace s Vercel AI SDK.

- Podporuje OpenAI Chat Completions, Responses i Anthropic Messages; automatický fallback a [řízení poskytovatelů](https://vercel.com/docs/ai-gateway/models-and-providers/provider-options).
- Tokeny za ceníkovou cenu poskytovatele **bez přirážky**, včetně BYOK v placeném režimu. Některé doplňkové funkce a zpracování plateb mohou mít další poplatky.
- Free tier: **$5 měsíčně** pro vybrané modely; po zakoupení kreditů přechází účet na placený režim a měsíční free kredit končí. [Zdroj: ceník](https://vercel.com/docs/ai-gateway/pricing).

### [Hugging Face Inference Providers](https://huggingface.co/docs/inference-providers/index)

Agregátor inference poskytovatelů propojený s Hugging Face Hubem.

- Jedno rozhraní a účtování; volba konkrétního poskytovatele nebo politiky `:fastest`, `:cheapest`, `:preferred`.
- Bez dodatečné přirážky k sazbám poskytovatele. OpenAI-kompatibilní router je určen pro chat completions; jiné úlohy používají HF klienty.
- Pro vlastní dedikované nasazení existuje samostatná služba [Inference Endpoints](https://huggingface.co/docs/inference-endpoints/index). [Zdroj: Inference Providers](https://huggingface.co/docs/inference-providers/index).

## Velké cloudy

Významné zejména při existující cloudové infrastruktuře, požadavcích na správu přístupů a regionální nasazení. Dostupnost modelů, API i cena závisejí na regionu a typu deploymentu.

- **[Amazon Bedrock](https://aws.amazon.com/bedrock/)** — spravované open-weight i proprietární modely v AWS. Nabízí také OpenAI-kompatibilní endpointy; podporu modelu a API ověřit v [tabulce dostupnosti endpointů](https://docs.aws.amazon.com/bedrock/latest/userguide/models-endpoint-availability.html).
- **[Microsoft Foundry / Azure](https://learn.microsoft.com/en-us/azure/ai-foundry/)** — katalog modelů a spravované nasazení v Azure. OpenAI SDK podporuje také Foundry Models prodávané Azure přes Chat Completions; API se liší podle nabídky. [Zdroj: SDK a endpointy](https://learn.microsoft.com/azure/ai-foundry/how-to/develop/sdk-overview).
- **[Google Cloud Model Garden](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models)** — nabídka známá z Vertex AI, nyní v dokumentaci Gemini Enterprise Agent Platform. Spravované modely jako služba i vlastní nasazení open-weight modelů; u vlastního deploymentu se platí výpočetní prostředky. [Zdroj: katalog a režimy nasazení](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/model-garden/explore-models).

## Jak vybírat

- **Široký katalog a vlastní fine-tuning:** Together, Fireworks, Nebius.
- **Rychlé interaktivní generování:** porovnat Groq a Cerebras na konkrétním modelu a úloze.
- **Více poskytovatelů přes jedno API:** OpenRouter, Vercel AI Gateway, Hugging Face.
- **Existující infrastruktura:** Workers AI pro Cloudflare, DigitalOcean Inference pro DigitalOcean; Bedrock, Foundry nebo Google Cloud pro příslušný cloud.
- **EU data residency:** ověřit endpoint, skutečný region zpracování, retention a chování fallbacků. Nabídka EU regionu sama o sobě nestačí.

Pro porovnání ceny a výkonu použít také [Artificial Analysis](https://artificialanalysis.ai/), ale konečnou cenu, SLA a dostupnost regionů ověřit u poskytovatele pro konkrétní model a tarif.
