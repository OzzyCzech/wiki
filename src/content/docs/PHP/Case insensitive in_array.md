---
title: Case insensitive in_array
description: PHP function for case-insensitive array search as a replacement for in_array().
created: 2024-05-24
updated: 2026-04-06
---

Function [`in_array()`](https://php.net/manual/en/function.in-array.php) is case sensitive - which is not always what you want.
Sometimes you need to search an array, and you don't
care about the case of its elements:

```php
function in_arrayi($needle, $haystack) {
  return in_array(strtolower($needle), array_map('strtolower', $haystack), true);
}
```

Example:

```php
$array = array('a', 'B', 'cE');

in_arrayi('a', $array); // true
in_arrayi('A', $array); // true
in_arrayi('ce', $array); // true
in_arrayi('be', $array); // false
```
