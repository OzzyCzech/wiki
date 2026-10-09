---
title: Gemma 4 API
description: Gemma 4 přes lokální Ollama API, Gemini API a OpenRouter — aktuální modely, SDK, streaming a limity.
created: 2026-04-12
updated: 2026-10-09
---

Gemma 4 můžete volat lokálně přes Ollama, přes Gemini API s klíčem z Google AI Studio nebo přes OpenRouter. Přehled a příklady byly zkontrolovány k **9. říjnu 2026**; dostupnost modelů a kvóty se mohou měnit.

## Identifikátory modelů

| Služba | Příklady platných ID |
|---|---|
| Ollama | `gemma4:e4b`, `gemma4:12b`, `gemma4:26b`, `gemma4:31b` |
| Gemini API | `gemma-4-26b-a4b-it`, `gemma-4-31b-it` |
| OpenRouter | `google/gemma-4-26b-a4b-it`, `google/gemma-4-31b-it` |

Názvy mezi službami nejsou zaměnitelné; tagy Ollamy jsou v [návodu na vlastní server](../gemma-4-na-digitalocean).

## Ollama — lokální API

Po [instalaci Ollamy](../gemma-4-na-digitalocean) stáhněte konkrétní model:

```bash
ollama pull gemma4:e4b
```

Python HTTP příklady vyžadují `pip install requests`. Lokální API standardně poslouchá na `http://localhost:11434` a nevyžaduje klíč. Neplatíte za tokeny, ale provoz stojí hardware, elektřinu nebo pronájem serveru. Kapacitu omezuje paměť a výkon stroje.

### Generování

```python
import requests

response = requests.post("http://localhost:11434/api/generate", json={
    "model": "gemma4:e4b",
    "prompt": "Explain async/await in Python like I'm 10",
    "stream": False
}, timeout=300)
response.raise_for_status()

print(response.json()["response"])
```

```bash
curl --fail-with-body http://localhost:11434/api/generate \
  -H 'Content-Type: application/json' -d '{
  "model": "gemma4:e4b",
  "prompt": "Explain async/await in Python like I am 10",
  "stream": false
}'
```

```javascript
const response = await fetch("http://localhost:11434/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "gemma4:e4b",
    prompt: "Explain async/await in Python like I'm 10",
    stream: false,
  }),
});

if (!response.ok) {
  throw new Error(`Ollama HTTP ${response.status}: ${await response.text()}`);
}
const data = await response.json();
if (data.error) throw new Error(data.error);
console.log(data.response);
```

### Chat API (více kol)

Pro konverzace s historií zpráv použijte:

```python
import requests

response = requests.post("http://localhost:11434/api/chat", json={
    "model": "gemma4:e4b",
    "messages": [
        {"role": "system", "content": "You are a helpful coding tutor."},
        {"role": "user", "content": "What's the difference between a list and a tuple?"}
    ],
    "stream": False
}, timeout=300)
response.raise_for_status()

print(response.json()["message"]["content"])
```

### Streaming

```python
import requests
import json

response = requests.post("http://localhost:11434/api/generate", json={
    "model": "gemma4:e4b",
    "prompt": "Write a short story about a debugging session at 3am",
    "stream": True
}, stream=True, timeout=300)
response.raise_for_status()

for line in response.iter_lines():
    if line:
        chunk = json.loads(line)
        if "error" in chunk:
            raise RuntimeError(chunk["error"])
        print(chunk.get("response", ""), end="", flush=True)
```

:::tip
Stažený lokální model může fungovat offline. Tagy jako `gemma4:31b-cloud` běží v cloudu a posílají požadavky mimo váš stroj. Pro čistě lokální provoz lze vypnout cloudové funkce pomocí `OLLAMA_NO_CLOUD=1` a restartovat server.
:::

### Thinking a OpenAI kompatibilita

