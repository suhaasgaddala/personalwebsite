export const experience = [
  {
    company: "Blaze (YC S24)",
    href: "https://blaze.money",
    role: "Software Engineer Intern - AI Agent Infrastructure",
    dates: "April 2026 - Present",
    location: "San Francisco Bay Area, CA",
    summary: `I build AI agents at Blaze. Businesses scaled across borders run these agents on real payment workflows, and my job is making the infrastructure underneath them fast, safe, and legible.

I designed and shipped the usage accounting and attribution layer for that agent infrastructure, tracing a single user request as it fans out across provider calls and metering cost, margin, and execution ownership at every hop. It is the same class of problem Stripe and Metronome solve for billing at scale.

I also build production TypeScript and Express systems that let agents autonomously discover, pay for, and invoke x402 priced model and data APIs with USDC settlement. The work spans provider routing, buyer payment clients, safety caps, and cost controls, with integrations across Anthropic, Coinbase CDP, DexScreener, and Bazaar indexing, all backed by 125+ tests across payment, inference, routing, and accounting paths.`
  },
  {
    company: "UT Southwestern - Tsai Lab",
    href: "https://labs.utsouthwestern.edu/tsai-lab/research",
    role: "AI / Machine Learning Research Intern",
    dates: "January 2026 - Present",
    location: "Dallas, TX",
    summary:
      "I architect machine learning systems for autism-related behavioral phenotyping in controlled social interaction experiments. The work focuses on converting raw behavioral data into measurable interaction signatures, delivering 88%+ accuracy across 150+ experimental trials, and building a high-throughput behavioral intelligence pipeline that reduced preprocessing time by 76%+ through automated annotation, feature extraction, and downstream analysis."
  },
  {
    company: "Dell Technologies Inc.",
    href: "https://www.dell.com",
    role: "Software Engineer Intern - Cloud Infrastructure",
    dates: "May 2025 - August 2025",
    location: "Richardson, TX",
    summary:
      "I built cloud-native backend services and infrastructure tooling across distributed systems at Dell, working in Go and Python while integrating Kafka and MQTT to improve event processing throughput by 40%. I containerized services with Docker and Kubernetes, reduced deployment cycles from hours to minutes, and implemented Vault, Prometheus, Jaeger, and Fluentd across 10+ distributed services to improve secrets management, observability, trace depth, triage speed, and production reliability visibility."
  },
  {
    company: "Manochetana",
    href: "https://www.ajitmanochetana.com",
    role: "Accessibility Infrastructure & Digital Operations",
    dates: "May 2024 - August 2025",
    location: "United States & India",
    summary:
      "I built and improved digital infrastructure for accessibility-focused fundraising and outreach across the United States and India. I helped scale monthly traffic from roughly 800 to 12,500+ visitors, redesigned donor onboarding flows that increased conversion rates by 3.4x, built targeted outreach systems that expanded program visibility to 40,000+ families, and streamlined recurring fundraising operations so campaign execution moved about 55% faster."
  },
  {
    company: "Nova",
    href: "https://nova-utd.github.io",
    role: "Hardware & Software Engineer",
    dates: "August 2023 - May 2025",
    location: "Richardson, TX",
    summary:
      "I worked across autonomy, perception, and data infrastructure for Nova, UT Dallas's applied autonomous driving project. I engineered a multimodal pipeline processing 1.2M+ LiDAR, vision, and GPS frames per week, reduced model training time by 47%, and built a LiDAR-camera route-risk model that improved hazard precision by 38% while reducing false positives by 52%."
  }
];
