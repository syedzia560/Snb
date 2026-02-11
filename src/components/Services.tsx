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
  Headphones
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: FileText,
    title: "Visa Application Assistance",
    description: "Expert guidance for all types of visa applications worldwide. We handle tourist, business, student, and family visas.",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Book tickets on all major airlines at competitive prices. International and domestic flights available.",
  },
  {
    icon: Briefcase,
    title: "Work Permit Processing",
    description: "Complete work permit application support for South Africa. From documentation to submission.",
  },
  {
    icon: Home,
    title: "Temporary Residence Permits",
    description: "Assistance with temporary residence permit applications. We guide you through every step.",
  },
  {
    icon: Building2,
    title: "VFS South Africa Submissions",
    description: "Professional handling of all VFS Global file submissions. Accurate and timely processing.",
  },
  {
    icon: Moon,
    title: "Hajj & Umrah Packages",
    description: "Complete pilgrimage packages with accommodation, transport, and guided support.",
  },
  {
    icon: FileCheck,
    title: "Documentation Services",
    description: "All kinds of document preparation, verification, and attestation services.",
  },
  {
    icon: CheckCircle,
    title: "Verification & Support Letters",
    description: "Employment verification, invitation letters, and support documentation.",
  },
  {
    icon: MapPin,
    title: "South Africa Tours",
    description: "Discover beautiful South Africa with our curated sightseeing packages and visit bookings.",
  },
  {
    icon: Users,
    title: "Tour Guide Services",
    description: "Professional tour guides for an authentic South African experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Phones",
    description: "New and second-hand mobile phones at great prices.",
  },
  {
    icon: Headphones,
    title: "Phone Accessories",
    description: "All types of mobile phone accessories and gadgets.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-trust">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-4">
            <span className="text-sm font-medium text-primary">What We Offer</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive travel and documentation services to make your journey smooth and hassle-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Don't see what you need? We offer many more services.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Contact us for custom solutions
            <span className="text-accent">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
