import { motion } from "framer-motion";

const integrations = [
  "Square", "Clover", "Shopify", "Mindbody", "Vagaro", "Acuity", "Gmail", "Google Contacts", "CSV Upload"
];

const Integrations = () => (
  <section id="integrations" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold mb-12 text-foreground tracking-tight"
      >
        Works with the tools you already use
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {integrations.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className="bg-glass border border-border/50 rounded-xl px-6 py-4 font-semibold text-foreground/80 hover:border-neon-purple/40 hover:text-neon-purple hover:glow-purple transition-all duration-300 cursor-default"
          >
            {name}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground"
      >
        Don't see your system? If it can export a spreadsheet, Leadevate can read it.
      </motion.p>
    </div>
  </section>
);

export default Integrations;
