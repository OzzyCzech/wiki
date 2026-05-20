---
title: Security List
description: Přehled nástrojů pro soukromí a bezpečnost — prohlížeče, hesla, VPN, messaging a šifrované úložiště.
created: 2026-04-08
updated: 2026-05-20
---

Osobní přehled nástrojů pro digitální bezpečnost a soukromí.

## 🌐 Prohlížeče

- **[Brave](https://brave.com/)** — Chromium-based prohlížeč s vestavěným blokátorem reklam a trackerů
- **[Firefox](https://www.mozilla.org/firefox/)** — open-source prohlížeč od Mozilla; dobrý základ pro privacy hardening
- **[LibreWolf](https://librewolf.net/)** — fork Firefoxu s předkonfigurovaným privacy nastavením a odstraněnou telemetrií

Srovnání prohlížečů z hlediska soukromí: **[privacytests.org](https://privacytests.org/)**

### Rozšíření

- **[uBlock Origin](https://github.com/gorhill/uBlock)** — efektivní open-source blokátor reklam a trackerů pro Chrome a Firefox
- **[Privacy Badger](https://privacybadger.org/)** — rozšíření od EFF; blokuje trackery na základě jejich chování
- **[DuckDuckGo Privacy Essentials](https://duckduckgo.com/app)** — blokování trackerů, vynucení HTTPS a hodnocení soukromí stránek
- **[Zen](https://zenprivacy.net/)** — blokátor reklam a skriptů pro Chrome a Firefox

## 🔍 Vyhledávače

Vyhledávače bez sledování uživatelů:

- **[DuckDuckGo](https://duckduckgo.com/)** — nejrozšířenější privacy-friendly vyhledávač
- **[Startpage](https://www.startpage.com/)** — vrací výsledky Google bez sledování
- **[Qwant](https://www.qwant.com/)** — evropský vyhledávač bez profilování uživatelů

## 📧 Email

- **[ProtonMail](https://proton.me/mail)** — end-to-end šifrovaný email; servery ve Švýcarsku
- **[Fastmail](https://www.fastmail.com/)** — rychlý a spolehlivý email bez reklam; není E2E šifrovaný ale nabízí silné soukromí
- **[Tuta](https://tuta.com/)** — E2E šifrovaný email a kalendář; dříve Tutanota
- **[SimpleLogin](https://simplelogin.io/)** — aliasy emailových adres pro anonymní registrace; akvizovaný Protonem

## 🔑 Správci hesel

- **[1Password](https://1password.com/)** — komerční správce hesel s podporou týmů, pravidelnými nezávislými audity a SOC 2 certifikací; nejlepší volba pro rodiny a firmy
- **[Bitwarden](https://bitwarden.com/)** — open-source správce hesel auditovaný třetí stranou; lze provozovat v cloudu nebo self-hostovat; štědrý free tier
- **[Dashlane](https://www.dashlane.com/)** — etablovaný komerční správce hesel s nezávislými audity, zero-knowledge architekturou a podporou passkeys; integrovaný dark web monitoring
- **[Vaultwarden](https://github.com/dani-garcia/vaultwarden)** — neoficiální Bitwarden-kompatibilní server v Rustu; výrazně nižší nároky na paměť a CPU, ideální pro self-hosting na VPS nebo Raspberry Pi
- **[Proton Pass](https://proton.me/pass)** — open-source E2E šifrovaný správce hesel od Protonu se švýcarskou jurisdikcí; integrované email aliasy (Hide-my-email) a passkeys
- **[KeePassXC](https://keepassxc.org/)** — community fork KeePassX; offline-first open-source manažer s lokálním KDBX souborem, bez cloudové závislosti
- **[iCloud Keychain](https://support.apple.com/en-us/HT204085)** — vestavěný správce hesel na Apple zařízeních; integrovaný s Safari, systémem a passkeys

## 💬 Messaging

- **[Signal](https://signal.org/)** — end-to-end šifrovaný messenger; open-source protokol považovaný za gold standard zabezpečené komunikace
- **[Session](https://getsession.org/)** — decentralizovaný messenger bez telefonního čísla; směruje zprávy přes onion routing síť
- **[Threema](https://threema.ch/)** — placený šifrovaný messenger; nevyžaduje telefonní číslo ani email; server ve Švýcarsku
- **[Wire](https://wire.com/)** — E2E šifrovaný messenger a platforma pro týmovou komunikaci; open-source

Srovnání bezpečnosti: **[securemessagingapps.com](https://www.securemessagingapps.com/)**

## 🌍 DNS

- **[1.1.1.1](https://one.one.one.one/)** — rychlý DNS resolver od Cloudflare s volitelnou blokací malware (1.1.1.2) a volitelným VPN klientem
- **[Quad9 (9.9.9.9)](https://www.quad9.net/)** — DNS resolver s automatickým blokováním škodlivých domén

## 🔒 VPN

- **[Mullvad](https://mullvad.net/)** — švédský VPN bez uživatelských účtů; platba kryptoměnou nebo hotovostí; pravidelně auditovaný
- **[IVPN](https://www.ivpn.net/)** — VPN s důrazem na anonymitu; nezaznamenává logy; auditovaný
- **[ProtonVPN](https://protonvpn.com/)** — švýcarský VPN od tvůrců ProtonMail; open-source klienti; auditovaný
- **[Njalla](https://njal.la/)** — privacy-first doménový registrátor a VPN provozovaný spoluzakladatelem Pirate Bay
- **[Nostr VPN](https://nostrvpn.org/)** — mesh VPN bez účtů a centrálního koordinačního serveru; využívá Nostr pro discovery a šifrovanou signalizaci, WireGuard pro tunelový provoz, propojení přes invite link/QR a stabilní `.nvpn` hostnames (alternativa k Tailscale)

## 🗂️ Šifrované úložiště

- **[Proton Drive](https://proton.me/drive/)** — end-to-end šifrované cloudové úložiště od Protonu
- **[NordLocker](https://nordlocker.com/)** — šifrování souborů lokálně i v cloudu; od NordVPN
- **[pCloud](https://www.pcloud.com/)** — cloudové úložiště s volitelným client-side šifrováním (pCloud Crypto)

## 🔐 Autentizace

- **[YubiKey](https://www.yubico.com/)** — hardwarový autentizační klíč od Yubico; podporuje FIDO2, WebAuthn, OTP a PIV
