import type { ExperienceItem } from "../types";

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2022 - Present",
    company: "Babel + ING Bank",
    title: "Senior Backend Engineer",
    details: [
      "Leading a technical team in Digital Experience Tribe to keep around 10 production assets fully operational, with at least one microservice under active ownership.",
      "Responsible for reliability, observability, and delivery quality in a high-demand banking environment."
    ],
    subsections: [
      {
        title: "On-call Team 2(2023 - Present)",
        details: [
          "24x7 rotations with incident response ownership, coordination through established runbooks, and focus on fast service recovery."
        ]
      },
      {
        title: "Transaction Listing Movement - Thunder Transactions - Everyday Engagement(2023-2025)",
        details: [
          "Maintained the F2E legacy like ETR, Arrangement Java 8 monolith and supported decomposition into TRAPI and TRQUERY microservices with Java 17-21 and AISCAF development & maintenance, thanks to Aurelio Perez, Unai Garcia, Thunder Team and F2E Team."
        ]
      },
      {
        title: "Swift Payments - Chamanes - PowerOps(2022-2023",
        details: [
          "I Learning and Contributed to Java messaging workflows and learned payment-domain constraints in production contexts."
        ]
      }
    ]
  },
  {
    period: "2021 - 2022",
    company: "Ingenia Malaga (Unicaja)",
    title: "Frontend to Backend Transition",
    details: [
      "Contributed to Angular migration work in a banking context.",
      "Started transitioning toward backend engineering responsibilities."
    ]
  },
  {
    period: "2020 - 2021",
    company: "Agency Right Now",
    title: "Early Engineering Experience",
    details: [
      "Built strong delivery habits in short release cycles.",
      "Learned team collaboration through shared code ownership and peer feedback."
    ]
  }
];
