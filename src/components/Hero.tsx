import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, ChevronDown, Download, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import profilePortrait from "../assets/profile-portrait.png";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const primaryRole = "Software Engineer | ";
  const secondaryRole = "Business Analyst";
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
      label: "Projects Delivered",
      className: "border-lime-200/80 bg-gradient-to-br from-white via-lime-50 to-emerald-100",
      numberClass: "text-emerald-700",
    },
    {
      number: "1+",
      label: "Years Experience",
      className: "border-rose-200/80 bg-gradient-to-br from-white via-rose-50 to-pink-100",
      numberClass: "text-rose-700",
    },
    {
      number: "84.17%",
      label: "ML Accuracy",
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
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = window.innerWidth < 768 ? 72 : 88;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-12 pt-20 text-slate-950 sm:px-6 sm:pb-16 md:pt-28 lg:px-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#eaf6fb_44%,#dbeafe_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_16%_20%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(ellipse_at_84%_18%,rgba(250,204,21,0.18),transparent_28%),radial-gradient(ellipse_at_65%_92%,rgba(251,113,133,0.13),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.055)_1px,transparent_1px),linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:96px_96px] opacity-45 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      <div className="absolute left-1/2 top-0 hidden h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-slate-900/10 opacity-50 md:block" />
      <div className="absolute left-1/2 top-20 hidden h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-primary/25 opacity-60 md:block" />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-white/80 via-white/35 to-transparent" />
      <div className="absolute left-4 top-20 h-28 w-28 rounded-full bg-cyan-300/30 blur-3xl lg:hidden" />
      <div className="absolute bottom-28 right-0 h-36 w-36 rounded-full bg-rose-300/25 blur-3xl lg:hidden" />
      <div className="absolute left-0 right-0 top-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-custom relative z-10 grid items-center gap-7 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 max-w-3xl rounded-[1.75rem] border border-white/70 bg-white/55 p-4 text-center shadow-2xl shadow-slate-900/10 backdrop-blur-2xl sm:p-5 lg:order-1 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:text-left lg:shadow-none lg:backdrop-blur-0"
        >
          <div className="inline-flex flex-col items-center lg:items-start">
            <motion.div
              variants={itemVariants}
              className="mb-5 flex w-full items-center justify-center gap-4 lg:hidden"
            >
              <div className="relative flex h-36 w-36 flex-shrink-0 items-center justify-center rounded-full border border-slate-900/10 bg-white/80 p-1.5 shadow-xl shadow-slate-900/15">
                <div className="absolute -inset-1.5 rounded-full border border-cyan-300/35" />
                <div className="absolute -right-1 bottom-4 h-4 w-4 rounded-full border-2 border-white bg-lime-400 shadow-sm" />
                <div className="h-full w-full overflow-hidden rounded-full border border-white bg-slate-200">
                  <img
                    src={profilePortrait}
                    alt="Saneda Harsha Vardhan"
                    className="h-full w-full object-cover object-[50%_24%]"
                  />
                </div>
              </div>

              <div className="min-w-0 text-left">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Portfolio
                </p>
                <h1 className="font-display text-[1.85rem] font-extrabold uppercase leading-[0.95] text-slate-950">
                  HARSHA
                  <span className="block">VARDHAN</span>
                </h1>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="relative mb-4 hidden max-w-[12ch] whitespace-normal break-words font-display text-[clamp(2.05rem,12.5vw,4.35rem)] font-extrabold uppercase leading-[0.95] text-slate-950 sm:max-w-none md:mb-5 md:whitespace-nowrap md:text-[clamp(2.35rem,7vw,4.35rem)] lg:inline-block"
            >
              HARSHA VARDHAN
              <span className="absolute -bottom-2 left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/25 sm:w-28 lg:left-1 lg:translate-x-0" />
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-5 min-h-0 text-center md:mb-7 md:min-h-14 lg:w-full lg:text-center">
              <div className="flex flex-col items-center gap-1.5 text-lg font-bold leading-snug text-slate-800 sm:hidden">
                <span>Software Engineer</span>
                <span className="text-cyan-800">Business Analyst</span>
              </div>
              <div className="hidden whitespace-nowrap text-lg font-bold leading-snug text-slate-800 sm:inline-block sm:text-xl md:text-2xl">
                <span>
                  {primaryDisplayText}
                  {index < primaryRole.length && (
                    <span className="animate-pulse text-slate-700">|</span>
                  )}
                </span>
                {(secondaryDisplayText || index >= primaryRole.length) && (
                  <span>
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
            className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-700 sm:text-base sm:tracking-[0.25em] md:mb-4"
          >
            B.Tech in Data Science
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto mb-5 max-w-2xl text-[15px] leading-relaxed text-slate-800 sm:text-base md:mb-9 md:text-xl lg:mx-0"
          >
            Software Engineer and Business Analyst with 1+ year of experience
            in product-based development, business analysis, and product
            delivery. Experienced in frontend development, backend API
            integrations, AI-assisted development using GitHub Copilot, manual
            testing, requirement analysis, and cross-functional collaboration to
            deliver scalable, data-driven solutions.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white/65 px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-sm shadow-slate-900/5 backdrop-blur-xl sm:text-base md:mb-9 lg:bg-transparent lg:px-0 lg:shadow-none"
          >
            <BriefcaseBusiness size={16} className="text-cyan-700 lg:hidden" />
            Experience: Synvide Business Solutions
          </motion.p>

          <motion.div variants={itemVariants} className="mb-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4 md:mb-9 lg:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection("#projects")}
              className="col-span-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-900 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-950/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-1 sm:px-6 sm:text-base"
            >
              View Projects
              <ArrowUpRight size={18} />
            </button>
            <a
              href="/resume-harshavardhan.pdf"
              download
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-amber-300/80 bg-white px-5 py-3 text-sm font-bold text-amber-700 shadow-lg shadow-amber-950/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-amber-50 hover:shadow-xl sm:px-6 sm:text-base"
            >
              <Download size={18} />
              Resume
            </a>
            <a
              href="mailto:s.harsha1479@gmail.com"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:px-6 sm:text-base"
            >
              <Mail size={18} />
              Email
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto grid max-w-2xl grid-cols-2 gap-2.5 sm:gap-3 lg:mx-0">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-lg border p-3 text-left shadow-lg shadow-slate-900/8 backdrop-blur-xl sm:p-4 ${stat.className}`}
              >
                <div className="absolute right-3 top-3 h-8 w-8 rounded-full bg-white/55 sm:h-10 sm:w-10" />
                <p className={`relative font-display text-xl font-bold sm:text-2xl ${stat.numberClass}`}>
                  {stat.number}
                </p>
                <p className="relative mt-1 text-xs font-medium leading-snug text-slate-700 sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-2.5 sm:mt-6 sm:gap-3 lg:mx-0 lg:justify-start">
            <a href="https://github.com/sharsha1479-cloud" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl">
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
          className="order-1 relative mx-auto hidden w-full max-w-[32rem] flex-col items-center lg:order-2 lg:-mt-16 lg:ml-auto lg:flex"
        >
          <div className="relative flex aspect-square w-full max-w-[15.75rem] items-center justify-center rounded-full border border-slate-900/10 bg-white/80 p-2.5 shadow-2xl shadow-slate-900/20 backdrop-blur-xl sm:max-w-[23rem] sm:p-3 md:max-w-[27rem]">
            <div className="absolute -inset-3 rounded-full border border-primary/20 lg:-inset-4" />
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/20 via-white/40 to-secondary/20 blur-2xl lg:-inset-8" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white bg-slate-200">
            <img
              src={profilePortrait}
              alt="Saneda Harsha Vardhan"
                className="h-full w-full object-cover object-[50%_24%]"
            />
            </div>
          </div>

          <div className="relative mt-6 hidden w-full rounded-lg border border-cyan-100/80 bg-gradient-to-br from-white via-slate-50 to-cyan-50/80 p-4 text-center shadow-xl shadow-cyan-950/10 backdrop-blur-2xl sm:mt-8 sm:p-5 lg:block">
            <p className="font-display text-xl font-bold text-slate-950 sm:text-2xl">Software Engineer | Business Analyst</p>
            <p className="mt-1 text-sm font-medium text-slate-600">React, TypeScript, SQL, Power BI</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs sm:mt-5 sm:grid-cols-4 sm:gap-3 sm:text-sm">
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
