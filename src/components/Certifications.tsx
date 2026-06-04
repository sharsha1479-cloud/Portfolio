import { motion } from "framer-motion";
import { Award, BadgeCheck, BarChart3, Cloud } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Azure Fundamentals",
      issuer: "Microsoft",
      description: "Cloud fundamentals and Microsoft Azure service concepts.",
      icon: Cloud,
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP LIFE",
      description: "Data science, analytics concepts, and practical reporting foundations.",
      icon: BarChart3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm sm:tracking-[0.35em]">
            Credentials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        <motion.div
          className="grid gap-5 sm:gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.article
                key={cert.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="glass-card group relative overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-gold to-secondary" />
                <div className="relative z-10">
                  <div className="mb-5 flex items-start gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-accent/20 group-hover:text-accent sm:h-14 sm:w-14">
                      <Icon size={26} className="sm:size-[30px]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-snug text-primary sm:text-xl">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold text-slate-400">{cert.issuer}</p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-slate-300">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                    <BadgeCheck size={16} />
                    Resume verified credential
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 glass-card text-center md:mt-12"
        >
          <Award className="mx-auto mb-4 text-gold" size={28} />
          <p className="text-slate-300">
            These certifications strengthened my knowledge of cloud technologies, data analytics, and business intelligence concepts.          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
