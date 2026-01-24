import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Wrench, Building2, Droplets, Gauge, Settings, ChevronDown, Shield, Clock, MessageSquare, Award, Target, Zap } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";
import plantRoom from "@/assets/plant-room.jpg";

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
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section - Full viewport with premium overlay */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 container-wide text-center px-6">
          <div className="max-w-5xl mx-auto">
            {/* Eyebrow text */}
            <p className="eyebrow mb-6 animate-fade-up opacity-0" 
               style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
              <span className="text-teal">Commercial HVAC Specialists</span>
            </p>
            
            {/* Main Headline */}
            <h1 className="text-white mb-8 animate-fade-up opacity-0 text-balance"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Commercial HVAC & Mechanical Services Across London
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-up opacity-0"
               style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              TrecomHvac & Mechanical delivers professional HVAC, plumbing and mechanical 
              services for commercial clients — combining real site experience with 
              reliable, well-managed delivery.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0"
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

      {/* Credibility Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-10 md:p-14">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
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
                  <div className="pt-6 border-t border-border">
                    <p className="text-xl md:text-2xl font-bold text-charcoal">
                      We don't overpromise. We plan properly, communicate clearly and deliver what we agree.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Visual cards */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="text-balance">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-sm hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center mb-5 group-hover:from-navy group-hover:to-teal transition-all duration-300">
                  <service.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-charcoal mb-2 group-hover:text-navy transition-colors">{service.title}</h4>
                <p className="text-charcoal-muted text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Trecom - Premium cards with image */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content side */}
            <div>
              <p className="eyebrow mb-4">Why TrecomHvac</p>
              <h2 className="mb-10">Why Choose Us</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, index) => (
                  <div key={reason.title} className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all duration-300">
                        <reason.icon className="w-5 h-5 text-navy group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-charcoal mb-1">{reason.title}</h4>
                        <p className="text-sm text-charcoal-muted leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 glass-panel-dark rounded-2xl p-8">
                <p className="text-white text-lg font-semibold leading-relaxed">
                  Commercial clients value predictability. That is what we prioritise.
                </p>
              </div>
            </div>

            {/* Image side */}
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-navy/15 to-teal/15 rounded-3xl blur-2xl" />
              <img 
                src={plantRoom} 
                alt="Professional mechanical plant room installation" 
                className="relative w-full h-auto rounded-3xl shadow-elevated-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Advisory Teaser - Dark section */}
      <section className="section-dark section-padding relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
              Technical Advisory
            </p>
            <h2 className="text-white mb-8">More than installation.</h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto">
              We also support clients with technical problem-solving, project reviews 
              and practical on-site advice. This comes from years of managing complex 
              mechanical works, not just installing them.
            </p>
            <Button variant="hero-outline" size="lg" asChild className="group">
              <Link to="/technical-advisory">
                Learn About Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - Our Approach */}
      <section className="section-padding section-warm">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Our Approach</p>
            <h2>How We Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-navy/20 to-teal/20" />
                )}
                
                <div className="card-elevated p-8 text-center relative z-10 h-full">
                  <div className="stat-number mb-4">{item.step}</div>
                  <h3 className="text-2xl mb-3">{item.title}</h3>
                  <p className="text-charcoal-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
            Let's Work Together
          </p>
          <h2 className="text-white mb-8 text-balance">Ready to Discuss Your Project?</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you need a quotation, technical advice, or want to discuss a 
            potential project, we're here to help.
          </p>
          <Button variant="hero" size="xl" asChild className="group">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
