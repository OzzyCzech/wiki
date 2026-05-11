---
title: Cloud emulators
description: Local emulators for AWS, GCP, Azure and other cloud services — run dependencies on your machine instead of paying for a real account during development.
created: 2026-05-11
updated: 2026-05-11
---

Run cloud services locally for development and CI without spinning up real accounts. Useful for offline work, fast test feedback loops, and avoiding cloud bills during integration testing.

## AWS

- **[Floci](https://floci.io/)** — fast, MIT-licensed AWS emulator distributed as a Docker container; drop-in LocalStack replacement on the same port (4566) and wire protocols, claims 1925/1925 SDK compatibility tests passing, ~24 ms cold start and ~13 MiB idle memory; covers 45 services including Lambda, RDS, ECS, EKS, ElastiCache, API Gateway v2 by orchestrating real Docker engines rather than mocking; full IAM auth support, works with AWS SDKs (Java/Python/Node/Go/.NET), AWS CLI, CloudFormation, Terraform — [github.com/floci-io/floci](https://github.com/floci-io/floci)
