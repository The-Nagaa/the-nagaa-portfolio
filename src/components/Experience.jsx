import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experienceItems } from '../data/portfolioData';

const Experience = () => (
  <section id="experience" className="relative px-6 py-20 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        number="03"
        title="Experience"
        subtitle="Hands-on internships and project work aligned to data analytics, AI, and engineering delivery."
      />
      <div className="grid gap-6">
        {experienceItems.map((item) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass-card rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-glow"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-secondary/90">Internship</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.company}</p>
              </div>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                {item.period}
              </span>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-300">
                  {bullet}
                </div>
              ))}
            </div>
            {item.techStack && (
              <div className="mt-6 flex flex-wrap gap-3">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
