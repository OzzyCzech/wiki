---
title: Document conversion
description: Self-hosted and cloud services for converting HTML, Office documents, and Markdown to PDF.
created: 2026-04-15
updated: 2026-04-15
---

Services for converting documents between formats — typically HTML, Office, or Markdown into PDF — exposed as HTTP APIs for easy integration.

## Self-hosted

- **[Gotenberg](https://gotenberg.dev/)** — containerized HTTP API for document conversion; turns URLs, HTML, Markdown, and 100+ Office formats into PDF using headless Chromium and LibreOffice, plus PDF post-processing (merge, split, encrypt) via QPDF, pdfcpu, and ExifTool; supports S3/MinIO/GCS streaming and webhooks
- **[WeasyPrint](https://weasyprint.org/)** — Python library and CLI that renders HTML + CSS to PDF; strong CSS Paged Media support, no headless browser required

## Cloud APIs

- **[CloudConvert](https://cloudconvert.com/)** — hosted conversion API supporting 200+ formats including audio, video, images, and documents
- **[DocRaptor](https://docraptor.com/)** — HTML-to-PDF API based on Prince XML; high-fidelity rendering for invoices and reports
