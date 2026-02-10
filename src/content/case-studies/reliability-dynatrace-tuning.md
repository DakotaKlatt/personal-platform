---
title: "Reliability & performance: diagnosing bottlenecks with Dynatrace + tuning data access"
description: "Using observability and log analysis to improve P99 latency and availability."
pubDate: 2024-05-01
tags: ["Reliability", "DevOps", "Data", "Observability"]
---

## Context

A critical path service was occasionally hitting P99 latency spikes and, in a few cases, contributing to availability issues. The stack included multiple data stores (Redis, MongoDB, MySQL/Azure SQL) and several downstream HTTP and Kafka dependencies. We needed to find root cause and fix it without a full rewrite.

## Approach

1. **Dynatrace** — Dashboards and notebooks for trace analysis: which operations were slow, which dependencies were contributing, and where threads were blocking.
2. **Logs** — Correlated request IDs and error logs with traces to understand failure modes.
3. **Hypothesis-driven changes** — Tuned connection pools, query patterns, and dependency timeouts; re-measured after each change.

## Findings (generic)

- **Data access**: Some queries were N+1 or missing indexes; we added indexes and batched where possible.
- **Dependencies**: A few outbound calls had aggressive timeouts or no circuit breaking; we introduced timeouts and fallbacks.
- **Resources**: Pod CPU/memory limits were too low for peak; we adjusted and documented pod tuning settings that were later adopted by other teams.

## Metrics (sanitized)

- P99 latency reduced by a significant margin (exact numbers omitted; focus was on meeting SLA).
- Fewer incidents related to this service after changes; availability improved toward target.

## Lessons learned

- Observability (traces + metrics + logs) is non-negotiable for production; invest before you need it.
- Small, incremental tuning with before/after metrics beats big rewrites when the architecture is sound.
- Sharing runbooks and tuning practices (e.g., pod settings) across teams multiplies impact.
