import type { ExperienceItem } from "../types";

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2022 - Present",
    company: "Babel",
    title: "Senior Backend Engineer",
    details: ["ING Bank"],
    subsections: [
      {
        title: "Microservices Management in Digital Experience (2026 - Present)",
        details: [
          "Leading a technical team in Digital Experience Tribe to keep around 10 production assets fully operational, with at least one microservice under active ownership.",
          "Responsible for reliability, observability, and delivery quality in a high-demand banking environment."
        ]
      },
      {
        title: "On-call Team - EE & DEx (2023 - Present)",
        details: [
          "24x7 rotations with incident response ownership, coordination through established runbooks, and focus on fast service recovery."
        ]
      },
      {
        title: "Transaction Listing Movement in Everyday Engagement (2023-2025)",
        details: [
          "Maintained the F2E legacy Arrangement Java 8 monolith and supported its decomposition into modern microservices (Transaction Repository, Transaction Query Service and Upstream Integration Platform) with Java 17-21.",
          "Collaborated closely with the Thunder Team and F2E Team on migration, reliability and production hardening."
        ]
      },
      {
        title: "Swift Payments in PowerOps (2022-2023)",
        details: [
          "Contributed to Java messaging workflows and learned payment-domain constraints in production contexts."
        ]
      }
    ]
  },
  {
    period: "2021",
    company: "Ingenia Málaga",
    title: "Full Stack Developer",
    details: [
      "Contributed to Frontend migration work in a banking context with Angular.",
      "Started transitioning toward backend engineering responsibilities with Java."
    ]
  },
  {
    period: "2020",
    company: "Agency Right Now",
    title: "Early Engineering Experience",
    details: [
      "Built strong delivery habits in short release cycles.",
      "Learned team collaboration through shared code ownership and peer feedback."
    ]
  }
];
