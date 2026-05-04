---
title: UFW basics
description: Uncomplicated Firewall (ufw) — defaults, SSH, and rule management on Debian-based Linux.
created: 2025-01-01
updated: 2026-04-06
---

[UFW](https://help.ubuntu.com/community/UFW) (Uncomplicated Firewall) is the default host firewall helper on Ubuntu: it wraps lower-level packet filtering so you can allow or deny traffic with simple commands. This page covers the usual defaults, SSH, and how to inspect or remove rules.

:::caution
If you administer the machine over SSH, allow SSH **before** you apply **default deny incoming** and **`ufw enable`**, or you risk locking yourself out.
:::

## Defaults and enable

Typical baseline: block unsolicited inbound traffic, allow outbound, allow SSH, then activate the firewall:

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable
```

Many installs also ship an OpenSSH **application profile** (ports and protocols from `/etc/ufw/applications.d`). Prefer it when it exists:

```bash
sudo ufw app list
sudo ufw allow OpenSSH
```

You can still allow the port explicitly if SSH listens on the default port:

```bash
sudo ufw allow 22/tcp
```

## Inspect rules

```bash
sudo ufw status verbose
```

Numbered list (needed for deleting by index):

```bash
sudo ufw status numbered
```

## Delete a rule

By number after `ufw status numbered` (usually the least error-prone):

```bash
sudo ufw delete 3
```

By rule text (must match how the rule was added):

```bash
sudo ufw delete allow 3002/tcp
```

## Disable UFW

```bash
sudo ufw disable
```

## Sources

- [Firewall (Ubuntu Server)](https://documentation.ubuntu.com/server/how-to/security/firewalls/) — enable/disable, ports, numbered rules, application profiles (accessed 2026-04-06)
- [UFW — Ubuntu community documentation](https://help.ubuntu.com/community/UFW) — overview and usage notes
