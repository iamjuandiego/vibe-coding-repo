export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  title: string;
  details: string[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface Project {
  slug: string;
  name: string;
  shortSummary: string;
  technicalDescription: string;
  architecture: string[];
  stack: string[];
  outcomes: string[];
  teamNote: string;
  javaSnippet: string;
}
