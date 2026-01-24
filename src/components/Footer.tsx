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
    <footer className="bg-charcoal">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-xl font-bold text-white tracking-tight">
                TrecomHvac
              </span>
              <span className="text-[10px] text-white/50 tracking-[0.2em] uppercase font-medium">
                & Mechanical
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Professional mechanical contracting services for commercial and industrial clients across London and the South East.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-electric" />
                <span>London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Phone className="h-4 w-4 flex-shrink-0 text-electric" />
                <span>+44 (0) 20 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <Mail className="h-4 w-4 flex-shrink-0 text-electric" />
                <span>info@trecomhvac.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40 text-center">
            © {new Date().getFullYear()} TrecomHvac & Mechanical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
