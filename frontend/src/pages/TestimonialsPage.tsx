import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight, Play } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Gomti Nagar, Lucknow",
    rating: 5,
    text: "SunPrime installed a 5KW rooftop system at my home. Very professional team and they helped with the entire subsidy process. My electricity bill went from ₃,500 to almost zero! The installation was completed in just 3 days and they explained everything clearly.",
    image: testimonial1,
    system: "5KW Residential",
    savings: "₹3,200/month",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Industrial Area, Kanpur",
    rating: 5,
    text: "Excellent service! They completed our 25KW commercial installation on time and within budget. The ROI has been fantastic - we're saving over ₹22,000 every month. Their team handled all the paperwork and approvals seamlessly.",
    image: testimonial2,
    system: "25KW Commercial",
    savings: "₹22,000/month",
  },
  {
    id: 3,
    name: "Anil Verma",
    location: "Aliganj, Lucknow",
    rating: 5,
    text: "I was skeptical about solar initially, but SunPrime's team explained everything clearly. Now I'm saving ₹3,000 every month on electricity. The panels are working great even after 2 years. Highly recommended!",
    image: testimonial3,
    system: "3KW Residential",
    savings: "₹3,000/month",
  },
  {
    id: 4,
    name: "Meera Gupta",
    location: "Varanasi",
    rating: 5,
    text: "Best decision we made! SunPrime's 10KW system for our farmhouse has been running flawlessly. The battery backup means we never face power cuts anymore. Their after-sales support is excellent.",
    image: testimonial1,
    system: "10KW Off-Grid",
    savings: "₹8,500/month",
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Hazratganj, Lucknow",
    rating: 5,
    text: "Our factory's 50KW solar installation has been a game-changer. We've reduced our electricity costs by 60% and the system paid for itself in just 3 years. SunPrime's commercial team really knows their stuff.",
    image: testimonial3,
    system: "50KW Industrial",
    savings: "₹45,000/month",
  },
  {
    id: 6,
    name: "Sunita Agarwal",
    location: "Vrindavan Yojna, Lucknow",
    rating: 5,
    text: "I love how the black panels look on our villa roof. SunPrime understood our aesthetic requirements and delivered a beautiful installation. The smart monitoring app is a great feature too.",
    image: testimonial2,
    system: "8KW Residential",
    savings: "₹7,000/month",
  },
];

const stats = [
  { number: "98%", label: "Customer Satisfaction" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "200+", label: "Happy Customers" },
  { number: "100%", label: "Would Recommend" },
];

export default function TestimonialsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredTestimonials = testimonials.slice(0, 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our{" "}
              <span className="text-gradient-solar">Customers Say</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Don't just take our word for it. Hear from hundreds of satisfied customers 
              who made the switch to solar with SunPrime.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 gradient-green">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground">
                  {stat.number}
                </p>
                <p className="text-secondary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Featured Reviews
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl bg-card shadow-large">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="aspect-square md:aspect-auto">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <Quote className="w-12 h-12 text-primary/20 mb-4" />
                        <p className="text-foreground text-lg mb-6 leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                          ))}
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-xl text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground">{testimonial.location}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex items-center gap-6">
                          <div>
                            <p className="text-xs text-muted-foreground">System</p>
                            <p className="font-medium text-foreground">{testimonial.system}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Monthly Savings</p>
                            <p className="font-medium text-secondary">{testimonial.savings}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {featuredTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              More Happy Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-2xl p-6 shadow-soft card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-foreground mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
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
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{testimonial.system}</span>
                  <span className="text-sm font-medium text-secondary">{testimonial.savings}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-solar">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Happy Customers
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Start saving on electricity and contribute to a cleaner environment. 
            Get your free solar consultation today!
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
