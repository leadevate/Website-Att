import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const trustLogos = ["Square", "Mindbody", "Vagaro", "Gmail", "Clover", "and more"];

const Hero = () => (
  <section className="relative pt-32 pb-24 px-4 overflow-hidden">
    {/* Animated grid background */}
    <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />

    {/* Floating orbs */}
    <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] animate-float pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-neon-cyan/8 blur-[100px] animate-float pointer-events-none" style={{ animationDelay: "3s" }} />
    <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] rounded-full bg-neon-pink/5 blur-[80px] animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />

    <div className="container mx-auto text-center relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block mb-6 px-4 py-1.5 rounded-full border border-neon-purple/30 bg-glass text-sm text-neon-purple font-medium tracking-wide"
      >
        ⚡ AI-POWERED GROWTH ENGINE
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 tracking-tight"
      >
        Grow your business
        <br />
        <span className="text-gradient">on autopilot.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        Leadevate gives small businesses two powerful tools: AI that wins back lost customers automatically, and done-for-you websites that work while you sleep.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
      >
        <a
          href="mailto:leadevatemarketing@gmail.com"
          className="bg-neon-purple text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg animate-pulse-glow inline-flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          Get Started Free <ArrowRight size={20} />
        </a>
        <a
          href="#services"
          className="border border-neon-purple/40 text-neon-purple font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary/10 hover:border-neon-purple/60 transition-all duration-300"
        >
          See Our Services
        </a>
      </motion.div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground text-sm"
      >
        <span>Connects with</span>
        {trustLogos.map((name, i) => (
          <span key={name} className="flex items-center gap-2">
            <span className="font-semibold text-foreground/50">{name}</span>
            {i < trustLogos.length - 1 && <span className="text-border">·</span>}
          </span>
        ))}
      </motion.div>
    </div>

    {/* Bottom gradient fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

export default Hero;
