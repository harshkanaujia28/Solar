import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Zap, X } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import maintenanceImage from "@/assets/solar-maintenance.jpg";

const projects = [
  {
    id: 1,
    title: "3KW Residential Solar",
    location: "Gomti Nagar, Lucknow",
    capacity: "3 KW",
    type: "Residential",
    description: "Complete rooftop solar installation for a 3-bedroom house. The system generates approximately 12 units per day, covering 90% of the household's electricity needs.",
    image: heroImage,
    savings: "₹2,500/month",
  },
  {
    id: 2,
    title: "50KW Industrial Plant",
    location: "Industrial Area, Kanpur",
    capacity: "50 KW",
    type: "Industrial",
    description: "Large-scale solar installation for a textile manufacturing unit. The system offsets peak hour electricity consumption and provides significant cost savings.",
    image: commercialImage,
    savings: "₹45,000/month",
  },
  {
    id: 3,
    title: "5KW Home System",
    location: "Aliganj, Lucknow",
    capacity: "5 KW",
    type: "Residential",
    description: "Premium residential installation with battery backup. Perfect for a family home with high electricity consumption including AC units.",
    image: maintenanceImage,
    savings: "₹4,200/month",
  },
  {
    id: 4,
    title: "25KW Commercial Office",
    location: "Hazratganj, Lucknow",
    capacity: "25 KW",
    type: "Commercial",
    description: "Corporate office building solar solution. The installation covers the entire roof area and includes smart monitoring for energy optimization.",
    image: commercialImage,
    savings: "₹22,000/month",
  },
  {
    id: 5,
    title: "10KW Farmhouse",
    location: "Sitapur Road, Lucknow",
    capacity: "10 KW",
    type: "Residential",
    description: "Off-grid solar system for a farmhouse with battery storage. Provides complete energy independence with backup for essential loads.",
    image: heroImage,
    savings: "₹8,500/month",
  },
  {
    id: 6,
    title: "100KW Factory Rooftop",
    location: "Sandila, Hardoi",
    capacity: "100 KW",
    type: "Industrial",
    description: "One of our largest installations covering an entire factory roof. The system generates enough power to run production during daylight hours.",
    image: commercialImage,
    savings: "₹85,000/month",
  },
  {
    id: 7,
    title: "Solar Water Pumping",
    location: "Rural Barabanki",
    capacity: "5 HP",
    type: "Agricultural",
    description: "Agricultural solar water pumping system for irrigation. Eliminates diesel costs and provides reliable water supply for farming.",
    image: maintenanceImage,
    savings: "₹6,000/month",
  },
  {
    id: 8,
    title: "8KW Villa Installation",
    location: "Vrindavan Yojna, Lucknow",
    capacity: "8 KW",
    type: "Residential",
    description: "Luxury villa installation with premium aesthetics. Black-on-black panels blend seamlessly with the modern architecture.",
    image: heroImage,
    savings: "₹7,000/month",
  },
];

const filters = ["All", "Residential", "Commercial", "Industrial", "Agricultural"];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.type === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="text-gradient-solar">Solar Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our successful solar installations across Uttar Pradesh. 
              From residential rooftops to industrial plants, see how we're powering 
              India's clean energy future.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 gradient-solar">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">200+</p>
              <p className="text-primary-foreground/80 text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">5MW+</p>
              <p className="text-primary-foreground/80 text-sm">Total Capacity</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">15+</p>
              <p className="text-primary-foreground/80 text-sm">Districts Covered</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">₹2Cr+</p>
              <p className="text-primary-foreground/80 text-sm">Customer Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? "gradient-solar text-primary-foreground shadow-glow"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      {project.capacity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-semibold">
                      Saves {project.savings}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/80 text-background flex items-center justify-center hover:bg-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                {selectedProject.type}
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                {selectedProject.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  {selectedProject.capacity}
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                {selectedProject.description}
              </p>
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl mb-6">
                <span className="text-muted-foreground">Monthly Savings</span>
                <span className="text-2xl font-heading font-bold text-secondary">
                  {selectedProject.savings}
                </span>
              </div>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">
                  Get Similar Installation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-8">
            Join our growing list of satisfied customers. Get a free consultation 
            and see how much you can save with solar.
          </p>
          <Button size="xl" variant="hero" asChild>
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
