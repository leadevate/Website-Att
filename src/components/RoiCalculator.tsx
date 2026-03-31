import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const frequencies: Record<string, number> = {
  weekly: 12,
  monthly: 3,
  "every few months": 1,
};

const RoiCalculator = () => {
  const [customers, setCustomers] = useState(500);
  const [avgValue, setAvgValue] = useState(50);
  const [freq, setFreq] = useState("monthly");

  const recovered = Math.round(customers * 0.15 * avgValue * frequencies[freq]);

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <Calculator size={28} className="text-neon-purple" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-tight">
            See what your old customer list is worth
          </h2>
        </motion.div>
        <p className="text-center text-muted-foreground mb-12">Estimate your potential revenue recovery in the next 90 days.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-glass-strong rounded-2xl p-8 space-y-8"
        >
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-foreground">How many past customers do you have?</label>
              <span className="text-sm font-bold text-neon-purple">{customers.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={100}
              max={5000}
              step={50}
              value={customers}
              onChange={(e) => setCustomers(Number(e.target.value))}
              className="w-full accent-[hsl(270,80%,60%)] h-2 rounded-lg cursor-pointer bg-secondary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>100</span><span>5,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Average transaction value ($)</label>
            <input
              type="number"
              value={avgValue}
              onChange={(e) => setAvgValue(Number(e.target.value) || 0)}
              className="border border-border rounded-lg px-4 py-2.5 w-full text-foreground bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">How often do they typically visit?</label>
            <select
              value={freq}
              onChange={(e) => setFreq(e.target.value)}
              className="border border-border rounded-lg px-4 py-2.5 w-full text-foreground bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="every few months">Every few months</option>
            </select>
          </div>

          <motion.div
            key={recovered}
            initial={{ scale: 0.95, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-deep-space rounded-xl p-6 text-center border border-neon-purple/20 glow-purple"
          >
            <p className="text-foreground/60 text-sm mb-1">Leadevate could recover up to</p>
            <p className="text-4xl md:text-5xl font-display font-bold text-gradient">${recovered.toLocaleString()}</p>
            <p className="text-foreground/40 text-sm mt-1">in the next 90 days</p>
          </motion.div>

          <a
            href="mailto:leadevatemarketing@gmail.com"
            className="inline-flex items-center gap-2 bg-neon-purple text-primary-foreground font-bold px-8 py-3.5 rounded-lg hover:glow-purple transition-all duration-300 hover:scale-105 w-full justify-center"
          >
            Start recovering that revenue <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RoiCalculator;
