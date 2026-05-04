---
title: FTP connection with PHP
description: PHP function to establish an FTP connection from a URI string with credentials and path.
created: 2024-05-24
updated: 2026-04-06
---

Following function `getFtpConnection` is designed to establish an FTP connection using a URI string.
This URI includes the username, password, hostname, port, and path, formatted as follows:

```text
ftp://username:password@sld.domain.tld:21/path1/path2/
```

Function assumes that the provided URI is well-formed and that the FTP server, username, and password are correct.

```php
/**
 * Return FTP connection
 * ftp://username:password@sld.domain.tld:21/path1/path2/
 */
function getFtpConnection($uri) {
  // Parse the URI and extract its components
  $parsed = parse_url($uri);

  $host = $parsed['host'];
  $user = $parsed['user'];
  $pass = $parsed['pass'];
  $path = $parsed['path'];
  $port = empty($parsed['port']) ? 21 : (int)$parsed['port'];

  // Connect to the FTP server using the host and port
  $connection = ftp_connect($host, $port) or die("Couldn't connect to " . $host);

  // Attempt to log in with the provided username and password
  if (ftp_login($conn, $user, $pass)) {
    // If the login attempt was successful, change the directory to the one specified in the URI
    ftp_chdir($conn, $path);
    return $conn; // success - return connection ID
  }

  // If the login attempt failed, return null
  return null;
}
```

The output of the function is of course the connection ID, which you can then [normally work with](http://www.php.net/manual/en/ref.ftp.php) further.
