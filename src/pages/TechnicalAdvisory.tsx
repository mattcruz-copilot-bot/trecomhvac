import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  AlertTriangle, 
  Clock, 
  FileWarning, 
  Users, 
  Target, 
  Wrench,
  Building2,
  ClipboardCheck,
  Search,
  LifeBuoy,
  Briefcase,
  Handshake,
  ChevronRight
} from "lucide-react";
import engineersConsulting from "@/assets/engineers-consulting.jpg";
import heroBuilding from "@/assets/hero-building.jpg";

const problemAreas = [
  { icon: Clock, text: "Poor sequencing" },
  { icon: FileWarning, text: "Design that doesn't reflect site reality" },
  { icon: Users, text: "Coordination gaps between trades" },
  { icon: Target, text: "Unrealistic programmes" },
  { icon: Wrench, text: "Inadequate commissioning" },
  { icon: AlertTriangle, text: "Lack of ownership when issues arise" },
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
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBuilding} 
            alt="London commercial building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
                Technical Advisory
              </p>
              <h1 className="text-white mb-8">
                Technical Advisory & Project Support
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-8">
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
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 bg-gradient-to-br from-teal/25 to-navy/20 rounded-3xl blur-3xl" />
              <img 
                src={engineersConsulting} 
                alt="Engineers reviewing technical drawings on-site" 
                className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Experience Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-10 md:p-14 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-teal flex items-center justify-center mx-auto mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              <p className="text-lg md:text-xl text-charcoal-muted leading-relaxed">
                This service is built on real senior site experience managing large teams, 
                complex programmes and high-risk mechanical packages. We don't just install — 
                we understand how projects succeed and fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Projects Fail - Visual Feature Section */}
      <section className="section-dark section-padding relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center mb-14">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
              The Reality
            </p>
            <h2 className="text-white mb-6">We understand where projects typically fail</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Many mechanical issues aren't caused by poor installation — they're caused by 
              problems that happen before work even begins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {problemAreas.map((problem, index) => (
              <div 
                key={problem.text} 
                className="bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-rose-500/20 to-amber-500/20 border border-rose-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-rose-500/30 group-hover:to-amber-500/30 transition-colors">
                    <problem.icon className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="text-white/80 font-medium pt-2.5 group-hover:text-white transition-colors">{problem.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-14 text-center">
            <div className="inline-block glass-panel-dark rounded-2xl px-10 py-6">
              <p className="text-xl md:text-2xl font-bold text-white">
                Our role is to identify these issues early and help resolve them practically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support - Card grid */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">Our Services</p>
            <h2>How We Support Clients</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {supportServices.map((service) => (
              <div 
                key={service.title} 
                className="card-glass p-6 group cursor-pointer"
              >
                <div className="icon-box-sm mb-4 group-hover:scale-105 transition-transform">
                  <service.icon className="w-5 h-5 text-navy" />
                </div>
                <h4 className="text-base font-bold text-charcoal mb-1">{service.title}</h4>
                <p className="text-sm text-charcoal-muted">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuable For Section */}
      <section className="relative section-padding overflow-hidden bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-6 bg-gradient-to-br from-navy/15 to-teal/15 rounded-3xl blur-2xl" />
              <img 
                src={engineersConsulting} 
                alt="Engineering consultation" 
                className="relative w-full h-auto rounded-3xl shadow-elevated-lg"
              />
            </div>
            
            {/* Content side */}
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4">Who Benefits</p>
              <h2 className="mb-8">This is particularly valuable for:</h2>
              <ul className="space-y-3 mb-10">
                {valuableFor.map((client) => (
                  <li key={client} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/10 flex items-center justify-center group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-4 h-4 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-semibold text-lg group-hover:text-navy transition-colors">{client}</span>
                  </li>
                ))}
              </ul>

              <div className="glass-panel rounded-2xl p-8">
                <h4 className="text-xl font-bold text-charcoal mb-4">Senior-Level Insight</h4>
                <p className="text-charcoal-muted leading-relaxed">
                  Clients who use this service gain access to senior-level mechanical insight 
                  without employing a full-time technical manager. We provide the expertise 
                  you need, when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters - Final CTA */}
      <section className="section-dark section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
              Prevention Over Cure
            </p>
            <h2 className="text-white mb-10">Why This Matters</h2>
            <div className="glass-panel-dark rounded-3xl p-10 md:p-14 mb-10">
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Many mechanical issues are not caused by poor installation — they are caused 
                by poor coordination, poor sequencing, or decisions made too late.
              </p>
              <p className="text-3xl md:text-4xl font-bold text-white">
                This service exists to prevent that.
              </p>
            </div>
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
