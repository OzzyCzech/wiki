---
title: Response times with curl
description: Measure website response times using a custom curl script.
created: 2023-03-22
updated: 2026-04-06
---

### Creating the `uptime` Script

First, let's create a file named `uptime` and add the following content:

```shell
#!/usr/bin/env bash

format=$(cat <<EOF
---------------------------------------------
Uptime of $@ is
---------------------------------------------
      time_namelookup:  %{time_namelookup}s
        time_connect:  %{time_connect}s
     time_appconnect:  %{time_appconnect}s
    time_pretransfer:  %{time_pretransfer}s
       time_redirect:  %{time_redirect}s
  time_starttransfer:  %{time_starttransfer}s
---------------------------------------------
          time_total:  %{time_total}s
EOF
)

curl -w "$format" -o /dev/null -s "$@"
```

This script defines a `format` variable that contains a template for the
output. The `curl` command is then used to measure the performance of
the specified URL and display the results in the defined format.

### Running the Script

```shell
chmod +x uptime
uptime https://www.google.com
```

You should see output similar to the following:

```text
---------------------------------------------
Uptime of https://www.google.com is
---------------------------------------------
      time_namelookup:  0.021137s
        time_connect:  0.033610s
     time_appconnect:  0.064180s
    time_pretransfer:  0.064246s
       time_redirect:  0.000000s
  time_starttransfer:  0.134371s
---------------------------------------------
          time_total:  0.136121s
```

Explanation of Output:

- `time_namelookup`: The time it took to resolve the DNS name.
- `time_connect`: The time it took to establish the connection.
- `time_appconnect`: The time it took to complete the SSL/TLS handshake (if applicable).
- `time_pretransfer`: The time from the start until just before the file transfer begins.
- `time_redirect`: The time spent on redirections (if any).
- `time_starttransfer`: The time from the start until the first byte is received.
- `time_total`: The total time for the entire request.

### Loading Format from a File

Alternatively, you can store the format in a separate file (e.g., `format.txt`) and use it with `curl`:

```shell
curl -w "@format.txt" -o /dev/null -s https://www.google.com
```

Source: [StackOverflow](https://stackoverflow.com/a/22625150/355316)