U podporovaného modelu přidejte do `/api/chat` nebo `/api/generate` pole `"think": true` či `false`. Chat vrací uvažování v `message.thinking` a odpověď v `message.content`. Podporu konkrétního tagu lze ověřit přes `/api/show`; při běžném pokračování konverzace ukládejte finální odpověď do historie.

Ollama podporuje také část OpenAI API na `http://localhost:11434/v1/`. Příklad s Python SDK (`pip install openai`):

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:11434/v1/",
    api_key="ollama",  # SDK hodnotu vyžaduje, lokální server ji ignoruje
)
response = client.chat.completions.create(
    model="gemma4:e4b",
    messages=[{"role": "user", "content": "Vysvětli async/await v Pythonu."}],
)
print(response.choices[0].message.content)
```

## Gemini API / Google AI Studio

[Oficiální návod](https://ai.google.dev/gemma/docs/core/gemma_on_gemini_api) uvádí modely `gemma-4-26b-a4b-it` a `gemma-4-31b-it`. Klíč vytvořte v [Google AI Studio](https://aistudio.google.com/apikey) a nastavte proměnnou `GEMINI_API_KEY` na serveru nebo ve svém terminálu.

### Python SDK

Použijte aktuální **Google Gen AI SDK**, které nahradilo knihovnu `google-generativeai`:

```bash
pip install -U google-genai
```

```python
import os
from google import genai

client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
response = client.models.generate_content(
    model="gemma-4-26b-a4b-it",
    contents="Napiš Python dekorátor pro opakování neúspěšného volání.",
)
print(response.text)
```

### cURL

```bash
curl --fail-with-body \
  "https://generativelanguage.googleapis.com/v1beta/models/gemma-4-26b-a4b-it:generateContent" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{
      "parts": [{"text": "Vysvětli async/await v Pythonu."}]
    }]
  }'
```

### Streaming a thinking

S klientem z předchozí ukázky:

```python
from google.genai import types

for chunk in client.models.generate_content_stream(
    model="gemma-4-26b-a4b-it",
    contents="Vysvětli řešení jednoduché kombinatorické úlohy.",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="high"),
    ),
):
    if chunk.text:
        print(chunk.text, end="", flush=True)
```

Gemma podporuje zapnutí (`high`) a vypnutí (`minimal`) thinking; nejde o škálu několika úrovní uvažování.

### Cena, kvóty a chyby

[Ceník Gemini API](https://ai.google.dev/gemini-api/docs/pricing#gemma-4) uvádí pro Gemma 4 bezplatný vstup a výstup; placený tier pro tuto řadu není dostupný. Bezplatný tier dovoluje použití dat ke zlepšování produktů Google podle podmínek služby.

[Aktivní limity](https://ai.google.dev/gemini-api/docs/rate-limits) ověřte v AI Studio pro svůj projekt a model. Kvóty se uplatňují na projekt, nikoli na každý klíč zvlášť.

```python
from google.genai import errors

try:
    response = client.models.generate_content(
        model="gemma-4-26b-a4b-it",
        contents="Vysvětli rozdíl mezi list a tuple.",
    )
    print(response.text)
except errors.APIError as exc:
    print(f"API chyba {exc.code}: {exc.message}")
```

Při `429` použijte omezené opakování s rostoucí prodlevou; při `400` opravte požadavek a při `404` ověřte ID a dostupnost modelu.

## OpenRouter (OpenAI-kompatibilní)

OpenRouter nabízí OpenAI-kompatibilní rozhraní. V existujícím klientovi změňte **adresu API, klíč i ID modelu**. Podporované funkce závisejí na konkrétním modelu a poskytovateli.

### Získání API klíče

1. Registrace na [openrouter.ai](https://openrouter.ai/)
2. Vygenerování API klíče a nastavení `OPENROUTER_API_KEY`
3. Pro placené modely dobití kreditu; pro bezplatné varianty ověření jejich kvót

K [datu kontroly](https://openrouter.ai/api/v1/models) jsou dostupné také `google/gemma-4-26b-a4b-it:free` a `google/gemma-4-31b-it:free`. Jejich dostupnost a limity se liší od placených variant; aktuální ceny ověřte v katalogu.

### Python

```python
import os
import requests

response = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {os.environ['OPENROUTER_API_KEY']}",
        "Content-Type": "application/json",
    },
    json={
        "model": "google/gemma-4-26b-a4b-it",
        "messages": [
            {"role": "user", "content": "Compare React and Vue in 5 bullet points"}
        ],
    },
    timeout=300,
)
response.raise_for_status()

print(response.json()["choices"][0]["message"]["content"])
```

### OpenAI Python SDK

```python
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ["OPENROUTER_API_KEY"],
)

response = client.chat.completions.create(
    model="google/gemma-4-26b-a4b-it",
    messages=[
        {"role": "user", "content": "Explain monads in plain English"}
    ],
)

print(response.choices[0].message.content)
```

### Streaming

```python
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ["OPENROUTER_API_KEY"],
)

stream = client.chat.completions.create(
    model="google/gemma-4-26b-a4b-it",
    messages=[{"role": "user", "content": "Write a short story"}],
    stream=True,
)

for chunk in stream:
    if not chunk.choices:
        continue
    content = chunk.choices[0].delta.content
    if content:
        print(content, end="", flush=True)
```

## Srovnání

| Služba | Náklady | Limity | Kam jdou prompty |
|---|---|---|---|
| Ollama, lokální model | Vlastní hardware / server | Paměť, výkon a fronta serveru | Na stroj s Ollamou |
| Gemini API | Gemma 4 v bezplatném tieru | Kvóty projektu v AI Studio | Google |
| OpenRouter | Cena modelu; také varianty `:free` | Kvóty a dostupný kredit | OpenRouter a poskytovatel inference |

Pro offline práci použijte lokální Ollamu, pro prototyp bez správy GPU Gemini API. Pro jednotné rozhraní k více poskytovatelům se hodí OpenRouter; před nasazením ověřte kapacitu, cenu a pravidla zpracování dat.

## Časté problémy

- **Connection refused v Ollamě** — ověřte službu (`systemctl status ollama`), případně spusťte `ollama serve`; při vzdáleném přístupu zkontrolujte SSH tunel.
- **Model not found** — v Ollamě použijte `ollama list` a `ollama pull`; v cloudové službě ověřte její katalog a správné ID.
- **Pomalé odpovědi / nedostatek paměti** — zkontrolujte `ollama ps`, velikost kontextu a [GPU konfiguraci](../gemma-4-na-digitalocean).
- **429 nebo 503** — kvóta či přetížení; omezte souběh a opakujte s prodlevou. OpenRouter může vrátit `402` při nedostatku kreditu.
- **Timeout při thinking** — první výstup může přijít později; nastavte vhodný timeout a použijte streaming.

## Sources

Oficiální zdroje, ověřeno 2026-10-09:

- [Gemma 4 v Gemini API](https://ai.google.dev/gemma/docs/core/gemma_on_gemini_api) — modely a thinking
- [Gemini API libraries](https://ai.google.dev/gemini-api/docs/libraries) — aktuální SDK
- [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) a [rate limits](https://ai.google.dev/gemini-api/docs/rate-limits) — cena, data a kvóty
- [Google Gen AI Python SDK](https://github.com/googleapis/python-genai) — streaming a chyby
- [Ollama generate](https://docs.ollama.com/api/generate) a [chat](https://docs.ollama.com/api/chat) — HTTP příklady
- [Ollama thinking](https://docs.ollama.com/capabilities/thinking), [OpenAI compatibility](https://docs.ollama.com/api/openai-compatibility) a [authentication](https://docs.ollama.com/api/authentication) — rozhraní a přístup
- [Ollama FAQ](https://docs.ollama.com/faq) — lokální provoz, cloud a kapacita
- [OpenRouter katalog API](https://openrouter.ai/api/v1/models), [quickstart](https://openrouter.ai/docs/quickstart) a [limits](https://openrouter.ai/docs/api_reference/limits) — ID, klient a omezení
