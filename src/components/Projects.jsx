import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { projects } from '../data/portfolioData';

const Projects = () => (
  <section id="projects" className="relative px-6 py-20 sm:px-10 lg:px-16">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        number="04"
        title="Projects"
        subtitle="Glassmorphism showcases of AI, engineering, dashboard, and software solutions."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -8 }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
            className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-glow"
          >
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative z-10 space-y-4">
              <span className="inline-flex rounded-full bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-secondary">
                {project.badge}
              </span>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.72rem] uppercase tracking-[0.14em] text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-primary hover:bg-primary/10 hover:text-primary"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
