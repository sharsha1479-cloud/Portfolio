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

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/s.harsha1479@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Message delivery failed");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
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
          className="mb-10 md:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent sm:text-sm sm:tracking-[0.35em]">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <div className="mt-5 h-1 w-24 bg-gradient-to-r from-primary to-accent" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
            Open to Software Engineer, Full-Stack Developer, Frontend Developer, and product-focused engineering opportunities.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card"
          >
            <h3 className="mb-5 flex items-center gap-3 font-display text-xl font-bold text-primary sm:mb-6 sm:text-2xl">
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
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none sm:text-base"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none sm:text-base"
                required
              />

              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-primary focus:outline-none sm:text-base"
                required
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-sm font-medium text-emerald-400" role="status">
                  Message sent successfully. Thank you for reaching out.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-rose-400" role="alert">
                  Message could not be sent. Please email me directly at{" "}
                  <a className="underline" href="mailto:s.harsha1479@gmail.com">
                    s.harsha1479@gmail.com
                  </a>
                  .
                </p>
              )}
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
              className="space-y-3 sm:space-y-5"
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
                    className="glass-card group flex items-center gap-3 sm:gap-4"
                  >
                    <div className={`flex-shrink-0 rounded-lg bg-white/5 p-3 transition-colors group-hover:bg-white/15 sm:p-4 ${method.color}`}>
                      <Icon size={24} className="sm:size-7" />
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
