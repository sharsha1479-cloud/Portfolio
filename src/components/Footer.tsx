import { motion } from "framer-motion";
import { ChevronUp, Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaLinkedin, link: "https://linkedin.com/in/saneda-harsha-vardhan", label: "LinkedIn" },
    { icon: Mail, link: "mailto:s.harsha1479@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-ink/90 backdrop-blur-xl">
      <div className="container-custom px-4 py-10 md:py-12">
        <div className="mb-8 grid gap-7 md:grid-cols-3 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent via-primary to-secondary">
                <span className="font-display font-bold text-ink">S</span>
              </div>
              <span className="font-display text-lg font-bold gradient-text">SHV</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Software Engineer and Business Analyst building scalable, data-driven digital products and business solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:text-center"
          >
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400 sm:block sm:space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Education", href: "#education" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="block rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:text-accent sm:border-0 sm:bg-transparent sm:p-0">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <h4 className="mb-4 font-semibold text-white">Connect</h4>
            <div className="flex justify-start gap-4 md:justify-end">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-primary"
                    title={social.label}
                  >
                    <Icon size={24} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-xs leading-relaxed text-slate-400 sm:text-sm md:text-left"
          >
            Copyright 2026 Saneda Harsha Vardhan. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-xs leading-relaxed text-slate-400 sm:text-sm"
          >
            Built with <span className="font-semibold text-primary">React</span>,{" "}
            <span className="font-semibold text-accent">TypeScript</span>, and{" "}
            <span className="font-semibold text-gold">Tailwind CSS</span>
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="glass-effect rounded-lg p-2 text-primary transition-colors hover:text-accent"
            title="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
