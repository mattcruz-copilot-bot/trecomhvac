import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, Wind, Wrench, Building2, Droplets, Gauge, Settings, Shield, Clock, MessageSquare, Award, Target, Zap } from "lucide-react";
import heroBuilding from "@/assets/hero-workers-site.jpg";
import plantRoom from "@/assets/plant-room.jpg";
import hvacDuctwork from "@/assets/hero-hvac-rooftop.jpg";
import advisoryReview from "@/assets/technical-advisory-review.jpg";


const services = [
  { icon: Wind, title: "HVAC & Ventilation", desc: "Complete climate control solutions" },
  { icon: Wrench, title: "Mechanical Pipework", desc: "Professional installations" },
  { icon: Building2, title: "Plant Rooms", desc: "Infrastructure development" },
  { icon: Droplets, title: "Water & Drainage", desc: "Gas and water systems" },
  { icon: Gauge, title: "Commissioning", desc: "Performance testing" },
  { icon: Settings, title: "Maintenance", desc: "Planned & reactive support" },
];

const reasons = [
  { icon: Award, title: "Senior Experience", desc: "Background in major London projects and complex site environments" },
  { icon: MessageSquare, title: "Clear Communication", desc: "Direct, honest dialogue throughout every project phase" },
  { icon: Clock, title: "Reliable Programming", desc: "Realistic scheduling with proper planning from day one" },
  { icon: Shield, title: "Safety Focus", desc: "Professional site conduct with comprehensive RAMS" },
  { icon: Target, title: "Quality Delivery", desc: "Work we're prepared to stand behind, every time" },
  { icon: Zap, title: "Proactive Approach", desc: "Problems identified early and dealt with directly" },
];

const process = [
  { step: "01", title: "Plan", desc: "Thorough assessment, clear scope, realistic programming" },
  { step: "02", title: "Deliver", desc: "Professional execution with constant communication" },
  { step: "03", title: "Support", desc: "Ongoing technical backup and maintenance" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section - Full viewport with premium overlay */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBuilding} 
            alt="Modern London commercial building at dusk" 
            className="w-full h-full object-cover scale-105"
          />
          {/* Premium layered overlay */}
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-wide text-center">
          <div className="max-w-5xl mx-auto">
            {/* Eyebrow text */}
            <p className="mb-4 sm:mb-6 animate-fade-up opacity-0" 
               style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="text-teal font-bold tracking-[0.2em] uppercase text-sm sm:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">Commercial HVAC Specialists</span>
            </p>
            
            {/* Main Headline */}
            <h1 className="text-white mb-5 sm:mb-8 animate-fade-up opacity-0 text-balance px-2"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Commercial HVAC & Mechanical Services Across London & Nationwide
            </h1>
            
            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up opacity-0 px-2"
               style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              TrecomHvac & Mechanical delivers professional HVAC, plumbing and mechanical 
              services for commercial clients — combining real site experience with 
              reliable, well-managed delivery.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up opacity-0 px-4 sm:px-0"
                 style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <Button variant="hero" size="lg" asChild className="group w-full sm:w-auto">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="group w-full sm:w-auto">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom edge — subtle hairline transition only, keeps floor visible */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/90 to-transparent z-[5] pointer-events-none" />
      </section>

      {/* Credibility Intro Section - Tighter spacing */}
      <section className="section-y-sm bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 md:p-10">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <p className="text-base sm:text-lg text-charcoal-muted mb-4 leading-relaxed">
                    TrecomHvac & Mechanical is a London-based mechanical services company 
                    providing HVAC, plumbing and gas solutions to commercial, residential 
                    and mixed-use developments.
                  </p>
                  <p className="text-base sm:text-lg text-charcoal-muted mb-5 sm:mb-6 leading-relaxed">
                    The business is built on real experience delivering work on large, 
                    complex sites. That background shapes how we operate today: organised, 
                    accountable, safety-focused and commercially aware.
                  </p>
                  <div className="pt-4 sm:pt-5 border-t border-border">
                    <p className="text-lg sm:text-xl font-bold text-charcoal">
                      We don't overpromise. We plan properly, communicate clearly and deliver what we agree.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Visual cards with image background */}
      <section className="relative section-y overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={hvacDuctwork} 
            alt="HVAC ductwork" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/55 via-slate/45 to-navy/40" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-2 sm:mb-3">What We Do</p>
            <h2 className="text-white text-balance drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Our Services</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="glass-card-dark p-4 sm:p-6 group cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal/20 to-navy/20 border border-teal/25 flex items-center justify-center mb-3 sm:mb-4 group-hover:from-teal/35 group-hover:to-navy/30 transition-all duration-300">
                  <service.icon className="h-4 w-4 sm:h-5 sm:w-5 text-teal group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-white mb-1 sm:mb-2 text-sm sm:text-base group-hover:text-teal transition-colors">{service.title}</h4>
                <p className="text-white/60 text-xs sm:text-sm hidden sm:block">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="hero-outline" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Trecom - Premium cards with image */}
      <section className="section-y bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Content side */}
            <div>
              <p className="eyebrow mb-3 sm:mb-4">Why TrecomHvac</p>
              <h2 className="mb-6 sm:mb-10">Why Choose Us</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {reasons.map((reason) => (
                  <div key={reason.title} className="p-4 sm:p-5 rounded-xl bg-surface border border-border/50 hover:shadow-lg hover:border-teal/20 transition-all duration-300 group">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all duration-300">
                        <reason.icon className="w-4 h-4 sm:w-5 sm:h-5 text-navy group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-charcoal mb-1">{reason.title}</h4>
                        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>

            {/* Image side - hidden on mobile */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-navy/10 to-teal/10 rounded-2xl blur-2xl" />
              <img 
                src={plantRoom} 
                alt="Professional mechanical plant room installation" 
                className="relative w-full h-auto rounded-2xl shadow-elevated-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advisory Teaser - Dark section with background image */}
      <section className="relative section-y-sm overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={advisoryReview} 
            alt="HVAC engineers reviewing technical drawings on site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-navy/60 to-charcoal/75" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Technical Advisory
            </p>
            <h2 className="text-white mb-4 sm:mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">More than installation.</h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              We also support clients with technical problem-solving, project reviews 
              and practical on-site advice. This comes from years of managing complex 
              mechanical works, not just installing them.
            </p>
            <Button variant="hero" size="lg" asChild className="group w-full sm:w-auto">
              <Link to="/technical-advisory">
                Learn About Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Our Approach */}
      <section className="section-y section-warm">
        <div className="container-wide">
          <div className="text-center mb-8 sm:mb-12 lg:mb-14">
            <p className="eyebrow mb-3 sm:mb-4">Our Approach</p>
            <h2>How We Work</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line - hidden on mobile */}
                {index < process.length - 1 && (
                  <div className="hidden sm:block absolute top-12 sm:top-14 md:top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-navy/20 to-teal/20" />
                )}
                
                <div className="card-elevated p-5 sm:p-6 md:p-8 text-center relative z-10 h-full">
                  <div className="stat-number text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-4">{item.step}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-charcoal-muted text-sm sm:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <CTASection
        eyebrow="Let's Work Together"
        title="Ready to Discuss Your Project?"
        description="Whether you need a quotation, technical advice, or want to discuss a potential project, we're here to help."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </Layout>
  );
}
