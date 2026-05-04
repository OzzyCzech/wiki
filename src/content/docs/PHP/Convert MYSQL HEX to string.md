---
title: Convert MYSQL HEX to string
description: How to use MySQL hexadecimal literals and convert between HEX and string values.
created: 2019-11-27
updated: 2026-04-06
---

[Hexadecimal literal](https://dev.mysql.com/doc/refman/8.0/en/hexadecimal-literals.html) values are
written using `X'string'` or `0xstring` notation, where string contains hexadecimal digits (`0..9, A..F`).

```sql
SELECT HEX('EXAMPLE'), X'4558414D504C45';
```

```text
+----------------+-------------------+
| HEX('EXAMPLE') | X'4558414D504C45' |
+----------------+-------------------+
| 4558414D504C45 | EXAMPLE           |
+----------------+-------------------+
```

You can also transform this value `HEX` value also with PHP instead of `SELECT *, HEX(column) as column_name ... ` SQL.

```php
<?php
function hexToString($hex) {
	$string = '';
	for ($i = 0; $i < strlen($hex); $i++) {
		$string .= dechex(ord($hex[$i]));
	}
	return $string;
}
```

Inserting string to the table will be easy just `"INSERT INTO table (column) VALUES HEX(?)"` or with [Hexadecimal Literal](https://dev.mysql.com/doc/refman/8.0/en/hexadecimal-literals.html) string starting with `0x` or `X'string'`.
