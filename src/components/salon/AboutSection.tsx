import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import salonInterior from "@/assets/salon-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-beige">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-card"
          >
            <img
              src={salonInterior}
              alt="Shabana's Beauty Salon interior"
              className="w-full h-[350px] md:h-[450px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Zaheerabad's Most Trusted{" "}
              <span className="text-gradient-gold">Beauty Destination</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Shabana's Beauty Salon & Academy, we've built our reputation on trust, quality, and genuine care for every client who walks through our doors. Since 2023, we've been the salon that Zaheerabad's women, brides, and families rely on for professional beauty treatments that deliver real results.
              </p>
              <p>
                What started as a passion for beauty has grown into the city's most loved salon — backed by 40+ five-star reviews and countless happy clients. Our experienced team combines professional training from our own academy with a warm, personalized approach that makes everyone feel at home.
              </p>
              <p>
                Whether you're preparing for your wedding day, treating yourself to a relaxing spa session, or addressing specific hair and skin concerns, we're here to help you look and feel your absolute best.
              </p>
            </div>
            <a href="#contact">
              <Button className="mt-8 bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:opacity-90 px-8 py-5 text-base">
                Visit Us Today
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
