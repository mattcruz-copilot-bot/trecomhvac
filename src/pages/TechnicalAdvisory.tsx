import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import engineersConsulting from "@/assets/engineers-consulting.jpg";

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
      {/* Hero with Image */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-electric uppercase tracking-wider mb-4">
                Technical Advisory
              </p>
              <h1 className="mb-8">
                Technical Advisory & Project Support
              </h1>
              <p className="text-xl text-charcoal-muted leading-relaxed">
                TrecomHvac & Mechanical provides technical advisory and project support 
                services for clients who need experienced mechanical input beyond installation alone.
              </p>
            </div>
            <div className="relative">
              <img 
                src={engineersConsulting} 
                alt="Engineers reviewing technical drawings on-site" 
                className="w-full h-auto rounded-lg shadow-elevated"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-line" />

      {/* Experience & Problems */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-lg text-charcoal-muted mb-10 leading-relaxed">
              This service is built on real senior site experience managing large teams, 
              complex programmes and high-risk mechanical packages.
            </p>
            <h2 className="mb-8">We understand where projects typically fail:</h2>
            <ul className="space-y-4 mb-10">
              {problemAreas.map((problem) => (
                <li key={problem} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-electric rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-charcoal-muted">{problem}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal font-semibold text-lg">
              Our role is to identify these issues early and help resolve them practically.
            </p>
          </div>
        </div>
      </section>

      {/* How We Support */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="mb-8">How We Support Clients</h2>
              <p className="text-charcoal-muted mb-8">We can assist with:</p>
              <ul className="space-y-4">
                {supportServices.map((service) => (
                  <li key={service} className="feature-item">
                    <CheckCircle2 className="feature-icon" />
                    <span className="text-charcoal-muted">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="card-elevated p-8 lg:p-10 mb-8">
                <h3 className="text-lg font-semibold text-charcoal mb-6">This is particularly valuable for:</h3>
                <ul className="space-y-4">
                  {valuableFor.map((client) => (
                    <li key={client} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-electric rounded-full flex-shrink-0" />
                      <span className="text-charcoal font-medium">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-charcoal-muted leading-relaxed">
                Clients who use this service gain access to senior-level mechanical insight 
                without employing a full-time technical manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-8">Why This Matters</h2>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Many mechanical issues are not caused by poor installation — they are caused 
              by poor coordination, poor sequencing, or decisions made too late.
            </p>
            <p className="text-2xl font-semibold text-white mb-10">
              This service exists to prevent that.
            </p>
            <Button 
              variant="outline" 
              size="xl" 
              asChild 
              className="border-white text-white hover:bg-white hover:text-charcoal"
            >
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
