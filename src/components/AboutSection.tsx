import { motion } from "framer-motion";

export default function AboutSection(): JSX.Element {
  return (
    <motion.section
      id="about"
      className="section-anchor mx-auto max-w-6xl px-6 py-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass rounded-3xl p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">About</h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-white/75">
          <p>
            I started with frontend migration work in banking projects and moved progressively into backend
            engineering where I felt stronger impact around system behavior and reliability.
          </p>
          <p>
            Since then, I have worked on transaction systems, message flows, and operational support in real
            production environments with strict deployment windows and shared team ownership.
          </p>
          <p>
            My approach is simple: understand constraints, write maintainable code, monitor systems carefully,
            and keep learning with the team.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
