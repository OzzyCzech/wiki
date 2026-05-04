---
title: Convert JSON to PHP code
description: PHP script to convert JSON data to valid PHP array code using var_export().
created: 2015-05-13
updated: 2026-04-06
---

Do you need convert JSON data to valid PHP code without pain? I've got a short script for that! My simple solution used [var_export()](http://www.php.net/manual/en/function.var-export.php) function. This function generates almost valid, well formatted PHP code from usual JSON data. Invalidity of code can be fix with one regular expression, which replace `stdClass::__set_state/` with `(object)`.

Take a closer look at example data. I have here [currency.json](https://gist.github.com/Fluidbyte/2973986) - PHP code should look something like this:

```php
<?php
 return array (
  'USD' =>
  (object)(array(
     'symbol' => '$',
     'name' => 'US Dollar',
     'symbol_native' => '$',
     'decimal_digits' => 2,
     'rounding' => 0,
     'code' => 'USD',
     'name' => 'US dollars',
  )),
  'CAD' =>
  //...
);
```

It's can be done in only four lines of PHP code:

```php
$data = json_decode(file_get_contents(__DIR__ . '/currency.json'));
$code = var_export((array)$data, true);
$code = "<?php\n return " . preg_replace('/stdClass::__set_state/', '(object)', $code) . ';';
file_put_contents(__DIR__ . '/currencies.locale.php', $code);
```

If you need call some function (like [gettext](http://www.php.net/manual/en/book.gettext.php)) above the variable, just add more regular expression:

```php
$data = json_decode(file_get_contents(__DIR__ . '/currency.json'));
$code = var_export((array)$data, true);

// add gettext function call
$code = preg_replace("/'name' => '(.+)'/", "'name' => __('$1')", $code);
$code = preg_replace("/'name_plural' => '(.+)'/", "'name' => __('$1')", $code);

// save PHP code
$code = "<?php\n return " . preg_replace('/stdClass::__set_state/', '(object)', $code) . ';';
file_put_contents(__DIR__ . '/currencies.locale.php', $code);
```
