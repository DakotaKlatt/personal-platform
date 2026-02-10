/**
 * Skills grouped by outcome for About page.
 */

export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Reliability & scale',
    items: [
      'Event-driven microservices (6+ years)',
      'High-throughput pipelines (100K+ tx/hr)',
      'Performance troubleshooting (Dynatrace, logs)',
      'Availability and incident response',
    ],
  },
  {
    title: 'Streaming & messaging',
    items: [
      'Apache Kafka (design, ops, inspection via Kpow/Lenses.io)',
      'Real-time event pipelines',
      'Event contracts and schema evolution',
    ],
  },
  {
    title: 'Data',
    items: [
      'Redis, MongoDB, MySQL, Azure SQL',
      'Data access tuning and query optimization',
      'MongoDB Compass and data modeling',
    ],
  },
  {
    title: 'DevOps & platform',
    items: [
      'Azure DevOps pipelines',
      'Docker, Kubernetes, OpenShift exposure',
      'Pod tuning and resource settings (adopted across teams)',
    ],
  },
  {
    title: 'Security',
    items: [
      'Snyk and ShiftLeft triage/remediation',
      'License and compliance in CI/CD',
    ],
  },
  {
    title: 'AI-assisted workflows',
    items: [
      'GitHub Copilot',
      'Agent-based workflows for development and ops',
    ],
  },
];
