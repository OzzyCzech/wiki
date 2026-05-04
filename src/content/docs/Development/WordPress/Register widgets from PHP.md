---
title: Register widgets from PHP
description: PHP-driven approach to registering and managing WordPress widgets programmatically.
created: 2016-08-31
updated: 2026-04-06
---

PHP driven registration of the Widgets in WordPress can be quite confusing. There is my way how to handle it:

```php
class Widgets {

 private $widgets = [];
 private $options = [];

 public function __construct() {
  $this->options = wp_get_sidebars_widgets();
 }

 public function unregisterAllWidgets() {
  foreach ($this->options as $name => $values)
   $this->options[$name] = [];
 }

 public function cleanWidgetSettings($type, $multi = null) {
  $this->widgets[$type] = [];
  if ($multi !== null) $this->widgets[$type]['_multiwidget'] = (int)(bool)$multi;
 }

 public function setMultiWidget($type, $val = 1) {
  $this->widgets[$type]['_multiwidget'] = $val;
 }

 public function add($type, array $options, $area = null) {
  $this->widgets[$type][] = $options;
  if ($area !== null) {
   if (array_key_exists($area, $this->options) === false) {
    throw new Exception('Widget area ' . $area . ' not exists.');
   }
   end($this->widgets[$type]);
   $this->options[$area][] = $type . '-' . key($this->widgets[$type]);
  }
 }

 public function __destruct() {
  foreach ($this->widgets as $name => $settings) {
   if (!array_key_exists('_multiwidget', $settings)) $settings['_multiwidget'] = 1;
   update_option('widget_' . $name, $settings);
  }
  wp_set_sidebars_widgets($this->options);
 }

}
```

Following code is an example how to use `class Witgets`:

```php
$widgets = new Widgets();
$widgets->unregisterAllWidgets();

$widgets->add('text', [
  'title' => 'About us',
  'text' => 'Simple text about us',
  'filter' => true,
  'classes' => '',
  'ids' => null,
 ],
 'cmdFooter-1'
);

// ...
```

This code need to be call only once. Put your code to `function.php` to `after_switch_theme` action:

```php
add_action(
 'after_switch_theme', function () {
  $widgets = new Widgets();
  $widgets->unregisterAllWidgets();
  // ...
 }
);
```
