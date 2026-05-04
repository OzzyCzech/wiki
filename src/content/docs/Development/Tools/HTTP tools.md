---
title: HTTP tools
description: Online HTTP tools, DNS utilities, and favicon services for web development and testing.
created: 2024-04-30
updated: 2026-04-09
---

Quick-reference collection of online and CLI tools for HTTP inspection, DNS lookups, SSL analysis, and local development.

## HTTP

- **[httpbin](https://httpbin.org)** — returns request/response data as JSON; useful for testing HTTP clients and inspecting headers, auth, and redirects
- **[httpie](https://httpie.org/)** — command-line HTTP client with human-friendly syntax; alternative to curl with color output and JSON support
- **[GeoIP](https://redirect.li/)** — shows HTTP request details and GeoIP information for the incoming connection

## Favicon

- **[Favicon Grabber](http://favicongrabber.com/)** — fetches favicons from any domain via a simple API

## DNS

- **[DIG](https://toolbox.googleapps.com/apps/dig/#ANY/)** — web-based DNS lookup tool from Google's Admin Toolbox; supports all record types

## Local development

- **[Slim](https://slim.sh/)** — CLI that gives localhost a local HTTPS domain (`.test`, `.loc`, `.dev`) or a public URL via `slim.show`; supports path-based routing, WebSocket, HMR, and per-project config via `.slim.yaml`

## SSL certificates

- **[SSL Labs](https://www.ssllabs.com/ssltest/)** — grades SSL/TLS configuration of any public HTTPS server; checks protocol support, cipher suites, and certificate chain
- **[crt.sh](https://crt.sh)** — searches Certificate Transparency logs; useful for finding all certificates issued for a domain
- **[HTTPS Transparency Report](https://transparencyreport.google.com/https/certificates)** — Google's searchable database of certificates logged via Certificate Transparency
