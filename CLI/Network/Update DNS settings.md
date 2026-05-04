---
title: Update DNS settings
---

All DNS settings are stored in `/etc/resolv.conf` file, but it is not recommended to edit this file directly.
Use `resolvconf` to manage DNS settings, first install `resolvconf` package:

```shell
apt update && apt upgrade
apt install -y resolvconf
```

There is a folder `/etc/resolvconf/resolv.conf.d/` which contains `base`, `head` and `tail` files:

- `head` Any entry in head is prepended at the beginning of the resulting `resolv.conf` file
- `tail` Any entry in tail is appended at the end of the resulting `resolv.conf` file
- `base` used, when no other DNS configuration is available - can be used to set default DNS servers
- `original` is a backup of the original `/etc/resolv.conf` file at the time of installation of the `resolvconf` package

```shell
nano /etc/resolvconf/resolv.conf.d/head
```

Open `/etc/resolvconf/resolv.conf.d/head` with your favorite text editor and add the nameservers inside the opened file.

In the example we will add [Cloudflare DNS](https://developers.cloudflare.com/1.1.1.1/) servers:

```text
nameserver 1.1.1.1
nameserver 1.0.0.1
nameserver 2606:4700:4700::1111
nameserver 2606:4700:4700::1001
```

or if you prefer [Google DNS](https://developers.google.com/speed/public-dns) servers:

```text
nameserver 8.8.8.8
nameserver 8.8.4.4
nameserver 2001:4860:4860:0:0:0:0:8888
nameserver 2001:4860:4860:0:0:0:0:8844
```

and save file and exit and update `/etc/resolv.conf` file:

```shell
resolvconf -u
```

Verify the change:

```shell
cat /etc/resolv.conf
```

Then you need restart `networking` and `resolvconf` services to apply changes:

```shell
service resolvconf restart
service networking restart
```

## Disable `systemd-resolved` service

To prevent overwriting `/etc/resolv.conf` file by `systemd-resolved` service you should disable it.
If you don't do it, you will have to update `/etc/resolv.conf` file every time you reboot your system.
And will change your DNS settings back to default (`127.0.0.53`):

```shell
systemctl disable systemd-resolved.service
reboot
```

You can also set immutable attribute to `/etc/resolv.conf` file to prevent overwriting it:

```shell
chattr -i /etc/resolv.conf
```

PS: _Anytime your solution involves `chattr`, it's not really a solution._
