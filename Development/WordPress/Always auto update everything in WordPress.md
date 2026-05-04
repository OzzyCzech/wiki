---
title: Always auto update everything in WordPress
description: WordPress must-use plugin to silently auto-update core, plugins, themes, and translations.
created: 2025-11-19
updated: 2026-04-06
---

This code snippet enables automatic updates for WordPress core, plugins, themes, and translations. It also disables
version control system checks and email notifications for updates. Known as silent updates, this helps keep your
WordPress site secure and up-to-date without manual intervention.

```php
<?php
/*
 * Plugin Name: Auto Update
 * Description: Must use plugin for Auto Update
 * Author: Roman Ožana
 * Author URI: https://ozana.cz
 */

add_filter('auto_update_core', '__return_true');
add_filter('auto_update_plugin', '__return_true');
add_filter('auto_update_theme', '__return_true');
add_filter('auto_update_translation', '__return_true');

// disable checks for version control system
add_filter('automatic_updates_is_vcs_checkout', '__return_false', 1);

// disable email notifications
add_filter('auto_core_update_send_email', '__return_false');
add_filter('auto_plugin_update_send_email', '__return_false');
add_filter('auto_theme_update_send_email', '__return_false');
```

Copy this code into a new PHP file `always-update.php` and place it in the `wp-content/mu-plugins/` directory of your
WordPress installation. See more
at [WordPress Documentation](https://developer.wordpress.org/advanced-administration/upgrade/upgrading/)