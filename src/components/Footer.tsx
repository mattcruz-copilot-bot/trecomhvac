import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { TrecomLogo } from "@/components/TrecomLogo";

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
    <footer className="relative overflow-hidden">
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/60 to-transparent z-20" />
      {/* Background gradient - rich, layered */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-slate to-charcoal" />
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal/8 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-navy/15 rounded-full blur-[80px]" />
      
      <div className="container-wide py-10 sm:py-12 md:py-14 lg:py-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <TrecomLogo variant="light" className="h-14 w-auto mb-4 sm:mb-6" />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Professional mechanical contracting services for commercial and industrial clients across London and the UK.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-white/80 mb-4 sm:mb-6 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-teal transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold text-white/80 mb-4 sm:mb-6 uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-white/50 hover:text-teal transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold text-white/80 mb-4 sm:mb-6 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4 sm:space-y-5">
              <li className="flex items-start gap-3 sm:gap-4 text-sm text-white/50">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal" />
                </div>
                <span className="pt-0.5 sm:pt-1">London, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm text-white/50">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal" />
                </div>
                <span>+44 7389 711640</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-4 text-sm text-white/50">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal" />
                </div>
                <span className="break-all sm:break-normal">info@trecomhvac.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-5 sm:pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-white/40 text-center sm:text-left">
              © {new Date().getFullYear()} TrecomHvac & Mechanical. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/30">Premium Mechanical Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
