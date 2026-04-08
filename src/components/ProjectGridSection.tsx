import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectsJson from "../data/projects.json";
import type { Project } from "../types";

const projects = projectsJson as Project[];

export default function ProjectGridSection(): JSX.Element {
  return (
    <section id="projects" className="section-anchor mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Projects</h2>
        <p className="max-w-xl text-sm text-white/60">
          Real production systems, with clear responsibilities and team-based execution.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.article
            key={project.slug}
            className="glass rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.06, duration: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{project.shortSummary}</p>
            <p className="mt-4 text-xs text-accent">{project.teamNote}</p>
            <Link
              to={`/projects/${project.slug}`}
              className="mt-5 inline-block rounded-full border border-white/20 px-4 py-2 text-xs text-white transition hover:border-accent hover:text-accent"
            >
              View Project Detail
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
