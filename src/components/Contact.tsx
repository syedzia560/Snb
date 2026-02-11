import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
];

const servicesList = [
  "General Inquiry",
  "Visa Application",
  "Flight Booking",
  "Work Permit",
  "Hajj & Umrah",
  "Tourist Visa",
  "Student Visa",
  "VFS Appointment",
  "Verification Letter",
  "South Africa Tours",
  "Mobile Phones & Accessories",
  "Other"
];

const Contact = () => {
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

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const submissionData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });
    submissionData.append("_subject", `New Contact: ${formData.subject || "General Inquiry"}`);
    submissionData.append("_template", "table");
    submissionData.append("_captcha", "false");

    try {
      const response = await fetch("https://formsubmit.co/ajax/baselsayed@snbtravel.net", {
        method: "POST",
        body: submissionData,
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = formData.name 
      ? `Hello! My name is ${formData.name}. ${formData.message || "I'd like to inquire about your services."}`
      : "Hello! I'd like to inquire about your services.";
    window.open(`https://wa.me/27795255989?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-4">
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your journey? Reach out to us and we'll be happy to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card animate-fade-up">
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
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
                      Phone Number
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
                    Email Address
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
                  <Select name="subject" value={formData.subject} onValueChange={handleSelectChange}>
                    <SelectTrigger className="bg-background w-full">
                      <SelectValue placeholder="Select a subject..." />
                    </SelectTrigger>
                    <SelectContent>
                      {servicesList.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your travel needs..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  >
                    {isSubmitting ? (
                        <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                        </>
                    ) : (
                        <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                        </>
                    )}
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
          <div className="space-y-6 animate-slide-in-right">
            {/* Contact Cards */}
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === "Address" ? "_blank" : undefined}
                rel={info.label === "Address" ? "noopener noreferrer" : undefined}
                className="block"
              >
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
              </a>
            ))}

            {/* Google Map */}
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d18.5!3d-33.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU3JzAwLjAiUyAxOMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1600000000000!5m2!1sen!2sza"
                  width="100%"
                  height="250"
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
  );
};

export default Contact;
