import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiPython, SiVite, SiDjango, SiPostgresql } from "react-icons/si";
import mbrFashionHubCover from "../assets/mbr-fashion-hub-cover.png";

const Projects = () => {
  const websiteCover = (url: string) =>
    `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

  const projects = [
    {
      title: "NearHub APK",
      description:
        "Hyperlocal marketplace mobile application connecting nearby buyers and sellers with real-time product discovery.",
      image: "bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20",
      features: [
        "Nearby discovery",
        "Product discovery",
        "Buyer and seller flows",
        "User engagement",
      ],
      tech: [
        { name: "React", icon: SiReact },
        { name: "Node.js", icon: SiNodedotjs },
      ],
      liveLink: "https://play.google.com/store/apps/details?id=com.synvide.nearhub",
      badge: "Mobile App",
    },
    {
      title: "MBR Fashion Hub",
      description:
        "Full-stack e-commerce fashion website with payment integration, admin dashboard, and order management system.",
      image: "bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20",
      features: [
        "User authentication",
        "Product management",
        "Razorpay integration",
        "Hostinger deployment",
        "Cart & Orders",
      ],
      tech: [
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MySQL", icon: SiMysql },
      ],
      liveLink: "https://mbrfashionhub.com",
      coverUrl: mbrFashionHubCover,
    },
    {
      title: "OPD365",
      description:
        "Healthcare workflow platform with scalable frontend modules for appointment scheduling and patient management.",
      image: "bg-gradient-to-br from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      features: [
        "Appointment booking",
        "Healthcare workflows",
        "Reusable components",
        "Clean architecture",
      ],
      tech: [
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
        { name: "PostgreSQL", icon: SiPostgresql },
      ],
      liveLink: "https://opd365.com",
      coverUrl: websiteCover("https://opd365.com"),
    },
    {
      title: "Oshoppe",
      description:
        "Dynamic e-commerce platform developed during internship with complete product catalog and order management.",
      image: "bg-gradient-to-br from-green-500/20 via-cyan-500/20 to-blue-500/20",
      features: [
        "Product listings",
        "Reusable components",
        "Type-safe product pages",
        "Responsive UI",
      ],
      tech: [
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "Vite", icon: SiVite },
        { name: "Django", icon: SiDjango },
      ],
      liveLink: "https://oshoppe.in",
      coverUrl: websiteCover("https://oshoppe.in"),
    },
    {
      title: "Blood Donor Prediction System",
      description:
        "Machine learning project predicting blood donor return behavior with 84.17% accuracy using behavioral data.",
      image: "bg-gradient-to-br from-red-500/20 via-rose-500/20 to-pink-500/20",
      features: [
        "84.17% accuracy",
        "ML models",
        "Data preprocessing",
        "Power BI dashboards",
        "SQL extraction",
      ],
      tech: [
        { name: "Python", icon: SiPython },
      ],
      liveLink: "#",
      badge: "ML Project",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-accent">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Selected Projects
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg glass-card p-0 flex flex-col h-full"
            >
              {/* Project Image Background */}
              <div
                className={`${project.image} h-56 relative overflow-hidden bg-slate-900`}
              >
                {project.coverUrl ? (
                  <img
                    src={project.coverUrl}
                    alt={`${project.title} website cover`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  />
                )}
                
                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink backdrop-blur-sm">
                      {project.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title & Description */}
                <h3 className="mb-2 font-display text-2xl font-bold text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, fidx) => (
                      <span key={fidx} className="skill-badge text-xs">
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="skill-badge text-xs text-slate-400">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, tidx) => {
                      const TechIcon = tech.icon;
                      return (
                        <motion.div
                          key={tidx}
                          whileHover={{ scale: 1.2 }}
                          title={tech.name}
                        >
                          <TechIcon size={24} className="text-slate-400 transition-colors hover:text-primary" />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveLink === "#" ? (
                    <span className="btn-secondary flex-1 cursor-default text-sm opacity-70">
                      Case Study
                    </span>
                  ) : (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 text-sm"
                    >
                      <ExternalLink size={16} />
                      Visit
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
