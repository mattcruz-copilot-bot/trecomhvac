import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { ArrowRight, Wind, Wrench, Droplets, Gauge, Settings, Building2, FileText, ClipboardCheck, Headphones, ChevronRight } from "lucide-react";
import plantRoom from "@/assets/plant-room.jpg";
import hvacDuctwork from "@/assets/hvac-ductwork.jpg";

const operateAs = [
  "Mechanical contractor",
  "Specialist subcontractor",
  "Ongoing maintenance provider",
  "Technical support partner",
];

const coreServices = [
  { icon: Wind, text: "HVAC systems and ventilation" },
  { icon: Wrench, text: "Mechanical pipework installations" },
  { icon: Building2, text: "Plant rooms and mechanical infrastructure" },
  { icon: Droplets, text: "Hot and cold water services" },
  { icon: Gauge, text: "Gas systems" },
  { icon: Settings, text: "Drainage systems" },
  { icon: Wrench, text: "Fire-rated mechanical services" },
  { icon: Wind, text: "Airside installations" },
  { icon: Settings, text: "Refurbishment and upgrade works" },
];

const projectSupport = [
  "AutoCAD drawings and coordination layouts",
  "Programming and sequencing of works",
  "Testing and commissioning",
  "O&M manuals and handover documentation",
  "BMS and controls coordination",
  "Insulation and heat loss prevention",
  "Ductwork and AHU cleaning",
  "Planned and reactive maintenance",
  "Ongoing technical support",
];

const howWeOperate = [
  { icon: Wrench, title: "Competent Engineers", desc: "Experienced and qualified team" },
  { icon: FileText, title: "Clear RAMS", desc: "Comprehensive documentation" },
  { icon: ClipboardCheck, title: "Proper Supervision", desc: "Active site management" },
  { icon: Settings, title: "Professional Conduct", desc: "High standards always" },
  { icon: Gauge, title: "Safety Culture", desc: "Safety-first approach" },
  { icon: Headphones, title: "Quality Focus", desc: "Attention to detail" },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero with image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={hvacDuctwork} 
            alt="Mechanical plant room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-5">
              Our Services
            </p>
            <h1 className="text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/70 mb-6 leading-relaxed max-w-2xl">
              TrecomHvac & Mechanical delivers mechanical, HVAC, plumbing and gas services 
              across commercial, residential, education, healthcare and mixed-use sectors.
            </p>
            <p className="text-white/60 mb-4 text-sm">We can operate as:</p>
            <div className="flex flex-wrap gap-2">
              {operateAs.map((item, index) => (
                <span 
                  key={item} 
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, hsl(220 65% ${32 + index * 4}%), hsl(185 72% ${42 + index * 3}%))`,
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services - Two column layout */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Core Mechanical Services */}
            <div className="glass-panel rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl">Core Mechanical Services</h2>
              </div>
              <ul className="space-y-1">
                {coreServices.map((service) => (
                  <li key={service.text} className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface transition-colors group">
                    <div className="icon-box-sm flex-shrink-0 w-8 h-8">
                      <service.icon className="w-4 h-4 text-navy" />
                    </div>
                    <span className="text-charcoal font-medium text-sm">{service.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Delivery & Technical Support */}
            <div className="glass-panel rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl">Project Delivery & Technical Support</h2>
              </div>
              <p className="text-charcoal-muted mb-4 text-sm">
                As part of our works, we can provide:
              </p>
              <ul className="space-y-1 mb-6">
                {projectSupport.map((item) => (
                  <li key={item} className="flex items-center gap-3 p-2 rounded-lg hover:bg-surface transition-colors">
                    <div className="w-5 h-5 rounded bg-gradient-to-br from-teal/10 to-teal-light/10 border border-teal/15 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-2.5 h-2.5 text-teal" />
                    </div>
                    <span className="text-charcoal-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border">
                <p className="text-charcoal font-bold text-sm">
                  Our focus is not just installation, but system performance and buildability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate - With background */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={plantRoom} 
            alt="" 
            className="w-full h-full object-cover brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal/75 via-slate/65 to-navy/60" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-3">Site Standards</p>
              <h2 className="text-white mb-3">How We Operate on Site</h2>
              <p className="text-white/60">We work with:</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {howWeOperate.map((item) => (
                <div key={item.title} className="glass-card-dark p-5 group cursor-pointer text-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal/20 to-navy/20 border border-teal/25 flex items-center justify-center mx-auto mb-3 group-hover:from-teal/35 group-hover:to-navy/30 transition-all duration-300">
                    <item.icon className="h-4 w-4 text-teal group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                  <p className="text-xs text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <div className="glass-panel-dark inline-block rounded-xl px-8 py-5">
                <p className="text-white font-bold">
                  We aim to be easy to work with and dependable under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="Get Started"
        title="Need a Quote?"
        description="Contact us to discuss your project requirements and receive a competitive quotation."
        buttonText="Request a Quote"
        buttonLink="/contact"
      />
    </Layout>
  );
}
