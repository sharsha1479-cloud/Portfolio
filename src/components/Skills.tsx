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
        { name: "SQL", icon: TbSql, color: "#FACC15" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
      ],
    },
    {
      title: "Backend & API Integration",
      skills: [
        { name: "REST APIs", icon: TbApi, color: "#22D3EE" },
        { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
        { name: "Express.js", icon: SiExpress, color: "#FFF" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#00758F" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      ],
    },
    {
      title: "Analytical Tools",
      skills: [
        { name: "SQL", icon: TbSql, color: "#FACC15" },
        { name: "Power BI", icon: FaMicrosoft, color: "#F2C811" },
        { name: "Microsoft Excel", icon: FaFileExcel, color: "#217346" },
      ],
    },
    {
      title: "Libraries",
      skills: [
        { name: "NumPy", icon: SiNumpy, color: "#4DABCF" },
        { name: "Pandas", icon: SiPandas, color: "#150458" },
        { name: "Matplotlib", icon: TbChartLine, color: "#FACC15" },
      ],
    },
    {
      title: "Development & Deployment Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFF" },
        { name: "GitHub Copilot", icon: SiGithubcopilot, color: "#22D3EE" },
        { name: "Visual Studio Code", icon: TbBrandVscode, color: "#22D3EE" },
        { name: "MySQL Workbench", icon: SiMysql, color: "#00758F" },
        { name: "Hostinger", icon: SiHostinger, color: "#A78BFA" },
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
    <section id="skills" className="section-padding relative">
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
                      <p className="text-center text-xs font-semibold leading-snug text-slate-300 transition-colors group-hover:text-primary sm:text-sm">
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
