import { Link } from "react-router-dom";
import { Star, Check, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import hajjImage from "@/assets/hajj-umrah.jpg";

const packages = [
  {
    title: "Umrah Package",
    description: "Complete Umrah pilgrimage package with all essentials",
    features: [
      "Saudi Arabia Visa Processing",
      "Return Flight Tickets",
      "Hotel Accommodation (3-4 Star)",
      "Airport Transfers",
      "Ziyarat Tours",
      "24/7 Support",
    ],
  },
  {
    title: "Hajj Package",
    description: "Comprehensive Hajj package for the sacred journey",
    features: [
      "Hajj Visa Processing",
      "Return Flight Tickets",
      "Premium Accommodation",
      "All Hajj Rituals Guidance",
      "Meals Included",
      "Expert Religious Guide",
    ],
  },
];

const features = [
  "Complete package planning & support",
  "Visa processing for Saudi Arabia",
  "Hotel accommodations near Haram",
  "Transportation arrangements",
  "Guided religious tours",
  "24/7 on-ground support",
  "Group departures available",
  "Flexible payment options",
];

const HajjUmrahPage = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/27795255989?text=Assalamu Alaikum! I'm interested in Hajj/Umrah packages.", "_blank");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={hajjImage}
            alt="The Holy Kaaba in Makkah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Sacred Journeys</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-accent">Hajj & Umrah</span> Packages
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Embark on the most sacred journey of your life with complete peace of mind. 
              Our comprehensive packages are designed to provide you with a spiritually 
              fulfilling and hassle-free pilgrimage experience.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={openWhatsApp}
                className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold shadow-gold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Enquire About Packages
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Packages</span>
            </h2>
            <p className="text-muted-foreground">
              Choose the package that suits your needs. We customize every aspect to ensure your pilgrimage is memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg) => (
              <Card key={pkg.title} className="bg-card border-border hover:border-primary/30 hover:shadow-card transition-all">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald" />
                        </div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-primary hover:bg-primary/90"
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's <span className="text-gradient-gold">Included</span>
            </h2>
            <p className="text-muted-foreground">
              We take care of everything so you can focus on your spiritual journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div 
                key={feature}
                className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-foreground/80 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl italic mb-6">
              "A life-changing experience. The SnB team handled everything perfectly, 
              allowing me to focus entirely on my spiritual journey. Highly recommended!"
            </blockquote>
            <p className="text-primary-foreground/60">— Satisfied Pilgrim</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready for Your Sacred Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us today to plan your Hajj or Umrah pilgrimage. We're here to help every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/contact">
                Contact Form
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HajjUmrahPage;
