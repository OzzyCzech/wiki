---
title: Server control panels
description: Self-hosted web panels for managing a VPS — apps, databases, mail and security from one dashboard.
created: 2026-09-18
updated: 2026-09-18
---

Panels that sit on your own VPS and expose a web UI for the things you would otherwise do over SSH: deploying apps, managing databases and mail, issuing certificates and watching resource usage. They cover the ground between paid classics like cPanel or Plesk and container-only tools such as [Portainer](/development/docker/docker-management-tools/).

## ServerKit

[ServerKit](https://www.serverkit.ai/) is a control panel for VPS and dedicated servers, open source under [MIT](https://github.com/jhd3197/ServerKit). Backend is Python 3.11 with Flask and SQLAlchemy, frontend React with Vite, storing state in SQLite or PostgreSQL and served through Nginx and Gunicorn.

```bash
curl -fsSL https://serverkit.ai/install.sh | sudo bash
```

- Deploys PHP, Python, Node.js and Docker applications, with 60+ one-click templates including WordPress and Nextcloud
- Mail hosting on Postfix and Dovecot with webmail, plus MySQL and PostgreSQL management
- Security layer with WAF, Fail2ban, ClamAV scanning and SSO
- Real-time dashboards over WebSocket; Cloudflare integration for zones, Workers and Tunnels
- Provisions new servers at DigitalOcean, Hetzner, Vultr and Linode, with backup policies
- Built-in AI assistant that can run tools against your infrastructure

Multi-server setups use a Go agent for Linux, Windows and macOS that connects back to the panel over WebSocket with HMAC-SHA256 authentication, offering fleet inventory, an approval queue, staged version rollouts and pairing by short code with fingerprint verification.

Runs on Ubuntu 22.04+, Debian 12+, Fedora and RHEL/Rocky/AlmaLinux 9+, on x86_64 or ARM64, from 1 vCPU and 1 GB RAM up.

:::note
The project is young — the repository was opened in January 2026 — so expect the feature set and defaults to keep moving.
:::
