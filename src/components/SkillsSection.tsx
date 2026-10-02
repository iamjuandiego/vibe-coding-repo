import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function SkillsSection(): JSX.Element {
  return (
    <section className="section-anchor mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Skills</h2>
      <div className="mt-8 space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.name} className="glass rounded-xl p-4">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="min-w-0 break-words text-sm text-white/90">{skill.name}</span>
              <span className="shrink-0 text-xs text-white/50">{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-2 rounded-full bg-accent"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
