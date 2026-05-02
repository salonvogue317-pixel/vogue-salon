import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+9107780467684"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gradient-gold text-accent-foreground font-bold px-5 py-3.5 rounded-full shadow-gold hover:opacity-90 transition-opacity lg:hidden"
      aria-label="Call Now"
    >
      <Phone className="w-5 h-5" />
      <span className="text-sm">Call Now</span>
    </a>
  );
};

export default FloatingCallButton;
