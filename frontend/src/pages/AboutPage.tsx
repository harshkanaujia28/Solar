import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users, Award, Leaf, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import maintenanceImage from "@/assets/solar-maintenance.jpg";

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "We believe in honest pricing and clear communication at every step of your solar journey.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Only premium Tier-1 solar panels and components from globally recognized manufacturers.",
  },
  {
    icon: Leaf,
    title: "Environmental Commitment",
    description: "Dedicated to reducing carbon footprint and building a sustainable future for India.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority with 24/7 support and hassle-free service experience.",
  },
];

const stats = [
  { number: "200+", label: "Successful Installations" },
  { number: "5MW+", label: "Total Capacity Installed" },
  { number: "15+", label: "Districts Covered" },
  { number: "98%", label: "Customer Satisfaction" },
];

const differentiators = [
  "Government-approved vendor with all required licenses",
  "In-house team of certified solar engineers",
  "Transparent pricing with no hidden costs",
  "Complete assistance with subsidy applications",
  "Post-installation monitoring and support",
  "Flexible EMI options with leading banks",
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-muted" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                Powering India's{" "}
                <span className="text-gradient-solar">Clean Energy</span>{" "}
                Revolution
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                SunPrime Solar Solutions is on a mission to make solar energy accessible, 
                affordable, and reliable for every Indian home and business. We combine 
                cutting-edge technology with exceptional service to deliver solar solutions 
                that exceed expectations.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Solar Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src={heroImage}
                alt="Solar installation team"
                className="rounded-2xl shadow-large"
              />
              <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-large hidden md:block">
                <p className="text-3xl font-heading font-bold text-primary">Since 2018</p>
                <p className="text-muted-foreground text-sm">Serving Uttar Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 gradient-solar">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
                  {stat.number}
                </p>
                <p className="text-primary-foreground/80 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 shadow-soft card-hover animate-fade-up">
              <div className="w-14 h-14 rounded-xl gradient-solar flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To accelerate India's transition to clean energy by providing affordable, 
                high-quality solar solutions that empower homeowners and businesses to 
                reduce their carbon footprint while saving money.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 shadow-soft card-hover animate-fade-up stagger-1">
              <div className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                A future where every rooftop in India generates clean solar energy, 
                contributing to energy independence and environmental sustainability 
                for generations to come.
              </p>
            </div>

            {/* Values */}
            <div className="bg-card rounded-2xl p-8 shadow-soft card-hover animate-fade-up stagger-2">
              <div className="w-14 h-14 rounded-xl gradient-solar flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, innovation, and customer satisfaction drive everything we do. 
                We're committed to building long-term relationships based on trust and 
                delivering exceptional results.
              </p>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Us Different
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the solar industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-muted rounded-2xl p-6 text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full gradient-green flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={commercialImage}
                  alt="Commercial installation"
                  className="rounded-xl shadow-lg"
                />
                <img
                  src={maintenanceImage}
                  alt="Maintenance work"
                  className="rounded-xl shadow-lg mt-8"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-6">
                Why Trust SunPrime?
              </h2>
              <p className="text-background/70 mb-8">
                With a proven track record and commitment to quality, we've earned the trust 
                of hundreds of customers across Uttar Pradesh.
              </p>
              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-background/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-green">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Ready to Join the Solar Revolution?
          </h2>
          <p className="text-secondary-foreground/90 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you transition to clean, renewable solar energy.
          </p>
          <Button size="xl" className="bg-background text-foreground hover:bg-background/90" asChild>
            <Link to="/contact">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
