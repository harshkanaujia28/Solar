import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Zap, IndianRupee, Shield, Clock, Home, Building2, Wrench, ChevronRight, Star, Quote } from "lucide-react";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import maintenanceImage from "@/assets/solar-maintenance.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const benefits = [
  {
    icon: IndianRupee,
    title: "Lower Electricity Bills",
    description: "Save up to 90% on your monthly electricity costs",
  },
  {
    icon: Shield,
    title: "Govt. Subsidy Support",
    description: "Up to ₹78,000 subsidy under PM Surya Ghar scheme",
  },
  {
    icon: Zap,
    title: "25-Year Panel Warranty",
    description: "Premium Tier-1 panels with guaranteed performance",
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "Complete setup in just 3-5 working days",
  },
];

const services = [
  {
    icon: Home,
    title: "Rooftop Solar for Homes",
    description: "Complete residential solar solutions with net metering and EMI options. Perfect for reducing your home's electricity bills.",
    image: heroImage,
    href: "/services#residential",
  },
  {
    icon: Building2,
    title: "Commercial Solar Solutions",
    description: "Large-scale solar installations for factories, offices, and industries. Maximize ROI with our expert project planning.",
    image: commercialImage,
    href: "/services#commercial",
  },
  {
    icon: Wrench,
    title: "Solar AMC & Maintenance",
    description: "Annual maintenance contracts to ensure optimal performance. Panel cleaning, monitoring, and repairs included.",
    image: maintenanceImage,
    href: "/services#amc",
  },
];

const whyChooseUs = [
  "200+ successful installations across UP",
  "Certified and experienced engineers",
  "Premium Tier-1 solar panels only",
  "Hassle-free government subsidy assistance",
  "24/7 monitoring and support",
  "Flexible financing options",
];

const portfolio = [
  {
    title: "5KW Residential Rooftop",
    location: "Gomti Nagar, Lucknow",
    image: heroImage,
  },
  {
    title: "50KW Factory Installation",
    location: "Industrial Area, Kanpur",
    image: commercialImage,
  },
  {
    title: "3KW Home Solar System",
    location: "Aliganj, Lucknow",
    image: maintenanceImage,
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Lucknow",
    rating: 5,
    text: "SunPrime installed a 5KW rooftop system at my home. Very professional team and they helped with the entire subsidy process. My electricity bill is now almost zero!",
    image: testimonial1,
  },
  {
    name: "Priya Sharma",
    location: "Kanpur",
    rating: 5,
    text: "Excellent service! They completed our 25KW commercial installation on time and within budget. The ROI has been fantastic - we recovered our investment in just 4 years.",
    image: testimonial2,
  },
  {
    name: "Anil Verma",
    location: "Varanasi",
    rating: 5,
    text: "I was skeptical about solar initially, but SunPrime's team explained everything clearly. Now I'm saving ₹3,000 every month on electricity. Highly recommended!",
    image: testimonial3,
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Solar panels on rooftop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">India's Trusted Solar Partner</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              Switch to Solar.{" "}
              <span className="text-gradient-solar">Save More.</span>{" "}
              Live Green.
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
              India's leading solar installation company for homes & businesses. 
              Get up to 90% savings on electricity bills with government subsidy support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-foreground">
                <Download className="w-5 h-5" />
                Download Brochure
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-background/20">
              <div>
                <p className="text-3xl font-heading font-bold text-primary">200+</p>
                <p className="text-background/70 text-sm">Installations</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">5MW+</p>
                <p className="text-background/70 text-sm">Capacity Installed</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-primary">₹2Cr+</p>
                <p className="text-background/70 text-sm">Customer Savings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Go Solar?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of homeowners and businesses who are saving money while saving the planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-soft card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl gradient-solar flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Solar Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solar solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-6">
                Why Choose{" "}
                <span className="text-gradient-solar">SunPrime</span>?
              </h2>
              <p className="text-background/70 mb-8">
                With years of experience and hundreds of successful installations, 
                we're your trusted partner for clean energy solutions.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-solar flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-background/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="mt-8" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={commercialImage}
                alt="Large solar installation"
                className="rounded-2xl shadow-large"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-large">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gradient-green flex items-center justify-center">
                    <Shield className="w-7 h-7 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-foreground">25 Years</p>
                    <p className="text-muted-foreground text-sm">Panel Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our recent solar installations across Uttar Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-semibold text-lg text-background">
                    {project.title}
                  </h3>
                  <p className="text-background/70 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied customers who made the switch to solar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-6 shadow-soft card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-foreground mb-6 line-clamp-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/testimonials">
                Read More Reviews
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-solar">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Get a free consultation and customized solar solution for your home or business. 
            Start saving from day one!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="bg-background text-foreground hover:bg-background/90" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
