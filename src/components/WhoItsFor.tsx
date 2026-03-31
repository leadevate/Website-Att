import { motion } from "framer-motion";

const industries = [
  { emoji: "💇", label: "Salons & Barbershops" },
  { emoji: "🏋️", label: "Gyms & Fitness Studios" },
  { emoji: "🦷", label: "Dental & Med Spas" },
  { emoji: "🍽️", label: "Restaurants & Cafés" },
  { emoji: "🚗", label: "Auto Shops & Detailers" },
  { emoji: "🐾", label: "Pet Groomers & Vets" },
];

const WhoItsFor = () => (
  <section className="py-24 px-4 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/3 to-transparent pointer-events-none" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-center mb-14 text-foreground tracking-tight"
      >
        Built for businesses that run on repeat customers
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            className="bg-glass border border-border/50 rounded-2xl p-6 text-center hover:border-neon-cyan/40 hover:glow-cyan transition-all duration-500"
          >
            <div className="text-4xl mb-3">{ind.emoji}</div>
            <span className="font-semibold text-foreground">{ind.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsFor;
