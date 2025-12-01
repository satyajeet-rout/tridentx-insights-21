import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Post1 = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Hero Image */}
          <div className="h-96 bg-gradient-to-br from-purple-600/40 via-pink-500/40 to-orange-500/40 rounded-lg mb-8 flex items-center justify-center">
            <div className="text-8xl opacity-30">🌌</div>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-6">
            <Badge>General</Badge>
            <div className="flex items-center gap-4 text-sm text-foreground/60">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                June 2025
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                5 min read
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Crafting Captivating Headlines: Your awesome post title goes here
          </h1>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h4>Engaging Introductions: Capturing Your Audience's Interest</h4>
            
            <p>
              The initial impression your blog post makes is crucial, and that's where your introduction comes into play. Hook your readers with a captivating opening that sparks curiosity or emotion. Address their pain points or questions to establish a connection. Outline the purpose of your post and give a sneak peek into what they can expect. A well-crafted introduction sets the tone for an immersive reading experience.
            </p>

            <h4>Crafting Informative and Cohesive Body Content</h4>
            
            <p>
              Within the body of your blog post lies the heart of your message. Break down your content into coherent sections, each with a clear heading that guides readers through the narrative. Dive deep into each subtopic, providing valuable insights, data, and relatable examples. Maintain a logical flow between paragraphs using transitions, ensuring that each point naturally progresses to the next. By structuring your body content effectively, you keep readers engaged and eager to learn more.
            </p>

            <h4>Powerful Closures: Leaving a Lasting Impression</h4>
            
            <p>
              Concluding your blog post isn't just about wrapping things up – it's your final opportunity to leave a strong impact. Summarize the key takeaways from your post, reinforcing your main points. If relevant, provide actionable solutions or thought-provoking questions to keep readers thinking beyond the post. Encourage engagement by inviting comments, questions, or sharing. A well-crafted conclusion should linger in your readers' minds, inspiring them to explore further or apply what they've learned.
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/post-3" className="block hover:opacity-80 transition-opacity">
                <div className="h-48 bg-gradient-to-br from-blue-600/30 via-teal-500/30 to-green-500/30 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-4xl opacity-30">🎪</div>
                </div>
                <h4 className="font-semibold">CES 2024 Travel Log</h4>
              </Link>
              <Link to="/post-2" className="block hover:opacity-80 transition-opacity">
                <div className="h-48 bg-gradient-to-br from-indigo-600/40 via-blue-500/40 to-cyan-500/40 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-4xl opacity-30">🌌</div>
                </div>
                <h4 className="font-semibold">The Art of Drawing Readers In</h4>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Post1;
