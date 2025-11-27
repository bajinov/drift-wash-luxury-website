import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/drift-wash-logo.png";

const Footer = () => {
  const whatsappNumber = "919962021310";

  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="Drift Wash Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold text-primary">Drift Wash</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Premium car and bike wash at your doorstep. We wash, you relax.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-success transition-smooth"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-muted-foreground hover:text-primary transition-smooth">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#booking" className="text-muted-foreground hover:text-primary transition-smooth">
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    +91 99620 21310
                  </a>
                  <p className="text-xs text-muted-foreground">WhatsApp us anytime</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">Chennai, Tamil Nadu</p>
                  <p className="text-xs text-muted-foreground">Free service on OMR</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-muted-foreground">info@driftwash.com</p>
                  <p className="text-xs text-muted-foreground">Email support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Drift Wash. All rights reserved. | Premium Car & Bike Wash Service in Chennai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
