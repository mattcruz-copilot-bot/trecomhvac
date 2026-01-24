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
      {/* Hero - Light with glass panel */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="mb-8">Our Services</h1>
            <p className="text-xl text-charcoal-muted mb-10 leading-relaxed">
              TrecomHvac & Mechanical delivers mechanical, HVAC, plumbing and gas services 
              across commercial, residential, education, healthcare and mixed-use sectors.
            </p>
            <p className="text-charcoal-muted mb-6">We can operate as:</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {operateAs.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-charcoal-muted italic">
              Depending on what the project requires.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-line-strong" />

      {/* Core Mechanical Services - Surface section */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="glass-panel rounded-2xl p-10">
              <h2 className="mb-10">Core Mechanical Services</h2>
              <ul className="space-y-4">
                {coreServices.map((service) => (
                  <li key={service} className="feature-item">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-electric" />
                    </div>
                    <span className="text-charcoal-muted">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-10">
              <h2 className="mb-10">Project Delivery & Technical Support</h2>
              <p className="text-charcoal-muted mb-8">
                As part of our works, we can provide:
              </p>
              <ul className="space-y-4">
                {projectSupport.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-2">
                    <div className="w-2 h-2 bg-electric rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-charcoal-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-6 border-t border-border/50">
                <p className="text-charcoal font-semibold">
                  Our focus is not just installation, but system performance and buildability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate - White section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="mb-6">How We Operate on Site</h2>
              <p className="text-charcoal-muted text-lg">We work with:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {howWeOperate.map((item) => (
                <div key={item} className="card-glass p-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-electric" />
                  </div>
                  <span className="text-charcoal font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-14 text-center">
              <p className="text-charcoal font-semibold text-lg">
                We aim to be easy to work with and dependable under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Dark section */}
      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <p className="text-electric font-medium tracking-wider uppercase mb-6">
            Get Started
          </p>
          <h2 className="mb-8">Need a Quote?</h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            Contact us to discuss your project requirements and receive a competitive quotation.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
