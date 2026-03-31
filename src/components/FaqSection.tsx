import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What if I don't have any customer data?", a: "No problem — Capture mode builds a list in 60–90 days via WiFi login, QR codes, and booking widgets." },
  { q: "Do I need technical skills?", a: "No. Everything is set up for you. We handle all the tech." },
  { q: "Is this just spam blasting?", a: "Absolutely not. AI sends personalized messages to people who already know you, timed intelligently based on their history." },
  { q: "What systems does it connect to?", a: "Square, Mindbody, Vagaro, Clover, Gmail, Shopify, and CSV upload for everything else." },
  { q: "How long does the website take to build?", a: "Most sites are live within 5–7 business days." },
  { q: "Can I get both the website and reactivation together?", a: "Yes — and they're better together. Your website captures new leads while reactivation wins back old ones. Ask us about bundling." },
  { q: "How fast will I see results from reactivation?", a: "Businesses with existing data typically see their first re-booked customer within a week." },
];

const FaqSection = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold text-center mb-12 text-foreground tracking-tight"
      >
        Common questions
      </motion.h2>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <AccordionItem value={`faq-${i}`} className="bg-glass border border-border/50 rounded-xl px-6 data-[state=open]:border-neon-purple/40 data-[state=open]:glow-purple transition-all duration-300">
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 hover:text-neon-purple transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
