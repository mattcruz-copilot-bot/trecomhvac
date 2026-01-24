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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container-wide flex items-center justify-between py-5">
        <Link to="/" className="flex items-center group">
          <div className="flex items-baseline gap-1.5">
            <span className="text-[22px] font-bold text-slate tracking-[-0.02em] group-hover:text-electric transition-colors duration-300">
              TrecomHvac
            </span>
            <span className="text-[14px] font-light text-charcoal-muted tracking-[0.03em]">
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
              className={`text-sm font-medium transition-colors relative ${
                isActive(item.href)
                  ? "text-charcoal"
                  : "text-charcoal-muted hover:text-charcoal"
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric" />
              )}
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
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-wide py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-electric"
                    : "text-charcoal-muted hover:text-charcoal"
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
