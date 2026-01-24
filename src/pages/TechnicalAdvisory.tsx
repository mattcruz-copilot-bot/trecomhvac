import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
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
  Handshake
} from "lucide-react";
import engineersConsulting from "@/assets/engineers-consulting.jpg";
import heroBuilding from "@/assets/hero-building.jpg";

const problemAreas = [
  { icon: Clock, text: "Poor sequencing", color: "text-amber-500" },
  { icon: FileWarning, text: "Design that doesn't reflect site reality", color: "text-red-400" },
  { icon: Users, text: "Coordination gaps between trades", color: "text-orange-500" },
  { icon: Target, text: "Unrealistic programmes", color: "text-rose-400" },
  { icon: Wrench, text: "Inadequate commissioning", color: "text-amber-400" },
  { icon: AlertTriangle, text: "Lack of ownership when issues arise", color: "text-red-500" },
];

const supportServices = [
  { icon: Search, text: "Technical reviews of mechanical designs" },
  { icon: ClipboardCheck, text: "Buildability and sequencing advice" },
  { icon: Building2, text: "On-site inspections and quality reviews" },
  { icon: Wrench, text: "Troubleshooting system performance issues" },
  { icon: LifeBuoy, text: "Supporting project recovery" },
  { icon: Briefcase, text: "Independent technical input for developers" },
  { icon: Handshake, text: "Supporting handover and commissioning processes" },
  { icon: Users, text: "Acting as technical representative in meetings" },
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
            src={heroBuilding} 
            alt="London commercial building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-electric font-semibold tracking-[0.15em] uppercase text-sm mb-6">
                Technical Advisory
              </p>
              <h1 className="text-white mb-8">
                Technical Advisory & Project Support
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                TrecomHvac & Mechanical provides technical advisory and project support 
                services for clients who need experienced mechanical input beyond installation alone.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-electric/30 to-teal/20 rounded-2xl blur-3xl" />
              <img 
                src={engineersConsulting} 
                alt="Engineers reviewing technical drawings on-site" 
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[5]" />
      </section>

      {/* Experience Introduction - Light section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-2xl p-10 md:p-14 text-center">
              <p className="text-lg md:text-xl text-charcoal-muted leading-relaxed">
                This service is built on real senior site experience managing large teams, 
                complex programmes and high-risk mechanical packages. We don't just install — 
                we understand how projects succeed and fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where Projects Fail - Visual Feature Section (Dark) */}
      <section className="section-dark section-padding relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <p className="text-electric font-semibold tracking-[0.15em] uppercase text-sm mb-6">
              The Reality
            </p>
            <h2 className="text-white mb-6">We understand where projects typically fail</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Many mechanical issues aren't caused by poor installation — they're caused by 
              problems that happen before work even begins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problemAreas.map((problem, index) => (
              <div 
                key={problem.text} 
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors ${problem.color}`}>
                    <problem.icon className="w-6 h-6" />
                  </div>
                  <span className="text-white/80 font-medium pt-2.5">{problem.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="inline-block glass-panel-dark rounded-2xl px-10 py-6">
              <p className="text-xl md:text-2xl font-bold text-white">
                Our role is to identify these issues early and help resolve them practically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support - Two Column with Cards */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h2>How We Support Clients</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportServices.map((service, index) => (
              <div 
                key={service.text} 
                className="card-glass p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5 group-hover:bg-electric/20 transition-colors">
                  <service.icon className="w-6 h-6 text-electric" />
                </div>
                <span className="text-charcoal font-medium leading-relaxed">{service.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuable For Section - With Image Background */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={engineersConsulting} 
            alt="Engineering consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/90" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-electric font-semibold tracking-[0.15em] uppercase text-sm mb-6">
                Who Benefits
              </p>
              <h2 className="text-white mb-8">This is particularly valuable for:</h2>
              <ul className="space-y-4">
                {valuableFor.map((client) => (
                  <li key={client} className="flex items-center gap-4 group">
                    <div className="w-3 h-3 bg-gradient-to-br from-electric to-teal rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-white font-semibold text-xl group-hover:text-electric transition-colors">{client}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Senior-Level Insight</h3>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Clients who use this service gain access to senior-level mechanical insight 
                without employing a full-time technical manager.
              </p>
              <p className="text-white/70 leading-relaxed">
                We provide the expertise you need, when you need it — whether that's a single 
                consultation or ongoing project support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters - Final CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-electric font-semibold tracking-[0.15em] uppercase text-sm mb-6">
              Prevention Over Cure
            </p>
            <h2 className="mb-10">Why This Matters</h2>
            <div className="glass-panel rounded-2xl p-10 md:p-14 mb-12">
              <p className="text-xl text-charcoal-muted mb-8 leading-relaxed">
                Many mechanical issues are not caused by poor installation — they are caused 
                by poor coordination, poor sequencing, or decisions made too late.
              </p>
              <p className="text-3xl md:text-4xl font-bold text-charcoal">
                This service exists to prevent that.
              </p>
            </div>
            <Button variant="default" size="xl" asChild className="group">
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
