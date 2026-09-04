import { motion } from "framer-motion";
import { FaFileExcel, FaMicrosoft } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiHostinger,
  SiMysql,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbApi, TbBrandVscode, TbChartLine, TbSql } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "SQL", icon: TbSql, color: "#0F4C81" },
        { name: "TypeScript", icon: SiTypescript, color: "#2563EB" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", icon: SiReact, color: "#0EA5E9" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#0891B2" },
        { name: "Vite", icon: SiVite, color: "#334155" },
      ],
    },
    {
      title: "Backend & API Integration",
      skills: [
        { name: "REST APIs", icon: TbApi, color: "#0F4C81" },
        { name: "Node.js", icon: SiNodedotjs, color: "#2563EB" },
        { name: "Express.js", icon: SiExpress, color: "#334155" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#0F4C81" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#2563EB" },
      ],
    },
    {
      title: "Analytical Tools",
      skills: [
        { name: "SQL", icon: TbSql, color: "#0F4C81" },
        { name: "Power BI", icon: FaMicrosoft, color: "#2563EB" },
        { name: "Microsoft Excel", icon: FaFileExcel, color: "#334155" },
      ],
    },
    {
      title: "Libraries",
      skills: [
        { name: "NumPy", icon: SiNumpy, color: "#0F4C81" },
        { name: "Pandas", icon: SiPandas, color: "#334155" },
        { name: "Matplotlib", icon: TbChartLine, color: "#2563EB" },
      ],
    },
    {
      title: "Development & Deployment Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "#334155" },
        { name: "GitHub", icon: SiGithub, color: "#0F172A" },
        { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#0F4C81" },
        { name: "Visual Studio Code", icon: TbBrandVscode, color: "#2563EB" },
        { name: "MySQL Workbench", icon: SiMysql, color: "#0F4C81" },
        { name: "Hostinger", icon: SiHostinger, color: "#334155" },
      ],
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const additionalSkillGroups = [
    {
      title: "Programming & Frontend",
      skills: [
        "SQL",
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Vite",
      ],
    },
    {
      title: "Backend, Database & Analytics",
      skills: [
        "REST APIs",
        "Node.js",
        "Express.js",
        "MySQL",
        "PostgreSQL",
        "Power BI",
        "Microsoft Excel",
      ],
    },
    {
      title: "Libraries & Tools",
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Git",
        "GitHub",
        "GitHub Copilot",
        "Visual Studio Code",
        "MySQL Workbench",
        "Hostinger",
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative bg-gradient-to-br from-slate-100 via-white to-cyan-50">
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
            Toolkit
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Skills & Technologies
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={cardVariants} className="space-y-4">
              {/* Category Title */}
              <h3 className="mb-4 font-display text-xl font-bold text-primary sm:mb-6 sm:text-2xl">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card group flex min-h-28 cursor-pointer flex-col items-center justify-center p-3 sm:min-h-32 sm:p-4"
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIdx * 0.1 }}
                        className="mb-3"
                      >
                        <Icon
                          size={36}
                          style={{ color: skill.color }}
                          className="group-hover:drop-shadow-lg transition-all"
                        />
                      </motion.div>
                      <p className="text-center text-xs font-semibold leading-snug text-slate-700 transition-colors group-hover:text-cyan-700 sm:text-sm">
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 glass-card p-5 sm:p-8 md:mt-16"
        >
          <h3 className="mb-5 font-display text-lg font-bold text-primary sm:mb-6 sm:text-xl">Resume Skills Summary</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalSkillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold sm:text-sm sm:tracking-[0.2em]">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="skill-badge"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
