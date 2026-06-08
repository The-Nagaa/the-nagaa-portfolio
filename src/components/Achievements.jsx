import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  const [counts, setCounts] = useState({
    Projects: 0,
    Certifications: 0,
    Hours: 0,
    Internships: 0
  });
  const controls = useAnimation();

  useEffect(() => {
    const targetValues = {
      Projects: achievements[0].value,
      Certifications: achievements[1].value,
      Hours: achievements[2].value,
      Internships: achievements[3].value
    };

    controls.start({ opacity: 1, y: 0 });
    const interval = setInterval(() => {
      setCounts((previous) => {
        const next = { ...previous };
        Object.keys(previous).forEach((key) => {
          const currentValue = previous[key];
          const target = targetValues[key];
          if (currentValue < target) {
            next[key] = Math.min(target, currentValue + Math.ceil(target / 20));
          }
        });
        return next;
      });
    }, 80);

    const timer = setTimeout(() => clearInterval(interval), 1800);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [controls]);

  return (
    <section className="relative px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="05"
          title="Achievements"
          subtitle="Impact metrics and progress counters that demonstrate real momentum."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          className="grid gap-6 md:grid-cols-4"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="glass-card rounded-[2rem] border border-white/10 bg-black/40 p-8 text-center shadow-glow"
            >
              <p className="text-5xl font-semibold text-white">
                {counts[item.metric] ?? item.value}{item.suffix}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
