import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wind, Wrench, Building2, Droplets, Gauge, Settings } from "lucide-react";
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
  return (
    <Layout>
      {/* Hero Section with Image */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBuilding} 
            alt="Modern London commercial building at dusk" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 section-padding w-full">
          <div className="container-wide">
            <div className="max-w-3xl">
              <p className="text-electric font-medium tracking-wider uppercase mb-6 animate-fade-up">
                Commercial HVAC Specialists
              </p>
              <h1 className="mb-8 text-balance text-white animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Commercial HVAC & Mechanical Services Across London
              </h1>
              <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
                TrecomHvac & Mechanical delivers professional HVAC, plumbing and mechanical 
                services for commercial clients — combining real site experience with 
                reliable, well-managed delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
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
