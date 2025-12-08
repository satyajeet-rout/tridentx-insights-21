// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";

// const blogPosts = [
//   {
//     title: "Crafting Captivating Headlines: Your awesome post title goes here",
//     excerpt: "Engaging Introductions: Capturing Your Audience's Interest. The initial impression your blog post makes is crucial, and that's where your introduction comes into play.",
//     category: "General",
//     date: "June 2025",
//     readTime: "5 min read",
//     author: "TridentX Team",
//     featured: true,
//     image: "nebula",
//     link: "/post-1"
//   },
//   {
//     title: "The Art of Drawing Readers In: Your attractive post title goes here",
//     excerpt: "Engaging Introductions: Capturing Your Audience's Interest. The initial impression your blog post makes is crucial, and that's where your introduction comes into play.",
//     category: "General",
//     date: "June 2025",
//     readTime: "4 min read",
//     author: "TridentX Team",
//     featured: true,
//     image: "galaxy",
//     link: "/post-2"
//   },
//   {
//     title: "CES 2024 Travel Log",
//     excerpt: "We're getting close to a deal with a Las Vegas-based company, so we thought, 'Why not visit with them coinciding with CES?' So, that's what we did.",
//     category: "General",
//     date: "July 2025",
//     readTime: "6 min read",
//     author: "TridentX Team",
//     featured: false,
//     image: "ces",
//     link: "/post-3"
//   }
// ];

// const categories = [
//   "All Posts",
//   "General"
// ];

// const Blog = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="pt-32 pb-16 relative">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16 animate-fade-in">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               TridentX <span className="text-glow">Blog</span>
//             </h1>
//             <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
//               Insights & Innovations
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Categories */}
//       <section className="py-8">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
//             {categories.map((category, index) => (
//               <Badge 
//                 key={index}
//                 variant={index === 0 ? "default" : "outline"}
//                 className={`px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors ${
//                   index === 0 ? "bg-primary text-primary-foreground" : ""
//                 }`}
//               >
//                 {category}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Posts */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <div className="flex items-center gap-2 mb-8">
//             <TrendingUp className="h-6 w-6 text-primary" />
//             <h2 className="text-3xl font-bold">Featured Articles</h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
//             {blogPosts.filter(post => post.featured).map((post, index) => (
//               <Link key={index} to={post.link}>
//                 <Card 
//                   className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover-lift group"
//                 >
//                   {/* Placeholder Image */}
//                   <div className={`h-64 ${
//                     post.image === 'nebula' 
//                       ? 'bg-gradient-to-br from-purple-600/40 via-pink-500/40 to-orange-500/40' 
//                       : 'bg-gradient-to-br from-indigo-600/40 via-blue-500/40 to-cyan-500/40'
//                   } flex items-center justify-center`}>
//                     <div className="text-6xl opacity-30">🌌</div>
//                   </div>

//                   <div className="p-6">
//                     <Badge className="mb-3">{post.category}</Badge>
                    
//                     <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
//                       {post.title}
//                     </h3>
                    
//                     <p className="text-foreground/70 mb-4 line-clamp-2">
//                       {post.excerpt}
//                     </p>

//                     <div className="flex items-center gap-4 text-sm text-foreground/60 mb-4">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="h-4 w-4" />
//                         {post.date}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock className="h-4 w-4" />
//                         {post.readTime}
//                       </div>
//                     </div>

//                     <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
//                       Read Article
//                       <ArrowRight className="ml-2 h-4 w-4" />
//                     </Button>
//                   </div>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* All Posts */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             {blogPosts.filter(post => !post.featured).map((post, index) => (
//               <Link key={index} to={post.link}>
//                 <Card 
//                   className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover-lift group"
//                 >
//                   {/* Placeholder Image */}
//                   <div className="h-48 bg-gradient-to-br from-blue-600/30 via-teal-500/30 to-green-500/30 flex items-center justify-center">
//                     <div className="text-4xl opacity-30">🎪</div>
//                   </div>

//                   <div className="p-6">
//                     <Badge variant="outline" className="mb-3">{post.category}</Badge>
                    
//                     <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
//                       {post.title}
//                     </h3>
                    
//                     <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
//                       {post.excerpt}
//                     </p>

//                     <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="h-3 w-3" />
//                         {post.date}
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock className="h-3 w-3" />
//                         {post.readTime}
//                       </div>
//                     </div>

