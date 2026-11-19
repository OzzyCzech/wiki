---
title: Sparkle
description: Open-source framework for automatic updates in macOS applications, with signed releases and RSS appcasts.
created: 2026-11-19
updated: 2026-11-19
---

[Sparkle](https://sparkle-project.org/) is an MIT-licensed framework for adding automatic updates to macOS applications. It provides an update interface using the app's own name, icon, and branding, and works with Cocoa, SwiftUI, Qt, and other toolkits.

## Features

- Check for updates, download releases, and optionally install them silently in the background.
- Distribute release information and notes through an **appcast** — an RSS feed with update metadata.
- Verify update archives with **EdDSA (ed25519)** signatures, alongside Apple code signing.
- Generate smaller **delta updates** between releases.
- Support sandboxed apps with additional configuration.

The project currently lists **macOS 12 or later** as supported (accessed 2026-11-19).

## Integration

1. Add `https://github.com/sparkle-project/Sparkle` through Xcode's Swift Package Manager integration.
2. Configure the updater; use the programmatic setup guide for SwiftUI.
3. Generate signing keys with `generate_keys` and add the public key as `SUPublicEDKey` in the app's `Info.plist`.
4. Set `SUFeedURL` to the hosted appcast URL.
5. Package the release and run `generate_appcast` to create the feed and sign updates, then host the generated files over HTTPS.

## Sources

- [Sparkle](https://sparkle-project.org/) — features, license, and supported macOS versions.
- [Basic setup](https://sparkle-project.org/documentation/) — integration, signing, and publishing updates.
- [Programmatic setup](https://sparkle-project.org/documentation/programmatic-setup/) — updater configuration for SwiftUI and custom interfaces.
