import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { contactLinks } from '../data/portfolioData';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Your message has been prepared. Reach out on LinkedIn or GitHub for direct contact.');
  };

  return (
    <section id="contact" className="relative px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          number="06"
          title="Contact"
          subtitle="Ready to collaborate on AI, data, and modern application projects. Let's connect."
        />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="glass-card rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-glow"
          >
            <p className="text-lg leading-8 text-slate-300">
              Whether you're hiring for a startup or building a data-driven product, I'm always open to new challenges and collaborations.
            </p>
            <div className="mt-8 space-y-4">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-white transition hover:border-primary hover:bg-primary/10"
                >
                  <p className="font-semibold text-white">{item.label}</p>
                  <p className="mt-1 text-slate-400">{item.value}</p>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="glass-card rounded-[2rem] border border-white/10 bg-black/40 p-8 shadow-glow"
          >
            <div className="grid gap-4">
              <label className="space-y-2 text-sm text-slate-300">
                <span>Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="pvnagapoluri@gmail.com"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-300">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell me about your next data project"
                  className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#00b1e3]"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-slate-400">{status}</p>}
              <p className="mt-3 text-sm text-slate-400">
                Prefer direct email? <a href="mailto:pvnagapoluri@gmail.com" className="text-primary hover:text-white">pvnagapoluri@gmail.com</a>
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
