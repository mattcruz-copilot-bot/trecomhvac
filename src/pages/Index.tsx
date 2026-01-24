import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wind, Wrench, Building2, Droplets, Gauge, Settings, ChevronDown } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
import plantRoom from "@/assets/plant-room.jpg";

const services = [
  { icon: Wind, title: "HVAC & Ventilation Systems" },
  { icon: Wrench, title: "Mechanical Pipework Installations" },
  { icon: Building2, title: "Plant Rooms & Infrastructure" },
  { icon: Droplets, title: "Gas, Water & Drainage Systems" },
  { icon: Gauge, title: "Commissioning & Performance" },
  { icon: Settings, title: "Planned & Reactive Maintenance" },
];

const reasons = [
  "Strong technical and site experience",
  "Honest pricing and realistic programming",
  "Clear communication",
  "Professional site conduct",
  "Focus on quality and safety",
  "Reliable delivery",
];

export default function Index() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section - Full viewport with scroll indicator */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBuilding} 
            alt="Modern London commercial building at dusk" 
            className="w-full h-full object-cover scale-105"
          />
          {/* Premium dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/80 to-slate/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40" />
          {/* Subtle vignette effect */}
          <div className="absolute inset-0" style={{ 
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.4) 100%)' 
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide text-center px-6">
          <div className="max-w-5xl mx-auto">
            {/* Eyebrow text */}
            <p className="text-electric font-semibold tracking-[0.2em] uppercase text-sm mb-8 animate-fade-up opacity-0" 
               style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              Commercial HVAC Specialists
            </p>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8 animate-fade-up opacity-0 text-balance"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Commercial HVAC & Mechanical Services Across London
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-up opacity-0"
               style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              TrecomHvac & Mechanical delivers professional HVAC, plumbing and mechanical 
              services for commercial clients — combining real site experience with 
              reliable, well-managed delivery.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-up opacity-0"
                 style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild className="group">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group cursor-pointer animate-fade-up opacity-0"
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <span className="text-xs tracking-[0.15em] uppercase font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
          </div>
        </button>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Introduction Section - Glass panel effect */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-10 md:p-14">
              <p className="text-lg md:text-xl text-charcoal-muted mb-6 leading-relaxed">
                TrecomHvac & Mechanical is a London-based mechanical services company 
                providing HVAC, plumbing and gas solutions to commercial, residential 
                and mixed-use developments.
              </p>
              <p className="text-lg md:text-xl text-charcoal-muted mb-8 leading-relaxed">
                The business is built on real experience delivering work on large, 
                complex sites. That background shapes how we operate today: organised, 
                accountable, safety-focused and commercially aware.
              </p>
              <div className="pt-6 border-t border-border/50">
                <p className="text-xl md:text-2xl font-semibold text-charcoal">
                  We don't overpromise. We plan properly, communicate clearly and deliver what we agree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-line-strong" />

      {/* Services Grid - Light surface section */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-4">
              What We Do
            </p>
            <h2 className="text-balance">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="card-glass p-8 flex items-start gap-5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-box">
                  <service.icon className="h-6 w-6" />
                </div>
                <span className="font-semibold text-charcoal pt-3.5 text-lg">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Image - White section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-4">
                Why TrecomHvac & Mechanical
              </p>
              <h2 className="mb-12">Why Choose Us</h2>
              <ul className="space-y-5">
                {reasons.map((reason) => (
                  <li key={reason} className="feature-item">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-electric" />
                    </div>
                    <span className="text-charcoal-muted text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 glass-panel-dark rounded-xl p-8">
                <p className="text-white text-lg font-medium leading-relaxed">
                  Commercial clients value predictability. That is what we prioritise.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-electric/20 to-teal/20 rounded-2xl blur-2xl" />
              <img 
                src={plantRoom} 
                alt="Professional mechanical plant room installation" 
                className="relative w-full h-auto rounded-2xl shadow-elevated-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More Than Installation Callout - Surface section */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">More than installation.</h2>
            <p className="text-lg md:text-xl text-charcoal-muted mb-12 leading-relaxed max-w-3xl mx-auto">
              We also support clients with technical problem-solving, project reviews 
              and practical on-site advice. This comes from years of managing complex 
              mechanical works, not just installing them.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/technical-advisory">
                Learn About Our Approach
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark section */}
      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <p className="text-electric font-medium tracking-wider uppercase mb-6">
            Let's Work Together
          </p>
          <h2 className="mb-8 text-balance">Ready to Discuss Your Project?</h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you need a quotation, technical advice, or want to discuss a 
            potential project, we're here to help.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
