import { RefreshCw, Globe } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <RefreshCw size={32} />,
    title: "AI Customer Reactivation",
    desc: "Your old customers are worth more than your next ad campaign. Leadevate finds dormant customers hiding in your data and wins them back — automatically.",
    link: "#reactivation",
    glow: "glow-purple",
    accent: "text-neon-purple",
    borderHover: "hover:border-neon-purple/50",
  },
  {
    icon: <Globe size={32} />,
    title: "Automated Business Websites",
    desc: "Get a professional, high-converting website built and automated for you — no technical skills, no agency fees, no maintenance headaches.",
    link: "#websites",
    glow: "glow-cyan",
    accent: "text-neon-cyan",
    borderHover: "hover:border-neon-cyan/50",
  },
];

const ServicesOverview = () => (
  <section id="services" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-display font-bold text-center mb-16 text-foreground tracking-tight"
      >
        Two ways Leadevate grows your revenue
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`group bg-glass rounded-2xl p-8 md:p-10 border border-border/50 ${c.borderHover} hover:${c.glow} transition-all duration-500`}
          >
            <div className={`${c.accent} mb-4`}>{c.icon}</div>
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground tracking-tight">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{c.desc}</p>
            <a href={c.link} className={`${c.accent} font-semibold hover:underline inline-flex items-center gap-1`}>
              Learn more ↓
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
