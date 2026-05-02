import { useState } from "react";
import { Scissors, Sparkles, Heart, Zap, Flower2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    id: "hair",
    label: "Hair & Scalp",
    icon: Scissors,
    services: [
      { name: "Dandruff Treatment", desc: "Deep cleansing for a healthy, flake-free scalp" },
      { name: "Hair Smoothening", desc: "Silky, frizz-free hair that lasts for months" },
      { name: "Hair Highlights", desc: "Add dimension with professionally blended color" },
      { name: "Hair Botox", desc: "Restore damaged hair to its natural glory" },
      { name: "Hair Spa", desc: "Deep nourishment for stronger, shinier hair" },
      { name: "PRP Hair Treatment", desc: "Advanced therapy for hair growth & thickness" },
    ],
  },
  {
    id: "skin",
    label: "Skin & Beauty",
    icon: Sparkles,
    services: [
      { name: "Pigmentation Treatment", desc: "Even-toned, radiant skin you'll love" },
      { name: "BB Glow Treatment", desc: "Semi-permanent foundation for flawless skin" },
      { name: "Eye Brow Ombre", desc: "Perfectly shaped brows that frame your face" },
      { name: "Facial & Skincare", desc: "Customized facials for every skin type" },
    ],
  },
  {
    id: "bridal",
    label: "Bridal",
    icon: Heart,
    services: [
      { name: "Bridal Makeup", desc: "Look stunning on your most special day" },
      { name: "Pre-Bridal Packages", desc: "Complete preparation for the perfect bride" },
      { name: "Engagement & Reception", desc: "Glamorous looks for every celebration" },
      { name: "Complete Bridal Care", desc: "Head-to-toe bridal beauty package" },
    ],
  },
  {
    id: "advanced",
    label: "Advanced",
    icon: Zap,
    services: [
      { name: "Ear Stitching", desc: "Professional ear lobe repair services" },
      { name: "Hair Botox", desc: "Deep restoration for damaged hair" },
      { name: "PRP Treatments", desc: "Platelet-rich plasma for skin & hair" },
      { name: "BB Glow", desc: "Korean beauty treatment for luminous skin" },
    ],
  },
  {
    id: "wellness",
    label: "Wellness",
    icon: Flower2,
    services: [
      { name: "Head Massage", desc: "Relieve stress with expert techniques" },
      { name: "Reflexology", desc: "Restore balance through pressure therapy" },
      { name: "Spa Treatments", desc: "Full body relaxation & rejuvenation" },
    ],
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("hair");
  const activeCategory = categories.find((c) => c.id === activeTab)!;

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Complete Beauty Solutions <br />
            <span className="text-gradient-gold">Under One Roof</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From everyday beauty to special occasion glamour — we've got you covered
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? "bg-gradient-gold text-accent-foreground shadow-gold"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeCategory.services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-lg p-6 shadow-soft border border-border hover:shadow-card hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <activeCategory.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <a
                  href="tel:+9107780467684"
                  className="mt-4 inline-block text-sm font-semibold text-accent hover:text-gold-dark transition-colors"
                >
                  Book Now →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
