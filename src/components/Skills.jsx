import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/portfolioData';

const Skills = () => (
  <section id="skills" className="relative px-6 py-20 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        number="02"
        title="Skills"
        subtitle="Core competencies across analytics, engineering, programming, and AI technologies."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="glass-card rounded-[2rem] border border-white/10 bg-black/40 p-7 shadow-glow"
          >
            <h3 className="text-xl font-semibold text-white">{group.category}</h3>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              {group.items.map((skill) => (
                <div key={skill} className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
