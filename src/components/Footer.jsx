import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="border-t border-white/10 px-6 py-10 text-slate-400 sm:px-10 lg:px-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <p className="text-sm text-slate-400">© 2026 POLURI VENKATA NAGA ANJANEYULU. Built for modern AI and analytics teams.</p>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
