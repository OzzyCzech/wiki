---
title: Time Machine na Raspberry Pi
description: Jak nastavit Time Machine zálohy přes SMB na Raspberry Pi pomocí Samba a avahi.
created: 2026-04-08
updated: 2026-04-08
sidebar:
  label: Time Machine
---

Raspberry Pi lze použít jako Time Machine server. Moderní způsob využívá **Samba (SMB)** — AFP přes netatalk je od macOS 15.5 deprecated a bude odstraněno v macOS 16.

## 1. Základní konfigurace Raspberry Pi

```bash
sudo raspi-config
```

- Změň heslo uživatele `pi` (výchozí: `raspberry`)
- Povol SSH v _Interfacing Options_
- Nastav hostname v _Network Options_

## 2. Připrav zálohovací disk

Připoj disk a vytvoř složku pro zálohy:

```bash
sudo mkdir -p /mnt/backup/timemachine
sudo chown -R pi:pi /mnt/backup
```

Pro automatické připojení přidej disk do `/etc/fstab`.

## 3. Nainstaluj Samba

```bash
sudo apt update
sudo apt install samba -y
```

Vytvoř uživatele pro Time Machine:

```bash
sudo smbpasswd -a pi
```

## 4. Konfigurace Samba

Edituj `/etc/samba/smb.conf` — přidej na konec:

```ini
[TimeMachine]
   path = /mnt/backup/timemachine
   valid users = pi
   read only = no
   vfs objects = catia fruit streams_xattr
   fruit:time machine = yes
```

Restart Samba:

```bash
sudo systemctl restart smbd
```

## 5. Nastav avahi (mDNS discovery)

Nainstaluj avahi:

```bash
sudo apt install avahi-daemon -y
sudo systemctl enable avahi-daemon
```

Vytvoř `/etc/avahi/services/smb.service`:

```xml
<?xml version="1.0" standalone='no'?>
<!DOCTYPE service-group SYSTEM "avahi-service.dtd">
<service-group>
  <name replace-wildcards="yes">%h</name>
  <service>
    <type>_smb._tcp</type>
    <port>445</port>
  </service>
  <service>
    <type>_device-info._tcp</type>
    <port>0</port>
    <txt-record>model=TimeCapsule8,119</txt-record>
  </service>
  <service>
    <type>_adisk._tcp</type>
    <port>9</port>
    <txt-record>dk0=adVN=TimeMachine,adVF=0x82</txt-record>
  </service>
</service-group>
```

Restart avahi:

```bash
sudo systemctl restart avahi-daemon
```

## 6. Ověření

Zkontroluj, že Pi je viditelné v síti:

```bash
avahi-browse -a | grep "$(hostname)"
```

Na Macu otevři **Time Machine → Vybrat disk** — Raspberry Pi by se mělo zobrazit automaticky jako dostupné úložiště.

:::note
Pro vzdálený SSH přístup bez hesla zkopíruj svůj klíč:
```bash
ssh-copy-id pi@pi.local
```
:::

## Sources

- [AFP Is Now Officially Deprecated in macOS](https://elements.tv/blog/afp-is-deprecated-heres-how-to-prepare/) — timeline deprecace a migrace na SMB
- [avahi dokumentace](https://www.avahi.org/)
