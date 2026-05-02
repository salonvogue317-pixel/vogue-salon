import { motion } from "framer-motion";
import grooming from "@/assets/showcase-grooming.jpg";
import hair from "@/assets/showcase-hair.jpg";
import nails from "@/assets/showcase-nails.jpg";

const WHATSAPP = "https://wa.me/919154004114?text=Hi%2C%20I%27d%20like%20to%20book%20a%20service%20at%20Vogue%20The%20Unisex%20Salon";

const items = [
  {
    n: "01",
    title: ["Gentlemen's", "Grooming"],
    img: grooming,
    align: "left" as const,
    quote: "Sharp cuts, classic shaves & beard sculpting — refined for the modern gentleman.",
  },
  {
    n: "02",
    title: ["Ladies'", "Hair Styling"],
    img: hair,
    align: "right" as const,
    quote: "Precision cuts, glossy blowouts & color artistry tailored to you.",
  },
  {
    n: "03",
    title: ["Exclusive", "Nail Artistry"],
    img: nails,
    align: "left" as const,
    quote: "Miniature canvases of luxury crafted for your fingertips.",
  },
];

const SignatureShowcase = () => {
  return (
    <section id="signature" className="bg-background py-20 md:py-28 border-t border-border/40">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label-uppercase text-accent mb-3">The Signature Edit</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Crafted for Every Style
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-5" />
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {items.map((it, i) => (
            <motion.article
              key={it.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Title row */}
              <div
                className={`flex items-end gap-4 mb-6 ${
                  it.align === "right" ? "justify-end text-right" : "justify-start text-left"
                }`}
              >
                {it.align === "right" && (
                  <span className="font-mono text-xs text-muted-foreground tracking-widest mb-2">
                    {it.n}
                  </span>
                )}
                <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-[1.05]">
                  {it.title[0]}
                  <br />
                  {it.title[1]}
                </h3>
                {it.align === "left" && (
                  <span className="font-mono text-xs text-muted-foreground tracking-widest mb-2 ml-auto">
                    {it.n}
                  </span>
                )}
              </div>

              <div className="h-px w-full bg-border/60 mb-8" />

              {/* Image + optional side content */}
              {i === 2 ? (
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-card group">
                    <img
                      src={it.img}
                      alt={it.title.join(" ")}
                      loading="lazy"
                      width={1600}
                      height={900}
                      className="w-full h-[280px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="font-heading italic text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                      “{it.quote}”
                    </p>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-card border border-border text-foreground text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              ) : (
                <div className="relative group rounded-2xl overflow-hidden border border-border/60 shadow-card">
                  <img
                    src={it.img}
                    alt={it.title.join(" ")}
                    loading="lazy"
                    width={1600}
                    height={900}
                    className="w-full h-[320px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute bottom-6 ${
                      it.align === "right" ? "right-6" : "left-6"
                    } inline-flex items-center justify-center px-6 py-3 rounded-full bg-background/95 backdrop-blur text-foreground text-xs tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-all`}
                  >
                    Book This Service
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureShowcase;