---
title: Backups and disks
description: Time Machine management and disk utilities from the macOS command line.
created: 2026-04-01
updated: 2026-04-01
---

## Time Machine from Terminal

You can enable `sudo tmutil enable` or disable `sudo tmutil disable` from the command line. If you want to run a Time
Machine backup right away, just run `tmutil startbackup` or
`tmutil stopbackup` if you ever want to stop a backup.

### Local snapshots

The following command will disable and delete "local snapshots":

```shell
sudo tmutil disablelocal
```

You can turn local snapshots back on by running:

```shell
sudo tmutil enablelocal
```

### Exclude selected folders

```shell
sudo tmutil addexclusion ~/Downloads
```

There is an interesting property `-p` that controls whether or not the folder remains in exclusion when it is moved.
If you use the above command with the `-p` flag, then it will not be sticky.

If you are a developer there are a few quite common folders that should be excluded:

```shell
sudo tmutil addexclusion ~/.composer
sudo tmutil addexclusion ~/.npm
sudo tmutil addexclusion ~/Library/Developer
sudo tmutil addexclusion ~/Library/Containers/com.docker.docker/Data/
```

#### List excluded

```shell
sudo mdfind "com_apple_backup_excludeItem = 'com.apple.backupd'"
```

### Time Machine stats

```shell
tmutil listbackups
```

## Delete local Time Machine snapshots

Your Time Machine backup disk might not always be available, so Time Machine also stores some of its backups on your
Mac. These backups are called local snapshots. [Local TimeMachine snapshots](https://support.apple.com/en-us/HT204015)
take a large amount of disk space. This space is listed as purgeable in disk info, but cannot be actually used until the
system decides to free it up. You can list all local backups with:

```shell
tmutil listlocalsnapshots /
```

Then delete one by one, with follow command:

```shell
sudo tmutil deletelocalsnapshots <snapshot date>
```

You can lists all snaphosts and deletes all of them in a loop:

```shell
for d in $(tmutil listlocalsnapshotdates | grep "-"); do sudo tmutil deletelocalsnapshots $d; done
```

## Backup iCloud Drive with rclone

All iCloud drive data are located in `~/Library/Mobile\ Documents/com~apple~CloudDocs/` folder. You can easily sync them
with [rclone](https://rclone.org/) to back up hard drive connected to Mac. In my case it will be mounted
to `/Volumes/Backup/`.

```shell
rclone sync ~/Library/Mobile\ Documents/com~apple~CloudDocs/ /Volumes/Backup/iCloudDriveBackup --copy-links
```

If you need also backup of all deleted files (sync usually remove files that was delete from source) is
there `--backup-dir` parameter.

```shell
rclone sync ~/Library/Mobile\ Documents/com~apple~CloudDocs/ /Volumes/Backup/iCloudDriveBackup --copy-links
       --backup-dir="/Volumes/Backup/iCloudDriveArchive/$(date +%Y)/$(date +%F_%T)"
```

## Clean flash drive before unmount

How to **clean flash drive** and delete all hidden (dot) files on mac before unmount? It's simple, save follow commands as `flash`:

```shell
#!/bin/bash

if [ -n "$1" ]; then
  read -r -p "Clean /Volumes/$1/ and unmount? [y/N] " response
  if [[ $response =~ ^([yY][eE][sS]|[yY])$ ]]; then
    find /Volumes/$1/ -name '._*' -type f -delete
    rm -rf /Volumes/$1/.Spotlight-V100/
    rm -rf /Volumes/$1/.Trashes/
    diskutil unmount /Volumes/$1/
    echo "Done..."
  fi
else
  echo "Flash drive name missing"
fi
```

Then change the access mode of a file `chmod +x flash`. To unmount a clean flash drive just run
`./flash Flashka` (Flashka is name od drive).
