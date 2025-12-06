import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Home, Building2, Wrench, Search, 
  ChevronRight, Check, HelpCircle, Zap, Calculator,
  FileCheck, Clock, Wallet, Headphones
} from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import maintenanceImage from "@/assets/solar-maintenance.jpg";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Solar Rooftop",
    description: "Transform your home into a power-generating unit with our premium residential solar solutions. Reduce your electricity bills by up to 90% while contributing to a cleaner environment.",
    image: heroImage,
    features: [
      "Net metering support for selling excess power",
      "Flexible EMI options with 0% interest",
      "Customized energy calculations",
      "Government subsidy assistance (up to ₹78,000)",
      "25-year panel performance warranty",
      "Free site survey and design",
    ],
    faqs: [
      {
        question: "How much roof space do I need for solar panels?",
        answer: "For a 1KW system, you typically need about 100 sq. ft. of shadow-free roof space. A standard 3KW home system requires approximately 300 sq. ft."
      },
      {
        question: "What is net metering and how does it work?",
        answer: "Net metering allows you to sell excess solar power back to the grid. Your electricity meter runs backward when you generate more than you consume, earning you credits on your electricity bill."
      },
      {
        question: "How long does residential installation take?",
        answer: "A typical residential installation takes 2-3 days once all permits are approved. The entire process from inquiry to installation usually takes 2-3 weeks."
      },
    ],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial & Industrial Solar",
    description: "Maximize your business's sustainability and profitability with large-scale solar solutions. Our commercial installations help enterprises reduce operational costs and achieve green certifications.",
    image: commercialImage,
    features: [
      "Large-scale plant setup (10KW to 1MW+)",
      "Detailed project feasibility study",
      "ROI calculation and financial modeling",
      "Tax benefits under Section 32",
      "Accelerated depreciation benefits",
      "Corporate PPA arrangements",
    ],
    faqs: [
      {
        question: "What is the typical ROI for commercial solar?",
        answer: "Commercial solar installations typically achieve ROI within 3-5 years. With tax benefits and accelerated depreciation, the effective payback period can be even shorter."
      },
      {
        question: "Can solar work for my 24/7 manufacturing unit?",
        answer: "Yes! We design hybrid systems with battery storage or grid backup to ensure uninterrupted power supply. Solar can significantly reduce your daytime power costs."
      },
      {
        question: "Do you handle all permits and approvals?",
        answer: "Absolutely. We manage the entire process including structural assessment, electrical permits, grid connection approval, and net metering setup."
      },
    ],
  },
  {
    id: "amc",
    icon: Wrench,
    title: "Solar AMC & Maintenance",
    description: "Ensure your solar system operates at peak efficiency with our comprehensive annual maintenance contracts. Regular maintenance can increase your system's output by up to 20%.",
    image: maintenanceImage,
    features: [
      "Quarterly panel cleaning and inspection",
      "Inverter health check and optimization",
      "Real-time performance monitoring",
      "24/7 technical support hotline",
      "Priority repair and replacement",
      "Detailed performance reports",
    ],
    faqs: [
      {
        question: "Why is regular solar panel maintenance important?",
        answer: "Dust, bird droppings, and debris can reduce panel efficiency by 15-25%. Regular cleaning and maintenance ensures optimal power generation and extends system life."
      },
      {
        question: "What's included in the AMC package?",
        answer: "Our AMC includes quarterly cleaning, electrical connection checks, inverter servicing, performance monitoring, and priority support for any issues."
      },
      {
        question: "Can you maintain systems installed by other companies?",
        answer: "Yes, we provide AMC services for solar systems installed by any vendor. Our team can assess your system and recommend appropriate maintenance plans."
      },
    ],
  },
  {
    id: "consultation",
    icon: Search,
    title: "Solar Consultation",
    description: "Not sure where to start? Our expert consultation service helps you understand your solar potential, estimated savings, and the best solution for your specific needs.",
    image: heroImage,
    features: [
      "Free site survey and assessment",
      "Shadow analysis using latest technology",
      "Energy output simulation",
      "Cost-saving projection",
      "Subsidy eligibility check",
      "Custom system design",
    ],
    faqs: [
      {
        question: "Is the consultation really free?",
        answer: "Yes! We offer completely free site surveys and consultations with no obligation. Our goal is to help you make an informed decision about going solar."
      },
      {
        question: "What do I need to prepare for the site visit?",
        answer: "Just have your recent electricity bills ready. Our team will handle the rest, including roof measurement, shadow analysis, and technical assessment."
      },
      {
        question: "How accurate are the savings projections?",
        answer: "Our projections are based on actual solar radiation data, your consumption patterns, and local tariff rates. They're typically accurate within 5-10% of actual results."
      },
    ],
  },
];

const process = [
  {
    icon: Search,
    title: "Free Consultation",
    description: "We assess your energy needs and roof suitability",
  },
  {
    icon: Calculator,
    title: "Custom Design",
    description: "Tailored system design with ROI projections",
  },
  {
    icon: FileCheck,
    title: "Approvals & Subsidy",
    description: "We handle all permits and subsidy applications",
  },
  {
    icon: Zap,
    title: "Installation",
    description: "Professional installation by certified engineers",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "24/7 monitoring and maintenance support",
  },
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive{" "}
              <span className="text-gradient-solar">Solar Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From residential rooftops to large industrial plants, we offer end-to-end 
              solar services tailored to your unique energy needs.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 gradient-solar">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {process.map((step, index) => (
              <div key={step.title} className="flex items-center gap-2">
                <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-full px-4 py-2">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                  <span className="text-primary-foreground font-medium text-sm">
                    {step.title}
                  </span>
                </div>
                {index < process.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-primary-foreground/50 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl gradient-solar flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-2xl shadow-large w-full"
                  />
                </div>
              </div>

              {/* FAQs */}
              <div className="mt-12 bg-muted rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-heading font-semibold text-lg text-foreground">
                    Frequently Asked Questions
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.faqs.map((faq) => (
                    <div key={faq.question} className="bg-card rounded-xl p-5">
                      <h4 className="font-medium text-foreground mb-2 text-sm">
                        {faq.question}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-8">
            Our solar experts are here to help. Get a free consultation and we'll recommend 
            the perfect solution for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="xl" variant="whatsapp">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
