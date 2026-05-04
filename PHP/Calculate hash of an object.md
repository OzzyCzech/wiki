---
title: Calculate hash of an object
description: How to create a stable hash of a PHP object based on its internal values.
created: 2024-05-25
updated: 2026-04-06
---

In PHP, sometimes you need to identify an object using a consistent string based
on its internal values. The standard function [`spl_object_hash()`](http://php.net/manual/en/function.spl-object-hash.php)
isn't always suitable because its result can change over time. To create
a stable hash, you can use the following method:

```php
class Foo {
 private $p;
 public function setProperty($p) {
  $this->p = $p;
 }
 // Calculates the object's hash based on the values of its properties
 public function __toString() {
  return md5(http_build_query(get_object_vars($this)));
 }
}
```

To get the hash, simply do:

```php
$bar = new Foo();
$bar->setProperty('25');
echo $bar;
$hash = (string) $bar;
```

This approach ensures that the hash remains consistent and unchanged as long as the object's property values do not change.
