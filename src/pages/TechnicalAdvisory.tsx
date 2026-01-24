import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Lightbulb, Scale, Zap } from "lucide-react";

const advisoryServices = [
  {
    icon: Lightbulb,
    title: "System Design Consultation",
    description: "Expert guidance on mechanical system design, equipment selection, and layout optimisation for your project requirements.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency Audits",
    description: "Comprehensive assessments of existing systems to identify opportunities for energy savings and performance improvements.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "Advice on Building Regulations, F-Gas regulations, and other compliance requirements affecting mechanical installations.",
  },
  {
    icon: FileText,
    title: "Technical Specifications",
    description: "Preparation of detailed technical specifications and tender documentation for mechanical works.",
  },
];

const expertise = [
  "HVAC system sizing and selection",
  "Plant room layouts and design",
  "Energy performance calculations",
  "Building Regulations Part L compliance",
  "F-Gas regulations and refrigerant management",
  "Ventilation strategy development",
  "BMS integration recommendations",
  "Life cycle cost analysis",
];

export default function TechnicalAdvisory() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Technical Advisory
            </p>
            <h1 className="mb-6">
              Expert Technical Guidance for Your Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Our technical advisory services help clients make informed decisions 
              about mechanical systems, ensuring optimal performance, compliance, 
              and value for money.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-4">Advisory Services</h2>
            <p className="text-muted-foreground">
              Drawing on our practical experience as mechanical contractors, we 
              provide technical advice that is grounded in real-world application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryServices.map((service) => (
              <div key={service.title} className="bg-background p-8 border border-border">
                <service.icon className="h-8 w-8 text-navy mb-4" />
                <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="mb-6">Areas of Expertise</h2>
              <p className="text-muted-foreground mb-8">
                Our technical team provides specialist advice across a range of 
                mechanical engineering disciplines, supporting clients from 
                concept through to completion.
              </p>
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 bg-steel border border-border">
                  <div className="h-1.5 w-1.5 bg-navy rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Engage */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">When to Engage Technical Advisory</h2>
            <p className="text-muted-foreground mb-8">
              Technical advisory services can add value at various project stages:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-background p-6 border border-border">
                <p className="font-semibold mb-2">Pre-Construction</p>
                <p className="text-sm text-muted-foreground">
                  System design review, equipment selection, and specification development.
                </p>
              </div>
              <div className="bg-background p-6 border border-border">
                <p className="font-semibold mb-2">During Construction</p>
                <p className="text-sm text-muted-foreground">
                  Technical problem-solving, design changes, and coordination support.
                </p>
              </div>
              <div className="bg-background p-6 border border-border">
                <p className="font-semibold mb-2">Post-Completion</p>
                <p className="text-sm text-muted-foreground">
                  Performance assessment, energy audits, and upgrade recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
