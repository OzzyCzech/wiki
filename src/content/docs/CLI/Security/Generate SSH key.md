---
title: Generate SSH key
description: Create an Ed25519 SSH key pair, hook it into ssh-agent, and install the public key on a server or Git hosting.
created: 2023-06-30
updated: 2026-04-06
---

[Ed25519](https://www.rfc-editor.org/rfc/rfc8032) is defined in **RFC 8032** (Elliptic-curve signature scheme EdDSA); it is the default choice for new SSH keys because keys stay small while security and performance remain strong. Use **RSA** only when you must support legacy systems that do not accept Ed25519.

## Create a key pair

Interactive generation (lets you set a passphrase at the prompt—recommended):

```bash
ssh-keygen -t ed25519 -C "your@email.com" -f ~/.ssh/id_ed25519
```

Non-interactive with an **empty** passphrase (scripts or disposable environments only):

```bash
ssh-keygen -t ed25519 -C "$(whoami)@$(hostname -f 2>/dev/null || hostname)" -f ~/.ssh/id_ed25519 -N ""
```

:::caution
Empty passphrases protect nothing if the private key file is copied. Prefer an interactive run with a passphrase for laptops and long-lived keys.
:::

Comment (`-C`) is a public label (often your email); it does not change cryptography.

## ssh-agent and SSH config

Start an agent in the current shell:

```bash
eval "$(ssh-agent -s)"
```

### macOS (Keychain integration)

Add to `~/.ssh/config`:

```text
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_ed25519
```

`UseKeychain` and `IdentityFile` for extra keys (for example `~/.ssh/id_rsa`) are **macOS OpenSSH** behaviors; load the key into the agent and store the passphrase in the Keychain:

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

### Linux and other systems

Omit `UseKeychain` (unsupported). Typical `~/.ssh/config` snippet:

```text
Host *
  AddKeysToAgent yes
  IdentityFile ~/.ssh/id_ed25519
```

Then:

```bash
ssh-add ~/.ssh/id_ed25519
```

:::note
On Linux you may need `ssh-askpass` or a desktop keyring so `ssh-add` can prompt for a passphrase in GUI sessions.
:::

## Copy the public key

**macOS** (copy `~/.ssh/id_ed25519.pub` to the clipboard):

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

**Linux** (if `xclip` is installed):

```bash
xclip -selection clipboard < ~/.ssh/id_ed25519.pub
```

Otherwise print it and paste manually:

```bash
cat ~/.ssh/id_ed25519.pub
```

## Authorize on a remote host

Appends your public key to `~/.ssh/authorized_keys` on the server:

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@remote.example
```

:::note
`ssh-copy-id` ships on many Linux distributions. On macOS it is available in recent releases; if the command is missing, paste the `.pub` line into `~/.ssh/authorized_keys` on the server manually.
:::

For **GitHub** (and similar), add the **public** key in the provider’s SSH key settings—not the private key.

## Sources

- [RFC 8032: Edwards-Curve Digital Signature Algorithm (EdDSA)](https://www.rfc-editor.org/rfc/rfc8032) — normative definition of Ed25519 (and Ed448)
- [Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) — Ed25519, ssh-agent, and macOS Keychain flow
- `man ssh-keygen` / `man ssh-add` — flags such as `-N` (passphrase) and agent behavior
