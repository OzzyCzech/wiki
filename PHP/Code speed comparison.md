---
title: Code speed comparison
description: PHP utility function to benchmark and compare execution speed of two code blocks.
created: 2020-12-10
updated: 2026-04-06
---

```php
function versus(callable $first, callable $second, $repeat = 100000) {

	$f = microtime(true);
	foreach (range(0, $repeat) as $r) call_user_func($first);
	$firstTimer = microtime(true) - $f;

	$s = microtime(true);
	foreach (range(0, $repeat) as $r) call_user_func($second);
	$secondTimer = microtime(true) - $s;

	printf(
		'%s function is %.2f%% faster (%f vs %f)',
		$firstTimer < $secondTimer ? 'First' : 'Second',
		abs((($firstTimer - $secondTimer) / $firstTimer) * 100),
		$firstTimer, $secondTimer
	);
}
```

### Example

```php
versus(
	function () {
		$str = '!loremipsum';
		return substr($str, 0, 1) === '!';
	},
	function () {
		$str = '!loremipsum';
		return $str[0] === '!';
	}
);
```

Will print:

```text
Second function is 36.72% faster (0.142766 vs 0.090349)
```
