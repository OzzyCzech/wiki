---
title: Remove link manager
description: How to remove the unused WordPress link manager from the admin menu.
created: 2019-02-17
updated: 2026-04-06
---

WordPress [link manager](http://codex.wordpress.org/Links_Manager) is useless. Why do not remove that from menu? It's
easy:

```php
add_action('admin_menu', function (){
  remove_menu_page('link-manager.php');
});
```

You can remove other functions as well e.g.: `remove_menu_page('edit-comments.php');`remove comments edit from menu.
