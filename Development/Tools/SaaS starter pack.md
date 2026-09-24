---
title: SaaS starter pack
description: A pragmatic stack for launching a SaaS quickly with managed hosting, authentication, payments, email, monitoring, analytics, and CI/CD.
created: 2026-09-24
updated: 2026-09-24
---

This stack favors a fast launch over building infrastructure from scratch. The application stays in a conventional Next.js and PostgreSQL architecture, while managed services handle authentication, payments, email delivery, observability, analytics, and deployment.

## Stack

| Layer | Choice | Role |
| --- | --- | --- |
| Hosting | **[Sevalla](https://sevalla.com/)** | Deploy the application from Git or a container image and run [managed PostgreSQL](https://docs.sevalla.com/databases/import-export/postgresql) alongside it |
| UI | **[shadcn/ui](https://ui.shadcn.com/)** | Accessible, composable components copied into the project for full control over the source |
| Framework | **[Next.js](https://nextjs.org/)** | Full-stack React application with server and client rendering, route handlers, and Server Actions |
| Database | **[PostgreSQL](https://www.postgresql.org/)** | Relational source of truth for application data, billing mappings, and entitlements |
| Authentication | **[Clerk](https://clerk.com/)** | Sign-in, sessions, user management, and organization support |
| Payments | **[Creem](https://www.creem.io/)** | Merchant of Record for checkout, subscriptions, taxes, invoices, fraud, and chargebacks |
| Email | **[Amazon SES](https://aws.amazon.com/ses/)** | Transactional email delivery through an API or SMTP |
| Error tracking | **[Sentry](https://sentry.io/)** | Capture application errors and performance problems across the stack |
| Analytics | **[Plausible](https://plausible.io/)** | Lightweight, privacy-focused web analytics |
| CI/CD | **[GitHub Actions](https://github.com/features/actions)** | Run checks, builds, migrations, and deployment workflows from the repository |

## Related pages

- [Payment gateways](../payment)
- [Hosting services](/development/services/hosting)
- [Email services](/development/services/email)
- [Analytics and monitoring](../analytics-and-monitoring)
