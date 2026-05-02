import { Scissors, Sparkles, Palette, Heart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling & Haircuts",
    description: "Precision cuts, blowouts & styling tailored to your face shape and personality",
  },
  {
    icon: Sparkles,
    title: "Hair Treatments",
    description: "Keratin, deep conditioning & scalp care to restore strength and shine",
  },
  {
    icon: Palette,
    title: "Makeup Services",
    description: "Bridal, party & everyday glam — flawless finishes for every occasion",
  },
  {
    icon: Heart,
    title: "Nail Services",
    description: "Manicures, pedicures, gel & nail art with premium products",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="label-uppercase text-accent mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our Signature Services
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-7 shadow-soft border border-border hover:border-accent/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="tel:+919154004114"
                className="text-accent text-sm font-medium hover:underline"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
