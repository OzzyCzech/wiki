---
title: AI Benchmarks & Leaderboards
description: Overview of independent AI model benchmarks and leaderboards for comparing LLM performance, including what each benchmark measures.
created: 2026-03-19
updated: 2026-04-08
sidebar:
  label: AI Benchmarks
---

Resources for comparing AI model performance through independent benchmarks and community leaderboards.

## 🏆 Leaderboards

### LMArena (Chatbot Arena)

**[lmarena.ai](https://lmarena.ai/)** — the most widely used crowdsourced AI benchmarking platform, formerly LMSYS Chatbot Arena, now operated by Arena Intelligence. Users rate anonymous head-to-head model comparisons; results are aggregated into an Elo-style rating across 140+ models from over 6 million blind pairwise votes. Specialized arenas exist for coding, math, and vision tasks.

### Artificial Analysis

**[artificialanalysis.ai](https://artificialanalysis.ai/)** — independent benchmarks combining quality, speed, and price comparisons for AI models across providers. Publishes the **Artificial Analysis Intelligence Index (AAII)**, an aggregate score across 10 challenging evaluations: MMLU-Pro, Humanity's Last Exam, GPQA Diamond, AIME, IFBench, SciCode, LiveCodeBench, Terminal-Bench Hard, and τ²-Bench Telecom.

### Hugging Face Open LLM Leaderboard

**[huggingface.co/spaces/open-llm-leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)** — tracks open-source LLM performance using the EleutherAI LM Evaluation Harness. Evaluates models on IFEval, BBH, MATH, GPQA, MUSR, and MMLU-Pro. Focused exclusively on openly available models.

### Epoch AI Capabilities Index

**[epoch.ai/benchmarks](https://epoch.ai/benchmarks/)** — tracks frontier model capabilities over time across a wide range of evaluations. As of March 2026, includes ARC-AGI-2, HLE, and APEX-Agents among its tracked benchmarks.

### LM Council / BenchLM

**[lmcouncil.ai](https://lmcouncil.ai/benchmarks)** — aggregates scores across multiple benchmarks to produce a composite ranking of frontier models, weighted by category (agentic execution, coding, reasoning, etc.).

---

## 📐 Benchmark Tests

### Knowledge & Reasoning

| Benchmark | Full Name | What It Measures |
|-----------|-----------|-----------------|
| **MMLU** | Massive Multitask Language Understanding | Breadth of factual knowledge across 57 subjects via 15,000+ multiple-choice questions |
| **MMLU-Pro** | — | Harder variant of MMLU with 10-choice questions and more reasoning-heavy problems; reduces noise from the original |
| **GPQA Diamond** | Graduate-Level Google-Proof Q&A | 198 expert-level questions in biology, physics, and chemistry where PhD holders score ~65% and non-experts ~34% |
| **ARC** | AI2 Reasoning Challenge | 7,000+ grade-school science questions requiring knowledge and reasoning beyond simple fact retrieval |
| **BBH** | BIG-Bench Hard | 23 challenging tasks covering multi-step arithmetic, logical reasoning, geometric reasoning, temporal reasoning, and language understanding |
| **MUSR** | Multistep Soft Reasoning | ~1,000-word algorithmic problems (murder mysteries, object placement, team allocation) requiring long-range context parsing |

### Mathematics

| Benchmark | What It Measures |
|-----------|-----------------|
| **GSM8K** | Grade-school math word problems (8,500 problems) with natural-language solutions; tests arithmetic reasoning |
| **MATH** | Competition-level mathematics problems across algebra, calculus, number theory, and combinatorics |
| **AIME** | American Invitational Mathematics Examination problems; extremely difficult competition math, increasingly saturated by frontier models |
| **FrontierMath** | Unsolved or near-unsolved research-level math problems (released Jan 2026); designed to resist saturation |

### Coding

| Benchmark | What It Measures |
|-----------|-----------------|
| **HumanEval** | 164 Python programming tasks evaluated by unit tests; tests code generation correctness |
| **LiveCodeBench** | Contamination-free code evaluation using new problems from LeetCode, AtCoder, and CodeForces; covers code generation, self-repair, and test prediction |
| **SWE-bench Verified** | 500 real GitHub issues from popular Python repos that an agent must resolve end-to-end; measures agentic software engineering |

### Language Understanding & Instruction Following

| Benchmark | What It Measures |
|-----------|-----------------|
| **HellaSwag** | Commonsense reasoning and natural language inference via sentence completion with adversarially filtered distractors |
| **IFEval** | Instruction Following Evaluation — tests strict adherence to explicit formatting and content instructions (e.g., "include keyword X", "use format Y") |

### Frontier / Expert-Level

| Benchmark | What It Measures |
|-----------|-----------------|
| **HLE** | Humanity's Last Exam — 2,500 expert-level questions across mathematics, sciences, and humanities written by subject-matter experts; published in *Nature* (2026) |
| **ARC-AGI-2** | Abstract visual puzzles requiring novel pattern recognition; tests fluid intelligence and generalization beyond training data |
| **FrontierScience** | OpenAI benchmark for scientific reasoning; includes Olympiad-style problems with tight, verifiable constraints |

### Agentic

| Benchmark | What It Measures |
|-----------|-----------------|
| **τ-Bench / τ²-Bench** | Customer service agent simulation across domains; evaluates multi-step tool use, decision-making, and conversation handling |
| **APEX-Agents** | Agentic task completion across realistic multi-step scenarios; added to Epoch index in March 2026 |

---

## ⚠️ Benchmark Saturation

Traditional benchmarks saturate as models improve — once leading models exceed human-level scores, the benchmark stops differentiating between them. Notably saturated as of early 2026:

- **MMLU** — most frontier models exceed 90%
- **GSM8K** — near-perfect scores common
- **HumanEval** — largely replaced by LiveCodeBench for frontier comparisons
- **GPQA** and **AIME** — increasingly saturated as models exceed human expert performance

This has pushed the field toward harder evaluations like HLE, FrontierMath, ARC-AGI-2, and agentic benchmarks.

---

## Sources

- [Arena Leaderboard — lmarena.ai](https://lmarena.ai/) — LMArena leaderboard overview
- [Artificial Analysis Intelligence Benchmarking Methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking) — AAII composition
- [Hugging Face Open LLM Leaderboard About](https://huggingface.co/docs/leaderboards/en/open_llm_leaderboard/about) — benchmark list and methodology
- [Epoch AI Benchmarks](https://epoch.ai/benchmarks/) — capabilities index
- [LLM Benchmarks Compared — lxt.ai](https://www.lxt.ai/blog/llm-benchmarks/) — benchmark descriptions
- [30 LLM evaluation benchmarks — evidentlyai.com](https://www.evidentlyai.com/llm-guide/llm-benchmarks) — benchmark overviews
- [Humanity's Last Exam](https://agi.safe.ai/) — HLE benchmark description
- [GPQA Diamond — Epoch AI](https://epoch.ai/benchmarks/gpqa-diamond/) — GPQA description
- [Frontier Model Benchmark Comparison — Glia.ca (March 2026)](https://glia.ca/2026/frontier/06-03-2026/) — March 2026 rankings
- [OpenAI FrontierScience — BigDATAwire](https://www.hpcwire.com/bigdatawire/2025/12/19/openai-launches-frontierscience-to-reset-scientific-ai-benchmarks/) — FrontierScience launch
