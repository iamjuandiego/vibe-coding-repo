const techTicker = ["Java", "Spring Boot", "Kafka", "Cassandra", "Kubernetes", "OpenShift", "Azure DevOps", "ServiceNow", "Prometheus", "Grafana", "Checkmarx", "Dependency Management", "Monitoring", "Incident Handling", "On-call Team"];

export default function HeroSection(): JSX.Element {
  return (
    <section className="section-anchor relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36" id="top">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-[0.65rem] uppercase tracking-[0.14em] text-accent sm:text-xs sm:tracking-[0.22em]">
          +5 years in software engineering
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
          iamjuandiego
          <span className="mt-3 block text-xl font-medium text-white/70 sm:mt-4 sm:text-2xl md:text-4xl">
            Senior Backend Engineer 
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 sm:mt-8 sm:text-lg">
          I build and maintain backend systems for real banking workloads. My work focuses on event-driven
          architecture, service reliability, and practical observability under production constraints.
        </p>
        <div className="glass mt-10 overflow-hidden rounded-2xl p-4">
          <div className="tech-ticker-track flex w-max gap-3">
            {[...techTicker, ...techTicker].map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="whitespace-nowrap rounded-full border border-white/15 bg-black/30 px-4 py-2 text-sm text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
