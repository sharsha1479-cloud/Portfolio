import { motion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Synvide Business Solutions",
      period: "May 2025 - Present",
      description:
        "Worked on product-based web and mobile applications, contributing to frontend development, backend integrations, testing, deployment workflows, and product coordination. Progressed from frontend-focused development responsibilities to supporting product planning, requirement discussions, feature prioritization, stakeholder communication, and development coordination.",
      responsibilities: [
        "Developed scalable UI features using React.js with TypeScript",
        "Styled responsive interfaces using Tailwind CSS",
        "Built reusable, type-safe components and integrated backend APIs",
        "Performed testing, bug validation, and quality assurance activities",
        "Collaborated with cross-functional teams using GitHub and AI-assisted development tools",
        "Participated in requirement gathering, feature discussions, and release planning",
        "Coordinated development activities, tracked deliverables, and aligned product requirements with business objectives",
        "Contributed to product management activities including feature planning, documentation review, and stakeholder communication",
      ],
      projects: ["Oshoppe", "OPD365", "NearHub"],
      icon: Briefcase,
    },
    {
      title: "Data Science Intern",
      company: "Datavalley India Pvt Ltd",
      period: "Mar 2024 - Jul 2024",
      description:
        "Performed data preprocessing, feature selection, model building, and dashboard creation for data-driven insights.",
      responsibilities: [
        "Used Python for preprocessing and model building",
        "Worked with NumPy, Pandas, Matplotlib, and Scikit-learn",
        "Built Power BI dashboards for insights and reporting",
        "Supported data visualization and analysis workflows",
      ],
      projects: [],
      icon: Award,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm sm:tracking-[0.35em]">
            Work
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Experience
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 left-6 top-0 hidden w-1 bg-gradient-to-b from-primary via-accent to-secondary md:block" />

          <div className="space-y-6 md:space-y-10">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  variants={cardVariants}
                  className="grid items-start gap-5 md:grid-cols-[5rem_1fr] md:gap-8"
                >
                  <div className="hidden justify-start md:flex">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="glass-effect relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary"
                    >
                      <Icon size={28} className="text-primary" />
                    </motion.div>
                  </div>

                  <motion.article whileHover={{ scale: 1.01 }} className="glass-card">
                    <div className="mb-4 flex items-start gap-3 sm:gap-4">
                      <div className="md:hidden">
                        <Icon size={28} className="text-primary sm:size-8" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold leading-snug text-primary sm:text-2xl">
                          {exp.title}
                        </h3>
                        <p className="font-semibold text-slate-300">{exp.company}</p>
                        <p className="text-sm font-bold text-accent">{exp.period}</p>
                      </div>
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-slate-300 sm:text-base">{exp.description}</p>

                    <div className="mb-5">
                      <h4 className="mb-2 text-sm font-semibold text-gold">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp) => (
                          <li
                            key={resp}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1 text-accent">-</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.projects.length > 0 && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-gold">
                          Projects
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.projects.map((project) => (
                            <span key={project} className="skill-badge text-xs">
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.article>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
