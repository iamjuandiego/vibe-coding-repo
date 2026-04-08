import type { ExperienceItem } from "../types";

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2022 - Present",
    company: "Babel + ING Bank",
    title: "Senior Backend Engineer",
    details: [
      "Leading a technical team to keep around 10 production assets fully operational, with at least one microservice under active ownership.",
      "Responsible for reliability, observability, and delivery quality in a high-demand banking environment."
    ],
    subsections: [
      {
        title: "Swift",
        details: [
          "Contributed to Java messaging workflows and learned payment-domain constraints in production contexts."
        ]
      },
      {
        title: "Transaction Listing Movement",
        details: [
          "Maintained the ETR Java 8 monolith and supported decomposition into TRAPI and TRQUERY for clearer service boundaries."
        ]
      },
      {
        title: "On-call Team (2023 - Present)",
        details: [
          "24x7 rotations with incident response ownership, coordination through established runbooks, and focus on fast service recovery."
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
