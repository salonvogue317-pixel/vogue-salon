import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import galleryHair1 from "@/assets/gallery-hair-1.png";
import galleryHair2 from "@/assets/gallery-hair-2.png";
import galleryHair3 from "@/assets/gallery-hair-3.png";
import galleryNails1 from "@/assets/gallery-nails-1.png";
import galleryNails2 from "@/assets/gallery-nails-2.png";
import aboutInterior from "@/assets/about-interior-3.png";

const images = [
  { src: galleryHair1, alt: "Layered hair styling", tall: true },
  { src: galleryNails1, alt: "Nail art - purple & gold", tall: false },
  { src: galleryHair3, alt: "Straight hair treatment", tall: true },
  { src: galleryNails2, alt: "Elegant nail design", tall: false },
  { src: galleryHair2, alt: "Hair styling", tall: false },
  { src: aboutInterior, alt: "Salon interior", tall: false },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-background bg-marble">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="label-uppercase text-accent mb-3">Our Work</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            From Our Salon Chair
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-5" />
        </motion.div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightbox(img.src)}
            >
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    img.tall ? "h-72 md:h-96" : "h-48 md:h-64"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-accent transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
