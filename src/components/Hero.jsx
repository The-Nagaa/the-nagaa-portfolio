import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroData } from '../data/portfolioData';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setIsCursorVisible((value) => !value);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  useEffect(() => {
    const currentRole = heroData.roles[roleIndex];
    if (subIndex <= currentRole.length) {
      const timeout = setTimeout(() => {
        setRoleText(currentRole.slice(0, subIndex));
        setSubIndex(subIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setSubIndex(0);
      setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
    }, 1600);

    return () => clearTimeout(pause);
  }, [subIndex, roleIndex]);

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 sm:px-10 lg:px-16">
      <div className="hero-background absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,212,255,0.12),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.12),transparent_25%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/80 shadow-glow backdrop-blur-xl">
              FUTURISTIC AI PORTFOLIO
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-primary/80">POLURI VENKATA NAGA ANJANEYULU</p>
              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Turning Data into Decisions, Insights into Impact
              </h1>
            </div>
            <div className="max-w-2xl space-y-5 text-slate-300">
              <p className="text-lg leading-8">
                Final-year AI & ML student specializing in Data Analytics, Data Engineering, and Business Intelligence. Passionate about transforming raw data into actionable insights through Python, SQL, Power BI, ETL pipelines, and Machine Learning.
              </p>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                {roleText}
                <span className={isCursorVisible ? 'inline-block animate-pulse text-primary' : 'inline-block opacity-0'}>|</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {heroData.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  download={action.download ? 'Resume.pdf' : undefined}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex max-w-md items-center justify-center">
            <div className="absolute left-0 top-10 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -right-10 bottom-8 h-20 w-20 rounded-full bg-secondary/20 blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="glass-card relative w-full overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-glow"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_40%)] opacity-60" />
              <div className="relative z-10 space-y-6">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.28em] text-secondary">Data Pulse</p>
                  <h3 className="text-2xl font-semibold text-white">Adaptive analytics engine</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-5 text-sm">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Stack</p>
                    <p className="mt-3 font-medium text-white">Python | SQL | Power BI</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/40 p-5 text-sm">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Focus</p>
                    <p className="mt-3 font-medium text-white">AI, ETL, Dashboards</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-[#06131f]/80 p-5 text-sm text-slate-300">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Quick Summary</p>
                  <ul className="mt-4 space-y-3">
                    <li>• Scalable data engineering pipelines</li>
                    <li>• Insight-driven BI experiences</li>
                    <li>• AI-assisted automation workflows</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
