import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Crafting Captivating Headlines: Your awesome post title goes here",
    excerpt: "Engaging Introductions: Capturing Your Audience's Interest. The initial impression your blog post makes is crucial, and that's where your introduction comes into play.",
    category: "General",
    date: "June 2025",
    readTime: "5 min read",
    author: "TridentX Team",
    featured: true,
    image: "nebula",
    link: "/post-1"
  },
  {
    title: "The Art of Drawing Readers In: Your attractive post title goes here",
    excerpt: "Engaging Introductions: Capturing Your Audience's Interest. The initial impression your blog post makes is crucial, and that's where your introduction comes into play.",
    category: "General",
    date: "June 2025",
    readTime: "4 min read",
    author: "TridentX Team",
    featured: true,
    image: "galaxy",
    link: "/post-2"
  },
  {
    title: "CES 2024 Travel Log",
    excerpt: "We're getting close to a deal with a Las Vegas-based company, so we thought, 'Why not visit with them coinciding with CES?' So, that's what we did.",
    category: "General",
    date: "July 2025",
    readTime: "6 min read",
    author: "TridentX Team",
    featured: false,
    image: "ces",
    link: "/post-3"
  }
];

const categories = [
  "All Posts",
  "General"
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              TridentX <span className="text-glow">Blog</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Insights & Innovations
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Badge 
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
                  index === 0 ? "bg-primary text-primary-foreground" : ""
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Featured Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <Link key={index} to={post.link}>
                <Card 
                  className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover-lift group"
                >
                  {/* Placeholder Image */}
                  <div className={`h-64 ${
                    post.image === 'nebula' 
                      ? 'bg-gradient-to-br from-purple-600/40 via-pink-500/40 to-orange-500/40' 
                      : 'bg-gradient-to-br from-indigo-600/40 via-blue-500/40 to-cyan-500/40'
                  } flex items-center justify-center`}>
                    <div className="text-6xl opacity-30">🌌</div>
                  </div>

                  <div className="p-6">
                    <Badge className="mb-3">{post.category}</Badge>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Link key={index} to={post.link}>
                <Card 
                  className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover-lift group"
                >
                  {/* Placeholder Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-600/30 via-teal-500/30 to-green-500/30 flex items-center justify-center">
                    <div className="text-4xl opacity-30">🎪</div>
                  </div>

                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">{post.category}</Badge>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 transition-all">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Get the latest insights and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/30"
              >
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
