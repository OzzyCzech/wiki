---
title: Protecting email addresses
description: How to protect your emails with PHP and Javascript
created: 2015-05-13
updated: 2026-04-06
---

Working with or without javascript it's combine two technique for email protection [ROT13](http://en.wikipedia.org/wiki/ROT13) and CSS

```php
function mail($email, $text = null) {
 return '<script type="text/javascript">document.write("' .
 addslashes(
  str_rot13(
   '<a href="mailto:' . $email . '" rel="nofollow">' . ($text ? : $email) . '</a>'
  )
 ) . '".replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26);}));</script>' .
 '<noscript><span style="unicode-bidi: bidi-override; direction: rtl;">' . strrev($email) . '</span></noscript>';
}
```

- [Nine ways to obfuscate e-mail addresses compared](http://techblog.tilllate.com/2008/07/20/ten-methods-to-obfuscate-e-mail-addresses-compared/)
- [Best Method for Email Obfuscation?](http://perishablepress.com/best-method-for-email-obfuscation/)
