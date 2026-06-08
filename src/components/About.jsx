import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { aboutTimeline } from '../data/portfolioData';

const About = () => (
  <section id="about" className="relative px-6 py-20 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        number="01"
        title="About Me"
        subtitle="A modern AI & data engineering student building intelligent systems with polished design and measurable business outcomes."
      />
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
      >
        <div className="glass-card rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-glow">
          <p className="text-lg leading-8 text-slate-300">
            I am a final-year B.Tech Computer Science (AI & ML) student with a passion for translating raw data into strategic decisions. My work combines data analytics, Power BI storytelling, ETL orchestration, and machine learning models to deliver business value at scale.
          </p>
          <p className="mt-5 text-lg leading-8 text-primary/80">
            Passionate about transforming raw data into meaningful insights, building scalable ETL pipelines, and creating AI-powered solutions that solve real-world business problems.
          </p>
          <div className="mt-8 space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            <p>💡 Data Analytics, Power BI, SQL, ETL, Python, Machine Learning</p>
            <p>🚀 Building future-ready dashboards, pipelines, and AI-enhanced solutions.</p>
          </div>
        </div>
        <div className="space-y-6">
          {aboutTimeline.map((item) => (
            <div key={item.title} className="glass-card rounded-[1.8rem] border border-white/10 bg-black/40 p-6 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.subtitle}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
