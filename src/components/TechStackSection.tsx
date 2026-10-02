import { motion } from "framer-motion";

const stackGroups: Array<{ title: string; items: string[] }> = [
  { title: "Core Backend", items: ["Java", "Spring Boot", "REST APIs"] },
  { title: "Data & Messaging", items: ["Kafka", "Cassandra", "Event-Driven Flows"] },
  { title: "Platform & Ops", items: ["Kubernetes", "OpenShift", "Azure DevOps", "ServiceNow"] },
  { title: "Observability", items: ["Grafana", "Prometheus", "Incident Handling"] }
];

export default function TechStackSection(): JSX.Element {
  return (
    <section className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Tech Stack</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {stackGroups.map((group, index) => (
          <motion.div
            key={group.title}
            className="glass rounded-2xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
          >
            <h3 className="text-lg text-white">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
