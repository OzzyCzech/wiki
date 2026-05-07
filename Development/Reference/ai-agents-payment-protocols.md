---
title: AI Agents payment protocols
description: Overview of emerging payment protocols designed for autonomous AI agents — x402, Google AP2, and Stripe MPP.
created: 2026-04-10
updated: 2026-05-07
---

As AI agents start making purchases and calling paid APIs without humans in the loop, the payments stack needs primitives that traditional card rails and API keys do not provide: per-request micropayments, machine-verifiable authorization, and account-less negotiation. Three protocols are competing to fill that gap — Coinbase's [x402](https://www.x402.org/), Google's AP2, and Stripe's MPP.

## x402 (Coinbase)

[x402](https://www.x402.org/) is an open protocol for internet-native payments that uses the long-reserved HTTP `402 Payment Required` status code as a payment handshake between clients and servers. It is maintained by the Coinbase Developer Platform but positioned as a neutral, open standard.

When a client requests a paid resource, the server responds with HTTP `402` and a payment challenge describing the amount, accepted schemes, and destination. The client pays and retries the request with a proof-of-payment header; the server verifies and returns the resource. The flow is entirely HTTP-native — no SDKs, auth tokens, or out-of-band coordination are required.

```text
Client  ──GET /resource──▶  Server
Client  ◀── 402 + payment challenge ── Server
Client  ──pay on-chain / stablecoin──▶
Client  ──GET /resource + X-PAYMENT proof──▶  Server
Client  ◀── 200 OK + resource ── Server
```

Key properties: no accounts or API keys, scheme-agnostic (stablecoins on EVM chains are the primary focus), and per-request micropayments at fractions of a cent. The spec supports `exact` and `upto` payment modes, and reference middleware exists for Express, Fastify, Hono, and Cloudflare Workers.

## Google AP2 (Agent Payments Protocol)

[AP2](https://github.com/google-agentic-commerce/AP2) is an open protocol from Google for delegated, auditable agent payments. Unlike x402's HTTP-handshake approach, AP2 is built around **verifiable credentials** called *Mandates* — cryptographically signed authorizations that prove a user delegated specific purchasing authority to an agent. It is designed to work alongside Google's A2A (Agent-to-Agent) protocol and MCP, not as an alternative to them.

The protocol distinguishes *Intent Mandates* (the user grants an agent permission to shop within constraints — budget, merchants, time window) from *Cart Mandates* (the agent presents the final cart back for signature before charging). This split solves the trust problem: merchants get cryptographic proof the user actually authorized the purchase, and users get a non-repudiable audit trail of what their agent did on their behalf.

AP2 is payment-method-agnostic — it can wrap card networks, bank transfers, or stablecoin rails — and Google has positioned it for collaboration with networks like American Express, Mastercard, and PayPal. Compared to x402, AP2 targets higher-value human-in-the-loop commerce rather than tiny machine-to-machine API payments.

## Stripe MPP (Machine Payment Protocol)

Stripe's Machine Payment Protocol is the company's answer to agent-initiated commerce, leveraging its existing card and ACH infrastructure rather than introducing crypto rails. It pairs with Stripe's [Agent Toolkit](https://github.com/stripe/agent-toolkit) and the concept of *purpose-bound* virtual cards that an agent can spin up for a single task with a hard spend cap, expiry, and merchant restrictions.

MPP focuses on identity and accountability: every machine-initiated charge carries metadata identifying the agent, the human principal, and the task scope, so disputes and chargebacks remain resolvable through normal card-network rules. This makes it pragmatic for production use today — there is no new settlement layer to adopt — at the cost of being tied to Stripe's processing pipeline.

In practice the three protocols are not strict competitors: x402 is the wire protocol for trustless micropayments, AP2 is the authorization layer for delegated commerce, and MPP is the operational layer for card-based agent spending. Real-world agents will likely combine them.

## Sources

- [x402.org](https://www.x402.org/) — official protocol site, spec, and implementations (accessed 2026-04-10)
- [google-agentic-commerce/AP2](https://github.com/google-agentic-commerce/AP2) — Google's Agent Payments Protocol spec and reference code
- [stripe/agent-toolkit](https://github.com/stripe/agent-toolkit) — Stripe's tooling for agent-initiated payments
- [HTTP 402 on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402) — original HTTP status code reservation
