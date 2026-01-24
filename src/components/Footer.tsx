import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const navigation = {
  company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Technical Advisory", href: "/technical-advisory" },
  ],
  legal: [
    { name: "Policies", href: "/policies" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-xl font-semibold tracking-tight">
                TrecomHvac
              </span>
              <span className="text-xs text-primary-foreground/60 tracking-wide uppercase">
                & Mechanical
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Professional mechanical contracting services for commercial and industrial clients across London and the South East.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+44 (0) 20 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@trecomhvac.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} TrecomHvac & Mechanical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
