import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div className="flex items-baseline gap-1.5">
            <span className="text-[24px] font-extrabold text-navy tracking-[-0.02em] transition-all duration-300 group-hover:text-teal font-heading">
              TrecomHvac
            </span>
            <span className="text-[14px] font-normal text-charcoal-muted tracking-[0.02em]">
              & Mechanical
            </span>
          </div>
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
        <div className="lg:hidden border-t border-border/30 glass-panel animate-fade-in">
          <div className="container-wide py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "bg-navy/10 text-navy"
                    : "text-charcoal-muted hover:text-charcoal hover:bg-surface"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
