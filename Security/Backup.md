---
title: Backup
description: Strategie 3–2–1 a nástroje pro zálohování dat — lokální zálohy, NAS, cloud, archivace a ověřování obnovy.
created: 2026-04-08
updated: 2026-10-09
---

Záloha má umožnit návrat k datům po smazání, poruše zařízení nebo napadení. Při výběru řešení sleduj nejen kapacitu a cenu úložiště, ale také historii verzí, dobu obnovy a možnost obnovit data bez původního počítače.

## Strategie zálohování

Základ je **3–2–1**: tři kopie důležitých dat včetně originálu, dvě různé technologie nebo typy médií a jedna kopie mimo domov či kancelář. Viz [CISA: Data Backup Options](https://www.cisa.gov/sites/default/files/publications/data_backup_options.pdf).

- **Automatizuj zálohy** a nastav uchovávání starších verzí podle toho, jak daleko zpět potřebuješ obnovovat.
- **Jednu kopii odděl od běžného provozu** — například odpojený disk nebo úložiště s neměnnými zálohami a oddělenými přístupovými právy.
- **Šifruj citlivá data** a uchovej heslo či obnovovací klíč i mimo zálohovaný počítač.
- **Testuj obnovu**, nejen úspěšné dokončení zálohy: obnov několik souborů do jiného umístění a zkontroluj jejich obsah.

[CISA doporučuje offline šifrované zálohy a pravidelné testování obnovy](https://www.cisa.gov/stopransomware/ransomware-guide). RAID a snapshot na stejném NAS mohou být užitečné vrstvy ochrany, ale stále potřebuješ nezávislou kopii mimo toto zařízení.

## 🖥️ Desktop

- **[Time Machine](https://support.apple.com/en-us/104984)** — vestavěné zálohování macOS na externí disk nebo kompatibilní síťové úložiště, s historií verzí a obnovou souborů.
- **[Windows Backup](https://support.microsoft.com/en-au/windows/experience/backup-recovery/back-up-and-restore-with-windows-backup)** — záloha vybraných složek přes OneDrive a přenos nastavení či informací o aplikacích; vyžaduje osobní Microsoft účet. Nejde o úplný obraz systémového disku.
- **[File History](https://support.microsoft.com/en-gb/windows/experience/backup-recovery/backup-and-restore-with-file-history)** — historie souborů ve Windows na externím disku nebo síťovém umístění; alternativa pro lokální zálohy.

Praktické poznámky pro Mac a iCloud Drive jsou na stránce [Backups and disks](/macos/tips/backups-and-disks/).

## 📱 Mobilní zařízení

**[Zálohování iPhonu a iPadu](https://support.apple.com/en-us/108771)** nabízí dvě cesty: iCloud nebo počítač přes Finder na Macu a Apple Devices na Windows; iTunes slouží pro starší prostředí. Pro uložení zdravotních dat a aktivity do počítačové zálohy je potřeba zapnout její šifrování. Data už synchronizovaná s iCloudem nejsou další nezávislou kopií uvnitř iCloud zálohy.

## 🗄️ NAS

Hardwarové NAS boxy jsou popsané na stránce [NAS](/hardware/nas/). Samotný NAS je úložiště; ochranu dat určuje nastavení záloh, verzování a kopie mimo zařízení.

- **[Synology Hyper Backup](https://www.synology.com/en-global/dsm/feature/hyper_backup)** — plánované zálohy NAS, více verzí, deduplikace, šifrování a rotace. [Přehled ochrany dat Synology](https://www.synology.com/en-global/dsm/solution/data_backup) rozlišuje zálohování zařízení, NAS a snapshoty.
- **[TrueNAS Community Edition](https://www.truenas.com/truenas-community-edition/)** — open-source úložný systém se ZFS, snapshoty a replikací; vedle něj existují komerční enterprise produkty.
- **[Unraid](https://unraid.net/)** — placený systém pro úložiště, kontejnery a virtuální stroje; podporuje disková pole s různými velikostmi disků.

## 🛠️ Zálohovací nástroje

- **[restic](https://restic.net/)** — šifrované, deduplikované zálohy s historií snapshotů; lokální i vzdálená úložiště včetně objektových cloudových backendů.
- **[BorgBackup](https://borgbackup.readthedocs.io/en/stable/)** — deduplikace, komprese a volitelné autentizované šifrování; lokální repozitář nebo vzdálený server přes SSH.
- **[rclone](https://rclone.org/)** — kopírování a synchronizace mezi lokálním úložištěm a mnoha cloudovými službami. Užitečný transportní nástroj, pro zálohu je ale potřeba vyřešit i historii a ochranu před smazáním.

Příkaz [`rclone sync`](https://rclone.org/commands/rclone_sync/) maže v cíli soubory, které nejsou ve zdroji. Před prvním během použij `--dry-run`; pro uchování starších nebo odstraněných souborů dokumentace nabízí `--backup-dir`.

## ☁️ Cloud zálohy a objektová úložiště

Hotová zálohovací služba zajišťuje klienta a plánování. Objektové úložiště poskytuje prostor, ke kterému připojíš vlastní zálohovací nástroj.

| Služba | Typ | Použití a podmínky |
| --- | --- | --- |
| [Backblaze Computer Backup](https://www.backblaze.com/cloud-backup/personal) | Zálohovací služba | Automatické zálohy Macu nebo Windows a připojených externích disků. |
| [Backblaze B2](https://www.backblaze.com/cloud-storage) | Objektové úložiště | S3-compatible cíl pro NAS či zálohovací nástroje; samostatný produkt od Computer Backup. |
| [Wasabi](https://wasabi.com/product-terms) | Objektové úložiště | S3-compatible úložiště; Pay as You Go má minimální účtovanou kapacitu 1 TB a dobu uložení 90 dní. API je bez poplatku, egress zdarma do měsíčního objemu odpovídajícího aktivně uloženým datům. |
| [CrashPlan](https://www.crashplan.com/) | Zálohovací služba | Cloudové zálohování pro jednotlivce i firmy; rozsah funkcí závisí na tarifu. |

U Wasabi může dřívější smazání objektu znamenat doúčtování zbývající doby. [Minimální doba uložení se liší podle cenového modelu](https://docs.wasabi.com/docs/how-does-wasabis-minimum-storage-duration-policy-work). Při srovnání cloudů počítej i cenu a čas stažení celé zálohy.

## ☁️ Cloud archivace

Archivní třídy se hodí pro dlouhodobá, málo měněná data. Nízká cena uložení může být vyvážena poplatky za obnovu a čekáním na zpřístupnění.

- **[Amazon S3 Glacier storage classes](https://aws.amazon.com/s3/storage-classes/glacier/)** — Instant Retrieval má okamžitý přístup; Flexible Retrieval obnovuje data podle režimu v minutách až hodinách, Deep Archive typicky za 12–48 hodin. Ne všechny třídy Glacier tedy vyžadují dlouhé čekání.
- **[Azure Blob Archive](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview)** — offline archivní úroveň. Před čtením je nutná rehydratace do online úrovně, která může trvat až 15 hodin; předčasné smazání či přesun před 180 dny podléhá poplatku.

## 💿 M-DISC fyzická archivace

**[Verbatim M-DISC](https://www.verbatim-europe.com/en/mdisc)** je zapisovatelné optické médium pro dlouhodobou archivaci. Blu-ray varianty mají kapacitu 25, 50 a 100 GB; pro zápis 100GB disků je potřeba kompatibilní BDXL mechanika. Deklarovaná dlouhá životnost média nenahrazuje více kopií a kontrolu čitelnosti.

- **[Verbatim Ultra HD 4K Slimline Blu-ray Writer, 43888](https://www.verbatim-europe.com/cs/product/43888)** — externí USB-C mechanika s podporou M-DISC.
- **[Verbatim External Slimline Blu-ray Writer, 43889](https://www.verbatim-europe.com/cs/product/43889)** — alternativní externí model s připojením USB-C a podporou M-DISC.

## Synchronizace a sdílení

- **[Nextcloud Files](https://nextcloud.com/files/)** — self-hosted synchronizace a sdílení souborů; [zálohuj také serverová data, databázi a konfiguraci](https://docs.nextcloud.com/server/latest/admin_manual/maintenance/backup.html).
- **[Resilio Sync](https://www.resilio.com/sync/)** — P2P synchronizace mezi zařízeními bez centrálního cloudového úložiště. Patří mezi synchronizační nástroje, nikoli hotové cloudové zálohovací služby.

Synchronizace může přenést i nechtěné změny. Používej ji spolu s nezávislou verzovanou zálohou, ze které lze obnovit dřívější stav.
