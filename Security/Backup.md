---
title: Backup
description: Přehled nástrojů a služeb pro zálohování dat — cloud, NAS, fyzická média a CLI nástroje.
created: 2026-04-08
updated: 2026-04-08
---

Strategie a nástroje pro zálohování dat podle typu úložiště a použití.

## ☁️ Cloud archivace

Levné dlouhodobé úložiště pro zřídka přistupovaná data.

- **[Amazon S3 Glacier](https://aws.amazon.com/glacier/)** — extrémně levné cloudové úložiště od AWS určené pro archivaci a dlouhodobé zálohy
- **[Azure Archive Storage](https://azure.microsoft.com/services/storage/archive/)** — nejlevnější úroveň Azure Blob Storage pro studená a archivní data

## 💿 M-DISC fyzická archivace

M-DISC je optické médium určené pro trvalou archivaci — výrobce udává životnost až 1 000 let.

- **[Verbatim M-DISC Blu-ray](http://www.verbatim-europe.co.uk/en/cat/mdisc-archival-media/)** — M-DISC média pro Blu-ray; dostupná kapacita až 100 GB na disk
- **[Verbatim Ultra HD 4K Slimline Blu-ray Writer](https://www.verbatim-europe.cz/cz/prod/ultra-hd-4k-external-slimline-blu-ray-writer-43888/)** — externí USB-C mechanika kompatibilní s M-DISC médii
- **[Verbatim External Blu-ray Slimline Writer](https://www.verbatim-europe.cz/cz/prod/external-slimline-blu-ray-writer-usb-31-gen-1-with-usb-c-connection-43889/)** — alternativní model s USB 3.1 Gen 1 a USB-C

## 🗄️ NAS

- **[Synology](https://www.synology.com)** — NAS pro domácnosti i firmy; doporučená řada [Plus produktů](https://www.synology.com/cs-cz/products)
- **[TrueNAS](https://www.truenas.com/)** — open-source NAS OS postavený na ZFS; enterprise verze původního FreeNAS
- **[Nextcloud](https://nextcloud.com/)** — self-hosted platforma pro sdílení souborů a spolupráci; alternativa ke Google Drive
- **[Unraid](https://unraid.net/)** — NAS OS s flexibilní kombinací disků různých velikostí; populární pro domácí media servery

## 🖥️ Desktop

- **[Time Machine](https://support.apple.com/en-us/HT201250)** — vestavěné zálohování macOS na externí disk nebo síťové úložiště
- **[Backup and Restore](https://support.microsoft.com/en-us/windows/backup-and-restore-in-windows-352091d2-bb9d-3ea3-ed18-52ef2b88cbef)** — vestavěné zálohování Windows

## 📱 Mobilní zařízení

- **[Záloha iPhone a iPad](https://support.apple.com/en-us/HT203977)** — officiální průvodce zálohováním přes iCloud nebo iTunes/Finder

## 🛠️ Nástroje

- **[rclone](https://rclone.org/)** — CLI nástroj pro synchronizaci souborů s cloudovými úložišti (S3, Backblaze, Google Drive a desítky dalších)
- **[restic](https://restic.net/)** — moderní zálohovací program s deduplikací, šifrováním a podporou mnoha backendů
- **[BorgBackup](https://borgbackup.readthedocs.io/en/stable/)** — zálohovací program s deduplikací, kompresí a autentizovaným šifrováním

## ☁️ Cloud zálohovací služby

- **[Backblaze](https://www.backblaze.com/)** — levné cloudové úložiště kompatibilní s S3 API; oblíbená alternativa k AWS S3
- **[Wasabi](https://wasabi.com/)** — S3-kompatibilní cloudové úložiště bez poplatků za odchozí data
- **[Resilio Sync](https://www.resilio.com/individuals/)** — P2P synchronizace souborů napříč zařízeními bez centrálního serveru
- **[CrashPlan](https://www.crashplan.com/)** — zálohovací služba zaměřená na malé firmy a power users
