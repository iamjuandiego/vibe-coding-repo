import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CodeSnippet from "../components/CodeSnippet";
import Footer from "../components/Footer";
import KafkaFlowDiagram from "../components/KafkaFlowDiagram";
import Navbar from "../components/Navbar";
import projectsJson from "../data/projects.json";
import type { Project } from "../types";

const projects = projectsJson as Project[];

export default function ProjectDetailPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-obsidian px-4 pt-28 text-white sm:px-6">
        <Navbar showBackHome />
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold sm:text-4xl">Project not found</h1>
          <p className="mt-4 text-white/70">The requested project does not exist.</p>
          <Link to="/" className="mt-6 inline-block text-accent">
            Back to Home
          </Link>
        </div>
        <Footer withHomeLink />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-obsidian px-4 pt-28 text-white sm:px-6">
      <Navbar showBackHome />
      <article className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-wide text-accent">Project Detail</p>
        <h1 className="mt-3 break-words text-3xl font-semibold sm:text-4xl md:text-5xl">{project.name}</h1>
        <p className="mt-6 text-base text-white/75 sm:text-lg">{project.technicalDescription}</p>

        <section className="mt-10">
          <h2 className="text-2xl">Architecture</h2>
          <ul className="mt-4 space-y-2 text-white/75">
            {project.architecture.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
          <KafkaFlowDiagram />
        </section>

        <section className="mt-10">
          <h2 className="text-2xl">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl">Outcomes</h2>
          <ul className="mt-4 space-y-2 text-white/75">
            {project.outcomes.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl">Team Note</h2>
          <p className="mt-4 text-white/75">{project.teamNote}</p>
        </section>

        <CodeSnippet code={project.javaSnippet} />

        <Link to="/" className="mt-10 inline-block text-accent">
          Back to Home
        </Link>
      </article>
      <Footer withHomeLink />
    </main>
  );
}
