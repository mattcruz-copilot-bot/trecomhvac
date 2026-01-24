import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import londonSkyline from "@/assets/london-skyline.jpg";

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
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={londonSkyline} 
            alt="London skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-teal font-bold tracking-[0.15em] uppercase text-sm mb-5">
              Contact Us
            </p>
            <h1 className="text-white mb-5">
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
      <section className="py-16 md:py-20 bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information - Left side */}
            <div className="lg:col-span-2 space-y-5">
              <div className="glass-panel rounded-xl p-6">
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-navy to-teal flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Contact Information</h3>
                    <p className="text-charcoal-muted text-xs">Reach out anytime</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-white/70 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-md transition-all group">
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-navy/10 to-teal/10 border border-navy/15 flex items-center justify-center flex-shrink-0 group-hover:from-navy group-hover:to-teal transition-all">
                        <item.icon className="h-4 w-4 text-navy group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal text-xs">{item.label}</p>
                        <p className="text-charcoal-muted text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency callout - Glass styled with gradient */}
              <div className="rounded-xl p-5 overflow-hidden relative bg-gradient-to-br from-teal/90 via-teal to-navy/90 shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5 text-white" />
                    </div>
                    <h4 className="font-bold text-white text-sm">Emergency Callout</h4>
                  </div>
                  <p className="text-xs text-white/85 leading-relaxed">
                    For existing maintenance contract clients requiring emergency 
                    callout, please use your dedicated contact number.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form - Right side */}
            <div className="lg:col-span-3">
              <div className="glass-panel rounded-xl p-6 md:p-8">
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal to-teal-light flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">Send an Enquiry</h3>
                    <p className="text-charcoal-muted text-xs">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-charcoal font-semibold text-xs">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-10 rounded-lg text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-charcoal font-semibold text-xs">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-10 rounded-lg text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="company" className="text-charcoal font-semibold text-xs">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-10 rounded-lg text-sm"
                        placeholder="Company name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-charcoal font-semibold text-xs">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-10 rounded-lg text-sm"
                        placeholder="+44 (0) 20 XXXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="subject" className="text-charcoal font-semibold text-xs">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 h-10 rounded-lg text-sm"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-charcoal font-semibold text-xs">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-surface border-border/50 focus:border-navy focus:ring-navy/20 resize-none rounded-lg text-sm"
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
