import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrecomLogo } from "@/components/TrecomLogo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technical Advisory", href: "/technical-advisory" },
  { name: "Policies", href: "/policies" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/40" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)' }}>
      <nav className="container-wide flex items-center justify-between py-5">
        <Link to="/" className="flex items-center group">
          <TrecomLogo variant="dark" className="h-14 w-[240px]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link ${isActive(item.href) ? "active" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-navy/10 animate-fade-in">
          {/* Premium gradient background */}
          <div className="bg-gradient-to-b from-white via-surface to-surface-warm">
            <div className="container-wide py-4 space-y-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-3.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "bg-gradient-to-r from-navy/10 to-teal/10 text-navy border border-navy/15"
                      : "text-charcoal-muted hover:text-charcoal hover:bg-white hover:shadow-md border border-transparent"
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                    isActive(item.href)
                      ? "bg-gradient-to-br from-navy to-teal"
                      : "bg-gradient-to-br from-navy/10 to-teal/10 group-hover:from-navy group-hover:to-teal"
                  }`}>
                    <span className={`text-xs font-bold ${isActive(item.href) ? "text-white" : "text-navy"}`}>
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
            {/* Bottom accent */}
            <div className="h-1 bg-gradient-to-r from-navy via-teal to-navy opacity-20" />
          </div>
        </div>
      )}
    </header>
  );
}
