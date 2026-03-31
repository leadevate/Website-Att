import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const FinalCta = () => (
  <section className="py-24 px-4 relative overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 bg-deep-space" />
    <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

    <div className="container mx-auto max-w-3xl text-center relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-tight"
      >
        Your next 30 customers are already waiting.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-lg mb-10"
      >
        Let Leadevate find them — and build you the website that keeps them coming back.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
      >
        <a
          href="mailto:leadevatemarketing@gmail.com"
          className="bg-neon-purple text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg animate-pulse-glow inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          Start Free Trial <ArrowRight size={20} />
        </a>
        <a
          href="mailto:leadevatemarketing@gmail.com"
          className="border border-neon-cyan/40 text-neon-cyan font-semibold px-8 py-4 rounded-lg text-lg hover:bg-neon-cyan/10 transition-all duration-300"
        >
          Get My Website Built
        </a>
      </motion.div>

      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <Mail size={16} />
        <a href="mailto:leadevatemarketing@gmail.com" className="hover:text-neon-purple transition-colors">
          leadevatemarketing@gmail.com
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
