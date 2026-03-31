import { Database, Brain, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  { icon: "📋", title: "Your customer list is collecting dust", desc: "A salon with 800 past clients, a gym with 2,000 former members. That data is worth more than any ad spend." },
  { icon: "💸", title: "Ads cost more every year", desc: "Customer acquisition costs are up 60% since 2019. Your best leads are people who already trust you." },
  { icon: "🤖", title: "You don't have time to follow up", desc: "Leadevate does it for you, 24/7, while you run your business." },
];

const steps = [
  { num: "01", icon: <Database size={28} />, title: "Connect Your Data", desc: "Plug in Square, your booking app, Gmail, or upload a CSV. Leadevate finds every customer you've ever had.", color: "text-neon-purple", border: "border-neon-purple/20" },
  { num: "02", icon: <Brain size={28} />, title: "AI Scores & Writes", desc: 'The AI ranks customers by win-back likelihood and writes personalized messages for each one.', color: "text-neon-cyan", border: "border-neon-cyan/20" },
  { num: "03", icon: <TrendingUp size={28} />, title: "Revenue Comes Back", desc: "Campaigns go out by SMS or email automatically. You get notified when customers book or buy.", color: "text-neon-pink", border: "border-neon-pink/20" },
];

const ReactivationService = () => (
  <section id="reactivation" className="py-24 px-4 relative">
    {/* Subtle grid */}
    <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-center mb-6 text-foreground tracking-tight"
      >
        Every small business is sitting on a<br className="hidden md:block" /> goldmine they've forgotten about.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
      >
        Your past customers already know, like, and trust you. Leadevate brings them back.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center md:text-left bg-glass rounded-2xl p-6"
          >
            <div className="text-4xl mb-4">{p.icon}</div>
            <h3 className="text-xl font-display font-bold mb-3 text-foreground tracking-tight">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-display font-bold text-center mb-12 text-foreground tracking-tight"
      >
        How It Works
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`relative bg-glass rounded-2xl p-8 border ${s.border} hover:glow-purple transition-all duration-500`}
          >
            <span className="text-6xl font-display font-bold text-foreground/5 absolute top-4 right-6">{s.num}</span>
            <div className={`${s.color} mb-4`}>{s.icon}</div>
            <h4 className="text-lg font-display font-bold mb-3 text-foreground tracking-tight">{s.title}</h4>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReactivationService;
