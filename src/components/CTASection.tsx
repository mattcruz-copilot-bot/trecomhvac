import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import londonSkyline from "@/assets/london-skyline.jpg";

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
    <section className="relative py-10 sm:py-12 md:py-16 overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={londonSkyline} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/96 via-slate/94 to-navy/90" />
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[150px] sm:h-[250px] bg-teal/8 rounded-full blur-[60px] sm:blur-[80px]" />
      </div>
      
      <div className="container-wide relative z-10 text-center">
        <p className="text-teal font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          {eyebrow}
        </p>
        <h2 className="text-white mb-3 sm:mb-4 text-balance text-2xl sm:text-3xl md:text-4xl">{title}</h2>
        <p className="text-white/60 mb-5 sm:mb-6 max-w-lg mx-auto leading-relaxed text-sm md:text-base px-2">
          {description}
        </p>
        <Button variant="hero" size="lg" asChild className="group w-full sm:w-auto">
          <Link to={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