//                     <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 transition-all">
//                       Read More
//                       <ArrowRight className="ml-2 h-3 w-3" />
//                     </Button>
//                   </div>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Subscribe to Our Newsletter
//             </h2>
//             <p className="text-xl text-foreground/70 mb-8">
//               Get the latest insights and updates delivered to your inbox
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input 
//                 type="email" 
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//               <Button 
//                 className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/30"
//               >
//                 Subscribe
//               </Button>
//             </div>
//           </Card>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Blog;



// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, Clock, User, ArrowRight, TrendingUp } from "lucide-react";
// import { Link } from "react-router-dom";

// // Warm Galaxy Background
// import galaxyWarmBg from "@/assets/galaxy-wallpaper-warm-colors.jpg";

// const blogPosts = [
//   {
//     title: "Crafting Captivating Headlines",
//     excerpt: "Engaging Introductions: Capturing Your Audience's Interest. The initial impression your blog post makes is crucial, and that's where your introduction comes into play.",
//     category: "General",
//     date: "June 2025",
//     readTime: "5 min read",
//     author: "TridentX Team",
//     featured: true,
//     image: "nebula",
//     link: "/post-1"
//   },
//   {
//     title: "The Art of Drawing Readers In",
//     excerpt: "Engaging Introductions: Capturing Your Audience's Interest. The initial impression your blog post makes is crucial, and that's where your introduction comes into play.",
//     category: "General",
//     date: "June 2025",
//     readTime: "4 min read",
//     author: "TridentX Team",
//     featured: true,
//     image: "galaxy",
//     link: "/post-2"
//   },
//   {
//     title: "CES 2024 Travel Log",
//     excerpt: "We're getting close to a deal with a Las Vegas-based company, so we thought, 'Why not visit with them coinciding with CES?' So, that's what we did.",
//     category: "General",
//     date: "July 2025",
//     readTime: "6 min read",
//     author: "TridentX Team",
//     featured: false,
//     image: "ces",
//     link: "/post-3"
//   }
// ];

// const categories = ["All Posts", "General"];

// const Blog = () => {
//   return (
//     <>
//       {/* Warm Galaxy Background */}
//       <div 
//         className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
//         style={{ 
//           backgroundImage: `url(${galaxyWarmBg})`,
//           backgroundAttachment: "fixed"
//         }}
//       />

//       {/* Warm-tinted dark overlay for readability + cinematic feel */}
//       <div className="fixed inset-0 -z-10 bg-black/65" />

//       {/* Main Content */}
//       <div className="relative min-h-screen">
//         <Navigation />

//         {/* Hero */}
//         <section className="pt-32 pb-20 text-center">
//           <div className="container mx-auto px-6">
//             <h1 className="text-6xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl">
//               TridentX <span className="text-glow">Blog</span>
//             </h1>
//             <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light">
//               Insights • Innovations • Future Thinking
//             </p>
//           </div>
//         </section>

//         {/* Categories */}
//         <section className="py-8">
//           <div className="container mx-auto px-6">
//             <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
//               {categories.map((category, index) => (
//                 <Badge 
//                   key={index}
//                   variant={index === 0 ? "default" : "outline"}
//                   className={`px-6 py-3 text-lg font-medium cursor-pointer transition-all hover:scale-105 ${
//                     index === 0 
//                       ? "bg-primary text-white border-primary shadow-lg shadow-primary/30" 
//                       : "border-white/40 text-white hover:bg-white/10"
//                   }`}
//                 >
//                   {category}
//                 </Badge>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Featured Posts */}
//         <section className="py-20">
//           <div className="container mx-auto px-6">
//             <div className="flex items-center gap-3 mb-12">
//               <TrendingUp className="h-8 w-8 text-primary" />
//               <h2 className="text-4xl font-bold text-white">Featured Articles</h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
//               {blogPosts.filter(post => post.featured).map((post, index) => (
//                 <Link key={index} to={post.link}>
//                   <Card className="overflow-hidden bg-white/10 backdrop-blur-xl border-white/20 hover-lift group shadow-2xl hover:shadow-primary/20 transition-all duration-500">
//                     <div className={`h-72 relative overflow-hidden ${
//                       post.image === 'nebula' 
//                         ? 'bg-gradient-to-br from-purple-600/50 via-pink-600/40 to-orange-500/50' 
//                         : 'bg-gradient-to-br from-amber-600/50 via-red-600/40 to-purple-700/50'
//                     }`}>
//                       <div className="absolute inset-0 bg-black/20" />
//                       <div className="flex items-center justify-center h-full">
//                         <div className="text-9xl opacity-20 animate-pulse">Cosmic</div>
//                       </div>
//                     </div>

