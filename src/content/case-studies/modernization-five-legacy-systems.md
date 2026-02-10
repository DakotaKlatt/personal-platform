---
title: "Modernization: consolidating five legacy systems into microservices"
description: "Technical lead on migrating multiple legacy systems to a unified event-driven microservices platform."
pubDate: 2024-05-15
tags: ["Microservices", "Kafka", "Azure", "DevOps"]
---

## Context

The business ran five separate legacy systems for overlapping domains (e.g., booking, tracking, pricing). Each had its own deployment, data stores, and integration patterns. The goal was to consolidate into a single platform: unified APIs, event-driven communication, and consistent CI/CD.

## Approach

1. **Domain boundaries** — Mapped capabilities to bounded contexts and identified shared events (e.g., “shipment created”, “status updated”).
2. **Incremental migration** — Strangler-fig style: new microservices owned new capabilities and consumed/emitted events; legacy systems were gradually retired or wrapped.
3. **Standards** — Event schemas, API conventions, and pipeline templates (Azure DevOps, Docker, K8s) established and reused.

## Outcomes

- **Unified platform**: One coherent set of services and event topics instead of five silos.
- **Ownership**: Design/ops for 30+ microservices; authored 15+; contributed across 200+ in the ecosystem.
- **Consistency**: Same patterns for logging, metrics, security (Snyk/ShiftLeft in CI), and deployment.

## Tradeoffs

- **Timeline**: Migration was multi-year; prioritization was by business value and risk.
- **Dual run**: Some legacy and new systems ran in parallel; contract testing and feature flags helped.
- **Documentation**: Keeping architecture docs and runbooks up to date was as important as code.

## Lessons learned

- Clear event contracts and backward compatibility (e.g., optional fields) reduced integration friction.
- Investing in shared libraries and pipeline templates paid off across teams.
- Technical lead meant unblocking others and making decisions with incomplete information—communication and lightweight ADRs helped.
