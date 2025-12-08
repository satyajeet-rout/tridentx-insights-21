// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, Clock, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// const Post2 = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
      
//       <article className="pt-32 pb-16">
//         <div className="container mx-auto px-6 max-w-4xl">
//           <Link to="/blog">
//             <Button variant="ghost" className="mb-8">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Blog
//             </Button>
//           </Link>

//           {/* Hero Image */}
//           <div className="h-96 bg-gradient-to-br from-indigo-600/40 via-blue-500/40 to-cyan-500/40 rounded-lg mb-8 flex items-center justify-center">
//             <div className="text-8xl opacity-30">🌌</div>
//           </div>

//           {/* Meta Info */}
//           <div className="flex items-center gap-4 mb-6">
//             <Badge>General</Badge>
//             <div className="flex items-center gap-4 text-sm text-foreground/60">
//               <div className="flex items-center gap-1">
//                 <Calendar className="h-4 w-4" />
//                 June 2025
//               </div>
//               <div className="flex items-center gap-1">
//                 <Clock className="h-4 w-4" />
//                 4 min read
//               </div>
//             </div>
//           </div>

//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl font-bold mb-8">
//             The Art of Drawing Readers In: Your attractive post title goes here
//           </h1>

//           {/* Content */}
//           <div className="prose prose-lg dark:prose-invert max-w-none">
//             <h4>Engaging Introductions: Capturing Your Audience's Interest</h4>
            
//             <p>
//               The initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.
//             </p>

//             <h4>Crafting Informative and Cohesive Body Content</h4>
            
//             <p>
//               Within the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.
//             </p>

//             <h4>Powerful Closures: Leaving a Lasting Impression</h4>
            
//             <p>
//               Concluding your blog post isn't just about wrapping things up – it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.
//             </p>
//           </div>

//           {/* Related Posts */}
//           <div className="mt-16 pt-8 border-t border-border">
//             <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               <Link to="/post-3" className="block hover:opacity-80 transition-opacity">
//                 <div className="h-48 bg-gradient-to-br from-blue-600/30 via-teal-500/30 to-green-500/30 rounded-lg mb-3 flex items-center justify-center">
//                   <div className="text-4xl opacity-30">🎪</div>
//                 </div>
//                 <h4 className="font-semibold">CES 2024 Travel Log</h4>
//               </Link>
//               <Link to="/post-1" className="block hover:opacity-80 transition-opacity">
//                 <div className="h-48 bg-gradient-to-br from-purple-600/40 via-pink-500/40 to-orange-500/40 rounded-lg mb-3 flex items-center justify-center">
//                   <div className="text-4xl opacity-30">🌌</div>
//                 </div>
//                 <h4 className="font-semibold">Crafting Captivating Headlines</h4>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </article>

//       <Footer />
//     </div>
//   );
// };

// export default Post2;



// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, Clock, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// // Your real hero image
// import post2Hero from "@/assets/post2.png";

// // Same cosmic background as Contact page
// import cosmicBg from "@/assets/cosmic-lightning-storm-space-background.jpg";

// const Post2 = () => {
//   return (
//     <>
//       {/* EXACT SAME COSMIC BACKGROUND AS CONTACT PAGE */}
//       <div 
//         className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
//         style={{ 
//           backgroundImage: `url(${cosmicBg})`,
//           backgroundAttachment: "fixed"
//         }}
//       />
//       <div className="fixed inset-0 -z-10 bg-black/70" />

//       {/* Main Content */}
//       <div className="relative min-h-screen">
//         <Navigation />

//         <article className="pt-32 pb-24">
//           <div className="container mx-auto px-6 max-w-4xl">
//             {/* Back Button */}
//             <Link to="/blog">
//               <Button variant="ghost" className="mb-10 text-white hover:bg-white/10 border border-white/20">
//                 <ArrowLeft className="mr-2 h-5 w-5" />
//                 Back to Blog
//               </Button>
//             </Link>

//             {/* Hero Image - Your Real post2.png */}
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-white/20">
//               <img 
//                 src={post2Hero} 
//                 alt="The Art of Drawing Readers In" 
//                 className="w-full h-auto object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
//             </div>

//             {/* Meta Info */}
//             <div className="flex flex-wrap items-center gap-6 mb-8 text-white/90">
//               <Badge className="bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm">
//                 General
//               </Badge>
//               <div className="flex items-center gap-6 text-sm">
//                 <div className="flex items-center gap-2">
//                   <Calendar className="h-5 w-5 text-primary" />
//                   <span>June 2025</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Clock className="h-5 w-5 text-primary" />
//                   <span>4 min read</span>
//                 </div>
//               </div>
//             </div>

//             {/* Title */}
//             <h1 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight drop-shadow-2xl">
//               The Art of Drawing Readers In:<br />
//               <span className="text-glow text-pink-300">Your attractive post title goes here</span>
//             </h1>

