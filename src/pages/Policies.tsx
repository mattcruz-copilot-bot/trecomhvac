import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { Shield, Award, Leaf, TrendingUp, ChevronRight } from "lucide-react";
import pipeworkDetail from "@/assets/pipework-detail.jpg";
import hvacDuctwork from "@/assets/hvac-ductwork.jpg";

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
  { title: "Health & Safety", icon: Shield },
  { title: "Quality", icon: Award },
  { title: "Documentation", icon: Award },
  { title: "Training", icon: Award },
  { title: "Sustainability", icon: Leaf },
  { title: "Client Experience", icon: TrendingUp },
];

export default function Policies() {
  return (
    <Layout>
      {/* Hero with background */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={pipeworkDetail} 
            alt="Mechanical pipework" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-5">
              Our Policies
            </p>
            <h1 className="text-white mb-5">Policies</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Our commitment to safety, quality and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl mb-1">Health & Safety</h2>
                  <p className="text-charcoal-muted text-sm">Fundamental to how we operate</p>
                </div>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <p className="text-charcoal-muted mb-4 leading-relaxed text-sm">
                  Health and safety is fundamental to how TrecomHvac & Mechanical operates.
                  We are committed to maintaining safe working environments for our team, 
                  our clients and all other site personnel.
                </p>
                <p className="text-charcoal-muted text-sm">
                  All works are planned and managed in line with UK Health & Safety legislation 
                  and industry best practice.
                </p>
              </div>
            </div>
            
            <div>
              <p className="eyebrow mb-5">We implement:</p>
              <ul className="space-y-2 mb-6">
                {healthSafety.map((item) => (
                  <li key={item} className="flex items-center gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-3.5 h-3.5 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="glass-panel-dark rounded-xl p-5">
                <p className="text-white font-semibold text-sm">
                  Safety is treated as part of professional delivery, not a box-ticking exercise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competence & Training */}
      <section className="py-16 md:py-20 section-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-5">This includes:</p>
              <ul className="space-y-2 mb-6">
                {competence.map((item) => (
                  <li key={item} className="flex items-center gap-3 p-3 rounded-lg bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-3.5 h-3.5 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal-muted leading-relaxed text-sm">
                As the business grows, we will continue to formalise training structures 
                and external accreditations.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl mb-1">Competence & Training</h2>
                  <p className="text-charcoal-muted text-sm">Qualified teams for every task</p>
                </div>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <p className="text-charcoal-muted leading-relaxed text-sm">
                  We ensure that operatives working on our projects are competent for the 
                  tasks they undertake. This is non-negotiable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl mb-1">Environmental Responsibility</h2>
                  <p className="text-charcoal-muted text-sm">Reducing our environmental impact</p>
                </div>
              </div>
              <div className="glass-panel rounded-xl p-6">
                <p className="text-charcoal-muted mb-4 leading-relaxed text-sm">
                  We recognise the construction industry's responsibility to reduce 
                  environmental impact. This is an area we take seriously.
                </p>
                <p className="text-charcoal-muted leading-relaxed text-sm">
                  We also have experience working with energy-efficient mechanical systems 
                  and modern building services technologies.
                </p>
              </div>
            </div>
            
            <div>
              <p className="eyebrow mb-5">We aim to:</p>
              <ul className="space-y-2">
                {environmental.map((item) => (
                  <li key={item} className="flex items-center gap-3 p-3 rounded-lg bg-white/70 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-teal/15 to-navy/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:from-teal group-hover:to-teal-light transition-all">
                      <ChevronRight className="w-3.5 h-3.5 text-teal group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement - With background */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={hvacDuctwork} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/96 via-slate/94 to-navy/92" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-navy flex items-center justify-center mx-auto mb-5">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white mb-3">Continuous Improvement</h2>
              <p className="text-white/60">
                TrecomHvac & Mechanical is committed to continuous improvement across:
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {improvement.map((item) => (
                <div key={item.title} className="glass-card-dark p-4 text-center group">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal/25 to-navy/20 border border-teal/20 flex items-center justify-center mx-auto mb-2 group-hover:from-teal/40 group-hover:to-navy/30 transition-all">
                    <item.icon className="w-4 h-4 text-teal group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-white font-semibold text-sm">{item.title}</span>
                </div>
              ))}
            </div>
            
            <div className="glass-panel-dark rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-white">
                We are building a business designed to meet the expectations of serious 
                commercial clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Questions?"
        title="Want to learn more about our standards?"
        description="Contact us to discuss our approach to safety, quality and professional delivery."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </Layout>
  );
}
