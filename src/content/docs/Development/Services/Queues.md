---
title: Queues
description: Message queue and job processing services for distributed application architectures.
created: 2024-05-24
updated: 2026-04-07
---

Message brokers, job queues, and background processing systems for distributing work across services and processes.

## Managed services

- **[Amazon MQ](https://aws.amazon.com/amazon-mq/)** — managed Apache ActiveMQ broker on AWS; drop-in for apps using JMS, NMS, AMQP, STOMP, or MQTT
- **[Amazon SQS](https://aws.amazon.com/sqs/)** — fully managed message queue service for decoupling distributed system components

## Self-hosted

- **[NATS](https://nats.io/)** — lightweight, high-throughput messaging system for cloud-native and IoT use cases
- **[NSQ](https://github.com/bitly/nsq)** — distributed messaging platform designed for high-volume workloads at scale
- **[Gearman](http://gearman.org/)** — job server for distributing work to multiple workers across languages and machines
- **[Resque](https://github.com/resque/resque)** — Redis-backed background job queue for Ruby
