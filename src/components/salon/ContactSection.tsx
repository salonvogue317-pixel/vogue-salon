import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/shabanabeautyacademygmail.com6/";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Visit Us or <span className="text-gradient-gold">Call to Book</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href="tel:+9107780467684"
              className="flex items-start gap-4 bg-card rounded-lg p-5 shadow-soft border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Call Us</h3>
                <p className="text-muted-foreground">Tap to call and book your appointment</p>
                <p className="text-accent font-semibold mt-1">+91 77804 67684</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-card rounded-lg p-5 shadow-soft border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground">
                  Shabana's Beauty Salon & Academy<br />
                  Zaheerabad, Telangana
                </p>
                <a
                  href="https://maps.google.com/?q=Zaheerabad+Telangana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold mt-1 inline-block hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card rounded-lg p-5 shadow-soft border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Hours</h3>
                <p className="text-muted-foreground">
                  Monday – Saturday: 10:00 AM – 8:00 PM<br />
                  Sunday: 10:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-card rounded-lg p-5 shadow-soft border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Follow Us</h3>
                <p className="text-accent font-semibold">@shabana_beauty_care</p>
              </div>
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-card border border-border h-[400px] lg:h-full min-h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30381.62!2d77.59!3d17.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc90c0c0e11c6ed%3A0x1eaae0b5e0b37e1e!2sZaheerabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shabana's Beauty Salon location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
