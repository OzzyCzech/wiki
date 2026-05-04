---
title: Backup MongoDB indexes
description: Short MongoDB script to backup all collection indexes as createIndex() queries.
created: 2020-04-20
updated: 2026-04-06
---

There is a really short and brilliant script to create a backup of index queries. This code iterates over all collections and creates a backup of `createIndex()` queries.

```js
print(`// Backup indexes of : ${db.getName()} : database`);
print(`use ${db.getName()};`);

db.getCollectionNames().forEach(function (collection) {
  indexes = db
    .getCollection(collection)
    .getIndexes()
    .forEach(function (index) {
      if (index.name === "_id_") return; // skip default _id indexes
      const keys = tojsononeline(index.key);
      delete index.id;
      delete index.key;
      delete index.v;
      delete index.ns;
      print(`db.${collection}.createIndex(${keys}, ${tojsononeline(index)});`);
    });
});
```

You can save this backup code to file and run it directly with [mongoshell](https://docs.mongodb.com/manual/mongo/) command:

```shell
mongo --quiet mongodb://localhost:27017/mydb ./backup.indexes.js > myindexes.js
```

Example output:

```js
db.users.createIndex(
  { settings: 1 },
  { name: "settingsIndex", background: true },
);
db.users.createIndex({ name: 1 }, { name: "nameIndex", background: true });
db.users.createIndex({ email: 1 }, { name: "emailIndex", background: true });
```
