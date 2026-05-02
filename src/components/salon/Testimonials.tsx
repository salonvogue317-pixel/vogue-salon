import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Shabana's is the only salon I trust for my bridal clients. The team is professional, friendly, and truly cares about making you feel beautiful. Highly recommend!",
    name: "Ayesha K.",
    role: "Zaheerabad",
    initial: "A",
  },
  {
    text: "Best dandruff treatment I've ever had! My scalp feels so healthy now. The staff explained everything clearly and made me feel comfortable.",
    name: "Priya M.",
    role: "Regular Client",
    initial: "P",
  },
  {
    text: "I had my bridal makeup done here and I've never felt more beautiful. Everyone at my wedding complimented how natural and stunning I looked!",
    name: "Fatima R.",
    role: "Bride",
    initial: "F",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            What Our Clients <span className="text-gradient-gold">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-card border border-border relative"
            >
              <Quote className="w-8 h-8 text-accent/20 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-heading font-bold text-accent">
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
