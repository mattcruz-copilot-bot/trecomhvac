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
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBuilding} 
            alt="Modern London commercial building at dusk" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />
        </div>
        <div className="relative z-10 section-padding">
          <div className="container-wide">
            <div className="max-w-3xl">
              <h1 className="mb-8 text-balance text-white">
                Commercial HVAC & Mechanical Services Across London
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                TrecomHvac & Mechanical delivers professional HVAC, plumbing and mechanical 
                services for commercial clients — combining real site experience with 
                reliable, well-managed delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="xl" asChild>
                  <Link to="/contact">
                    Request a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  asChild 
                  className="border-white text-white hover:bg-white hover:text-charcoal"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-lg text-charcoal-muted mb-6 leading-relaxed">
              TrecomHvac & Mechanical is a London-based mechanical services company 
              providing HVAC, plumbing and gas solutions to commercial, residential 
              and mixed-use developments.
            </p>
            <p className="text-lg text-charcoal-muted mb-6 leading-relaxed">
              The business is built on real experience delivering work on large, 
              complex sites. That background shapes how we operate today: organised, 
              accountable, safety-focused and commercially aware.
            </p>
            <p className="text-xl font-semibold text-charcoal">
              We don't overpromise. We plan properly, communicate clearly and deliver what we agree.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-line" />

      {/* Services Grid */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="mb-14">
            <p className="text-sm font-medium text-electric uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2>Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <div key={service.title} className="card-elevated p-6 flex items-start gap-4">
                <div className="icon-box">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-charcoal pt-3">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Image */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-electric uppercase tracking-wider mb-3">
                Why TrecomHvac & Mechanical
              </p>
              <h2 className="mb-10">Why Choose Us</h2>
              <ul className="space-y-5">
                {reasons.map((reason) => (
                  <li key={reason} className="feature-item">
                    <CheckCircle2 className="feature-icon" />
                    <span className="text-charcoal-muted">{reason}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-8 bg-charcoal rounded-lg">
                <p className="text-white text-lg font-medium leading-relaxed">
                  Commercial clients value predictability. That is what we prioritise.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src={plantRoom} 
                alt="Professional mechanical plant room installation" 
                className="w-full h-auto rounded-lg shadow-elevated"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* More Than Installation Callout */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">More than installation.</h2>
            <p className="text-lg text-charcoal-muted mb-10 leading-relaxed">
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

      {/* CTA Section */}
      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <h2 className="mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg">
            Whether you need a quotation, technical advice, or want to discuss a 
            potential project, we're here to help.
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            asChild 
            className="border-white text-white hover:bg-white hover:text-charcoal"
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
