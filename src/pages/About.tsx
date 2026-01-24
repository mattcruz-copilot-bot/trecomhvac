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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-4">
              About Us
            </p>
            <h1 className="mb-8">
              About TrecomHvac & Mechanical
            </h1>
            <p className="text-xl text-charcoal-muted leading-relaxed">
              TrecomHvac & Mechanical provides commercial HVAC and mechanical services across London.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-line-strong" />

      {/* Main Content - Surface section */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-10 md:p-14">
              <p className="text-lg text-charcoal-muted mb-6 leading-relaxed">
                The company was established to bring a higher standard of organisation, 
                communication and technical understanding to mechanical delivery. While 
                the business itself is new, the experience behind it spans major London 
                projects, complex site environments and senior operational roles.
              </p>
              <p className="text-lg text-charcoal-muted mb-10 leading-relaxed">
                That experience influences how we work:
              </p>
              <ul className="space-y-4 mb-10">
                {howWeWork.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-electric" />
                    </div>
                    <span className="text-charcoal font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border/50">
                <p className="text-lg text-charcoal-muted">
                  We understand the pressures faced by main contractors, consultants and 
                  managing agents because we have worked within those environments for years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience - Dark section */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-electric font-medium tracking-wider uppercase mb-6">
              Background
            </p>
            <h2 className="mb-10">Our Experience</h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Our background includes involvement in large commercial developments, 
              multi-unit residential schemes, refurbishment programmes and complex 
              mechanical packages across London.
            </p>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              We are currently building a formal project portfolio for TrecomHvac & 
              Mechanical as the business grows. However, our internal standards, 
              working methods and technical approach are already shaped by high-level 
              site experience.
            </p>
            <p className="text-white font-bold text-2xl">
              Clients don't get "startup standards". They get senior-industry standards 
              applied to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach - White section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="mb-8">Our Approach</h2>
              <p className="text-charcoal-muted mb-10 text-lg">
                We operate in a straightforward way:
              </p>
              <ul className="space-y-5">
                {approach.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-electric rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-charcoal-muted text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glass p-10 lg:p-12">
              <p className="text-2xl font-bold text-charcoal mb-4">
                Long-term Focus
              </p>
              <p className="text-charcoal-muted text-lg leading-relaxed">
                We are building this company for the long term, not for short-term volume.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
