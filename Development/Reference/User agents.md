---
title: User agents
description: Reference list of browser user agent strings and how to set them with curl and httpie.
created: 2023-02-06
updated: 2026-04-06
---

To change the user agent with the httpie or curl, you can use the
`--user-agent` option followed by the desired user agent string:

```shell
curl --user-agent 'My User Agent' example.com
http --user-agent='My User Agent' example.com
```

### Google Chrome

```shell
curl --user-agent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36'
```

```shell
http --user-agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36'
```

### Mozilla Firefox

```shell
curl --user-agent 'Mozilla/5.0 (Macintosh; Intel Mac OS X 15.6; rv:142.0) Gecko/20100101 Firefox/142.0'
```

```shell
http --user-agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 15.6; rv:142.0) Gecko/20100101 Firefox/142.0'
```

### Apple Safari

```shell
curl --user-agent 'Mozilla/5.0 (Macintosh; Intel Mac OS X 15_6_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15'
```

```shell
http --user-agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 15_6_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.5 Safari/605.1.15'
```

### Microsoft Edge

```shell
curl --user-agent 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.3405.111'
```

```shell
http --user-agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36 Edg/139.0.3405.111'
```

Source: [Latest user agents for Web Browsers & Operating Systems](https://www.whatismybrowser.com/guides/the-latest-user-agent/)
