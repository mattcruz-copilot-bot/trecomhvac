import { Layout } from "@/components/Layout";
import { Shield, Award, Leaf, TrendingUp, ChevronRight } from "lucide-react";
import heroBuilding from "@/assets/hero-building.jpg";

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
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBuilding} 
            alt="Commercial building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
              Our Policies
            </p>
            <h1 className="text-white mb-6">Policies</h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Our commitment to safety, quality and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="mb-2">Health & Safety</h2>
                  <p className="text-charcoal-muted">Fundamental to how we operate</p>
                </div>
              </div>
              <div className="glass-panel rounded-2xl p-8">
                <p className="text-charcoal-muted mb-6 leading-relaxed">
                  Health and safety is fundamental to how TrecomHvac & Mechanical operates.
                  We are committed to maintaining safe working environments for our team, 
                  our clients and all other site personnel.
                </p>
                <p className="text-charcoal-muted mb-6">
                  All works are planned and managed in line with UK Health & Safety legislation 
                  and industry best practice.
                </p>
              </div>
            </div>
            
            <div>
              <p className="eyebrow mb-6">We implement:</p>
              <ul className="space-y-3 mb-8">
                {healthSafety.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="glass-panel-dark rounded-2xl p-6">
                <p className="text-white font-semibold">
                  Safety is treated as part of professional delivery, not a box-ticking exercise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competence & Training */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="order-2 lg:order-1">
              <p className="eyebrow mb-6">This includes:</p>
              <ul className="space-y-3 mb-8">
                {competence.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal-muted leading-relaxed">
                As the business grows, we will continue to formalise training structures 
                and external accreditations.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="mb-2">Competence & Training</h2>
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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="mb-2">Environmental Responsibility</h2>
                  <p className="text-charcoal-muted">Reducing our environmental impact</p>
                </div>
              </div>
              <div className="glass-panel rounded-2xl p-8">
                <p className="text-charcoal-muted mb-6 leading-relaxed">
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
              <p className="eyebrow mb-6">We aim to:</p>
              <ul className="space-y-3">
                {environmental.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal/15 to-navy/10 border border-teal/20 flex items-center justify-center flex-shrink-0 group-hover:from-teal group-hover:to-teal-light transition-all">
                      <ChevronRight className="w-4 h-4 text-teal group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal to-navy flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-white mb-4">Continuous Improvement</h2>
              <p className="text-white/60 text-lg">
                TrecomHvac & Mechanical is committed to continuous improvement across:
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
              {improvement.map((item) => (
                <div key={item.title} className="glass-card-dark p-6 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/25 to-navy/20 border border-teal/20 flex items-center justify-center mx-auto mb-3 group-hover:from-teal/40 group-hover:to-navy/30 transition-all">
                    <item.icon className="w-5 h-5 text-teal group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
            
            <div className="glass-panel-dark rounded-2xl p-8 text-center">
              <p className="text-xl font-bold text-white">
                We are building a business designed to meet the expectations of serious 
                commercial clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
