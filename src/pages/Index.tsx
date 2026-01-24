import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  "HVAC and ventilation systems",
  "Mechanical pipework installations",
  "Plant rooms and infrastructure",
  "Gas, water and drainage systems",
  "Commissioning and system performance",
  "Planned and reactive maintenance",
  "Technical project support",
];

const reasons = [
  "Strong technical and site experience behind the business",
  "Practical understanding of how projects run on site",
  "Honest pricing and realistic programming",
  "Clear communication with clients and project teams",
  "Focus on quality, safety and consistency",
  "Reliable delivery without drama",
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
              services for commercial clients — combining senior site experience with 
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
                <Link to="/contact">Speak to Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
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

      {/* What We Do */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                What We Do
              </p>
              <h2 className="mb-6">We deliver:</h2>
              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-muted-foreground font-medium">
                From individual works packages through to coordinated mechanical delivery.
              </p>
            </div>

            <div className="bg-background p-8 lg:p-10 border border-border">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Why TrecomHvac & Mechanical
              </p>
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 bg-navy rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-charcoal font-medium">
                Commercial clients value predictability. That is what we prioritise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Teaser */}
      <section className="section-padding">
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
                Learn More About Our Approach
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
