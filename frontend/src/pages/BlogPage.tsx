import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, ChevronRight, Search } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import maintenanceImage from "@/assets/solar-maintenance.jpg";

const blogPosts = [
  {
    id: 1,
    slug: "how-much-does-3kw-solar-system-cost-india",
    title: "How Much Does a 3KW Solar System Cost in India?",
    excerpt: "A comprehensive guide to understanding the costs, subsidies, and ROI of a 3KW residential solar system in India. Learn about pricing factors and how to maximize your savings.",
    image: heroImage,
    category: "Cost Guide",
    author: "SunPrime Team",
    date: "December 1, 2025",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "government-solar-subsidy-explained",
    title: "Government Solar Subsidy Explained: PM Surya Ghar Scheme 2025",
    excerpt: "Everything you need to know about the PM Surya Ghar free electricity scheme. Learn about eligibility, subsidy amounts, and how to apply for up to ₹78,000 in benefits.",
    image: commercialImage,
    category: "Subsidy & Policy",
    author: "SunPrime Team",
    date: "November 28, 2025",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: 3,
    slug: "benefits-rooftop-solar-2025",
    title: "10 Benefits of Rooftop Solar in 2025",
    excerpt: "Discover the top 10 reasons why 2025 is the best time to install rooftop solar. From financial savings to environmental impact, here's why you should make the switch.",
    image: maintenanceImage,
    category: "Solar Basics",
    author: "SunPrime Team",
    date: "November 25, 2025",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 4,
    slug: "solar-panel-maintenance-tips",
    title: "Solar Panel Maintenance Tips: Keep Your System Running Efficiently",
    excerpt: "Learn essential maintenance tips to maximize your solar panel efficiency. From cleaning schedules to monitoring performance, ensure your system delivers optimal output.",
    image: maintenanceImage,
    category: "Maintenance",
    author: "SunPrime Team",
    date: "November 20, 2025",
    readTime: "5 min read",
  },
  {
    id: 5,
    slug: "commercial-solar-roi-calculation",
    title: "Commercial Solar ROI: How to Calculate Returns for Your Business",
    excerpt: "A detailed guide to calculating the return on investment for commercial solar installations. Understand payback periods, tax benefits, and long-term savings.",
    image: commercialImage,
    category: "Commercial Solar",
    author: "SunPrime Team",
    date: "November 15, 2025",
    readTime: "12 min read",
  },
  {
    id: 6,
    slug: "net-metering-explained-india",
    title: "Net Metering in India: Complete Guide for 2025",
    excerpt: "Understand how net metering works in India. Learn about policies, calculations, and how to sell excess solar power back to the grid.",
    image: heroImage,
    category: "Solar Basics",
    author: "SunPrime Team",
    date: "November 10, 2025",
    readTime: "7 min read",
  },
];

const categories = [
  "All",
  "Cost Guide",
  "Subsidy & Policy",
  "Solar Basics",
  "Maintenance",
  "Commercial Solar",
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-muted">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-up">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Solar{" "}
              <span className="text-gradient-solar">Knowledge Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Stay informed about solar energy, government subsidies, installation tips, 
              and the latest industry news. Make smarter decisions for your solar journey.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border bg-card">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Featured */}
            <Link 
              to={`/blog/${featuredPosts[0].slug}`}
              className="lg:col-span-2 lg:row-span-2 group"
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={featuredPosts[0].image}
                  alt={featuredPosts[0].title}
                  className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium mb-3">
                    {featuredPosts[0].category}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-background mb-2 group-hover:text-primary transition-colors">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-background/80 mb-4 line-clamp-2 hidden md:block">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-background/70 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPosts[0].readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Side Featured */}
            {featuredPosts.slice(1, 3).map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="inline-block px-2 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3 text-muted-foreground text-xs">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-8">
            Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground text-xs">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding gradient-green">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Stay Updated on Solar Trends
          </h2>
          <p className="text-secondary-foreground/90 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest solar news, tips, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-xl border-0 bg-secondary-foreground/10 text-secondary-foreground placeholder:text-secondary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary-foreground/30"
            />
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
