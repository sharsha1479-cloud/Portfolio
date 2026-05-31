import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const skills = [
    "React.js, TypeScript, Tailwind CSS",
    "Node.js, Express.js",
    "MySQL, PostgreSQL, SQL Workbench",
    "Python, SQL, Data Analytics",
    "Power BI, Power Query, Excel",
    "Razorpay payment integration",
    "Hostinger deployment",
    "AI-assisted debugging and optimization",
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
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-accent">
            Profile
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            About Me
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-lg leading-relaxed text-slate-300">
              I am a B.Tech graduate in Data Science with hands-on experience
              as a{" "}
              <span className="font-semibold text-primary">Full-Stack Developer at Synvide Business Solutions</span>, building scalable web applications, product-focused solutions, and data-driven systems.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-slate-300">
              I build full-stack web applications using React.js, TypeScript, Tailwind CSS, Node.js, Express.js, and MySQL, with experience in Razorpay payments, Hostinger deployment, Power BI dashboards, and data-driven project work.
            </p>

            {/* Skills Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={20} className="flex-shrink-0 text-accent" />
                  <span className="text-slate-300">{skill}</span>
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
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "3+", label: "Product Applications" },
              { number: "5+", label: "Projects Built" },
              { number: "84.17%", label: "ML Accuracy" },
              { number: "B.Tech", label: "Data Science" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass-card text-center"
              >
                <h3 className="mb-2 font-display text-3xl font-bold gradient-text md:text-4xl">
                  {stat.number}
                </h3>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
