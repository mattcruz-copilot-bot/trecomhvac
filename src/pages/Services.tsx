import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Wrench, Droplets, Gauge, Settings, Building2, FileText, ClipboardCheck, Headphones, ChevronRight } from "lucide-react";
import plantRoom from "@/assets/plant-room.jpg";

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
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={plantRoom} 
            alt="Mechanical plant room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-4xl">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
              Our Services
            </p>
            <h1 className="text-white mb-8">Our Services</h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-2xl">
              TrecomHvac & Mechanical delivers mechanical, HVAC, plumbing and gas services 
              across commercial, residential, education, healthcare and mixed-use sectors.
            </p>
            <p className="text-white/60 mb-6">We can operate as:</p>
            <div className="flex flex-wrap gap-3">
              {operateAs.map((item, index) => (
                <span 
                  key={item} 
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105"
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
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Core Mechanical Services */}
            <div className="glass-panel rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl">Core Mechanical Services</h2>
                </div>
              </div>
              <ul className="space-y-2">
                {coreServices.map((service) => (
                  <li key={service.text} className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group">
                    <div className="icon-box-sm flex-shrink-0">
                      <service.icon className="w-5 h-5 text-navy" />
                    </div>
                    <span className="text-charcoal font-medium">{service.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Delivery & Technical Support */}
            <div className="glass-panel rounded-2xl p-8 md:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl">Project Delivery & Technical Support</h2>
                </div>
              </div>
              <p className="text-charcoal-muted mb-6">
                As part of our works, we can provide:
              </p>
              <ul className="space-y-2 mb-8">
                {projectSupport.map((item) => (
                  <li key={item} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface transition-colors">
                    <div className="w-6 h-6 rounded-md bg-gradient-to-br from-teal/10 to-teal-light/10 border border-teal/15 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-teal" />
                    </div>
                    <span className="text-charcoal-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-border">
                <p className="text-charcoal font-bold">
                  Our focus is not just installation, but system performance and buildability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="eyebrow mb-4">Site Standards</p>
              <h2 className="mb-4">How We Operate on Site</h2>
              <p className="text-charcoal-muted text-lg">We work with:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {howWeOperate.map((item, index) => (
                <div key={item.title} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-sm hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center mb-4 group-hover:from-navy group-hover:to-teal transition-all duration-300">
                    <item.icon className="h-5 w-5 text-navy group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-charcoal mb-1">{item.title}</h4>
                  <p className="text-sm text-charcoal-muted">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <div className="glass-panel inline-block rounded-2xl px-10 py-6">
                <p className="text-charcoal font-bold text-lg">
                  We aim to be easy to work with and dependable under pressure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding">
        <div className="container-wide text-center">
          <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-6">
            Get Started
          </p>
          <h2 className="text-white mb-8">Need a Quote?</h2>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            Contact us to discuss your project requirements and receive a competitive quotation.
          </p>
          <Button variant="hero" size="xl" asChild className="group">
            <Link to="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
