import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Wrench, Shield, Users, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial HVAC",
    description: "Complete heating, ventilation, and air conditioning solutions for commercial buildings.",
  },
  {
    icon: Wrench,
    title: "Mechanical Installation",
    description: "Professional installation of mechanical systems, pipework, and plant equipment.",
  },
  {
    icon: Shield,
    title: "Maintenance & Servicing",
    description: "Planned preventive maintenance and reactive servicing to keep your systems running.",
  },
  {
    icon: Users,
    title: "Technical Consultancy",
    description: "Expert advice on system design, energy efficiency, and regulatory compliance.",
  },
];

const credentials = [
  "Gas Safe Registered",
  "F-Gas Certified",
  "CSCS Accredited",
  "Fully Insured",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              London-Based Mechanical Contractor
            </p>
            <h1 className="mb-6 text-balance">
              Professional Mechanical & HVAC Solutions for Commercial Clients
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              We deliver reliable mechanical contracting services to main contractors, 
              managing agents, and developers across London and the South East. 
              Technical excellence, delivered on time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2 className="mb-4">Comprehensive Mechanical Services</h2>
            <p className="text-muted-foreground">
              From initial design consultation through to installation and ongoing maintenance, 
              we provide end-to-end mechanical contracting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-background p-6 border border-border"
              >
                <service.icon className="h-8 w-8 text-navy mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="hero-outline" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                Why TrecomHvac
              </p>
              <h2 className="mb-6">Built on Technical Excellence</h2>
              <p className="text-muted-foreground mb-6">
                With years of experience in commercial mechanical contracting, we understand 
                the demands of complex projects and tight deadlines. Our team combines 
                technical expertise with reliable project delivery.
              </p>
              <p className="text-muted-foreground mb-8">
                We work closely with main contractors, managing agents, and property developers 
                to ensure every project is completed to the highest standards, on time and 
                within budget.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {credentials.map((credential) => (
                  <div key={credential} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-navy flex-shrink-0" />
                    <span className="text-sm font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-steel border border-border p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-semibold text-charcoal mb-1">20+</p>
                  <p className="text-sm text-muted-foreground">Years Combined Experience</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-4xl font-semibold text-charcoal mb-1">100%</p>
                  <p className="text-sm text-muted-foreground">Projects Completed On Time</p>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="text-4xl font-semibold text-charcoal mb-1">London</p>
                  <p className="text-sm text-muted-foreground">& South East Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="text-primary-foreground mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you need a quote, technical advice, or want to discuss a 
            potential partnership, we're here to help.
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
