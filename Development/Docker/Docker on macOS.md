---
title: Docker on macOS
description: Running Docker on macOS — Docker Desktop, OrbStack and Colima compared.
created: 2026-09-15
updated: 2026-09-15
---

Docker on macOS always runs inside a Linux VM. The official option is [Docker Desktop](https://www.docker.com/products/docker-desktop/); [OrbStack](https://orbstack.dev/) (native, closed-source) and [Colima](https://colima.run/) (CLI-only, MIT) are the two established alternatives that manage that VM for you.

## Docker Desktop

**[Docker Desktop](https://www.docker.com/products/docker-desktop/)** — the official bundle from Docker: GUI, VM and the whole toolchain in one installer.

```bash
brew install --cask docker-desktop
```

- Bundles Docker Engine, CLI, Compose, Build, Kubernetes and Docker Scout, plus Extensions and AI tooling (Model Runner, MCP Toolkit, Gordon)
- Three [VM backends](https://docs.docker.com/desktop/settings-and-maintenance/settings/): Docker VMM (beta, VirtioFS only), Apple Virtualization.framework and legacy QEMU
- File sharing via VirtioFS (recommended) or gRPC FUSE
- The Rosetta option that accelerates x86/AMD64 binary emulation is available only with the Apple Virtualization.framework backend; Rosetta 2 itself is no longer strictly required, only for some Darwin/AMD64 CLI tools
- Runs on macOS, Windows and Linux — the only one of the three that is not macOS-first
- [Supported](https://docs.docker.com/desktop/setup/install/mac-install/) on the current and two previous major macOS releases, Apple Silicon and Intel, minimum 4 GB RAM; the [Homebrew cask](https://formulae.brew.sh/cask/docker-desktop) requires macOS 14 or newer
- Closed source; [free](https://docs.docker.com/subscription/desktop-license/) for personal use, education, non-commercial open source and small businesses (fewer than 250 employees and under $10M annual revenue), paid subscription otherwise

## OrbStack

**[OrbStack](https://orbstack.dev/)** — a native Swift app for macOS that runs Docker containers, Kubernetes and full Linux machines, designed as a drop-in replacement for Docker Desktop.

```bash
brew install --cask orbstack
```

- Migrates existing containers, images and volumes from Docker Desktop or Colima
- Ships `docker`, `docker compose` and `docker buildx`, plus `orb` and `orbctl` for managing Linux machines; CLI tools live in `~/.orbstack/bin` and are symlinked into `/usr/local/bin`
- 16 Linux distributions as lightweight machines, with SSH agent forwarding and remote VS Code support
- VirtioFS file sharing — bind-mounted volumes and image files are browsable in Finder
- Networking with IPv6, working ICMP (`ping`, `traceroute`), local domain names and DNS integration; designed to coexist with VPNs
- Rosetta-based x86 emulation for Intel images on Apple Silicon
- USB passthrough, isolated sandboxes, Activity Monitor integration, menu bar app
- Vendor claims under 0.1 % background CPU usage on Apple Silicon and under 10 MB of disk out of the box
- [Closed-source](https://docs.orbstack.dev/faq), although some components are open — free for personal use, subscription for commercial use
- Requires macOS 14 or newer (per the [Homebrew cask](https://formulae.brew.sh/cask/orbstack))

## Colima

**[Colima](https://colima.run/)** — container runtimes on macOS and Linux with minimal setup, built on [Lima](https://lima-vm.io/) and released under the MIT license.

```bash
brew install colima
colima start                        # Docker runtime
colima start --kubernetes           # plus a k3s cluster
colima start --runtime containerd   # containerd with nerdctl
colima start --runtime incus        # Incus system containers and VMs
```

- Runtimes: Docker, containerd (with `nerdctl`), Kubernetes via k3s, and Incus
- Two VM backends selected with `--vm-type`: `qemu` (default) or `vz` for Apple's Virtualization.framework; `--vz-rosetta` adds x86 emulation on Apple Silicon and needs macOS 13 or newer
- Runs on both x86_64 and aarch64; `--arch` picks the guest architecture
- Defaults to 2 CPUs, 2 GiB RAM and a 100 GiB disk, adjustable with `--cpu`, `--memory` and `--disk`
- Multiple named profiles can hold different configurations side by side
- Port forwarding and volume mounts work out of the box
- GPU-accelerated AI workloads on Apple Silicon

## Which one

| Aspect | Docker Desktop | OrbStack | Colima |
| --- | --- | --- | --- |
| Interface | GUI app + CLI | GUI app + CLI | CLI only |
| License | Closed-source, paid above free tier | Closed-source, paid for commercial use | MIT |
| Platforms | macOS, Windows, Linux | macOS only | macOS and Linux |
| Beyond Docker | Kubernetes, Scout, Extensions, AI tooling | Kubernetes, Linux machines (16 distros) | Kubernetes (k3s), containerd, Incus |

Docker Desktop is the reference implementation with the widest feature set and the heaviest footprint, and the only one that also covers Windows and Linux. OrbStack keeps the GUI, Finder integration and painless networking while staying much lighter on macOS. Colima fits scriptable, reproducible setups and environments where a permissive license is a requirement.
