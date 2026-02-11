import { Star, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import hajjImage from "@/assets/hajj-umrah.jpg";

const features = [
  "Complete package planning & support",
  "Visa processing for Saudi Arabia",
  "Hotel accommodations near Haram",
  "Transportation arrangements",
  "Guided religious tours",
  "24/7 on-ground support",
];

const HajjUmrah = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/27795255989?text=Assalamu Alaikum! I'm interested in Hajj/Umrah packages.", "_blank");
  };

  return (
    <section id="hajj-umrah" className="py-20 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-primary-foreground animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
              <Star className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Sacred Journeys</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-accent">Hajj & Umrah</span> Packages
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
              Embark on the most sacred journey of your life with complete peace of mind. 
              Our comprehensive Hajj and Umrah packages are designed to provide you with 
              a spiritually fulfilling and hassle-free pilgrimage experience.
            </p>

            <p className="text-primary-foreground/70 mb-8 leading-relaxed">
              We handle everything from visa processing to accommodation, transportation, 
              and guided religious tours. Let us take care of the logistics while you 
              focus on your spiritual journey.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-primary-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                variant="outline"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={hajjImage}
                alt="The Holy Kaaba in Makkah"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
            
            {/* Quote Card */}
            <div className="absolute -bottom-6 -left-6 lg:left-auto lg:-right-6 bg-card rounded-xl p-6 shadow-card max-w-[280px]">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm italic mb-2">
                "A life-changing experience. The team handled everything perfectly."
              </p>
              <p className="text-xs text-muted-foreground">— Satisfied Pilgrim</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HajjUmrah;
