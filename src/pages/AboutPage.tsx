import { Link } from "react-router-dom";
import { Shield, Users, Award, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-travel.jpg";

const stats = [
  { icon: Shield, value: "100%", label: "Trusted Service" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "Expert", label: "VFS Processing" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const values = [
  {
    title: "Trust & Reliability",
    description: "We understand the importance of your travel documents. Your trust is our foundation.",
  },
  {
    title: "Expert Guidance",
    description: "Our experienced team navigates complex visa and documentation processes with ease.",
  },
  {
    title: "Personalized Service",
    description: "Every client receives dedicated attention and customized solutions for their needs.",
  },
  {
    title: "Transparent Process",
    description: "We keep you informed at every step with clear communication and honest advice.",
  },
];

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="About SnB Travels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-medium text-white">About Us</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Your Journey Starts With <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Trust</span>
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              At SnB Travels and Tours, we've dedicated ourselves to making travel documentation 
              as smooth and stress-free as possible for you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={aboutImage}
                  alt="SnB Travels team helping customers"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto mb-2">
                          <stat.icon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="font-serif text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Based in Cape Town, South Africa, <strong className="text-foreground">SnB Travels and Tours</strong> is 
                a trusted name in travel and visa consultancy. We specialize in making your travel dreams a reality 
                with expert guidance and personalized service.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team has years of experience navigating the complexities of visa applications, work permits, 
                temporary residence permits, and VFS submissions. We understand that these processes can be 
                overwhelming, which is why we're here to guide you every step of the way.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're planning a sacred pilgrimage to Makkah, a business trip abroad, or relocating 
                for work opportunities, we provide the expertise and support you need. Your peace of mind 
                is our priority.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div 
                    key={stat.label}
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-serif text-xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            <p className="text-muted-foreground">
              These principles guide everything we do at SnB Travels and Tours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-xl p-8 shadow-card hover:shadow-soft transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif font-bold text-accent">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us help you with your travel and documentation needs. Contact us today!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold"
          >
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
