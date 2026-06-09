---
title: turbovec
description: Rust vector index with Python bindings built on Google Research's TurboQuant — faster than FAISS, fully local, for privacy-sensitive RAG.
created: 2026-06-08
updated: 2026-06-08
---

[turbovec](https://github.com/RyanCodrai/turbovec) is a vector search index written in Rust with Python bindings, built on Google Research's [TurboQuant](https://arxiv.org/abs/2504.19874) quantization algorithm. It targets RAG workloads where memory, latency, or privacy matter — a 10M-document corpus that needs 31 GB as float32 fits in ~4 GB while searching faster than FAISS.

## What sets it apart

- **TurboQuant quantizer** — data-oblivious, matches the Shannon lower bound on distortion, with no codebook training and no separate train phase
- **Online ingest** — add vectors and they are indexed immediately; no train step, no parameter tuning, no rebuilds as the corpus grows
- **Faster than FAISS** — hand-written NEON (ARM) and AVX-512BW (x86) SIMD kernels beat FAISS `IndexPQFastScan` by 12–20% on ARM and match or beat it on x86
- **Filtered search** — pass an id allowlist (or slot bitmask) to `search()`; filtering happens inside the SIMD kernel at 32-vector block granularity, so selective allowlists skip most of the work instead of over-fetching and discarding
- **Pure local** — no managed service, no data leaving the machine or VPC; pairs with any open-source embedding model for an air-gapped RAG stack

## API

Available on [PyPI](https://pypi.org/project/turbovec/) (`pip install turbovec`) and [crates.io](https://crates.io/crates/turbovec) (`cargo add turbovec`). Core types:

- `TurboQuantIndex` — basic add/search/persist
- `IdMapIndex` — stable external `uint64` ids that survive deletes (`add_with_ids`, `remove`, allowlist filtering)

```python
from turbovec import TurboQuantIndex

index = TurboQuantIndex(dim=1536, bit_width=4)
index.add(vectors)
scores, indices = index.search(query, k=10)
index.write("my_index.tq")
```

## Framework integrations

Drop-in replacements for the in-tree reference stores in each framework — same public surface and persistence semantics:

- **LangChain** — replaces `InMemoryVectorStore`
- **LlamaIndex** — replaces `SimpleVectorStore`
- **Haystack** — replaces `InMemoryDocumentStore`
- **Agno** — replaces `LanceDb`

## Sources

- [turbovec on GitHub](https://github.com/RyanCodrai/turbovec) — README, API, integrations (accessed 2026-06-08)
- [TurboQuant paper (arXiv:2504.19874)](https://arxiv.org/abs/2504.19874) — underlying quantization algorithm
