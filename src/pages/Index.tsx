import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, FileCheck, MessageCircle, Shield, Users, Star, MapPin, CheckCircle2, Building2, Moon as MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-travel.jpg";
import aboutImage from "@/assets/about-team.jpg";
import hajjUmrahImage from "@/assets/hajj-umrah.jpg";
import ServiceInquiryModal from "@/components/ServiceInquiryModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/27795255989?text=Hello! I'm interested in your travel services.", "_blank");
  };

  const services = [
    {
      title: "Visa Processing",
      icon: FileCheck,
      description: "Expert assistance for tourist, business, and student visas worldwide.",
    },
    {
      title: "Flight Bookings",
      icon: Plane,
      description: "Best deals on international and domestic flights with all major airlines.",
    },
    {
      title: "Hajj & Umrah",
      icon: MoonIcon,
      description: "Complete pilgrimage packages with guidance and accommodation.",
    },
    {
      title: "VFS Appointments",
      icon: Building2,
      description: "Hassle-free scheduling and document preparation for VFS submissions.",
    },
    {
      title: "Travel Insurance",
      icon: Shield,
      description: "Comprehensive travel coverage for your peace of mind.",
    },
    {
      title: "South Africa Tours",
      icon: MapPin,
      description: "Curated local experiences and sightseeing packages.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed K.",
      role: "Hajj Pilgrim",
      content: "SnB Travels made my Hajj journey absolutely seamless. From visa to accommodation, everything was perfect. JazakAllah Khair!",
      rating: 5,
    },
    {
      name: "Sarah M.",
      role: "Business Traveler",
      content: "Getting a work permit was stressful until I found SnB. They handled everything professionally and kept me updated with prompt responses.",
      rating: 5,
    },
    {
      name: "John D.",
      role: "Tourist",
      content: "Excellent service for flight bookings. Got a great deal and the support team was very responsive on WhatsApp.",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Image with modern overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Travel the world with SnB Travels"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/30" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hover:bg-white/20 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-white tracking-wide">
                Trusted Travel Partner Since Day One
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 drop-shadow-lg">
              Unlock the World with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold animate-shimmer bg-[length:200%_auto]">
                SnB Travels
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light">
              We specialize in making complex travel simple. From Visa applications to spiritual journeys, we are with you every step of the way.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-16">
              <Button
                size="lg"
                onClick={() => handleOpenModal("General Inquiry")}
                className="h-14 px-8 bg-gold hover:bg-gold-dark text-navy font-bold text-lg rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all transform hover:-translate-y-1"
              >
                  <FileCheck className="w-5 h-5 mr-2" />
                  Start Application
                  <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={openWhatsApp}
                className="h-14 px-8 border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold text-lg rounded-full backdrop-blur-sm transition-all hover:border-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
              <div className="flex flex-col items-center text-center gap-2">
                 <p className="text-2xl font-bold text-white">100%</p>
                 <p className="text-xs text-gray-300 uppercase tracking-wider">Success Rate</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                 <p className="text-2xl font-bold text-white">24/7</p>
                 <p className="text-xs text-gray-300 uppercase tracking-wider">Support</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                 <p className="text-2xl font-bold text-white">Fast</p>
                 <p className="text-xs text-gray-300 uppercase tracking-wider">Processing</p>
              </div>
               <div className="flex flex-col items-center text-center gap-2">
                 <p className="text-2xl font-bold text-white">VFS</p>
                 <p className="text-xs text-gray-300 uppercase tracking-wider">Accredited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-navy/5 transform translate-x-4 translate-y-4 rounded-3xl transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutImage}
                  alt="About SnB Travels"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-60" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-navy text-lg">Trusted Agency</p>
                    <p className="text-sm text-gray-500">Certified & Verified</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                Crafting Unforgettable <span className="text-gold">Travel Experiences</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                SnB Travels and Tours is more than just a booking agency. We are your dedicated travel architects, based in Cape Town and serving the world.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We navigate the complexities of international travel documentation so you don't have to. From the moment you decide to travel until you return home, we ensure a seamless experience.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Secure</h4>
                    <p className="text-sm text-gray-500">Your data is safe with us</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy mb-1">Personalized</h4>
                    <p className="text-sm text-gray-500">Tailored to your needs</p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-navy hover:bg-navy/90 text-white px-8 py-6 rounded-xl text-lg group">
                <Link to="/about">
                  Discover More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">What We Offer</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mb-4">
              Our Core <span className="text-gold">Services</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive travel solutions designed for your peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <Card key={item.title} className="group hover:-translate-y-2 transition-all duration-300 border-none shadow-lg hover:shadow-2xl overflow-hidden">
                <CardContent className="p-8 relative h-full">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <item.icon className="w-32 h-32 text-navy" />
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gold font-semibold group-hover:gap-2 transition-all"
                    onClick={() => handleOpenModal(item.title)}
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service: Hajj & Umrah */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <div className="order-2 lg:order-1">
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">Spiritual Journeys</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                Hajj & Umrah <span className="text-gray-400">Packages</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Embark on your spiritual journey with complete peace of mind. We handle all logistics, from visa processing to accommodation near the Haram, so you can focus on your worship.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Complete Visa Processing",
                  "5-Star Accommodation",
                  "Transport & Ziyarat",
                  "Guided Tours"
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => handleOpenModal("Hajj & Umrah")}
                className="bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-6 rounded-xl"
              >
                  View Packages
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-2xl transform rotate-3" />
              <img
                src={hajjUmrahImage}
                alt="Kaaba in Makkah"
                className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">How It Works</span>
            <h2 className="font-serif text-4xl font-bold text-navy mb-4">
              Your Journey in 3 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gray-100 -z-0" />

            {[
              { icon: MessageCircle, title: "1. Consultation", description: "Contact us to discuss your travel or visa requirements. We provide free initial guidance." },
              { icon: FileCheck, title: "2. Processing", description: "Our experts handle the paperwork, submitting applications and booking flights efficiently." },
              { icon: Plane, title: "3. Travel", description: "Receive your documents and tickets. You are ready to embark on your journey!" },
            ].map((step, index) => (
              <div key={index} className="text-center relative z-10 bg-white p-4">
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 shadow-xl flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-center text-navy mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold text-navy">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-blue-950" />
        <div className="absolute inset-0">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you need a visa, a flight, or a complete travel package, we are here to help.
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => handleOpenModal("General Inquiry")}
              size="lg"
              className="px-8 py-6 text-lg bg-gold hover:bg-gold-dark text-navy font-bold rounded-xl"
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              onClick={openWhatsApp}
              className="px-8 py-6 text-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Modal - placed at the end of the component */}
      <ServiceInquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
};

export default Index;