//                     <div className="p-8">
//                       <Badge className="mb-4 bg-primary/20 text-primary border-primary/40">
//                         {post.category}
//                       </Badge>
                      
//                       <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors leading-tight">
//                         {post.title}
//                       </h3>
                      
//                       <p className="text-white/70 mb-6 line-clamp-3 text-lg">
//                         {post.excerpt}
//                       </p>

//                       <div className="flex items-center gap-6 text-white/60 mb-6 text-sm">
//                         <div className="flex items-center gap-2">
//                           <Calendar className="h-5 w-5" />
//                           {post.date}
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Clock className="h-5 w-5" />
//                           {post.readTime}
//                         </div>
//                       </div>

//                       <Button className="w-full bg-primary/20 hover:bg-primary text-white border border-primary/40 hover:border-primary shadow-lg hover:shadow-primary/30 transition-all">
//                         Read Article
//                         <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                       </Button>
//                     </div>
//                   </Card>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Latest Articles */}
//         <section className="py-20 bg-black/20">
//           <div className="container mx-auto px-6">
//             <h2 className="text-4xl font-bold text-white mb-12">Latest Articles</h2>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//               {blogPosts.filter(post => !post.featured).map((post, index) => (
//                 <Link key={index} to={post.link}>
//                   <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/10 hover-lift group shadow-xl">
//                     <div className="h-48 bg-gradient-to-br from-orange-600/30 via-pink-600/30 to-purple-700/30 relative">
//                       <div className="absolute inset-0 bg-black/10" />
//                       <div className="flex items-center justify-center h-full text-6xl opacity-20">Event</div>
//                     </div>

//                     <div className="p-6">
//                       <Badge variant="outline" className="mb-3 border-white/30 text-white">
//                         {post.category}
//                       </Badge>
                      
//                       <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors line-clamp-2">
//                         {post.title}
//                       </h3>
                      
//                       <p className="text-white/60 text-sm mb-4 line-clamp-3">
//                         {post.excerpt}
//                       </p>

//                       <div className="flex items-center justify-between text-xs text-white/50 mb-4">
//                         <span className="flex items-center gap-1">
//                           <Calendar className="h-4 w-4" />
//                           {post.date}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Clock className="h-4 w-4" />
//                           {post.readTime}
//                         </span>
//                       </div>

//                       <Button variant="ghost" size="sm" className="w-full text-white hover:bg-white/10 hover:text-primary transition-all">
//                         Read More
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Button>
//                     </div>
//                   </Card>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Newsletter CTA */}
//         <section className="py-24">
//           <div className="container mx-auto px-6">
//             <Card className="p-16 bg-gradient-to-br from-primary/20 via-purple-600/10 to-orange-600/10 backdrop-blur-2xl border-white/20 shadow-2xl max-w-4xl mx-auto text-center">
//               <h2 className="text-5xl font-black text-white mb-6 drop-shadow-2xl">
//                 Stay Cosmic
//               </h2>
//               <p className="text-2xl text-white/80 mb-10 font-light">
//                 Get the latest insights from the edge of digital transformation
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//                 <input 
//                   type="email" 
//                   placeholder="your@email.com"
//                   className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm"
//                 />
//                 <Button size="lg" className="px-10 font-bold text-lg shadow-xl hover:shadow-primary/40">
//                   Subscribe
//                 </Button>
//               </div>
//             </Card>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Blog;


import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Real images
import post1Img from "@/assets/post1.png";
import post2Img from "@/assets/post2.png";
import cesImg from "@/assets/CES_1.webp";

// YOUR ORIGINAL WARM GALAXY BG — UNCHANGED
import galaxyWarmBg from "@/assets/galaxy-wallpaper-warm-colors.jpg";

