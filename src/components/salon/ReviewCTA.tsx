import { motion } from "framer-motion";
import ReviewModal from "./ReviewModal";

const ReviewCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-rose">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Loved Your Experience?
          </h3>
          <p className="text-muted-foreground mb-6">
            Share your experience and help others discover the best beauty salon in Zaheerabad
          </p>
          <ReviewModal />
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewCTA;
