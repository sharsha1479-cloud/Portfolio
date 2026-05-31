import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "s.harsha1479@gmail.com",
      link: "mailto:s.harsha1479@gmail.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "8186981479",
      link: "tel:+918186981479",
      color: "text-accent",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "saneda-harsha-vardhan",
      link: "https://linkedin.com/in/saneda-harsha-vardhan",
      color: "text-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gajuwaka, Visakhapatnam",
      link: "https://maps.google.com/?q=Gajuwaka%2C%20Visakhapatnam%2C%20Andhra%20Pradesh",
      color: "text-secondary",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Get In Touch
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Open to software engineering roles, internships, collaborations, and full-stack project work.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-primary">
              <MessageSquare size={24} />
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none"
                required
              />

              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none"
                required
              />

              <button type="submit" className="btn-primary w-full">
                {submitted ? "Message Ready" : "Send Message"}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    variants={itemVariants}
                    href={method.link}
                    target={method.label === "Email" || method.label === "Phone" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="glass-card group flex items-center gap-4"
                  >
                    <div className={`rounded-lg bg-white/5 p-4 transition-colors group-hover:bg-white/15 ${method.color}`}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400">{method.label}</p>
                      <p className="break-all font-semibold text-white">{method.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
