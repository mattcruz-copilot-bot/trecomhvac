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
  ChevronRight
} from "lucide-react";
import engineersConsulting from "@/assets/engineers-consulting.jpg";
import londonSkyline from "@/assets/london-skyline.jpg";
import pipeworkDetail from "@/assets/pipework-detail.jpg";

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
            src={londonSkyline} 
            alt="London commercial skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container-wide py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-5">
                Technical Advisory
              </p>
              <h1 className="text-white mb-6">
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
              <div className="absolute -inset-3 bg-gradient-to-br from-teal/10 to-transparent rounded-2xl blur-xl" />
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

      {/* Experience Introduction - Compact */}
      <section className="py-12 md:py-16 bg-background">
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
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={pipeworkDetail} 
            alt="" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/85 via-slate/80 to-navy/75" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="text-center mb-10">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-4 drop-shadow-lg">
              The Reality
            </p>
            <h2 className="text-white mb-4 drop-shadow-lg [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">We understand where projects typically fail</h2>
            <p className="text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Many mechanical issues aren't caused by poor installation — they're caused by 
              problems that happen before work even begins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {problemAreas.map((problem) => (
              <div 
                key={problem.text} 
                className="backdrop-blur-md bg-charcoal/60 border border-white/15 rounded-xl p-5 group shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal/30 to-navy/30 border border-teal/35 flex items-center justify-center flex-shrink-0 group-hover:from-teal/45 group-hover:to-navy/40 transition-all duration-300">
                    <problem.icon className="w-4 h-4 text-teal" />
                  </div>
                  <span className="text-white font-medium group-hover:text-teal transition-colors">{problem.text}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <div className="inline-block backdrop-blur-lg bg-navy/70 border border-teal/30 rounded-xl px-8 py-5 shadow-xl">
              <p className="text-lg md:text-xl font-bold text-white drop-shadow-md">
                Our role is to identify these issues early and help resolve them practically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support - Card grid */}
      <section className="py-16 md:py-20 section-surface">
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

      {/* Valuable For Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-navy/10 to-teal/10 rounded-2xl blur-xl" />
              <img 
                src={engineersConsulting} 
                alt="Engineering consultation" 
                className="relative w-full h-auto rounded-2xl shadow-elevated-lg"
              />
            </div>
            
            {/* Content side */}
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-3">Who Benefits</p>
              <h2 className="mb-6">This is particularly valuable for:</h2>
              <ul className="space-y-2 mb-8">
                {valuableFor.map((client) => (
                  <li key={client} className="flex items-center gap-3 group">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/10 flex items-center justify-center group-hover:from-navy group-hover:to-teal transition-all">
                      <ChevronRight className="w-3.5 h-3.5 text-navy group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-charcoal font-semibold group-hover:text-navy transition-colors">{client}</span>
                  </li>
                ))}
              </ul>

              <div className="glass-panel rounded-xl p-6">
                <h4 className="text-lg font-bold text-charcoal mb-3">Senior-Level Insight</h4>
                <p className="text-charcoal-muted text-sm leading-relaxed">
                  Clients who use this service gain access to senior-level mechanical insight 
                  without employing a full-time technical manager. We provide the expertise 
                  you need, when you need it.
                </p>
              </div>
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
