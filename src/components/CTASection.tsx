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
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/80 via-slate/70 to-navy/75" />
      </div>
      
      <div className="container-wide relative z-10 text-center">
        <p className="text-teal font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">
          {eyebrow}
        </p>
        <h2 className="text-white mb-3 sm:mb-4 text-balance text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{title}</h2>
        <p className="text-white/90 mb-5 sm:mb-6 max-w-lg mx-auto leading-relaxed text-sm md:text-base px-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          {description}
        </p>
        <Button variant="navy" size="lg" asChild className="group w-full sm:w-auto shadow-xl">
          <Link to={buttonLink}>
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
