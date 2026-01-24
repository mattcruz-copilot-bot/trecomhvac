import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

interface CTASectionProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
}

export function CTASection({ 
  eyebrow, 
  title, 
  description, 
  buttonText, 
  buttonLink = "/contact" 
}: CTASectionProps) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBuilding} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-slate/90 to-navy/85" />
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      </div>
      
      <div className="container-wide relative z-10 text-center">
        <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-4">
          {eyebrow}
        </p>
        <h2 className="text-white mb-5 text-balance">{title}</h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <Button variant="hero" size="lg" asChild className="group">
          <Link to={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
