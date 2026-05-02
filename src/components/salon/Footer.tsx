import { Instagram, Phone, MapPin } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/shabanabeautyacademygmail.com6/";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-card/80 py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <div className="mb-4">
              <span className="font-heading text-2xl font-bold text-card">Shabana's</span>
              <p className="text-xs tracking-[0.2em] uppercase text-card/50 mt-1">
                Beauty Salon & Academy
              </p>
            </div>
            <p className="text-sm leading-relaxed text-card/60 mb-4">
              Zaheerabad's Most Trusted Beauty Salon. Professional care for hair, skin, and bridal beauty since 2023.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-gold-light transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm font-medium">Follow on Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-card mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-card/60 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-card mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+9107780467684" className="flex items-center gap-2 text-sm text-card/60 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +91 77804 67684
              </a>
              <div className="flex items-start gap-2 text-sm text-card/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Zaheerabad, Telangana</span>
              </div>
              <p className="text-sm text-card/60">
                Mon–Sat: 10AM – 8PM<br />
                Sun: 10AM – 6PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-card/10 mt-10 pt-6 text-center">
          <p className="text-xs text-card/40">
            © {new Date().getFullYear()} Shabana's Beauty Salon & Academy. All rights reserved. | Zaheerabad, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
