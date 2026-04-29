import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { 
  ArrowRight, 
  AlertCircle, 
  Clock, 
  FileText, 
  Users, 
  Target, 
  Wrench,
  Building2,
  ClipboardCheck,
  Search,
  LifeBuoy,
  Briefcase,
  Handshake,
} from "lucide-react";
import engineersBoardroom from "@/assets/engineers-boardroom.jpg";
import cadSchematicBg from "@/assets/cad-schematic-bg.jpg";

const problemAreas = [
  { icon: Clock, text: "Poor sequencing" },
  { icon: FileText, text: "Design that doesn't reflect site reality" },
  { icon: Users, text: "Coordination gaps between trades" },
  { icon: Target, text: "Unrealistic programmes" },
  { icon: Wrench, text: "Inadequate commissioning" },
  { icon: AlertCircle, text: "Lack of ownership when issues arise" },
];

const supportServices = [
  { icon: Search, title: "Technical Reviews", desc: "Detailed mechanical design analysis" },
  { icon: ClipboardCheck, title: "Buildability Advice", desc: "Sequencing and coordination support" },
  { icon: Building2, title: "Site Inspections", desc: "On-site quality reviews" },
  { icon: Wrench, title: "Troubleshooting", desc: "System performance diagnosis" },
  { icon: LifeBuoy, title: "Project Recovery", desc: "Getting projects back on track" },
  { icon: Briefcase, title: "Independent Input", desc: "Unbiased technical guidance" },
  { icon: Handshake, title: "Handover Support", desc: "Commissioning and completion" },
  { icon: Users, title: "Technical Rep", desc: "Meeting representation" },
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
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={engineersBoardroom} 
            alt="Engineers reviewing mechanical drawings in a London boardroom" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container-wide py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              Technical Advisory
            </p>
            <h1 className="text-white mb-6 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
              Technical Advisory & Project Support
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mb-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
              TrecomHvac & Mechanical provides technical advisory and project support 
              services for clients who need experienced mechanical input beyond installation alone.
            </p>
            <Button variant="hero" size="lg" asChild className="group">
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Experience Introduction - Compact */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center mx-auto mb-5">
                <Target className="w-6 h-6 text-white" />
              </div>
              <p className="text-lg text-charcoal-muted leading-relaxed">
                This service is built on real senior site experience managing large teams, 
                complex programmes and high-risk mechanical packages. We don't just install — 
                we understand how projects succeed and fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Projects Fail - With background image */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden bg-charcoal">
        {/* CAD blueprint background — schematic atmosphere */}
        <div className="absolute inset-0 z-0">
          <img 
            src={cadSchematicBg} 
            alt="" 
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          {/* Lighter tint so the schematic actually reads */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-navy/50 to-charcoal/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--charcoal)/0.55)_100%)]" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center mb-10">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-4">
              The Reality
            </p>
            <h2 className="text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">We understand where projects typically fail</h2>
            <p className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] max-w-2xl mx-auto">
              Many mechanical issues aren't caused by poor installation — they're caused by 
              problems that happen before work even begins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {problemAreas.map((problem) => (
              <div 
                key={problem.text} 
                className="backdrop-blur-sm bg-charcoal/50 border border-white/20 rounded-xl p-5 group shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal/30 to-navy/30 border border-teal/40 flex items-center justify-center flex-shrink-0 group-hover:from-teal/50 group-hover:to-navy/50 transition-all duration-300">
                    <problem.icon className="w-4 h-4 text-teal" />
                  </div>
                  <span className="text-white font-medium group-hover:text-teal transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">{problem.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <div className="inline-block backdrop-blur-sm bg-navy/60 border border-teal/30 rounded-xl px-8 py-5 shadow-lg">
              <p className="text-lg md:text-xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Our role is to identify these issues early and help resolve them practically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support - Card grid */}
      <section className="py-12 sm:py-16 md:py-24 section-surface">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="eyebrow mb-3">Our Services</p>
            <h2>How We Support Clients</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {supportServices.map((service) => (
              <div 
                key={service.title} 
                className="card-glass p-5 group cursor-pointer"
              >
                <div className="icon-box-sm mb-3 group-hover:scale-105 transition-transform">
                  <service.icon className="w-4 h-4 text-navy" />
                </div>
                <h4 className="text-sm font-bold text-charcoal mb-0.5">{service.title}</h4>
                <p className="text-xs text-charcoal-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuable For Section — schematic-backed, centered */}
      <section className="relative pt-16 sm:pt-20 md:pt-32 pb-24 sm:pb-32 md:pb-44 overflow-hidden bg-charcoal">
        {/* CAD blueprint background */}
        <div className="absolute inset-0 z-0">
          <img
            src={cadSchematicBg}
            alt=""
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-navy/55 to-charcoal/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--charcoal)/0.6)_100%)]" />
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-5">
              Who Benefits
            </p>
            <h2 className="text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
              Built for the people responsible for the outcome.
            </h2>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto mb-12 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Whether you are delivering a new development, managing an aging portfolio, or
              accountable for the performance of a live building, our advisory service gives you
              senior mechanical judgement on demand — without the cost of carrying a full-time
              technical manager in-house.
            </p>

            {/* Benefit chips — centered grid */}
            <div className="flex flex-wrap justify-center gap-3 mb-14 max-w-3xl mx-auto">
              {valuableFor.map((client) => (
                <div
                  key={client}
                  className="backdrop-blur-md bg-white/[0.06] border border-white/20 rounded-full px-6 py-3 shadow-lg hover:border-teal/60 hover:bg-teal/10 transition-all duration-300"
                >
                  <span className="text-white font-semibold tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    {client}
                  </span>
                </div>
              ))}
            </div>

            {/* Senior-Level Insight panel */}
            <div className="backdrop-blur-md bg-navy/55 border border-teal/30 rounded-2xl p-8 md:p-10 shadow-elevated-lg max-w-3xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-navy border border-teal/40 flex items-center justify-center mx-auto mb-5">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                Senior-Level Insight, On Demand
              </h4>
              <p className="text-white/85 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                Clients who use this service gain direct access to senior mechanical expertise
                across design review, sequencing, commissioning and project recovery. You get an
                experienced second pair of eyes on the decisions that matter most — early enough
                to change the outcome, and independent enough to give you the truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        eyebrow="Prevention Over Cure"
        title="This service exists to prevent costly mistakes."
        description="Many mechanical issues are not caused by poor installation — they are caused by poor coordination, poor sequencing, or decisions made too late."
        buttonText="Discuss Your Project"
        buttonLink="/contact"
      />
    </Layout>
  );
}
