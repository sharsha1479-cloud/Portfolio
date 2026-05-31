import { motion } from "framer-motion";
import { BrainCircuit, Bug, MessageSquareText, WandSparkles } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiVite,
  SiGithub,
  SiPython,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
       
        { name: "Vite", icon: SiVite, color: "#646CFF" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
        { name: "Express.js", icon: SiExpress, color: "#FFF" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#00758F" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
        { name: "SQL", icon: SiMysql, color: "#FACC15" },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "GitHub", icon: SiGithub, color: "#FFF" },
        { name: "Visual Studio Code", icon: SiGithub, color: "#22D3EE" },
      ],
    },
    {
      title: "AI & Productivity",
      skills: [
        { name: "AI-Assisted Development", icon: BrainCircuit, color: "#22D3EE" },
        { name: "Prompt Engineering", icon: MessageSquareText, color: "#FACC15" },
        { name: "AI-Powered Debugging", icon: Bug, color: "#FB7185" },
        { name: "AI-Assisted Code Optimization", icon: WandSparkles, color: "#A78BFA" },
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
      title: "Analytics",
      skills: ["Power BI", "Power Query", "Excel"],
    },
    {
      title: "Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    },
    {
      title: "Deployment",
      skills: ["Hostinger"],
    },
    {
      title: "Integrations",
      skills: ["Razorpay"],
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
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-accent">
            Toolkit
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Skills & Technologies
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={cardVariants} className="space-y-4">
              {/* Category Title */}
              <h3 className="mb-6 font-display text-2xl font-bold text-primary">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIdx}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card group flex min-h-32 cursor-pointer flex-col items-center justify-center p-4"
                    >
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: skillIdx * 0.1 }}
                        className="mb-3"
                      >
                        <Icon
                          size={40}
                          style={{ color: skill.color }}
                          className="group-hover:drop-shadow-lg transition-all"
                        />
                      </motion.div>
                      <p className="text-center text-sm font-semibold text-slate-300 transition-colors group-hover:text-primary">
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
          className="mt-16 glass-card p-8"
        >
          <h3 className="mb-6 font-display text-xl font-bold text-primary">Analytics, Libraries & Deployment</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalSkillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
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
