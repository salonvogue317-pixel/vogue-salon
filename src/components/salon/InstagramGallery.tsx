import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const INSTAGRAM_URL = "https://www.instagram.com/shabanabeautyacademygmail.com6/";

const placeholderImages = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=400&h=400&fit=crop",
];

const InstagramGallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Real Results. <span className="text-gradient-gold">Real Clients.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            See what our clients are saying
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {placeholderImages.map((img, index) => (
            <motion.a
              key={index}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`Salon work showcase ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                <Instagram className="w-8 h-8 text-card opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">
            Follow us on Instagram for daily beauty inspiration
          </p>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:opacity-90 gap-2">
              <Instagram className="w-4 h-4" />
              @shabana_beauty_care
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramGallery;
