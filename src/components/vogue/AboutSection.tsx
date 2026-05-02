import { motion } from "framer-motion";
import aboutInterior from "@/assets/about-reception.png";

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "10+", label: "Expert Stylists" },
  { value: "4.9★", label: "Rated" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              <img
                src={aboutInterior}
                alt="Vogue Salon interior"
                className="w-full h-[350px] md:h-[440px] object-cover rounded-2xl shadow-card"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground rounded-pill px-4 py-2 text-sm font-semibold shadow-gold">
                10+ Years of Excellence
              </div>
            </div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="label-uppercase text-accent mb-3">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              More Than Just a Salon
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vogue The Unisex Salon in Sangareddy is known for its skilled professionals, friendly
              staff, and high-quality service. We focus on delivering great results while ensuring
              a comfortable and welcoming experience for every customer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you're coming in for a quick trim or a complete makeover, our team is
              dedicated to making you look and feel your absolute best.
            </p>

            <div className="flex gap-4 flex-wrap">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-accent/10 rounded-pill px-5 py-2.5 border border-accent/20"
                >
                  <span className="font-bold text-foreground">{stat.value}</span>{" "}
                  <span className="text-muted-foreground text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
