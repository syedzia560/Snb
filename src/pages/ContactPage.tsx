import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-travel.jpg";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "28 Lodewyk Road, Newfields, 7785, South Africa",
    href: "https://maps.google.com/?q=28+Lodewyk+Road+Newfields+7785+South+Africa",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 79 525 5989",
    subValue: "+27 61 970 9183",
    href: "tel:+27795255989",
  },
  {
    icon: Mail,
    label: "Email",
    value: "baselsayed@snbtravel.net",
    subValue: "Baselsayed1122@gmail.com",
    href: "mailto:baselsayed@snbtravel.net",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
    subValue: "Sunday: By Appointment",
    href: null,
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    const message = formData.name 
      ? `Hello! My name is ${formData.name}. ${formData.message || "I'd like to inquire about your services."}`
      : "Hello! I'd like to inquire about your services.";
    window.open(`https://wa.me/27795255989?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-medium text-white">Get In Touch</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Us</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Ready to start your journey? Reach out to us and we'll be happy to help 
              with all your travel and documentation needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border shadow-card">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+27 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="e.g., Visa Application Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your travel needs..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={openWhatsApp}
                      className="flex-1 bg-emerald hover:bg-emerald/90 text-primary-foreground font-semibold"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Instead
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info) => {
                const Content = (
                  <Card className="bg-card border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                        {info.subValue && (
                          <p className="text-sm text-muted-foreground mt-1">{info.subValue}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );

                if (info.href) {
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.label === "Address" ? "_blank" : undefined}
                      rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {Content}
                    </a>
                  );
                }

                return <div key={info.label}>{Content}</div>;
              })}

              {/* Google Map */}
              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.5!3d-33.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU3JzAwLjAiUyAxOMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1600000000000!5m2!1sen!2sza"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SnB Travels Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Prefer to Call?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We're available Monday to Saturday, 9 AM to 6 PM. Give us a call or send a WhatsApp message!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold"
            >
              <a href="tel:+27795255989">
                <Phone className="w-5 h-5 mr-2" />
                +27 79 525 5989
              </a>
            </Button>
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-emerald hover:bg-emerald/90 text-primary-foreground font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
