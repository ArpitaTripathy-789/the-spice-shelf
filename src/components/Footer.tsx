import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-spice-brown text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Spice & Soul
            </h3>
            <p className="text-cream/80 leading-relaxed mb-6">
              Bringing authentic flavors and pure traditions to your kitchen since 1985.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-cream/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-cream/10 hover:bg-primary/20 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Shop All", "Spices", "Oils", "Ghee", "Recipes", "Blog"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-cream/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-3">
              {["Contact Us", "FAQs", "Shipping & Returns", "Track Order", "Privacy Policy", "Terms of Service"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-cream/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-cream/80">
                  123 Spice Market Road, Old Delhi, India - 110006
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-cream/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-cream/80">hello@spiceandsoul.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 text-sm">
            © 2024 Spice & Soul. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6 opacity-70"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-8 opacity-70"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-4 opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
