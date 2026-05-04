---
title: Download website with wget
description: Download a website with wget command.
created: 2019-09-12
updated: 2026-04-06
sidebar:
  label: Download website
---

There are plenty of options, but the easiest one is to use the command line. **wget** is a command-line utility
that allows you to download whole web pages, files and images from a specific URL.

The following command works just fine:

```shell
wget -nd -nc -np \
     -e robots=off \
     --recursive -p \
     --level=1 \
     --accept jpg,jpeg,png,gif \

     [example.website.com]
```

What do they all mean?

- `-nd`, `--no-directories`: Do not create a hierarchy of directories when retrieving recursively.
- `-nc`, `--no-clobber`: Do not overwrite existing files.
- `-np`, `--no-parent`: Do not ever ascend to the parent directory when retrieving recursively.
- `-e robots=off`: execute command `robots=off` as if it was part of
  `.wgetrc` file. This turns off the robot exclusion which means you ignore
  robots.txt and the robot meta tags (you should know the implications this comes with, take care).
- `-r`, `--recursive`: Turn on recursive retrieving
- `-p`, `--page-requisites`: Download all the files that are necessary.
- `-l depth`, `--level=depth`: Specify recursion maximum depth level.
- `-A`, `--accept`: Accepted file extensions.

Other useful download options:

- `-H`: span hosts (wget doesn't download files from different domains or subdomains by default)
- `--random-wait`: This option causes the time between requests to vary between 0.5 and 1.5
- `--wait 1.0`: Wait the specified number of seconds between the retrievals.
- `--limit-rate=amount`: Limit the download speed to amount bytes per second
- `-U "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"`: Identify as agent-string to the HTTP server as Mozilla Firefox from Windows

Read more on [wget manual page](https://www.gnu.org/software/wget/manual/wget.html).

### Real world example

Download all [Homophones, Weakly](http://homophonesweakly.blogspot.com/) images since 2011

```shell
wget -nd -nc -np \
     -e robots=off \
     --recursive -p \
     --level=1 \
     --accept jpg,jpeg \
     -H --random-wait \
     -U "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36" \
     http://homophonesweakly.blogspot.com/{2011..2019}
```

### Download website mirror

```shell
wget --mirror \
--convert-links \
--adjust-extension \
--page-requisites \
--no-parent \
--no-check-certificate http://example.com
```
