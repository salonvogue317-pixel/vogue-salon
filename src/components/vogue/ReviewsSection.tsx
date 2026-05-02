import { Star, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "Very good service and well environment with good trained staff. Would definitely come back again!",
    name: "Priya M.",
    initials: "PM",
  },
  {
    text: "Highly recommend this place for a great hair styling experience. The team really knows what they're doing.",
    name: "Rohit K.",
    initials: "RK",
  },
  {
    text: "Great experience, very friendly and professional staff. Felt completely pampered from start to finish.",
    name: "Sneha R.",
    initials: "SR",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="font-heading text-5xl font-bold text-foreground">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-4">Based on 162 Google Reviews</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-2xl p-7 shadow-soft border border-border"
            >
              <span className="font-heading text-5xl text-accent/30 leading-none">"</span>
              <p className="font-heading italic text-foreground leading-relaxed mt-1 mb-6">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <span className="text-sm font-bold text-accent">{review.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{review.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://www.google.com/maps/place/Vogue+The+Unisex+Salon+Sangareddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background rounded-pill px-6 py-3 shadow-soft border border-border text-accent font-semibold text-sm hover:border-accent/30 transition-colors"
          >
            See All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
