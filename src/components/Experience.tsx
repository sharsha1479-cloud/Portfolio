import { motion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Synvide Business Solutions",
      period: "Nov 2025 - Present",
      description:
        "Worked as a Full-Stack Developer on product-based applications, contributing to frontend development, backend integrations, database operations, and deployment workflows.",
      responsibilities: [
        "Developed scalable UI features using React.js with TypeScript",
        "Styled responsive interfaces using Tailwind CSS",
        "Collaborated with the team using GitHub for version control",
        "Built reusable, type-safe components and product pages",
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
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-accent">
            Work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
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

          <div className="space-y-10">
            {experiences.map((exp) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={exp.title}
                  variants={cardVariants}
                  className="grid items-start gap-8 md:grid-cols-[5rem_1fr]"
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
                    <div className="mb-4 flex items-start gap-4">
                      <div className="md:hidden">
                        <Icon size={32} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-primary">
                          {exp.title}
                        </h3>
                        <p className="font-semibold text-slate-300">{exp.company}</p>
                        <p className="text-sm font-bold text-accent">{exp.period}</p>
                      </div>
                    </div>

                    <p className="mb-5 text-slate-300">{exp.description}</p>

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
