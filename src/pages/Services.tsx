import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const operateAs = [
  "Mechanical contractor",
  "Specialist subcontractor",
  "Ongoing maintenance provider",
  "Technical support partner",
];

const coreServices = [
  "HVAC systems and ventilation",
  "Mechanical pipework installations",
  "Plant rooms and mechanical infrastructure",
  "Hot and cold water services",
  "Gas systems",
  "Drainage systems",
  "Fire-rated mechanical services",
  "Airside installations",
  "Refurbishment and upgrade works",
];

const projectSupport = [
  "AutoCAD drawings and coordination layouts",
  "Programming and sequencing of works",
  "Testing and commissioning",
  "O&M manuals and handover documentation",
  "BMS and controls coordination",
  "Insulation and heat loss prevention",
  "Ductwork and AHU cleaning",
  "Planned and reactive maintenance",
  "Ongoing technical support",
];

const howWeOperate = [
  "Competent, experienced engineers",
  "Clear RAMS documentation",
  "Proper supervision",
  "Professional site conduct",
  "Strong safety culture",
  "Attention to quality",
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              TrecomHvac & Mechanical delivers mechanical, HVAC, plumbing and gas services 
              across commercial, residential, education, healthcare and mixed-use sectors.
            </p>
            <p className="text-muted-foreground mb-4">We can operate as:</p>
            <div className="flex flex-wrap gap-3">
              {operateAs.map((item) => (
                <span key={item} className="px-4 py-2 bg-steel border border-border text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              Depending on what the project requires.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mechanical Services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-8">Core Mechanical Services</h2>
              <ul className="space-y-4">
                {coreServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-8">Project Delivery & Technical Support</h2>
              <p className="text-muted-foreground mb-6">
                As part of our works, we can provide:
              </p>
              <ul className="space-y-4">
                {projectSupport.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 bg-navy rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal font-medium mt-8">
                Our focus is not just installation, but system performance and buildability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">How We Operate on Site</h2>
            <p className="text-muted-foreground mb-8">We work with:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {howWeOperate.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-background border border-border">
                  <CheckCircle2 className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-charcoal font-medium mt-8">
              We aim to be easy to work with and dependable under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="text-primary-foreground mb-4">Need a Quote?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your project requirements and receive a competitive quotation.
          </p>
          <Button variant="hero-outline" size="lg" asChild className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-charcoal">
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
