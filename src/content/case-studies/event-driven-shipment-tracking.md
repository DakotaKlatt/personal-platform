---
title: "Event-driven shipment tracking pipeline at 100K+ tx/hr"
description: "Design and operations of a high-throughput real-time shipment tracking service on Kafka and Azure."
pubDate: 2024-06-01
tags: ["Kafka", "Backend", "Streaming", "Azure"]
---

## Context

A logistics platform needed a single source of truth for real-time shipment status. Downstream systems (pricing, availability, visibility UIs) depended on this pipeline. The service had to handle peak loads of 100K+ transactions per hour with low latency and high availability.

## Architecture (high level)

- **Ingestion**: Events from multiple sources normalized and published to Kafka topics.
- **Core service**: Java/Spring Boot consumers processing events, enriching where needed, and writing to Redis (hot path) and MongoDB (durable store).
- **Outbound**: Downstream consumers (internal services and APIs) read from Kafka or query the service.

No proprietary system names or internal topology are used here; the pattern is event-in, process, persist, and expose.

## Key decisions

1. **Kafka as backbone** — Ordered partitions by shipment/correlation ID to preserve ordering where it mattered. Consumer groups tuned for throughput vs. latency.
2. **Redis + MongoDB** — Redis for sub-second reads on the hot path; MongoDB for durable history and analytics-friendly queries.
3. **Observability first** — Structured logging, metrics (latency, throughput, error rate), and Dynatrace dashboards for real-time health and drill-down.

## Metrics (sanitized)

- **Throughput**: Primary service sustained 30–50K tx/hr typical; peaks above 100K tx/hr.
- **Latency**: P99 kept within SLA via batching and connection tuning.
- **Availability**: Target 99.9%+; incidents tracked and post-mortems used to harden dependencies and retry logic.

## Lessons learned

- Partition key choice (e.g., by shipment ID) is critical for ordering and parallelism.
- Tuning consumer fetch size and commit strategy improved throughput without sacrificing at-least-once semantics.
- Proactive capacity planning and load tests before peak seasons avoided surprises.
