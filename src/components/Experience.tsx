import { motion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Synvide Business Solutions",
      period: "June 2025 - Present",
      description:
        "Product-based software engineering and business analysis role across frontend development, backend API integrations, product planning, manual testing, business data analysis, and product delivery.",
      responsibilities: [
        "Started as a Frontend Developer, developing scalable web applications using React.js, TypeScript, and Tailwind CSS.",
        "Built reusable UI components, integrated backend APIs, and managed frontend-backend data flow.",
        "Utilized GitHub Copilot and AI-assisted development tools to improve development efficiency and code quality.",
        "Performed manual testing, bug validation, and quality assurance to ensure application reliability.",
        "Transitioned into a Business Analyst role within the Product Management team, gathering and analyzing business requirements and collaborating with cross-functional stakeholders.",
        "Leveraged SQL, Power BI, and Microsoft Excel to analyze business data, create reports and dashboards, generate actionable insights, and support product decision-making.",
        "Contributed to product planning, requirement documentation, release coordination, and aligning product features with business objectives.",
      ],
      products: [
        {
          name: "Oshoppe",
          website: "https://oshoppe.in",
          description:
            "Developed reusable React components, implemented e-commerce frontend features, and integrated REST APIs to deliver seamless user experiences.",
          highlights: [],
        },
        {
          name: "OPD365",
          website: "https://opd365.com",
          description:
            "Developed healthcare workflow modules, scalable frontend features, and integrated backend APIs to streamline clinical workflows.",
          highlights: [],
        },
        {
          name: "NearHub",
          website: "https://nearhub.in",
          androidApp:
            "https://play.google.com/store/apps/details?id=com.synvide.nearhub",
          description:
            "Developed and enhanced a hyperlocal marketplace platform connecting nearby buyers and sellers.",
          highlights: [
            "UI/UX implementation",
            "Backend API integrations",
            "Manual testing",
            "Product planning",
            "Feature coordination",
          ],
        },
      ],
      icon: Briefcase,
    },
    {
      title: "Data Science Intern",
      company: "Datavalley India Pvt Ltd",
      period: "Mar 2024 - Jul 2024",
      description:
        "Worked on data science and analytics workflows including data preprocessing, exploratory analysis, feature selection, machine learning model building, visualization, and dashboard creation.",
      responsibilities: [
        "Used Python, Pandas, NumPy, Matplotlib, and Scikit-learn for preprocessing, analysis, and model development.",
        "Performed feature selection and supported machine learning model evaluation.",
        "Created Power BI dashboards and reports for data-driven insights.",
        "Supported data visualization, documentation, and analytics workflows.",
      ],
      products: [],
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

                    {exp.products.length > 0 && (
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-gold">
                          Products Worked On
                        </h4>
                        <div className="space-y-4">
                          {exp.products.map((product) => (
                            <div key={product.name}>
                              <p className="text-sm font-semibold text-slate-300">
                                {product.name}
                              </p>
                              <p className="text-sm text-slate-400">
                                Website: {product.website}
                              </p>
                              {product.androidApp && (
                                <p className="text-sm text-slate-400">
                                  Android App: {product.androidApp}
                                </p>
                              )}
                              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                                {product.description}
                              </p>
                              {product.highlights.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {product.highlights.map((highlight) => (
                                    <span key={highlight} className="skill-badge text-xs">
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
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
