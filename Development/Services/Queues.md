---
title: Queues
description: Message queue and job processing services for distributed application architectures.
created: 2024-05-24
updated: 2026-04-28
---

Message brokers, job queues, and background processing systems for distributing work across services and processes.

## 🐘 Postgres-backed (SKIP LOCKED)

Fronty postavené přímo nad PostgreSQL pomocí `SELECT ... FOR UPDATE SKIP LOCKED`. Žádný extra broker, jediná závislost je DB, kterou už pravděpodobně provozuješ. Každý worker si v jedné transakci atomicky zamkne řádek a ostatní workery ho přeskočí — vysoká paralelizace bez blokování, ideální pro scraping, ETL a batch joby.

- **[pg-boss](https://github.com/timgit/pg-boss)** — Node.js job queue nad PostgreSQL; podporuje cron, retry, archivaci a dead-letter
- **[Graphile Worker](https://worker.graphile.org/)** — high-throughput Node.js queue na Postgresu; kombinuje `LISTEN/NOTIFY` se `SKIP LOCKED` pro nízkou latenci
- **[River](https://riverqueue.com/)** — Go job queue se `SKIP LOCKED`; type-safe, periodic jobs, prioritní fronty
- **[Oban](https://github.com/oban-bg/oban)** — Elixir background jobs nad Postgresem (volitelně MySQL/SQLite3) s rate limitingem, unique jobs a cronem
- **[pgmq](https://github.com/tembo-io/pgmq)** — Postgres extension implementující message queue API podobné SQS přímo v DB

## ☁️ Managed services

- **[Amazon MQ](https://aws.amazon.com/amazon-mq/)** — managed Apache ActiveMQ broker on AWS; drop-in for apps using JMS, NMS, AMQP, STOMP, or MQTT
- **[Amazon SQS](https://aws.amazon.com/sqs/)** — fully managed message queue service for decoupling distributed system components

## 🛠️ Self-hosted brokers

- **[RabbitMQ](https://www.rabbitmq.com/)** — referenční AMQP broker; stabilní, výborně dokumentovaný, řeší většinu běžných případů
- **[Apache Kafka](https://kafka.apache.org/)** — log-based streaming platforma pro event-driven architektury a vysokou propustnost
- **[Redpanda](https://redpanda.com/)** — Kafka-kompatibilní broker bez ZooKeeperu a JVM; jednodušší provoz
- **[NATS](https://nats.io/)** — lightweight, high-throughput messaging system for cloud-native and IoT use cases
- **[NSQ](https://github.com/bitly/nsq)** — distributed messaging platform designed for high-volume workloads at scale

## 📦 Job queues a workery

- **[BullMQ](https://bullmq.io/)** — moderní Node.js job queue nad Redisem; široké rozšíření, podporuje retry, rate limit, prioritní fronty
- **[Sidekiq](https://sidekiq.org/)** — Redis-backed Ruby background jobs; de facto standard v Rails ekosystému
- **[Celery](https://docs.celeryq.dev/)** — Python distribuovaná task queue (Redis nebo RabbitMQ backend)
- **[Resque](https://github.com/resque/resque)** — Redis-backed background job queue for Ruby
- **[Beanstalkd](https://beanstalkd.github.io/)** — minimalistická work queue v jediném binárce; FIFO, priority, žádná zbytečná složitost
- **[Faktory](https://contribsys.com/faktory/)** — language-agnostic job server od autora Sidekiqu
- **[Gearman](http://gearman.org/)** — job server for distributing work to multiple workers across languages and machines
- **[Temporal](https://temporal.io/)** — durable execution engine pro dlouhé workflow s retry, timeoutem a state managementem
