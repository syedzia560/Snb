import { Shield, Users, Award, Clock } from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";

const stats = [
  { icon: Shield, value: "100%", label: "Trusted Service" },
  { icon: Users, value: "1000+", label: "Happy Clients" },
  { icon: Award, value: "Expert", label: "VFS Processing" },
  { icon: Clock, value: "24/7", label: "Support" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutImage}
                alt="SnB Travels team helping customers"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Card */}
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
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-4">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Your Journey Starts With{" "}
              <span className="text-gradient-gold">Trust</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At <strong className="text-foreground">SnB Travels and Tours</strong>, we understand that travel 
              documentation can be overwhelming. That's why we've dedicated ourselves to making the process 
              as smooth as possible for you.
            </p>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Based in Cape Town, South Africa, we specialize in visa applications, work permits, 
              temporary residence permits, and VFS submissions. Our team has years of experience 
              navigating the complexities of travel documentation.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're planning a pilgrimage to Makkah, a business trip abroad, or relocating 
              for work, we're here to guide you every step of the way. Your peace of mind is our priority.
            </p>

            {/* Features */}
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
  );
};

export default About;
