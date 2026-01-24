import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-electric uppercase tracking-wider mb-4">
              Contact Us
            </p>
            <h1 className="mb-8">
              Get in Touch
            </h1>
            <p className="text-xl text-charcoal-muted leading-relaxed">
              Whether you need a quotation, technical advice, or want to discuss 
              a potential project, we'd be pleased to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="gradient-line-strong" />

      {/* Contact Form & Info - Surface section */}
      <section className="section-padding section-surface">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div>
              <div className="glass-panel rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-electric" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">{item.label}</p>
                        <p className="text-charcoal-muted">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 glass-panel-dark rounded-2xl p-8">
                <h3 className="font-bold text-white mb-3">Emergency Callout</h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  For existing maintenance contract clients requiring emergency 
                  callout, please use your dedicated contact number.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-8">Send an Enquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-charcoal font-medium">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/50 border-border/50 focus:border-electric h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-charcoal font-medium">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/50 border-border/50 focus:border-electric h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-charcoal font-medium">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/50 border-border/50 focus:border-electric h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-charcoal font-medium">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/50 border-border/50 focus:border-electric h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-charcoal font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/50 border-border/50 focus:border-electric h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-charcoal font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/50 border-border/50 focus:border-electric resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg">
                    Send Message
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
