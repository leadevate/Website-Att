import { Zap, Bot, Smartphone, Wrench, Check } from "lucide-react";
import { motion } from "framer-motion";
const features = [
  { icon: <Zap size={28} />, title: "Built Fast", desc: "Your site is live in days, not months. No back-and-forth with designers, no delays.", color: "text-neon-purple" },
  { icon: <Bot size={28} />, title: "Automated From Day One", desc: "Contact forms, appointment booking, lead capture, and follow-up emails are all wired up.", color: "text-neon-cyan" },
  { icon: <Smartphone size={28} />, title: "Mobile-First & SEO-Ready", desc: "Looks perfect on every device and is built to rank on Google from the start.", color: "text-neon-pink" },
  { icon: <Wrench size={28} />, title: "Zero Maintenance", desc: "We handle updates, hosting, security, and performance. You never touch it.", color: "text-neon-purple" },
];

const checklist = [
  "Custom designed for your business and industry",
  "Online booking or contact form integrated",
  "Automated lead follow-up via email or SMS",
  "Google Analytics + performance dashboard",
  "Connected to your Leadevate reactivation account",
  "Hosting and maintenance included",
  "SEO-optimized structure and page speed",
];

const WebsiteService = () => (
  <section id="websites" className="py-24 px-4 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-center mb-4 text-foreground tracking-tight"
      >
        A website that works as hard as you do —<br className="hidden md:block" /> without you touching it.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
      >
        Most small business websites are digital brochures. Leadevate builds you a site that actively captures leads, books appointments, and follows up with visitors — all automatically.
      </motion.p>


      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-glass rounded-2xl p-6 border border-border/50 hover:border-neon-purple/30 transition-all duration-500"
          >
            <div className={`${f.color} mb-3`}>{f.icon}</div>
            <h3 className="text-lg font-display font-bold mb-2 text-foreground tracking-tight">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-glass-strong rounded-2xl p-8 md:p-10 max-w-2xl mx-auto"
      >
        <h3 className="text-xl font-display font-bold mb-6 text-foreground tracking-tight">What's included</h3>
        <ul className="space-y-3">
          {checklist.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check size={20} className="text-neon-cyan mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
        <a
          href="mailto:leadevatemarketing@gmail.com"
          className="mt-8 inline-flex items-center gap-2 bg-neon-purple text-primary-foreground font-bold px-8 py-3.5 rounded-lg hover:glow-purple transition-all duration-300 hover:scale-105"
        >
          Get My Website Built →
        </a>
      </motion.div>
    </div>
  </section>
);

export default WebsiteService;
