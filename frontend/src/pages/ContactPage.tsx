import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Phone, Mail, MapPin, Clock, 
  MessageCircle, Send, CheckCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Toll-Free Number",
    value: "1800-123-4567",
    href: "tel:+911800123467",
    description: "Mon-Sat, 9 AM - 7 PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    description: "Quick responses",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@sunprime.in",
    href: "mailto:info@sunprime.in",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "123 Solar Park, Gomti Nagar",
    href: "#map",
    description: "Lucknow, UP - 226010",
  },
];

const cities = [
  "Lucknow", "Kanpur", "Varanasi", "Agra", "Prayagraj", 
  "Noida", "Ghaziabad", "Meerut", "Bareilly", "Other"
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Request Submitted Successfully!",
      description: "Our solar expert will contact you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", city: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Your{" "}
              <span className="text-gradient-solar">Free Solar Consultation</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to switch to solar? Fill out the form below or contact us directly. 
              Our experts will help you find the perfect solar solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 gradient-solar">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 hover:bg-primary-foreground/20 transition-colors"
              >
                <info.icon className="w-6 h-6 text-primary-foreground mb-3" />
                <h3 className="font-heading font-semibold text-primary-foreground">
                  {info.title}
                </h3>
                <p className="text-primary-foreground font-medium">{info.value}</p>
                <p className="text-primary-foreground/70 text-sm">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-medium animate-fade-up">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Request Free Solar Consultation
              </h2>
              <p className="text-muted-foreground mb-6">
                Fill in your details and our solar expert will contact you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select your city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements, roof size, monthly electricity bill, etc."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Submitting...</span>
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, you agree to receive calls and messages from SunPrime Solar Solutions 
                    regarding your inquiry.
                  </p>
                </div>
              </div>
            </div>

            {/* Map & Info */}
            <div className="space-y-6 animate-slide-in-right">
              {/* Map */}
              <div id="map" className="rounded-2xl overflow-hidden shadow-medium h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2799!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SunPrime Solar Office Location"
                />
              </div>

              {/* Office Hours */}
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Office Hours
                  </h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20solar%20installation."
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[hsl(142,70%,45%)] rounded-2xl p-6 text-center hover:bg-[hsl(142,70%,40%)] transition-colors">
                  <MessageCircle className="w-10 h-10 text-[hsl(0,0%,100%)] mx-auto mb-3" />
                  <h3 className="font-heading font-semibold text-lg text-[hsl(0,0%,100%)] mb-1">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-[hsl(0,0%,100%)]/80 text-sm">
                    Get instant responses to your queries
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "How much does a solar system cost?",
                a: "Solar system costs vary based on capacity. A typical 3KW residential system costs ₹1.5-2 lakhs after subsidy. We offer flexible EMI options."
              },
              {
                q: "What government subsidies are available?",
                a: "Under PM Surya Ghar scheme, you can get up to ₹78,000 subsidy for residential installations. We handle all paperwork for you."
              },
              {
                q: "How long does installation take?",
                a: "Residential installations typically take 2-3 days. Commercial projects may take 1-2 weeks depending on system size."
              },
              {
                q: "What warranty do you provide?",
                a: "We offer 25-year performance warranty on panels, 5-10 years on inverters, and 5 years on workmanship."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft">
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {faq.q}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
