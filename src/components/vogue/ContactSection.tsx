import { Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const MAPS_URL = "https://maps.google.com/?q=Vogue+The+Unisex+Salon,+4-7-3/4/1/5/A/1,+Marepally,+Balaji+Nagar,+Ahmed+Nagar,+Sangareddy,+Telangana+502001";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background bg-marble">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="label-uppercase text-accent mb-3">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Visit Us Today
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <a
              href="tel:+919154004114"
              className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Call Us</h3>
                <p className="text-muted-foreground text-sm">Available during working hours</p>
                <p className="text-accent font-semibold mt-1">+91 91540 04114</p>
              </div>
            </a>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-soft border border-border hover:border-accent/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Visit Us</h3>
                <p className="text-muted-foreground text-sm">
                  4-7-3/4/1/5/A/1, Marepally, Balaji Nagar,
                  <br />
                  Ahmed Nagar, Sangareddy, Telangana 502001
                </p>
                <p className="text-accent font-semibold mt-1 text-sm">View on Google Maps →</p>
              </div>
            </a>

            <div className="flex items-start gap-4 bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground">Opening Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon – Fri: 10:00 AM – 9:00 PM
                  <br />
                  Sat – Sun: 9:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card border border-border h-[380px] lg:h-full min-h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.0!2d78.0867!3d17.6255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbf7c1b1b1b1b1%3A0x1234567890abcdef!2sMarepally%2C%20Balaji%20Nagar%2C%20Sangareddy%2C%20Telangana%20502001!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vogue The Unisex Salon location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
