import { Phone, MapPin, Star, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import vogueInterior from "@/assets/vogue-interior.png";

const WHATSAPP_URL = "https://wa.me/919154004114?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment";
const MAPS_URL = "https://maps.google.com/?q=Vogue+The+Unisex+Salon,+4-7-3/4/1/5/A/1,+Marepally,+Balaji+Nagar,+Ahmed+Nagar,+Sangareddy,+Telangana+502001";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
          alt="Vogue Salon luxury interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block mb-6"
            >
              <div className="bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-pill px-5 py-2">
                <p className="text-sm text-foreground font-medium">
                  ✨ Sangareddy's Most Loved Salon
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.1]"
            >
              Style That
              <br />
              <span className="text-gradient-gold italic">Defines You</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-5 text-lg text-white/70 max-w-md"
            >
              Professional hair, beauty & grooming services in the heart of Sangareddy, Telangana
            </motion.p>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 flex items-center gap-2"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <span className="font-bold text-white">4.9</span>
              <span className="text-white/50 text-sm">(162 verified reviews)</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground font-semibold text-base px-7 py-6 shadow-gold hover:bg-accent/90 transition-opacity rounded-pill gap-2 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5" />
                  Book Now
                </Button>
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent/40 text-white hover:bg-accent/10 font-semibold text-base px-7 py-6 rounded-pill gap-2 w-full sm:w-auto"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </Button>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-4 text-sm text-white/50"
            >
              🕐 Open Today until 9pm
            </motion.p>
          </div>

          {/* Right floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border-2 border-accent/30 shadow-card rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={vogueInterior}
                  alt="Vogue Salon interior"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl px-4 py-3 shadow-card border border-border">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">162 Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="w-6 h-6 text-accent animate-bounce-down" />
      </div>
    </section>
  );
};

export default HeroSection;
