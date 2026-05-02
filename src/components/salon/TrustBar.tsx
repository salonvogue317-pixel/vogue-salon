import { Star, MapPin, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  {
    icon: Star,
    title: "5-Star Rated Salon",
    description: "Trusted by 40+ satisfied clients",
  },
  {
    icon: MapPin,
    title: "Most Trusted in Zaheerabad",
    description: "Your local beauty experts since 2023",
  },
  {
    icon: Sparkles,
    title: "Bridal & Advanced Treatments",
    description: "Specializing in wedding beauty",
  },
  {
    icon: Users,
    title: "Experienced & Friendly Staff",
    description: "Personalized care for every client",
  },
];

const TrustBar = () => {
  return (
    <section className="bg-secondary py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center flex flex-col items-center gap-3"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
