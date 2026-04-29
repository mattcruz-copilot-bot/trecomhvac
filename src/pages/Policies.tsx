import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { Shield, Award, Leaf, TrendingUp, ChevronRight } from "lucide-react";
import pipeworkDetail from "@/assets/pipework-detail.jpg";
import hvacDuctwork from "@/assets/hvac-ductwork.jpg";
import cadSchematicBg from "@/assets/cad-schematic-bg.jpg";

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
      <section className="relative section-y-hero overflow-hidden">
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
      <section className="section-y bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl mb-1">Health & Safety</h2>
                  <p className="text-charcoal-muted">Fundamental to how we operate</p>
                </div>
              </div>
              <div className="glass-panel rounded-2xl p-8">
                <p className="text-charcoal-muted mb-4 leading-relaxed">
                  Health and safety is fundamental to how TrecomHvac & Mechanical operates.
                  We are committed to maintaining safe working environments for our team, 
                  our clients and all other site personnel.
                </p>
                <p className="text-charcoal-muted">
                  All works are planned and managed in line with UK Health & Safety legislation 
                  and industry best practice.
                </p>
              </div>
            </div>
            
            <div>
              <p className="eyebrow mb-6 text-base">We implement:</p>
              <ul className="space-y-3 mb-6">
                {healthSafety.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-surface backdrop-blur-sm border border-border/50 hover:shadow-lg hover:border-teal/20 transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="glass-panel-dark p-5">
                <p className="text-white font-semibold text-sm sm:text-base">
                  Safety is treated as part of professional delivery, not a box-ticking exercise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competence & Training */}
      <section className="section-y section-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-6 text-base">This includes:</p>
              <ul className="space-y-3 mb-8">
                {competence.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-surface backdrop-blur-sm border border-border/50 hover:shadow-lg hover:border-teal/20 transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="glass-panel-dark p-5 sm:p-6">
                <p className="text-white font-semibold text-sm sm:text-base">
                  As the business grows, we will continue to formalise training structures 
                  and external accreditations.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl mb-1">Competence & Training</h2>
                  <p className="text-charcoal-muted">Qualified teams for every task</p>
                </div>
              </div>
              <div className="glass-panel rounded-2xl p-8">
                <p className="text-charcoal-muted leading-relaxed">
                  We ensure that operatives working on our projects are competent for the 
                  tasks they undertake. This is non-negotiable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="section-y bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl mb-1">Environmental Responsibility</h2>
                  <p className="text-charcoal-muted">Reducing our environmental impact</p>
                </div>
              </div>
              <div className="glass-panel rounded-2xl p-8">
                <p className="text-charcoal-muted mb-4 leading-relaxed">
                  We recognise the construction industry's responsibility to reduce 
                  environmental impact. This is an area we take seriously.
                </p>
                <p className="text-charcoal-muted leading-relaxed">
                  We also have experience working with energy-efficient mechanical systems 
                  and modern building services technologies.
                </p>
              </div>
            </div>
            
            <div>
              <p className="eyebrow mb-6 text-base">We aim to:</p>
              <ul className="space-y-3 mb-6">
                {environmental.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-surface backdrop-blur-sm border border-border/50 hover:shadow-lg hover:border-teal/20 transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal/15 to-navy/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:from-teal group-hover:to-teal-light transition-all">
                      <ChevronRight className="w-4 h-4 text-teal group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="glass-panel-dark p-5">
                <p className="text-white font-semibold text-sm sm:text-base">
                  Sustainability is embedded in our operational approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement - With background */}
      <section className="relative section-y overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={hvacDuctwork} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-navy/60 to-charcoal/80" />
          <img 
            src={cadSchematicBg} 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-screen pointer-events-none"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--charcoal)/0.5)_100%)]" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-navy flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Continuous Improvement</h2>
              <p className="text-white text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                TrecomHvac & Mechanical is committed to continuous improvement across:
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {improvement.map((item) => (
                <div key={item.title} className="glass-card-dark p-5 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/25 to-navy/20 border border-teal/25 flex items-center justify-center mx-auto mb-3 group-hover:from-teal/40 group-hover:to-navy/35 transition-all">
                    <item.icon className="w-5 h-5 text-teal group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
            
            <div className="glass-panel-dark p-8 text-center max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-white leading-relaxed">
                We are building a business designed to meet the expectations of serious 
                commercial clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        className="mt-10 sm:mt-14 md:mt-20"
        eyebrow="Questions?"
        title="Want to learn more about our standards?"
        description="Contact us to discuss our approach to safety, quality and professional delivery."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </Layout>
  );
}
