---
title: Top domains lists
description: Curated lists of top internet domains useful for analysis, blacklisting, and web crawling.
created: 2024-09-17
updated: 2026-04-06
---

There are several lists of top domains on the internet. These lists are useful for various purposes,
such as analyzing the most popular websites, creating a blacklist, or building a web crawler.
Hsere are some of the most popular lists:

### Tranco

- Website: https://tranco-list.eu/
- Download: https://tranco-list.eu/top-1m.csv.zip

You can use following bash script to download the top 5000 domains from [Tranco list](https://tranco-list.eu/):

```shell
#!/bin/bash

# Retrieve the top 1m domain list from tranco-list.eu
ID=$(curl -sL https://tranco-list.eu/top-1m-id)
mkdir -p tmp
# Download the top 5000 domains (you can change number up to 1000000 domains)
curl -sL "https://tranco-list.eu/download/$ID/5000" -o tmp/domains.csv

# generate SQL lite db from the list
sqlite3 tmp/domains.s3db <<EOF
CREATE TABLE domains (rank INTEGER, domain TEXT);
.separator ","
.import tmp/domains.csv domains
EOF

mv tmp/domains.s3db top-5000-domains.s3db

rm -rf tmp
```

Script will generate `top-5000-domains.s3db` (a SQLLite database) contains table
`domains` with columns `rank` and `domain`.

### Cloudflare

- Website: https://radar.cloudflare.com/domains
- Download: https://radar.cloudflare.com/charts/LargerTopDomainsTable/attachment?id=525&top=1000000

### Cisco Umbrella

- Website: https://s3-us-west-1.amazonaws.com/umbrella-static/index.html
- Download: https://s3-us-west-1.amazonaws.com/umbrella-static/top-1m.csv.zip

### Majestic

- Website: https://majestic.com/reports/majestic-million
- Download: https://downloads.majestic.com/majestic_million.csv

### BuiltWith

- Website: https://builtwith.com/top-1m
- Download: https://builtwith.com/dl/builtwith-top1m.zip

### Statvoo

- Website: https://statvoo.com/top/ranked
- Download: https://statvoo.com/dl/top-1million-sites.csv.zip

### DomCop

- Website: https://www.domcop.com/top-10-million-websites
- Download: https://www.domcop.com/files/top/top10milliondomains.csv.zip
