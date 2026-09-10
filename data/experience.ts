export const experience = [
  {
    company: "Blaze (YC S24)",
    href: "https://blaze.money",
    logo: "/logos/blaze.png",
    role: "Software Engineer Intern - AI Agent Infrastructure",
    dates: "April 2026 - August 2026",
    location: "San Francisco Bay Area, CA",
    summary: `At Blaze, I helped build the AI CFO, an agent that handles financial operations for businesses, from checking balances to sending cross-border transfers.

Much of my work focused on the TypeScript backend that let agents discover and use paid model and data APIs through x402, with payments settled in USDC. I worked on routing requests to providers and handling payments, with spending limits to keep agent costs in check.

I also built the usage accounting layer so we could trace each API call back to the agent that made it and understand its cost and margin. The payment infrastructure included integrations with Anthropic and Coinbase CDP, backed by more than 125 tests.`
  },
  {
    company: "UT Southwestern - Tsai Lab",
    href: "https://labs.utsouthwestern.edu/tsai-lab/research",
    logo: "/logos/utsw.svg",
    role: "AI / Machine Learning Research Intern",
    dates: "January 2026 - August 2026",
    location: "Dallas, TX",
    summary: `At the Tsai Lab, I built machine learning systems to study patterns in social behavior as part of autism research. My work turned data from controlled social interaction experiments into measurable features that could be used for analysis.

I also built a high-throughput behavioral intelligence pipeline that reduced preprocessing time by 76%+ through automated annotation, feature extraction, and downstream analysis.`
  },
  {
    company: "Dell Technologies Inc.",
    href: "https://www.dell.com",
    logo: "/logos/dell.png",
    role: "Software Engineer Intern - Cloud Infrastructure",
    dates: "May 2025 - August 2025",
    location: "Richardson, TX",
    summary:
      "I built cloud-native backend services and infrastructure tooling across distributed systems at Dell, working in Go and Python while integrating Kafka and MQTT to improve event processing throughput by 40%. I containerized services with Docker and Kubernetes, reduced deployment cycles from hours to minutes, and implemented Vault, Prometheus, Jaeger, and Fluentd across 10+ distributed services to improve secrets management, observability, trace depth, triage speed, and production reliability visibility."
  },
  {
    company: "Manochetana",
    href: "https://www.ajitmanochetana.com",
    logo: "/logos/manochetana.svg",
    role: "Accessibility Infrastructure & Digital Operations",
    dates: "May 2024 - August 2025",
    location: "United States & India",
    summary:
      "I built and improved digital infrastructure for accessibility-focused fundraising and outreach across the United States and India. I helped scale monthly traffic from roughly 800 to 12,500+ visitors, redesigned donor onboarding flows that increased conversion rates by 3.4x, built targeted outreach systems that expanded program visibility to 40,000+ families, and streamlined recurring fundraising operations so campaign execution moved about 55% faster."
  },
  {
    company: "Nova",
    href: "https://nova-utd.github.io",
    logo: "/logos/nova.png",
    role: "Hardware & Software Engineer",
    dates: "August 2023 - May 2025",
    location: "Richardson, TX",
    summary:
      "I worked across autonomy, perception, and data infrastructure for Nova, UT Dallas's applied autonomous driving project. I engineered a multimodal pipeline processing 1.2M+ LiDAR, vision, and GPS frames per week, reduced model training time by 47%, and built a LiDAR-camera route-risk model that improved hazard precision by 38% while reducing false positives by 52%."
  }
];
