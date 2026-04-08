import type { ExperienceItem } from "../types";

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2020 - 2021",
    company: "Agency Right Now",
    title: "Early Engineering Experience",
    details: [
      "Built practical delivery habits in a collaborative setup with short release cycles.",
      "Learned to work with shared code ownership and peer feedback."
    ]
  },
  {
    period: "2021 - 2022",
    company: "Ingenia Malaga (Unicaja)",
    title: "Frontend to Backend Transition",
    details: [
      "Contributed to Angular migration work (Explorer to Edge compatibility context).",
      "Started transition toward backend responsibilities in banking environments."
    ]
  },
  {
    period: "2022 - Present",
    company: "Babel + ING Bank",
    title: "Senior Backend Engineer",
    details: [
      "Swift Payments overlap context (2021-2022): worked on MTM messaging in Java while learning internal tooling and payment domain constraints.",
      "Maintained ETR Java 8 monolith (F2E) with ingestion and consumption responsibilities for transaction listing.",
      "Contributed as part of backend team to decomposition into TRAPI and TRQUERY.",
      "Worked on AISCAF upstream integration used by Fintonic, BBVA, and TTPS; handled OMA, WARF, capacity planning, and night deployments aligned with CBS windows.",
      "Observability ownership includes Grafana and Prometheus metrics, Kafka monitoring, and incident resolution.",
      "On-call rotations since 2023 (24x7, 2 weeks), often in main backup role with incident handling through Teams.",
      "Tech leadership in 2026: supported 2 junior engineers, 1 mid engineer, and 1 PO; drove vulnerability management via Checkmarx, dependency upgrades (Spring Boot / Merak), and reliability for around 10 microservices.",
      "Real incident on April 1, 2026: buffered exception impacted transaction listing; system recovered in about one hour with coordinated team response."
    ]
  }
];
