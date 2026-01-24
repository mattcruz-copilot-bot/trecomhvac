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
    <footer className="section-dark">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-baseline gap-1.5 mb-6">
              <span className="text-[24px] font-bold text-white tracking-[-0.02em]">
                TrecomHvac
              </span>
              <span className="text-[14px] font-light text-white/40 tracking-[0.03em]">
                & Mechanical
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Professional mechanical contracting services for commercial and industrial clients across London and the South East.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-6 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 link-hover"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-6 uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-300 link-hover"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-6 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-4 w-4 text-electric" />
                </div>
                <span className="pt-1">London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-4 w-4 text-electric" />
                </div>
                <span>+44 (0) 20 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/50">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-electric" />
                </div>
                <span>info@trecomhvac.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} TrecomHvac & Mechanical. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/20">Premium Mechanical Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
