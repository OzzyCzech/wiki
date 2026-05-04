---
title: Read currency rates from ČNB
description: PHP class to fetch and parse current currency exchange rates from the Czech National Bank.
created: 2016-10-07
updated: 2026-04-06
---

```php
<?php
/**
 * Get currency rates from ČNB in PHP
 *
 * @author Roman Ožana <roman@ozana.cz>
 */
class ExchangeRates {

  const URL = 'https://www.cnb.cz/cs/financni_trhy/devizovy_trh/kurzy_devizoveho_trhu/denni_kurz.txt?date=';

  private static $rates = [];

  public function getRatesList(\DateTime $date = null) {
    $date = $date ?: new \DateTime();;

    if (!array_key_exists($key = $date->format('c'), self::$rates)) {

      $data = file_get_contents(
        self::URL . $date->format('d.m.Y'), null, stream_context_create(['http' => ['timeout' => 10]])
      );

      preg_match_all('/([\V]+)\|([\V]+)\|([\d]+)\|([A-Z]+)\|([\d]+),?([\d]*)/mi', $data, $matches, PREG_SET_ORDER);

      foreach ($matches as $m) {
        self::$rates[$key][$m[4]] = (object)[
          'country' => $m[1],
          'currency' => $m[2],
          'code' => $m[4],
          'amount' => intval($m[3]),
          'rate' => floatval($m[5] . '.' . $m[6]),
        ];
      }
    }

    return self::$rates[$key];
  }

  public function toCZK($amount, $code = 'USD', \DateTime $date = null) {
    $currency = self::getRatesList($date)[$code];
    return floatval($amount * $currency->rate / $currency->amount);
  }

}
```
