import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const skills = [
    "React.js, TypeScript, Tailwind CSS",
    "REST APIs, Node.js, Express.js",
    "SQL, MySQL, PostgreSQL",
    "Power BI, Microsoft Excel",
    "Git, GitHub, GitHub Copilot",
    "Manual Testing & Quality Assurance",
    "Business Requirement Analysis",
    "Product Planning & Stakeholder Collaboration",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm sm:tracking-[0.35em]">
            Profile
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid items-center gap-9 md:grid-cols-2 md:gap-12">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-base leading-relaxed text-slate-300 sm:text-lg md:mb-6">
              I am a B.Tech graduate in Data Science with over 1 year of
              professional experience as a Software Engineer and Business
              Analyst at Synvide Business Solutions, contributing to
              product-based web and mobile applications. My experience spans
              frontend development, backend API integrations, manual testing,
              business requirement analysis, and product delivery.
            </p>

            <p className="mb-7 text-base leading-relaxed text-slate-300 sm:text-lg md:mb-8">
              I began my career as a Frontend Developer, building scalable web
              applications using React.js, TypeScript, and Tailwind CSS. As I
              collaborated closely with product teams, I transitioned into a
              Business Analyst role within the Product Management team, where I
              gathered business requirements, analyzed business data using SQL,
              Power BI, and Microsoft Excel, supported product planning, and
              collaborated with cross-functional stakeholders. I also leverage
              GitHub Copilot and AI-assisted development tools to improve
              development efficiency, code quality, and deliver scalable,
              user-centric, data-driven solutions.
            </p>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={20} className="flex-shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-slate-300 sm:text-base">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-6"
          >
            {[
              { number: "3+", label: "Product Applications" },
              { number: "5+", label: "Projects Delivered" },
              { number: "1+", label: "Years Experience" },
              { number: "84.17%", label: "ML Accuracy" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card text-center"
              >
                <h3 className="mb-2 font-display text-2xl font-bold gradient-text sm:text-3xl md:text-4xl">
                  {stat.number}
                </h3>
                <p className="text-xs leading-snug text-slate-400 sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
