---
title: Payment gateways
description: Payment gateway services and platforms for selling digital products online.
created: 2023-02-27
updated: 2026-10-10
---

Přehled platebních bran a platforem pro prodej digitálních produktů a SaaS předplatného.

## Payment gateways

- **[Stripe](https://stripe.com/)** — nejrozšířenější platební infrastruktura; API-first, podporuje cards, SEPA, Apple Pay a další
- **[Paddle](https://paddle.com/)** — Merchant of Record platforma; řeší VAT, daně a compliance za vás
- **[Lemon Squeezy](https://www.lemonsqueezy.com/)** — jednoduchý Merchant of Record pro indie developery a SaaS
- **[Creem](https://www.creem.io/)** — API-first Merchant of Record pro software, digitální produkty a AI nástroje; řeší platby, VAT/GST a sales tax, faktury, fraud a chargebacky, vedle jednorázových plateb a předplatného podporuje kreditní peněženky, usage-based billing s vlastními metrikami, affiliate programy, revenue splits a license keys. Vývojářská vrstva nabízí [TypeScript SDK](https://docs.creem.io/code/sdks/typescript) pro Node.js, Deno a Bun, Next.js adaptér, CLI, webhooky a MCP server pro správu obchodu z AI agentů
- **[Dodo Payments](https://dodopayments.com/)** — Merchant of Record pro digitální produkty a SaaS; kromě VAT/GST a compliance řeší i jednorázové platby, předplatné, usage-based a kreditní billing s rolloverem a generováním license keys. [SDK](https://docs.dodopayments.com/introduction) pro TypeScript, Python, Go, PHP, Java, Kotlin, C#, Ruby a Rust, adaptéry pro Next.js, Nuxt, SvelteKit, Astro, Remix, Express, Fastify, Hono, TanStack, Supabase, Better Auth a Convex, plus dva MCP servery — jeden pro sémantické hledání v dokumentaci, druhý pro volání API přímo z agenta
- **[Polar](https://polar.sh/)** — Merchant of Record postavený kolem usage-based billingu: ingestuje události, počítá je v živých meterech a odečítá z předplacených kreditů, umí metering tokenů po jednotlivých voláních modelu i GPU sekund a Cost Insights staví náklady na inferenci vedle tržeb, takže je vidět marže na zákazníka. Po nákupu umí automaticky přidělovat [benefits](https://polar.sh/docs/features/benefits/introduction) — license keys, soubory ke stažení (do 10 GB), pozvánku do privátního GitHub repozitáře, roli na Discordu, sdílený Slack Connect kanál, feature flagy nebo kredity. SDK existuje jen pro [TypeScript a Python](https://polar.sh/docs/integrate/sdk/introduction), [adaptéry](https://polar.sh/docs/integrate/sdk/adapters/introduction) pro Next.js, Nuxt, TanStack Start, Laravel a Better Auth (starší adaptéry pro Astro, Express, Hono nebo SvelteKit jsou deprecated ve prospěch přímého SDK). [MCP server](https://polar.sh/docs/integrate/mcp) je vzdálený a autentizuje se přes OAuth, takže se do agenta nevkládá API klíč, a asi stovku operací schovává za tři meta-nástroje (`search_tools`, `describe_tools`, `execute_tool`). Zdrojový kód je [Apache-2.0](https://github.com/polarsource/polar), Polar se ale provozuje jako hostovaná služba — self-hosting dokumentovaný není
- **[Braintree](https://www.braintreepayments.com)** — platební brána od PayPal; cards, PayPal, Venmo
- **[Deposyt](https://www.deposyt.com/)** — platební brána s podporou českých platebních metod

## Selling digital products

- **[Gumroad](https://gumroad.com/)** — prodej digitálních produktů, e-booků a předplatného s minimální konfigurací
