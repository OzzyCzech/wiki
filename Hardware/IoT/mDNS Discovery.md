---
title: mDNS Discovery pro IoT
description: Jak funguje mDNS (Bonjour) pro discovery IoT zařízení v lokální síti — dostupnost na platformách a přehled service types.
created: 2026-04-08
updated: 2026-04-08
---

mDNS (Multicast DNS) umožňuje IoT zařízením oznámit svou přítomnost v lokální síti bez potřeby centrálního DNS serveru. Apple tuto technologii implementuje pod názvem Bonjour, Linux přes avahi.

## Dostupnost podle platformy

| Platforma | Implementace | Instalace |
|-----------|-------------|-----------|
| macOS | Bonjour | vestavěné |
| Windows | Bonjour | [instalátor od Apple](https://support.apple.com/downloads/bonjour-for-windows) |
| Linux | avahi | obvykle předinstalováno (`avahi-daemon`) |
| ESP32 / ESP-IDF | mDNS component | [dokumentace Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/protocols/mdns.html) |

## Nejčastější service types

| Service type | Protokol | Použití |
|---|---|---|
| `_smb._tcp` | SMB | sdílení souborů |
| `_nfs._tcp` | NFS | sdílení souborů |
| `_ssh._tcp` | SSH | vzdálený přístup |
| `_http._tcp` | HTTP | webová rozhraní, API |
| `_mqtt._tcp` | MQTT | IoT messaging |
| `_afpovertcp._tcp` | AFP | ❌ deprecated od macOS 15.5 |

## Sources

- [ESP-IDF mDNS dokumentace](https://docs.espressif.com/projects/esp-idf/en/latest/api-reference/protocols/mdns.html)
- [avahi](https://www.avahi.org/)
