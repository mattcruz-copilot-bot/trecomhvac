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
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-electric uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="mb-8">Our Services</h1>
            <p className="text-xl text-charcoal-muted mb-8 leading-relaxed">
              TrecomHvac & Mechanical delivers mechanical, HVAC, plumbing and gas services 
              across commercial, residential, education, healthcare and mixed-use sectors.
            </p>
            <p className="text-charcoal-muted mb-5">We can operate as:</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {operateAs.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
            <p className="text-charcoal-muted">
              Depending on what the project requires.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-line" />

      {/* Core Mechanical Services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="mb-10">Core Mechanical Services</h2>
              <ul className="space-y-4">
                {coreServices.map((service) => (
                  <li key={service} className="feature-item">
                    <CheckCircle2 className="feature-icon" />
                    <span className="text-charcoal-muted">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-10">Project Delivery & Technical Support</h2>
              <p className="text-charcoal-muted mb-8">
                As part of our works, we can provide:
              </p>
              <ul className="space-y-4">
                {projectSupport.map((item) => (
                  <li key={item} className="flex items-start gap-4 py-2">
                    <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-charcoal-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal font-semibold mt-10">
                Our focus is not just installation, but system performance and buildability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h2 className="mb-6">How We Operate on Site</h2>
            <p className="text-charcoal-muted mb-10">We work with:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {howWeOperate.map((item) => (
                <div key={item} className="card-elevated p-5 flex items-center gap-4">
                  <CheckCircle2 className="h-5 w-5 text-electric flex-shrink-0" />
                  <span className="text-charcoal">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-charcoal font-semibold mt-10">
              We aim to be easy to work with and dependable under pressure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <h2 className="mb-6">Need a Quote?</h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg">
            Contact us to discuss your project requirements and receive a competitive quotation.
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            asChild 
            className="border-white text-white hover:bg-white hover:text-charcoal"
          >
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
