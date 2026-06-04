import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      school: "Dadi Institute of Engineering and Technology",
      course: "B.Tech in Data Science",
      period: "Dec 2021 - Apr 2025",
      score: "CGPA: 7.36/10",
      detail: "Coursework: Database Management (SQL), Python, Power BI, Excel, Data Analytics",
    },
    {
      school: "Sri Chaitanya Junior College",
      course: "Board of Intermediate Education",
      period: "Apr 2021",
      score: "Percentage: 73%",
      detail: "Built a strong foundation in analytical thinking and core academics.",
    },
    {
      school: "Chalapathi E.M School",
      course: "Secondary School Certificate",
      period: "Apr 2019",
      score: "Percentage: 87%",
      detail: "Early academic base with consistent performance.",
    },
  ];

  return (
    <section id="education" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm sm:tracking-[0.35em]">
            Learning Path
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Education
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {education.map((item, index) => (
            <motion.article
              key={item.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary">
                {index === 0 ? <GraduationCap size={26} /> : <BookOpen size={24} />}
              </div>
              <p className="mb-2 text-sm font-semibold text-gold">{item.period}</p>
              <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">{item.school}</h3>
              <p className="mt-2 font-semibold text-primary">{item.course}</p>
              <p className="mt-3 text-sm font-bold text-accent">{item.score}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
