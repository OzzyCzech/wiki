---
title: Flock
description: Open-source native local development environment for Laravel and other PHP projects on macOS, Windows and Linux, without Docker or a VM.
created: 2026-11-03
updated: 2026-11-03
---

**[Flock](https://flockphp.com/)** is a local development environment for Laravel and other PHP projects. A background daemon runs PHP, Node, databases, mail and trusted HTTPS as native processes on macOS, Windows and Linux. It does not use Docker, a VM or file sync. Licensed [AGPL-3.0](https://github.com/flock-php/flock) (verified 2026-11-03).

## How it works

- An embedded Caddy web server on ports 80 and 443 passes requests to PHP-FPM on macOS and Linux, or to a pool of php-cgi workers on Windows ([introduction](https://flockphp.com/docs/introduction))
- An embedded DNS server answers for `*.test`, so new sites work without editing the hosts file
- Flock serves `public/index.php` when a project has one (Laravel, Symfony, Statamic, Craft). Otherwise it serves the project folder, which covers plain PHP and static sites
- [Parking and linking](https://flockphp.com/docs/sites): `flock park ~/Work` serves every subfolder as `<folder>.test` and picks up new projects automatically. `flock link` adds a single project
- [HTTPS](https://flockphp.com/docs/https): a local CA with a root that is name-constrained to the local TLD and `localhost`, so a leaked key cannot sign certificates for real domains. PHP's CA bundle and the Node shims (`NODE_EXTRA_CA_CERTS`) trust it, so HTTPS calls between local apps work
- On Linux the command is `flk`, because `/usr/bin/flock` is the system file-locking tool. Flock's own `flock` comes first on `PATH` after setup ([installation](https://flockphp.com/docs/installation))

## PHP and Node versions

[PHP](https://flockphp.com/docs/php) 8.1–8.5 are installed side by side. On macOS and Linux Flock ships its own builds with PHP-FPM and leaves the distribution's PHP alone. On Windows it uses the official thread-safe builds from windows.php.net plus extra extensions. The `php`, `composer`, `node`, `npm` and `npx` shims resolve the version per project.

[Project versions](https://flockphp.com/docs/project-versions) are set in two ways:

- **Pin** — writes the version into the project: `.flockrc` for PHP, and `.nvmrc` or `.node-version` for Node. Commit it so the team shares it
- **Isolate** — overrides the version for one site, on this machine only, and writes nothing into the project

```bash
flock pin php 8.5        # write to .flockrc
flock isolate php 8.4    # this machine only
flock unisolate php      # follow the project again
```

`.flockrc` holds `key=value` lines and is looked up from the current directory upwards, like `.nvmrc`.

### Extensions and FrankenPHP

- `flock ext` lists the extensions a project requires in `composer.json` and `composer.lock`. For Laravel apps it also reads `.env` and `config/` for extensions used without being required, e.g. `DB_CONNECTION=pgsql` needs `pdo_pgsql`
- `flock ext add pdo_pgsql` adds `ext-pdo_pgsql` to `composer.json`
- A site can run on [FrankenPHP](https://flockphp.com/docs/php) instead of PHP-FPM, in classic mode or in Laravel Octane's worker mode. Requires PHP 8.2+

```bash
flock frankenphp on acme --octane   # Octane worker mode
flock frankenphp restart acme       # reload changed code into the workers
flock frankenphp off acme           # back to PHP-FPM
```

## Services

[Services](https://flockphp.com/docs/services) install from the app or CLI, listen on `127.0.0.1` and can use a non-default port, so MySQL and MariaDB can run side by side:

```bash
flock services install mariadb 11.8 --port 3307
flock services create-db   # PostgreSQL, MySQL and MariaDB
```

| Service | Type | Default port |
| --- | --- | --- |
| PostgreSQL | Database | 5432 |
| MySQL, MariaDB | Database | 3306 |
| MongoDB | Database | 27017 |
| Valkey (Redis on macOS only) | Cache, queue | 6379 |
| Meilisearch | Search | 7700 |
| Typesense (macOS, Linux) | Search | 8108 |
| RustFS | S3-compatible storage | 9000 |

## Debugging

- [Mail](https://flockphp.com/docs/mail) — catches outgoing mail on SMTP port 2525
- [Dumps](https://flockphp.com/docs/dumps) — a dump server on port 9912 collects dumps, queries and logs and links each one to the first file outside `vendor/` that caused it
- [Xdebug](https://flockphp.com/docs/xdebug) — loads only for requests that ask for it, e.g. `?XDEBUG_TRIGGER=1`. The IDE listens on port 9003 and needs no path mappings because PHP runs directly from the project folder

## Sharing and AI agents

- [`flock share`](https://flockphp.com/docs/sharing) — opens a Cloudflare quick tunnel with a random `trycloudflare.com` URL, no account needed. It ends when stopped, after 8 hours, or when Flock stops. `--allow <email>` limits access to people who confirm a one-time code sent by email. Visitors get the production build from `public/build`, never the Vite dev server, and dotfiles such as `.env` are blocked
- [MCP server](https://flockphp.com/docs/ai) — `flock mcp install` gives agents site URLs, logs, mail, dumps and required PHP extensions. Agents can also switch PHP versions, HTTPS or FrankenPHP
- `flock boost` — writes `.ai/guidelines/flock.md` and runs `php artisan boost:update`, so Laravel Boost adds Flock to the agent guideline files

## Requirements

| Platform | Requirements |
| --- | --- |
| macOS | 15 Sequoia or newer, Apple silicon only |
| Windows | 10 (2004+) or 11, x64, Microsoft Visual C++ Redistributable |
| Linux | Ubuntu 24.04+ or current Fedora (x64, arm64), Arch via AUR `flockphp-bin` (x64); `systemd-resolved` as the DNS resolver |
