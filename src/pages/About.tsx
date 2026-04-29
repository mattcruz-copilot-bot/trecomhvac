import { Layout } from "@/components/Layout";
import { CTASection } from "@/components/CTASection";
import { Award, MessageSquare, Shield, ChevronRight, Building2 } from "lucide-react";
import engineersConsulting from "@/assets/engineers-consulting.jpg";
import plantRoom from "@/assets/plant-room.jpg";

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
      <section className="relative py-24 md:py-32 overflow-hidden">
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
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-5">
              About Us
            </p>
            <h1 className="text-white mb-5">
              About TrecomHvac & Mechanical
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              TrecomHvac & Mechanical provides commercial HVAC and mechanical services across London.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content side */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl mb-1">Our Story</h2>
                  <p className="text-charcoal-muted text-sm">Built on real experience</p>
                </div>
              </div>
              
              <div className="glass-panel rounded-xl p-6 mb-6">
                <p className="text-charcoal-muted mb-4 leading-relaxed">
                  The company was established to bring a higher standard of organisation, 
                  communication and technical understanding to mechanical delivery.
                </p>
                <p className="text-charcoal-muted leading-relaxed">
                  While the business itself is new, the experience behind it spans major London 
                  projects, complex site environments and senior operational roles.
                </p>
              </div>
              
              <p className="text-charcoal-muted leading-relaxed text-sm">
                We understand the pressures faced by main contractors, consultants and 
                managing agents because we have worked within those environments for years.
              </p>
            </div>
            
            {/* How we work */}
            <div>
              <p className="eyebrow mb-5">That experience influences how we work:</p>
              <ul className="space-y-2 mb-8">
                {howWeWork.map((item) => (
                  <li key={item} className="flex items-center gap-3 p-3 rounded-lg bg-surface backdrop-blur-sm border border-border/50 hover:shadow-md hover:border-teal/20 transition-all group">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-3.5 h-3.5 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience - With background image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={plantRoom} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-slate/55 to-charcoal/70" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-navy flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="w-7 h-7 text-white" />
            </div>
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-4">
              Background
            </p>
            <h2 className="text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">Our Experience</h2>
            <p className="text-white mb-4 leading-relaxed text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Our background includes involvement in large commercial developments, 
              multi-unit residential schemes, refurbishment programmes and complex 
              mechanical packages across London.
            </p>
            <p className="text-white/90 mb-10 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              We are currently building a formal project portfolio for TrecomHvac & 
              Mechanical as the business grows. However, our internal standards, 
              working methods and technical approach are already shaped by high-level 
              site experience.
            </p>
            <div className="glass-panel-dark p-6 max-w-2xl mx-auto">
              <p className="text-white font-semibold text-lg leading-relaxed">
                Clients don't get "startup standards". They get senior-industry standards 
                applied to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 md:py-28 section-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center flex-shrink-0 shadow-lg">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl mb-1">Our Approach</h2>
                  <p className="text-charcoal-muted">Straightforward and professional</p>
                </div>
              </div>
              
              <p className="text-charcoal-muted mb-6 text-lg">
                We operate in a straightforward way:
              </p>
              
              <ul className="space-y-3">
                {approach.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-4 rounded-xl bg-surface backdrop-blur-sm border border-border/50 hover:shadow-lg hover:border-teal/20 transition-all group">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center mb-6 shadow-md">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                Long-term Focus
              </h3>
              <p className="text-charcoal-muted leading-relaxed mb-4 text-lg">
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

      {/* CTA */}
      <CTASection
        eyebrow="Work With Us"
        title="Ready to discuss your project?"
        description="Contact us for a quotation or to discuss how we can support your next mechanical project."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </Layout>
  );
}