//             {/* Article Content - Your Exact Headings */}
//             <div className="prose prose-xl max-w-none text-white/90 space-y-16 leading-relaxed">
//               <section>
//                 <h2 className="text-4xl font-bold text-primary mb-8 drop-shadow-lg">
//                   Engaging Introductions: Capturing Your Audience’s Interest
//                 </h2>
//                 <p className="text-lg">
//                   The initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.
//                 </p>
//               </section>

//               <section>
//                 <h2 className="text-4xl font-bold text-primary mb-8 drop-shadow-lg">
//                   Crafting Informative and Cohesive Body Content
//                 </h2>
//                 <p className="text-lg">
//                   Within the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.
//                 </p>
//               </section>

//               <section>
//                 <h2 className="text-4xl font-bold text-primary mb-8 drop-shadow-lg">
//                   Powerful Closures: Leaving a Lasting Impression
//                 </h2>
//                 <p className="text-lg">
//                   Concluding your blog post isn't just about wrapping things up – it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.
//                 </p>
//               </section>
//             </div>

//             {/* Related Posts */}
//             <div className="mt-24 pt-16 border-t border-white/20">
//               <h3 className="text-3xl font-bold text-white mb-12">Related Posts</h3>
//               <div className="grid md:grid-cols-2 gap-10">
//                 <Link to="/post-3" className="group block">
//                   <div className="h-64 bg-gradient-to-br from-purple-600/40 via-pink-600/40 to-orange-600/40 rounded-3xl mb-6 overflow-hidden border border-white/20 group-hover:border-primary transition-all">
//                     <div className="flex items-center justify-center h-full text-7xl opacity-30">Event</div>
//                   </div>
//                   <h4 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors">
//                     CES 2024 Travel Log
//                   </h4>
//                 </Link>

//                 <Link to="/post-1" className="group block">
//                   <div className="h-64 bg-gradient-to-br from-indigo-600/40 via-purple-600/40 to-pink-600/40 rounded-3xl mb-6 overflow-hidden border border-white/20 group-hover:border-primary transition-all">
//                     <div className="flex items-center justify-center h-full text-7xl opacity-30">Galaxy</div>
//                   </div>
//                   <h4 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors">
//                     Crafting Captivating Headlines
//                   </h4>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </article>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Post2;


import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Real hero images
import post2Hero from "@/assets/post2.png";
import post1Hero from "@/assets/post1.png";      // ← Post 1
import cesHero from "@/assets/CES_1.webp";        // ← Post 3

// Same cosmic background as Contact page
import cosmicBg from "@/assets/cosmic-lightning-storm-space-background.jpg";

const Post2 = () => {
  return (
    <>
      {/* COSMIC BACKGROUND */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${cosmicBg})`,
          backgroundAttachment: "fixed"
        }}
      />
      <div className="fixed inset-0 -z-10 bg-black/70" />

      <div className="relative min-h-screen">
        <Navigation />

        <article className="pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Back Button */}
            <Link to="/blog">
              <Button variant="ghost" className="mb-10 text-white hover:bg-white/10 border border-white/20">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Blog
              </Button>
            </Link>

            {/* Hero Image - Post 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-white/20">
              <img 
                src={post2Hero} 
                alt="The Art of Drawing Readers In" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-white/90">
              <Badge className="bg-primary/30 text-primary border border-primary/50 backdrop-blur-sm">
                General
              </Badge>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>June 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>4 min read</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight drop-shadow-2xl">
              The Art of Drawing Readers In:<br />
              <span className="text-glow text-pink-300">Your attractive post title goes here</span>
            </h1>

            {/* Article Content */}
            <div className="prose prose-xl max-w-none text-white/90 space-y-16 leading-relaxed">
              <section>
                <h2 className="text-4xl font-bold text-primary mb-8 drop-shadow-lg">
                  Engaging Introductions: Capturing Your Audience’s Interest
                </h2>
                <p className="text-lg">
                  The initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-bold text-primary mb-8 drop-shadow-lg">
                  Crafting Informative and Cohesive Body Content
                </h2>
                <p className="text-lg">
                  Within the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-bold text-primary mb-8 drop-shadow-lg">
                  Powerful Closures: Leaving a Lasting Impression
                </h2>
                <p className="text-lg">
                  Concluding your blog post isn't just about wrapping things up – it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.
                </p>
              </section>
            </div>

            {/* Related Posts — Now using REAL post1.png and CES_1.webp */}
            <div className="mt-24 pt-16 border-t border-white/20">
              <h3 className="text-3xl font-bold text-white mb-12">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-10">

                {/* Post 3 - CES 2024 Travel Log */}
                <Link to="/post-3" className="group block">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl mb-6 border border-white/20 group-hover:border-primary transition-all">
                    <img 
                      src={cesHero} 
                      alt="CES 2024 Travel Log" 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <h4 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors">
                    CES 2024 Travel Log
                  </h4>
                </Link>

                {/* Post 1 - Crafting Captivating Headlines */}
                <Link to="/post-1" className="group block">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl mb-6 border border-white/20 group-hover:border-primary transition-all">
                    <img 
                      src={post1Hero} 
                      alt="Crafting Captivating Headlines" 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <h4 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors">
                    Crafting Captivating Headlines
                  </h4>
                </Link>

              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default Post2;