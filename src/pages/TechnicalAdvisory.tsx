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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-4">
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
              <div className="absolute -inset-4 bg-gradient-to-br from-electric/20 to-teal/20 rounded-2xl blur-2xl" />
              <img 
                src={engineersConsulting} 
                alt="Engineers reviewing technical drawings on-site" 
                className="relative w-full h-auto rounded-2xl shadow-elevated-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-line-strong" />

      {/* Experience & Problems - Surface section */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-10 md:p-14">
              <p className="text-lg text-charcoal-muted mb-10 leading-relaxed">
                This service is built on real senior site experience managing large teams, 
                complex programmes and high-risk mechanical packages.
              </p>
              <h2 className="mb-8">We understand where projects typically fail:</h2>
              <ul className="space-y-4 mb-10">
                {problemAreas.map((problem) => (
                  <li key={problem} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-electric rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-charcoal-muted text-lg">{problem}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border/50">
                <p className="text-charcoal font-semibold text-xl">
                  Our role is to identify these issues early and help resolve them practically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support - White section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-8">How We Support Clients</h2>
              <p className="text-charcoal-muted mb-8">We can assist with:</p>
              <ul className="space-y-4">
                {supportServices.map((service) => (
                  <li key={service} className="feature-item">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-electric" />
                    </div>
                    <span className="text-charcoal-muted">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="card-glass p-10 mb-8">
                <h3 className="text-xl font-bold text-charcoal mb-8">This is particularly valuable for:</h3>
                <ul className="space-y-4">
                  {valuableFor.map((client) => (
                    <li key={client} className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gradient-to-br from-electric to-teal rounded-full flex-shrink-0" />
                      <span className="text-charcoal font-semibold text-lg">{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-charcoal-muted leading-relaxed text-lg">
                Clients who use this service gain access to senior-level mechanical insight 
                without employing a full-time technical manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters - Dark section */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-electric font-medium tracking-wider uppercase mb-6">
              Prevention Over Cure
            </p>
            <h2 className="mb-10">Why This Matters</h2>
            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Many mechanical issues are not caused by poor installation — they are caused 
              by poor coordination, poor sequencing, or decisions made too late.
            </p>
            <p className="text-3xl font-bold text-white mb-14">
              This service exists to prevent that.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
