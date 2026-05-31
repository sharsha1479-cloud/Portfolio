import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, UserRound, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-white/10 bg-ink/80 backdrop-blur-xl"
    >
      <div className="container-custom px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-gradient-to-br from-slate-950 via-cyan-950 to-emerald-900 shadow-lg shadow-primary/20">
              <UserRound size={22} className="text-white" />
            </div>
            <span className="font-display text-lg font-bold text-slate-100">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ color: "#a3e635" }}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-slate-300 transition-colors hover:text-accent"
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
              href="/resume-harshavardhan.pdf"
              className="btn-secondary px-4 py-2 text-sm"
              download
            >
              Resume
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary transition-colors hover:text-accent md:hidden"
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
          <div className="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-slate-300 transition-colors hover:text-accent"
              >
                {item.name}
              </button>
            ))}
            <a href="/resume-harshavardhan.pdf" download className="btn-secondary w-full text-center text-sm">
              Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
