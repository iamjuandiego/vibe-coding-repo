import { motion } from "framer-motion";
import { experienceTimeline } from "../data/experience";

export default function ExperienceTimelineSection(): JSX.Element {
  return (
    <section id="experience" className="section-anchor mx-auto max-w-6xl overflow-x-clip px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Experience Timeline</h2>
      <div className="relative mt-10 space-y-6 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-white/20 md:before:left-4">
        {experienceTimeline.map((item, idx) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            className="glass ml-8 rounded-2xl p-4 sm:p-6 md:ml-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: idx * 0.07, duration: 0.35 }}
          >
            <span className="mb-2 block text-xs uppercase tracking-wide text-accent">{item.period}</span>
            <h3 className="break-words text-xl text-white">{item.company}</h3>
            <p className="mt-1 text-sm text-white/65">{item.title}</p>
            <ul className="mt-4 space-y-2 break-words text-sm text-white/75">
              {item.details.map((detail) => (
                <li key={detail}>- {detail}</li>
              ))}
            </ul>
            {item.subsections && item.subsections.length > 0 ? (
              <div className="mt-5 space-y-4">
                {item.subsections.map((section) => (
                  <div key={section.title} className="rounded-xl border border-white/10 bg-black/20 p-3 sm:p-4">
                    <h4 className="break-words text-sm font-medium uppercase tracking-wide text-accent">
                      {section.title}
                    </h4>
                    <ul className="mt-2 space-y-2 break-words text-sm text-white/75">
                      {section.details.map((detail) => (
                        <li key={detail}>- {detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
