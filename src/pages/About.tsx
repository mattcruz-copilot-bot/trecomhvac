import { Layout } from "@/components/Layout";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Technical Excellence",
    description: "We maintain the highest standards of technical competence across all our work, ensuring every installation meets or exceeds industry requirements.",
  },
  {
    title: "Reliability",
    description: "Our clients trust us to deliver on our commitments. We complete projects on time, on budget, and to specification.",
  },
  {
    title: "Safety First",
    description: "Health and safety is embedded in everything we do. We maintain comprehensive safety procedures and training for all team members.",
  },
  {
    title: "Professional Partnerships",
    description: "We build lasting relationships with our clients, understanding their needs and delivering solutions that add real value.",
  },
];

const accreditations = [
  "Gas Safe Registered",
  "F-Gas Certified Engineers",
  "CSCS Card Holders",
  "Comprehensive Public Liability Insurance",
  "Employer's Liability Insurance",
  "Professional Indemnity Insurance",
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="mb-6">
              Trusted Mechanical Contractors Since Establishment
            </h1>
            <p className="text-lg text-muted-foreground">
              TrecomHvac & Mechanical is a London-based mechanical contracting company 
              specialising in commercial HVAC installations, maintenance, and technical 
              advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Our Approach</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We provide professional mechanical contracting services to commercial 
                  clients across London and the South East. Our team of qualified engineers 
                  brings together decades of combined experience in HVAC, plumbing, and 
                  mechanical installations.
                </p>
                <p>
                  Whether working directly with end clients or as subcontractors to main 
                  contractors, we deliver the same commitment to quality and reliability. 
                  We understand the pressures of commercial projects and structure our 
                  operations to integrate seamlessly with wider project teams.
                </p>
                <p>
                  From small maintenance tasks to complex mechanical installations, we 
                  approach every project with the same attention to detail and commitment 
                  to excellence.
                </p>
              </div>
            </div>

            <div className="bg-steel border border-border p-8">
              <h3 className="mb-6">Accreditations & Insurance</h3>
              <ul className="space-y-4">
                {accreditations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2>What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-8 border border-border">
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working With Us */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Who We Work With</h2>
            <p className="text-muted-foreground mb-8">
              We partner with a range of commercial clients who value reliable, 
              professional mechanical contracting services.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {["Main Contractors", "Managing Agents", "Property Developers", "Facilities Managers"].map((client) => (
                <div key={client} className="text-center">
                  <p className="font-medium text-charcoal">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
