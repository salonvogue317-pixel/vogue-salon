import { Heart, Star, UserCheck, Banknote, GraduationCap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Heart,
    title: "Trusted by the Community",
    text: "Zaheerabad's most recognized beauty salon with years of proven excellence",
  },
  {
    icon: Star,
    title: "Proven Results",
    text: "40+ five-star reviews from real clients who love their transformations",
  },
  {
    icon: UserCheck,
    title: "Personalized Attention",
    text: "We treat every client like family with customized beauty solutions",
  },
  {
    icon: Banknote,
    title: "Affordable & Transparent",
    text: "Premium quality at honest prices — no hidden costs",
  },
  {
    icon: GraduationCap,
    title: "Academy-Backed Expertise",
    text: "Our team is trained to professional standards at our own academy",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Hygienic",
    text: "Spotless environment with the highest safety standards",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-rose">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Why Hundreds Choose{" "}
            <span className="text-gradient-gold">Shabana's</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card rounded-lg p-6 shadow-soft border border-border flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
