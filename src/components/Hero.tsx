import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import profilePortrait from "../assets/profile-portrait.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const primaryRole = "Software Engineer | Full-Stack Developer";
  const secondaryRole = "Data Analyst";
  const fullText = `${primaryRole}${secondaryRole}`;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [index]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const heroStats = [
    {
      number: "3+",
      label: "Product Applications",
      className: "border-cyan-200/80 bg-gradient-to-br from-white via-cyan-50 to-sky-100",
      numberClass: "text-cyan-700",
    },
    {
      number: "5+",
      label: "Projects Built",
      className: "border-lime-200/80 bg-gradient-to-br from-white via-lime-50 to-emerald-100",
      numberClass: "text-emerald-700",
    },
    {
      number: "84.17%",
      label: "ML Accuracy",
      className: "border-rose-200/80 bg-gradient-to-br from-white via-rose-50 to-pink-100",
      numberClass: "text-rose-700",
    },
    {
      number: "B.Tech",
      label: "Data Science",
      className: "border-amber-200/80 bg-gradient-to-br from-white via-amber-50 to-yellow-100",
      numberClass: "text-amber-700",
    },
  ];

  const profileSkills = [
    {
      label: "Frontend",
      className: "border-cyan-200 bg-cyan-50 text-cyan-800",
    },
    {
      label: "Backend",
      className: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
      label: "Database",
      className: "border-violet-200 bg-violet-50 text-violet-800",
    },
    {
      label: "Deployment",
      className: "border-amber-200 bg-amber-50 text-amber-800",
    },
  ];

  const primaryDisplayText = displayText.slice(0, primaryRole.length);
  const secondaryDisplayText = displayText.slice(primaryRole.length);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 text-slate-950 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#eaf6fb_44%,#dbeafe_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_16%_20%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(ellipse_at_84%_18%,rgba(250,204,21,0.18),transparent_28%),radial-gradient(ellipse_at_65%_92%,rgba(251,113,133,0.13),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:96px_96px] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="absolute left-1/2 top-0 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-slate-900/10 opacity-50" />
      <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-primary/25 opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white/80 via-white/35 to-transparent" />
      <div className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-custom relative z-10 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="inline-flex flex-col items-center">
            <motion.h1
              variants={itemVariants}
              className="relative mb-5 inline-block whitespace-nowrap font-display text-[clamp(2.35rem,7vw,4.35rem)] font-extrabold uppercase leading-[1.02] text-slate-950"
            >
              S.HARSHA VARDHAN
              <span className="absolute -bottom-2 left-1 h-1.5 w-28 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/25" />
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-7 min-h-12 text-center md:min-h-14">
              <div className="inline-block text-xl font-bold text-slate-800 md:text-2xl">
                <span>
                  {primaryDisplayText}
                  {index < primaryRole.length && (
                    <span className="animate-pulse text-slate-700">|</span>
                  )}
                </span>
                {(secondaryDisplayText || index >= primaryRole.length) && (
                  <span className="mt-1 block text-center">
                    {secondaryDisplayText}
                    {index >= primaryRole.length && index < fullText.length && (
                      <span className="animate-pulse text-slate-700">|</span>
                    )}
                  </span>
                )}
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={itemVariants}
            className="mb-4 text-base font-bold uppercase tracking-[0.25em] text-slate-700"
          >
            B.Tech in Data Science
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-9 max-w-2xl text-lg leading-relaxed text-slate-800 md:text-xl"
          >
            Building scalable web applications, data-driven solutions, and
            modern digital products using React, TypeScript, Node.js,
            Express.js, MySQL, Python, and AI-assisted development practices.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-9 text-base font-semibold text-slate-800"
          >
            Experience: Synvide Business Solutions
          </motion.p>

          <motion.div variants={itemVariants} className="mb-9 flex flex-wrap gap-4">
            <button
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              View Projects
              <ArrowUpRight size={18} />
            </button>
            <a href="/resume-harshavardhan.pdf" download className="btn-secondary">
              <Download size={18} />
              Resume
            </a>
            <a href="mailto:s.harsha1479@gmail.com" className="btn-secondary">
              <Mail size={18} />
              Email
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-lg border p-4 shadow-lg shadow-slate-900/8 backdrop-blur-xl ${stat.className}`}
              >
                <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-white/55" />
                <p className={`relative font-display text-2xl font-bold ${stat.numberClass}`}>
                  {stat.number}
                </p>
                <p className="relative mt-1 text-sm font-medium text-slate-700">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-3">
            <a href="https://github.com/HarshavardhanSaneda" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
              <FaGithub className="text-slate-800" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/saneda-harsha-vardhan" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
              <FaLinkedin className="text-primary" />
              LinkedIn
            </a>
            <a href="mailto:s.harsha1479@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
              <Mail size={16} className="text-primary" />
              Email
            </a>
            <a href="/resume-harshavardhan.pdf" download className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
              <Download size={16} className="text-accent" />
              Resume
            </a>
            <a href="tel:+918186981479" className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
              <Phone size={16} className="text-accent" />
              8186981479
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
              <MapPin size={16} className="text-secondary" />
              Visakhapatnam, AP
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto flex w-full max-w-[32rem] flex-col items-center lg:-mt-16 lg:ml-auto"
        >
          <div className="relative flex aspect-square w-full max-w-[23rem] items-center justify-center rounded-full border border-slate-900/10 bg-white/70 p-3 shadow-2xl shadow-slate-900/15 backdrop-blur-xl sm:max-w-[27rem]">
            <div className="absolute -inset-4 rounded-full border border-primary/20" />
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-primary/20 via-white/40 to-secondary/20 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white bg-slate-200">
            <img
              src={profilePortrait}
              alt="Saneda Harsha Vardhan"
                className="h-full w-full object-cover object-[50%_26%]"
            />
            </div>
          </div>

          <div className="relative mt-8 w-full rounded-lg border border-cyan-100/80 bg-gradient-to-br from-white via-slate-50 to-cyan-50/80 p-5 text-center shadow-xl shadow-cyan-950/10 backdrop-blur-2xl">
            <p className="font-display text-2xl font-bold text-slate-950">Full-Stack Developer</p>
            <p className="mt-1 text-sm font-medium text-slate-600">React, TypeScript, Node.js, SQL</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
              {profileSkills.map((item) => (
                <span
                  key={item.label}
                  className={`rounded-md border px-3 py-2 font-semibold shadow-sm shadow-slate-900/5 ${item.className}`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <button
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="glass-effect p-2 text-primary transition-colors hover:text-accent"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={28} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
