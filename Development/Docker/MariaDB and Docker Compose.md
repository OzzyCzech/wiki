---
title: MariaDB and Docker Compose
description: How to run MariaDB with Docker Compose and set up a suitable developer environment.
created: 2018-10-24
updated: 2026-04-06
---

This is a short instructions how to run mariadb with docker official [image](https://hub.docker.com/_/mariadb/) with [docker compose](https://docs.docker.com/compose/) and have suitable developer env. Let's have follow `docker-compose.yml`

```yaml
version: "3.9"

volumes:
  mysql:

services:

  mariadb:
    image: mariadb:latest
    environment:
      TZ: Europe/Prague
      MARIADB_ROOT_PASSWORD: root
      MARIADB_DATABASE: exampledb
      MARIADB_AUTO_UPGRADE: "yes" # will run mysql_uprade
    restart: always
    volumes:
	    - mysql:/var/lib/mysql # mysql data
      - ./etc/mysql.ini:/etc/mysql/conf.d/my.ini # config file
      - ./etc/db/mariadb:/docker-entrypoint-initdb.d/:ro # init sql
    ports:
      - "3306:3306"
# php-fpm:
# nginx:
# ...
```

Optionally you can define database with config file - here is mine `./etc/mysql.ini`:

```ini
[mysqld]
character-set-server=utf8
collation-server=utf8_czech_ci
```

## Initializing a fresh instance

When a container is started for the first time, a new database with the specified name will be created and initialized with the provided configuration variables. Furthermore, it will execute files with extensions`.sh`,`.sql`,`.sql.gz`,`.sql.xz`and`.sql.zst`that are found
in`/docker-entrypoint-initdb.d`

Let's create `./etc/db/mariadb/01-init.sql` file that will create database:

```sql
CREATE DATABASE IF NOT EXISTS exampledb CHARACTER SET utf8 COLLATE utf8_general_ci;
```

Then you can add `02-schema.sql` file with database schema and `03-data.sql` file with init data. You can commit those files to git and share them with all coworkers.

Now it's time run `docker compose up`

### Connect to database prompt

```shell
docker compose exec mariadb bash -c 'mysql -u root -p$MARIADB_ROOT_PASSWORD $MARIADB_DATABASE'
```

### Backup database

First backup database schema

```shell
docker compose exec mariadb bash -c 'mysqldump --no-data -uroot -p$MARIADB_ROOT_PASSWORD $MARIADB_DATABASE --databases $MARIADB_DATABASE | sed "s/ AUTO_INCREMENT=[0-9]*\b//g"' > etc/db/mariadb/02-scheme.sql
```

then backup data

```shell
docker compose exec mariadb bash -c 'mysqldump --hex-blob --no-create-info --databases $MARIADB_DATABASE --skip-extended-insert --complete-insert=true --default-character-set=utf8 -uroot -p$MARIADB_ROOT_PASSWORD $MARIADB_DATABASE' > etc/db/mariadb/03-data.sql
```

or you can backup everything together

```shell
docker compose exec mariadb bash -c 'mysqldump -uroot -p$MARIADB_ROOT_PASSWORD $MARIADB_DATABASE --databases $MARIADB_DATABASE' > backup/database.sql
```

### Restore database from SQL file

```shell
docker compose exec mariadb bash -c 'mysql -uroot -p$MARIADB_ROOT_PASSWORD $MARIADB_DATABASE' < backup/database.sql
```

### Execute `mysql_upgrade` after upgrade

```shell
docker compose exec mariadb bash -c 'mysql_upgrade -uroot p$MARIADB_ROOT_PASSWORD'
```

Visit https://hub.docker.com/_/mariadb for more invormation.
