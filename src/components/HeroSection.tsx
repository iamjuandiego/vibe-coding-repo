import { motion } from "framer-motion";

const techTicker = ["Kafka", "Cassandra", "Kubernetes", "OpenShift", "Prometheus", "Grafana"];

export default function HeroSection(): JSX.Element {
  return (
    <section className="section-anchor relative overflow-hidden px-6 pb-20 pt-36" id="top">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.22em] text-accent">+5 years in software engineering</p>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          iamjuandiego
          <span className="mt-4 block text-2xl font-medium text-white/70 md:text-4xl">
            Senior Backend Engineer (Java / Spring Boot)
          </span>
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/75">
          I build and maintain backend systems for real banking workloads. My work focuses on event-driven
          architecture, service reliability, and practical observability under production constraints.
        </p>
        <div className="glass mt-10 overflow-hidden rounded-2xl p-4">
          <motion.div
            className="flex gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
          >
            {[...techTicker, ...techTicker].map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="whitespace-nowrap rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/80"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
