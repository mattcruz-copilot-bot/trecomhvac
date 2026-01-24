import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const problemAreas = [
  "Poor sequencing",
  "Design that doesn't reflect site reality",
  "Coordination gaps between trades",
  "Unrealistic programmes",
  "Inadequate commissioning",
  "Lack of ownership when issues arise",
];

const supportServices = [
  "Technical reviews of mechanical designs",
  "Buildability and sequencing advice",
  "On-site inspections and quality reviews",
  "Troubleshooting system performance issues",
  "Supporting project recovery",
  "Independent technical input for developers",
  "Supporting handover and commissioning processes",
  "Acting as technical representative in meetings",
];

const valuableFor = [
  "Developers",
  "Managing agents",
  "Main contractors",
  "Facilities managers",
  "Asset managers",
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
              Technical Advisory & Project Support
            </h1>
            <p className="text-lg text-muted-foreground">
              TrecomHvac & Mechanical also provides technical advisory and project support 
              services for clients who need experienced mechanical input beyond installation alone.
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Problems */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground mb-8">
              This service is built on real senior site experience managing large teams, 
              complex programmes and high-risk mechanical packages.
            </p>
            <h2 className="mb-6">We understand where projects typically fail:</h2>
            <ul className="space-y-3 mb-8">
              {problemAreas.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-navy rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal font-medium">
              Our role is to identify these issues early and help resolve them practically.
            </p>
          </div>
        </div>
      </section>

      {/* How We Support */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">How We Support Clients</h2>
              <p className="text-muted-foreground mb-6">We can assist with:</p>
              <ul className="space-y-3">
                {supportServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 bg-navy rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="bg-background border border-border p-8 lg:p-10 mb-8">
                <h3 className="text-lg font-semibold mb-4">This is particularly valuable for:</h3>
                <ul className="space-y-3">
                  {valuableFor.map((client) => (
                    <li key={client} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 bg-navy rounded-full flex-shrink-0" />
                      <span className="text-charcoal font-medium">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-muted-foreground">
                Clients who use this service gain access to senior-level mechanical insight 
                without employing a full-time technical manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">Why This Matters</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Many mechanical issues are not caused by poor installation — they are caused 
              by poor coordination, poor sequencing, or decisions made too late.
            </p>
            <p className="text-xl font-semibold text-charcoal mb-8">
              This service exists to prevent that.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
