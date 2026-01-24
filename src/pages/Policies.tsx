import { Layout } from "@/components/Layout";
import { CheckCircle2 } from "lucide-react";

const healthSafety = [
  "Site-specific risk assessments",
  "Task-specific method statements",
  "Clear safe systems of work",
  "Appropriate supervision",
  "Ongoing review of site conditions",
];

const competence = [
  "Relevant experience",
  "Appropriate site certification where required",
  "Suitable training",
  "Proper use of PPE",
  "Safe and well-maintained equipment",
];

const environmental = [
  "Reduce waste wherever possible",
  "Re-use materials where appropriate",
  "Recycle responsibly",
  "Minimise unnecessary energy use",
  "Promote environmental awareness within our team",
];

const improvement = [
  "Health and safety",
  "Quality",
  "Documentation",
  "Training",
  "Sustainability",
  "Client experience",
];

export default function Policies() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Our Policies
            </p>
            <h1 className="mb-6">
              Policies
            </h1>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">Health & Safety</h2>
            <p className="text-muted-foreground mb-6">
              Health and safety is fundamental to how TrecomHvac & Mechanical operates.
            </p>
            <p className="text-muted-foreground mb-6">
              We are committed to maintaining safe working environments for our team, 
              our clients and all other site personnel. All works are planned and managed 
              in line with UK Health & Safety legislation and industry best practice.
            </p>
            <p className="text-muted-foreground mb-4">We implement:</p>
            <ul className="space-y-3 mb-6">
              {healthSafety.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-charcoal font-medium">
              Safety is treated as part of professional delivery, not a box-ticking exercise.
            </p>
          </div>
        </div>
      </section>

      {/* Competence & Training */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">Competence & Training</h2>
            <p className="text-muted-foreground mb-6">
              We ensure that operatives working on our projects are competent for the 
              tasks they undertake.
            </p>
            <p className="text-muted-foreground mb-4">This includes:</p>
            <ul className="space-y-3 mb-6">
              {competence.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-navy flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              As the business grows, we will continue to formalise training structures 
              and external accreditations.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">Environmental Responsibility</h2>
            <p className="text-muted-foreground mb-6">
              We recognise the construction industry's responsibility to reduce 
              environmental impact.
            </p>
            <p className="text-muted-foreground mb-4">We aim to:</p>
            <ul className="space-y-3 mb-6">
              {environmental.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="h-1.5 w-1.5 bg-navy rounded-full mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              We also have experience working with energy-efficient mechanical systems 
              and modern building services technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="section-padding bg-steel">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h2 className="mb-6">Continuous Improvement</h2>
            <p className="text-muted-foreground mb-6">
              TrecomHvac & Mechanical is committed to continuous improvement across:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {improvement.map((item) => (
                <div key={item} className="bg-background border border-border p-4">
                  <span className="text-charcoal font-medium">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-charcoal font-medium">
              We are building a business designed to meet the expectations of serious 
              commercial clients.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
