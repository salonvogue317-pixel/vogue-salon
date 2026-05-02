import { Instagram, Phone, MapPin, Clock, Scissors } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/vogue_unisexsalon_?igsh=bWJldnZ6bDQ3b3gz&utm_source=qr";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card text-foreground py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Scissors className="w-5 h-5 text-accent" />
              <span className="font-heading text-2xl font-bold text-foreground">Vogue</span>
              <span className="text-muted-foreground text-sm">The Unisex Salon</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Style That Defines You</p>
            <div className="flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+919154004114"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 91540 04114
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Sangareddy, Telangana 502001</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Mon–Fri: 10AM–9PM
                  <br />
                  Sat–Sun: 9AM–9PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Vogue The Unisex Salon, Sangareddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
