import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Wind, Wrench, Building2, Droplets, Gauge, Settings } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "HVAC & Ventilation Systems",
  },
  {
    icon: Wrench,
    title: "Mechanical Pipework Installations",
  },
  {
    icon: Building2,
    title: "Plant Rooms & Infrastructure",
  },
  {
    icon: Droplets,
    title: "Gas, Water & Drainage Systems",
  },
  {
    icon: Gauge,
    title: "Commissioning & Performance",
  },
  {
    icon: Settings,
    title: "Planned & Reactive Maintenance",
  },
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
      {/* Hero Section */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-balance">
              Commercial HVAC & Mechanical Services Across London
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              TrecomHvac & Mechanical delivers professional HVAC, plumbing and mechanical 
              services for commercial clients — combining real site experience with 
              reliable, well-managed delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground mb-6">
              TrecomHvac & Mechanical is a London-based mechanical services company 
              providing HVAC, plumbing and gas solutions to commercial, residential 
              and mixed-use developments.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The business is built on real experience delivering work on large, 
              complex sites. That background shapes how we operate today: organised, 
              accountable, safety-focused and commercially aware.
            </p>
            <p className="text-lg font-medium text-charcoal">
              We don't overpromise. We plan properly, communicate clearly and deliver what we agree.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="mb-12">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2>Our Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background p-6 border border-border flex items-start gap-4"
              >
                <service.icon className="h-6 w-6 text-navy flex-shrink-0 mt-0.5" />
                <span className="font-medium text-charcoal">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Why TrecomHvac & Mechanical
              </p>
              <h2 className="mb-8">Why Choose Us</h2>
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-steel border border-border p-8 lg:p-10">
              <p className="text-charcoal font-medium text-lg">
                Commercial clients value predictability. That is what we prioritise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Than Installation Callout */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">More than installation.</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We also support clients with technical problem-solving, project reviews 
              and practical on-site advice. This comes from years of managing complex 
              mechanical works, not just installing them.
            </p>
            <Button variant="hero-outline" asChild>
              <Link to="/technical-advisory">
                Learn About Our Approach
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="text-primary-foreground mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you need a quotation, technical advice, or want to discuss a 
            potential project, we're here to help.
          </p>
          <Button variant="hero-outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-charcoal">
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
