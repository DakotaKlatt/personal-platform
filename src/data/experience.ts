/**
 * Career timeline for About page.
 */

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  /** Optional location (e.g. Green Bay, WI | Remote) */
  location?: string;
  /** Summary as a paragraph (string) or bullet list (string[]) */
  summary: string | string[];
  link?: string;
  link2Label?: string;
  link2Url?: string;
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Schneider',
    role: 'Senior Software Engineer',
    period: 'Oct 2021 – Present',
    location: 'Green Bay, WI',
    summary: [
    'Software Engineer II (Oct 2021–Jan 2025); Software Engineer II Team Lead (Jan 2025–Oct 2025); Senior Software Engineer (Oct 2025–Present).',
    'Technical lead on enterprise modernization consolidating five legacy systems into a unified microservices platform in logistics.',
    'Owned design and operations for 30+ microservices; authored 15+ from scratch; contributed across 200+ services.',
    'Built and operated real-time shipment tracking and event pipelines (primary 100K+ tx/hr; typical 30–50K tx/hr).',
    'Troubleshot performance and availability with Dynatrace dashboards/notebooks and log analysis; tuned dependencies and data access.',
    'Managed real-time data across Redis, MongoDB, MySQL, and Azure SQL.',
    'Led sub-team of 3: architecture reviews, task delegation, mentorship, code reviews; partnered with product and architecture.',
    'Streamlined Agile ceremonies; team adopted facilitation approach to shorten meetings.',
    'Released services via Azure DevOps pipelines; Docker/Kubernetes (OpenShift); pod tuning settings adopted across teams.',
    'Kafka tooling (Kpow, Lenses.io) for inspection and health checks; integrated with Python-based partner services.',
    'Worked with AppSec to triage Snyk and ShiftLeft findings and remediate vulnerabilities and license issues.',
    'Directed evaluation of enterprise test automation initiative (Karate) for org-wide direction.',
  ],
    link: 'https://www.schneider.com',
  },
  {
    company: 'iPipeline',
    role: 'Associate Developer',
    period: 'May 2020 – Oct 2021',
    location: 'Remote',
    summary: [
    'Built VB.NET calculation engines for actuarial pricing; transformed Excel-based logic into backend services.',
    'Maintained AWS infrastructure (S3, SQS, EC2, DynamoDB) and contributed to PDF generation services.',
  ],
    link: 'https://ipipeline.com',
  },
  {
    company: 'Thinc Technology',
    role: 'Junior Software Developer',
    period: 'Feb 2019 – May 2020',
    summary: [
    'Developed and launched two React Native mobile apps backed by a LAMP stack.',
    'Managed project scoping, client communication, and delivery across multiple engagements.',
    'Supported early project concept and assisted in initial project development and investor pitches (Vern).',
  ],
    link: 'https://thinc.technology',
    link2Label: 'Vern',
    link2Url: 'https://vernai.com',
  },
  {
    company: 'Michigan State University',
    role: 'B.S. Computer Science (cognate in psychology)',
    period: '2015 – 2019',
    summary: 'Foundation in CS and software engineering; cognate in psychology.',
    link: 'https://msu.edu',
  },
];
