import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Residential Solar", href: "/services#residential" },
    { name: "Commercial Solar", href: "/services#commercial" },
    { name: "Solar AMC", href: "/services#amc" },
    { name: "Solar Consultation", href: "/services#consultation" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Solar Calculator", href: "/contact" },
    { name: "Government Subsidy", href: "/blog" },
    { name: "FAQ", href: "/services" },
    { name: "Download Brochure", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-solar flex items-center justify-center">
                <Sun className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-background">SunPrime</h3>
                <p className="text-sm text-background/60">Solar Solutions</p>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              Powering Tomorrow With Clean Energy. India's leading solar installation company 
              for homes and businesses with 200+ successful installations.
            </p>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                <span>1800-123-4567 (Toll Free)</span>
              </a>
              <a href="mailto:info@sunprime.in" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@sunprime.in</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Solar Park, Gomti Nagar, Lucknow, UP - 226010</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-background/70 hover:text-primary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © 2025 SunPrime Solar Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
