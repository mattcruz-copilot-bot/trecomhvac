import { Layout } from "@/components/Layout";
import { CheckCircle2 } from "lucide-react";

const howWeWork = [
  "Jobs are planned properly",
  "Risks are identified early",
  "Problems are dealt with directly",
  "Communication stays clear",
  "Standards stay consistent",
];

const approach = [
  "Assess properly before pricing",
  "Provide clear, realistic quotes",
  "Communicate clearly throughout delivery",
  "Take responsibility for issues",
  "Deliver work we are prepared to stand behind",
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
              About TrecomHvac & Mechanical
            </h1>
            <p className="text-lg text-muted-foreground">
              TrecomHvac & Mechanical provides commercial HVAC and mechanical services across London.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-lg text-muted-foreground mb-6">
              The company was established to bring a higher standard of organisation, 
              communication and technical understanding to mechanical delivery. While 
              the business itself is new, the experience behind it spans major London 
              projects, complex site environments and senior operational roles.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              That experience influences how we work:
            </p>
            <ul className="space-y-3 mb-8">
              {howWeWork.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                  <span className="text-charcoal font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground">
              We understand the pressures faced by main contractors, consultants and 
              managing agents because we have worked within those environments for years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Experience */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">Our Experience</h2>
            <p className="text-muted-foreground mb-6">
              Our background includes involvement in large commercial developments, 
              multi-unit residential schemes, refurbishment programmes and complex 
              mechanical packages across London.
            </p>
            <p className="text-muted-foreground mb-6">
              We are currently building a formal project portfolio for TrecomHvac & 
              Mechanical as the business grows. However, our internal standards, 
              working methods and technical approach are already shaped by high-level 
              site experience.
            </p>
            <p className="text-charcoal font-medium">
              Clients don't get "startup standards". They get senior-industry standards 
              applied to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="mb-6">Our Approach</h2>
              <p className="text-muted-foreground mb-8">
                We operate in a straightforward way:
              </p>
              <ul className="space-y-4">
                {approach.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 bg-navy rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-steel border border-border p-8 lg:p-10">
              <p className="text-xl font-semibold text-charcoal mb-4">
                Long-term Focus
              </p>
              <p className="text-muted-foreground">
                We are building this company for the long term, not for short-term volume.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
