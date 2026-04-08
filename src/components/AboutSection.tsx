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
            I am a backend engineer based in Malaga, focused on building stable systems that teams can trust in
            production. I care about reliability, clear communication, and software that stays maintainable over
            time.
          </p>
          <p>
            My journey started in frontend migration projects and evolved naturally toward backend and distributed
            systems. In banking environments, I have worked on transaction flows, integrations, and operational
            support with demanding deployment windows.
          </p>
          <p>
            Outside work, I am a father and someone who enjoys nature. That perspective helps me stay calm under
            pressure and keep a practical, human approach to technical leadership.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
