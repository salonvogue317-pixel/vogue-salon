import { Phone, ArrowDown, Star, Users, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bridal.png";

const trustBadges = [
  { icon: Star, text: "5-Star Rated" },
  { icon: Users, text: "40+ Happy Reviews" },
  { icon: Heart, text: "Bridal Specialists" },
  { icon: Award, text: "Locally Trusted" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Shabana's Beauty Salon luxurious interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        {/* Established badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-6"
        >
          <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-5 py-2.5">
            <p className="text-sm md:text-base text-card font-medium">
              ✨ The Best Professional Beauty Academy in Zaheerabad — Est. 2023, Serving Happy Customers Since Then
            </p>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-card leading-tight max-w-3xl"
        >
          Zaheerabad's Most{" "}
          <span className="text-gradient-gold">Trusted</span>{" "}
          Beauty Salon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-5 text-lg md:text-xl text-card/80 max-w-xl font-light"
        >
          Professional Hair, Skin & Bridal Care Trusted by Hundreds of Happy Clients
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3 md:gap-5"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-2 bg-card/10 backdrop-blur-sm rounded-full px-4 py-2 border border-card/20"
            >
              <badge.icon className="w-4 h-4 text-accent" />
              <span className="text-sm text-card font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="tel:+9107780467684">
            <Button
              size="lg"
              className="bg-gradient-gold text-accent-foreground font-bold text-lg px-8 py-6 shadow-gold hover:opacity-90 transition-opacity gap-2 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Button>
          </a>
          <a href="#services">
            <Button
              size="lg"
              variant="outline"
              className="border-card/40 text-card hover:bg-card/10 font-semibold text-lg px-8 py-6 gap-2 w-full sm:w-auto"
            >
              View Services
              <ArrowDown className="w-4 h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
