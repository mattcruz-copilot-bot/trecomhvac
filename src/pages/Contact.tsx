import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBuilding from "@/assets/hero-building.jpg";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "London, United Kingdom",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 (0) 20 XXXX XXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@trecomhvac.co.uk",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday: 8:00 - 17:00",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your enquiry. We will be in touch shortly.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Contact Us
            </p>
            <h1 className="text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Whether you need a quotation, technical advice, or want to discuss 
              a potential project, we'd be pleased to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Information - Left side */}
            <div className="lg:col-span-2 space-y-6">
              <div className="glass-panel rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">Contact Information</h3>
                    <p className="text-charcoal-muted text-sm">Reach out anytime</p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-surface hover:bg-surface-warm transition-colors group">
                      <div className="icon-box-sm flex-shrink-0">
                        <item.icon className="h-5 w-5 text-navy" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-sm">{item.label}</p>
                        <p className="text-charcoal-muted">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency callout - Teal styled */}
              <div className="rounded-2xl p-6 bg-gradient-to-br from-navy to-slate overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-teal" />
                    <h4 className="font-bold text-white">Emergency Callout</h4>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    For existing maintenance contract clients requiring emergency 
                    callout, please use your dedicated contact number.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form - Right side */}
            <div className="lg:col-span-3">
              <div className="glass-panel rounded-2xl p-8 md:p-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-charcoal">Send an Enquiry</h3>
                    <p className="text-charcoal-muted text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-charcoal font-semibold text-sm">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-12 rounded-xl"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-charcoal font-semibold text-sm">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-12 rounded-xl"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-charcoal font-semibold text-sm">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-12 rounded-xl"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-charcoal font-semibold text-sm">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-12 rounded-xl"
                        placeholder="+44 (0) 20 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-charcoal font-semibold text-sm">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-12 rounded-xl"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal font-semibold text-sm">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 resize-none rounded-xl"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
