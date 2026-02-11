import { Link } from "react-router-dom";
import { Plane, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Hajj & Umrah", href: "/hajj-umrah" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    "Visa Applications",
    "Flight Booking",
    "Work Permits",
    "VFS Submissions",
    "Hajj & Umrah",
  ];

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Plane className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">
                  SnB <span className="text-accent">Travels</span>
                </h3>
                <p className="text-xs text-primary-foreground/60">& Tours</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your trusted partner for travel, visas, and documentation. 
              Making journeys seamless since day one.
            </p>
            <a
              href="https://wa.me/27795255989"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald hover:bg-emerald/90 transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  28 Lodewyk Road, Newfields, 7785, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:+27795255989" className="text-primary-foreground/70 hover:text-accent transition-colors block">
                    +27 79 525 5989
                  </a>
                  <a href="tel:+27619709183" className="text-primary-foreground/70 hover:text-accent transition-colors block">
                    +27 61 970 9183
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:baselsayed@snbtravel.net" 
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-sm break-all"
                >
                  baselsayed@snbtravel.net
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} SnB Travels and Tours. All rights reserved.
            </p>
            <div className="flex flex-col items-center md:items-end gap-1">
              <p className="text-primary-foreground/40 text-xs text-center md:text-right">
                Trusted travel and visa consultancy services in South Africa
              </p>
              <p className="text-primary-foreground/30 text-[10px] text-center md:text-right hover:text-primary-foreground/50 transition-colors">
                Developed by Zia ul Hassan | Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
