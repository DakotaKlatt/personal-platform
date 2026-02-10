/**
 * Projects: potential builds / learning roadmap.
 * These are ideas, not started. Honest, recruiter-friendly, ATS keyword rich.
 */

export type ProjectStatus = 'idea';

export interface Project {
  id: string;
  title: string;
  slug: string;
  /** One sentence: what it would be */
  outcome: string;
  /** One sentence: skills it would showcase (keywords) */
  whyItMatters: string;
  stack: string[];
  tags: string[];
  status: ProjectStatus;
  comingSoon?: boolean;
  featuredOrder?: number;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 'event-driven-reference-stack',
    title: 'Event-driven microservices reference stack',
    slug: 'event-driven-reference-stack',
    outcome: 'A concept for 3–4 services in Java/Spring Boot and Kafka (plus Redis) demonstrating event-driven architecture and reliability patterns.',
    whyItMatters: 'Would showcase microservices, distributed systems, idempotency, retries, DLQ, integration testing (e.g. Testcontainers), Docker, and observability (OpenTelemetry).',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker', 'OpenTelemetry'],
    tags: ['Backend', 'Kafka', 'Streaming', 'Microservices'],
    status: 'idea',
    comingSoon: true,
    featuredOrder: 1,
  },
  {
    id: 'k8s-gitops-pipeline',
    title: 'Kubernetes + GitOps delivery pipeline',
    slug: 'k8s-gitops-pipeline',
    outcome: 'A potential learning project for a deployment pipeline using Helm or Kustomize with Argo CD or Flux for GitOps-style delivery.',
    whyItMatters: 'Would showcase Kubernetes, GitOps, CI/CD, deployment automation, progressive delivery (canary/blue-green), infrastructure-as-code, and release engineering.',
    stack: ['Kubernetes', 'Helm', 'Argo CD', 'Flux', 'CI/CD'],
    tags: ['DevOps', 'Kubernetes', 'GitOps'],
    status: 'idea',
    comingSoon: true,
    featuredOrder: 2,
  },
  {
    id: 'llm-ops-devex-helper',
    title: 'LLM-assisted ops / DevEx helper',
    slug: 'llm-ops-devex-helper',
    outcome: 'An idea for a developer-experience tool that would use RAG over synthetic logs/traces only to support incident analysis and “what to check next” in a privacy-safe way.',
    whyItMatters: 'Would showcase developer experience, tooling, RAG, evaluation harness, incident analysis, privacy-safe design, and automation.',
    stack: ['Python', 'RAG', 'LLM', 'Synthetic data'],
    tags: ['AI', 'DevEx', 'Observability'],
    status: 'idea',
    comingSoon: true,
    featuredOrder: 3,
  },
];

export const projectTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();

export function getFeaturedProjects(limit = 6): Project[] {
  return projects
    .filter((p) => p.featuredOrder != null)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))
    .slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTag(tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}