const blogPosts = [
  {
    title: "CES 2024 Travel Log",
    excerpt: "We're getting close to a deal with a Las Vegas-based company, so we thought, 'Why not visit with them coinciding with CES?' So, that's what we did.",
    category: "General",
    date: "July 2025",
    readTime: "6 min read",
    featured: false,
    image: cesImg,
    link: "/post-3"
  },
  {
    title: "Crafting Captivating Headlines",
    excerpt: "Engaging Introductions: Capturing Your Audience's Interest. The initial impression your blog post makes is crucial, and that's where your introduction comes into play.",
    category: "General",
    date: "June 2025",
    readTime: "5 min read",
    featured: true,
    image: post1Img,
    link: "/post-1"
  },
  {
    title: "The Art of Drawing Readers In",
    excerpt: "Engaging Introductions: Capturing Your Audience's Interest. The initial impression your blog post makes is crucial, and that's where your introduction comes into play.",
    category: "General",
    date: "June 2025",
    readTime: "4 min read",
    featured: true,
    image: post2Img,
    link: "/post-2"
  }
];

const Blog = () => {
  const latestPost = blogPosts[0];           // CES 2024
  const featuredPosts = blogPosts.slice(1);  // The two featured ones

  return (
    <>
      {/* Your original warm galaxy background */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${galaxyWarmBg})`,
          backgroundAttachment: "fixed"
        }}
      />
      <div className="fixed inset-0 -z-10 bg-black/65" />

      <div className="relative min-h-screen">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl">
              TridentX <span className="text-glow">Blog</span>
            </h1>
            <p className="text-2xl text-purple-200 max-w-3xl mx-auto font-light">
              Insights • Innovations • Future Thinking
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {["All Posts", "General"].map((category, index) => (
                <Badge 
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={`px-6 py-3 text-lg font-medium cursor-pointer transition-all hover:scale-105 ${
                    index === 0 
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/30" 
                      : "border-white/40 text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Post: CES 2024 — FIRST & BIGGEST */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-3 mb-12">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold text-white">Latest Article</h2>
            </div>

            <Link to={latestPost.link}>
              <Card className="overflow-hidden bg-white/10 backdrop-blur-xl border-white/20 hover-lift group shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-96 md:h-full overflow-hidden">
                    <img
                      src={latestPost.image}
                      alt={latestPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-10 md:p-16 flex flex-col justify-center">
                    <Badge className="mb-4 bg-primary/20 text-primary border-primary/40">Latest</Badge>
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                      {latestPost.title}
                    </h3>
                    <p className="text-white/70 mb-6 text-lg line-clamp-4">
                      {latestPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-white/60 mb-8 text-sm">
                      <div className="flex items-center gap-2"><Calendar className="h-5 w-5" /> {latestPost.date}</div>
                      <div className="flex items-center gap-2"><Clock className="h-5 w-5" /> {latestPost.readTime}</div>
                    </div>
                    <Button className="w-full md:w-auto bg-primary/20 hover:bg-primary text-white border border-primary/40 hover:border-primary shadow-lg">
                      Read Article <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-white mb-12">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
              {featuredPosts.map((post, index) => (
                <Link key={index} to={post.link}>
                  <Card className="overflow-hidden bg-white/10 backdrop-blur-xl border-white/20 hover-lift group shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                    <div className="h-72 relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="p-8">
                      <Badge className="mb-4 bg-primary/20 text-primary border-primary/40">{post.category}</Badge>
                      <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-white/70 mb-6 line-clamp-3 text-lg">{post.excerpt}</p>
                      <div className="flex items-center gap-6 text-white/60 mb-6 text-sm">
                        <div className="flex items-center gap-2"><Calendar className="h-5 w-5" /> {post.date}</div>
                        <div className="flex items-center gap-2"><Clock className="h-5 w-5" /> {post.readTime}</div>
                      </div>
                      <Button className="w-full bg-primary/20 hover:bg-primary text-white border border-primary/40 hover:border-primary shadow-lg hover:shadow-primary/30 transition-all">
                        Read Article <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <Card className="p-16 bg-gradient-to-br from-primary/20 via-purple-600/10 to-orange-600/10 backdrop-blur-2xl border-white/20 shadow-2xl max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-black text-white mb-6 drop-shadow-2xl">
                Stay Cosmic
              </h2>
              <p className="text-2xl text-white/80 mb-10 font-light">
                Get the latest insights from the edge of digital transformation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm"
                />
                <Button size="lg" className="px-10 font-bold text-lg shadow-xl hover:shadow-primary/40">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;