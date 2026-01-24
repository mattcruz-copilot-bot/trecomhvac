import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    category: "HVAC Systems",
    items: [
      {
        title: "Air Conditioning Installation",
        description: "Supply and installation of split systems, VRF/VRV systems, and centralised air conditioning for commercial spaces.",
      },
      {
        title: "Heating Systems",
        description: "Commercial boiler installations, underfloor heating, and complete heating system design and installation.",
      },
      {
        title: "Ventilation",
        description: "Mechanical ventilation systems, heat recovery units, and ductwork installations for commercial buildings.",
      },
      {
        title: "Refrigeration",
        description: "Commercial refrigeration systems for retail, hospitality, and industrial applications.",
      },
    ],
  },
  {
    category: "Mechanical Installations",
    items: [
      {
        title: "Pipework & Plant",
        description: "Commercial pipework installations, plant room fit-outs, and mechanical system integration.",
      },
      {
        title: "Plumbing Systems",
        description: "Commercial plumbing installations including hot and cold water systems, waste systems, and sanitary ware.",
      },
      {
        title: "Gas Installations",
        description: "Gas Safe registered installations including commercial gas pipework and appliance connections.",
      },
    ],
  },
  {
    category: "Maintenance & Support",
    items: [
      {
        title: "Planned Preventive Maintenance",
        description: "Scheduled maintenance programmes to keep your mechanical systems operating efficiently and reliably.",
      },
      {
        title: "Reactive Maintenance",
        description: "Rapid response breakdown service with experienced engineers available when you need them.",
      },
      {
        title: "System Commissioning",
        description: "Professional commissioning services to ensure optimal system performance from day one.",
      },
    ],
  },
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
              Complete Mechanical Contracting Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              From initial design through to installation and ongoing maintenance, 
              we provide comprehensive mechanical services for commercial clients.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      {services.map((section, sectionIndex) => (
        <section
          key={section.category}
          className={`section-padding ${sectionIndex % 2 === 1 ? "bg-steel" : ""}`}
        >
          <div className="container-wide">
            <h2 className="mb-8">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((service) => (
                <div
                  key={service.title}
                  className="bg-background p-6 border border-border"
                >
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-charcoal text-primary-foreground section-padding">
        <div className="container-wide text-center">
          <h2 className="text-primary-foreground mb-4">Need a Quote?</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your project requirements and receive a 
            competitive quotation.
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
