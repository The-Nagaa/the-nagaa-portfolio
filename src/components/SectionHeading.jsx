import { motion } from 'framer-motion';

const SectionHeading = ({ number, title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className="mb-10 max-w-3xl"
  >
    <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-secondary/80">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-secondary/30 text-secondary">
        {number}
      </span>
      <span className="font-semibold">Section</span>
    </div>
    <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">{subtitle}</p>
  </motion.div>
);

export default SectionHeading;
