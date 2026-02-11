import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Plane, 
  Briefcase, 
  Home, 
  Building2, 
  Moon,
  FileCheck,
  CheckCircle,
  MapPin,
  Users,
  Smartphone,
  Headphones,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";
import ServiceInquiryModal from "@/components/ServiceInquiryModal";

const services = [
  {
    icon: FileText,
    title: "Visa Application Assistance",
    description: "Expert guidance for all types of visa applications worldwide. We handle tourist, business, student, and family visas with precision and care.",
    features: ["Tourist Visas", "Business Visas", "Student Visas", "Family Visas"],
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Book tickets on all major airlines at competitive prices. International and domestic flights available with flexible options.",
    features: ["All Airlines", "Best Prices", "Flexible Dates", "Group Bookings"],
  },
  {
    icon: Briefcase,
    title: "Work Permit Processing",
    description: "Complete work permit application support for South Africa. From documentation to submission, we handle it all.",
    features: ["Application Support", "Document Prep", "Submission", "Follow-up"],
  },
  {
    icon: Home,
    title: "Temporary Residence Permits",
    description: "Assistance with temporary residence permit applications. We guide you through every step of the process.",
    features: ["TRP Applications", "Renewals", "Extensions", "Consultation"],
  },
  {
    icon: Building2,
    title: "VFS South Africa Submissions",
    description: "Professional handling of all VFS Global file submissions. Accurate and timely processing guaranteed.",
    features: ["Document Review", "Appointment Booking", "Submission", "Tracking"],
  },
  {
    icon: Moon,
    title: "Hajj & Umrah Packages",
    description: "Complete pilgrimage packages with accommodation, transport, and guided support for a spiritual journey.",
    features: ["Full Packages", "Accommodation", "Transport", "Guidance"],
  },
  {
    icon: FileCheck,
    title: "Documentation Services",
    description: "All kinds of document preparation, verification, and attestation services for your travel needs.",
    features: ["Attestation", "Verification", "Translation", "Notarization"],
  },
  {
    icon: CheckCircle,
    title: "Verification & Support Letters",
    description: "Employment verification, invitation letters, and support documentation for visa applications.",
    features: ["Employment Letters", "Invitation Letters", "Bank Letters", "Support Docs"],
  },
  {
    icon: MapPin,
    title: "South Africa Tours",
    description: "Discover beautiful South Africa with our curated sightseeing packages and visit bookings.",
    features: ["Cape Town Tours", "Safari Packages", "City Tours", "Custom Trips"],
  },
  {
    icon: Users,
    title: "Tour Guide Services",
    description: "Professional tour guides for an authentic South African experience with local insights.",
    features: ["Local Guides", "Multi-lingual", "Custom Routes", "Group Tours"],
  },
  {
    icon: Smartphone,
    title: "Mobile Phones",
    description: "New and second-hand mobile phones at great prices. Quality guaranteed on all devices.",
    features: ["New Phones", "Used Phones", "All Brands", "Warranty"],
  },
  {
    icon: Headphones,
    title: "Phone Accessories",
    description: "All types of mobile phone accessories and gadgets to complete your mobile experience.",
    features: ["Cases", "Chargers", "Earphones", "Screen Guards"],
  },
];

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Travel services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-medium text-white">What We Offer</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Services</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Comprehensive travel and documentation services to make your journey smooth and hassle-free. 
              From visa applications to flight bookings, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.title}
                className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card overflow-hidden"
              >
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => handleOpenModal(service.title)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you need? We offer many more services. Contact us to discuss your specific requirements.
          </p>
          <div className="flex justify-center gap-4">
             <Button
                onClick={() => handleOpenModal("Custom Inquiry")}
                size="lg"
                className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold"
              >
                Request Custom Quote
             </Button>
             <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact">
                  Visit Contact Page
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
          </div>
        </div>
      </section>

      <ServiceInquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        initialService={selectedService} 
      />
    </div>
  );
};

export default ServicesPage;
