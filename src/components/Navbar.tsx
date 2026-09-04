import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, UserRound, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      setIsOpen(false);
      const offset = window.innerWidth < 768 ? 72 : 88;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      window.requestAnimationFrame(() => {
        window.scrollTo({ top, behavior: "smooth" });
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-xl"
    >
      <div className="container-custom px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
            onClick={() => scrollToSection("#hero")}
            aria-label="Go to top"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/25 bg-slate-950 shadow-lg shadow-cyan-950/25 md:h-11 md:w-11">
              <UserRound size={21} className="text-white md:size-[22px]" />
            </div>
            <span className="font-display text-base font-bold text-slate-950 md:text-lg">
              <span className="md:hidden">PORTFOLIO</span>
              <span className="hidden md:inline">Portfolio</span>
            </span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ color: "#67e8f9" }}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-cyan-700"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Resume Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden md:block"
          >
            <a
              href="/HarshaVardhan_Resume.pdf"
              className="btn-secondary px-4 py-2 text-sm"
              download
            >
              Resume
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm shadow-slate-900/5 transition-colors hover:text-cyan-700 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden md:hidden"
        >
          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-200 pt-3">
            <button
              type="button"
              onClick={() => scrollToSection("#projects")}
              className="col-span-2 rounded-lg bg-cyan-500 px-3 py-2.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/20 hover:bg-cyan-400"
            >
              View Featured Projects
            </button>
            {navItems.map((item) => (
              <button
                type="button"
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-left text-sm font-semibold text-slate-700 shadow-sm shadow-slate-900/5 transition-colors hover:border-cyan-400 hover:text-cyan-700"
              >
                {item.name}
              </button>
            ))}
            <a href="/HarshaVardhan_Resume.pdf" download className="btn-secondary col-span-2 w-full text-center text-sm">
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
