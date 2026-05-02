import { Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919154004114?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment";

const FloatingCallButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 lg:hidden"
      aria-label="Book on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-accent/30 animate-pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-accent/20 animate-pulse-ring" style={{ animationDelay: "0.4s" }} />
      
      <div className="relative w-14 h-14 rounded-full bg-accent shadow-gold flex items-center justify-center">
        <Phone className="w-6 h-6 text-accent-foreground" />
      </div>
    </a>
  );
};

export default FloatingCallButton;
