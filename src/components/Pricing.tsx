import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const reactivationPlans = [
  {
    name: "Starter",
    price: "$49",
    popular: false,
    features: ["Up to 500 contacts", "SMS + Email campaigns", "2 integrations", "Basic analytics"],
    cta: "Start Free Trial",
    href: "mailto:leadevatemarketing@gmail.com",
  },
  {
    name: "Growth",
    price: "$99",
    popular: true,
    features: ["Up to 2,500 contacts", "Unlimited campaigns", "All integrations", "AI message personalization", "Dashboard + reporting"],
    cta: "Start Free Trial",
    href: "mailto:leadevatemarketing@gmail.com",
  },
  {
    name: "Pro",
    price: "$199",
    popular: false,
    features: ["Unlimited contacts", "Priority support", "Multi-location support", "Custom message templates", "White-glove onboarding"],
    cta: "Contact Us",
    href: "mailto:leadevatemarketing@gmail.com",
  },
];

const websiteFeatures = [
  "Custom designed website",
  "Automated lead capture & follow-up",
  "Booking integration",
  "Hosting, security & maintenance",
  "SEO-optimized",
  "Connected to your Leadevate account",
];

const Pricing = () => (
  <section id="pricing" className="py-24 px-4 relative">
    <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

    <div className="container mx-auto max-w-6xl relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-center mb-4 text-foreground tracking-tight"
      >
        Simple pricing. No surprises.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-14"
      >
        AI Reactivation Plans
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {reactivationPlans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`relative bg-glass rounded-2xl p-8 flex flex-col border transition-all duration-500 ${
              plan.popular
                ? "border-neon-purple/50 glow-purple"
                : "border-border/50 hover:border-neon-purple/30"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-neon-purple text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                <Star size={12} /> Most Popular
              </div>
            )}
            <h3 className="text-xl font-display font-bold text-foreground tracking-tight">{plan.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-display font-bold text-gradient">{plan.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-neon-cyan mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={plan.href}
              className={`text-center font-bold py-3 rounded-lg transition-all duration-300 ${
                plan.popular
                  ? "bg-neon-purple text-primary-foreground hover:glow-purple hover:scale-105"
                  : "border border-neon-purple/40 text-neon-purple hover:bg-primary/10"
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="border-t border-border/30 mb-16" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto bg-glass-strong rounded-2xl p-8"
      >
        <h3 className="text-xl font-display font-bold text-foreground mb-1 tracking-tight">Website Service</h3>
        <p className="text-muted-foreground text-sm mb-4">One-time setup + $49/month</p>
        <ul className="space-y-3 mb-8">
          {websiteFeatures.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <Check size={16} className="text-neon-cyan mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{f}</span>
            </li>
          ))}
        </ul>
        <a
          href="mailto:leadevatemarketing@gmail.com"
          className="block text-center bg-neon-purple text-primary-foreground font-bold py-3 rounded-lg hover:glow-purple transition-all duration-300 hover:scale-105"
        >
          Get My Site Built →
        </a>
      </motion.div>

      <p className="text-center text-muted-foreground text-sm mt-10">
        All reactivation plans include a 14-day free trial. No credit card required.
      </p>
    </div>
  </section>
);

export default Pricing;
