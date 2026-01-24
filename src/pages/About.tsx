import { Layout } from "@/components/Layout";
import { Award, MessageSquare, Shield, ChevronRight, Building2 } from "lucide-react";
import engineersConsulting from "@/assets/engineers-consulting.jpg";

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
      {/* Hero with image */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={engineersConsulting} 
            alt="Engineers consulting on site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
              About Us
            </p>
            <h1 className="text-white mb-6">
              About TrecomHvac & Mechanical
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              TrecomHvac & Mechanical provides commercial HVAC and mechanical services across London.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Content side */}
            <div>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="mb-2">Our Story</h2>
                  <p className="text-charcoal-muted">Built on real experience</p>
                </div>
              </div>
              
              <div className="glass-panel rounded-2xl p-8 mb-8">
                <p className="text-lg text-charcoal-muted mb-6 leading-relaxed">
                  The company was established to bring a higher standard of organisation, 
                  communication and technical understanding to mechanical delivery.
                </p>
                <p className="text-lg text-charcoal-muted leading-relaxed">
                  While the business itself is new, the experience behind it spans major London 
                  projects, complex site environments and senior operational roles.
                </p>
              </div>
              
              <p className="text-charcoal-muted leading-relaxed">
                We understand the pressures faced by main contractors, consultants and 
                managing agents because we have worked within those environments for years.
              </p>
            </div>
            
            {/* How we work */}
            <div>
              <p className="eyebrow mb-6">That experience influences how we work:</p>
              <ul className="space-y-3 mb-10">
                {howWeWork.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience - Dark section */}
      <section className="section-dark section-padding relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal to-navy flex items-center justify-center mx-auto mb-8">
              <Award className="w-8 h-8 text-white" />
            </div>
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
              Background
            </p>
            <h2 className="text-white mb-10">Our Experience</h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
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
            <div className="glass-panel-dark rounded-2xl p-8">
              <p className="text-white font-bold text-xl md:text-2xl">
                Clients don't get "startup standards". They get senior-industry standards 
                applied to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="mb-2">Our Approach</h2>
                  <p className="text-charcoal-muted">Straightforward and professional</p>
                </div>
              </div>
              
              <p className="text-charcoal-muted mb-8 text-lg">
                We operate in a straightforward way:
              </p>
              
              <ul className="space-y-3">
                {approach.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-10 lg:p-12">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Long-term Focus
              </h3>
              <p className="text-charcoal-muted text-lg leading-relaxed mb-6">
                We are building this company for the long term, not for short-term volume.
              </p>
              <p className="text-charcoal-muted leading-relaxed">
                Every project is an opportunity to demonstrate our standards and build 
                lasting relationships with clients who value reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
