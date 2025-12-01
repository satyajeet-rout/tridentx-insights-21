import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Post3 = () => {
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
          <div className="h-96 bg-gradient-to-br from-blue-600/30 via-teal-500/30 to-green-500/30 rounded-lg mb-8 flex items-center justify-center">
            <div className="text-8xl opacity-30">🎪</div>
          </div>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-6">
            <Badge>General</Badge>
            <div className="flex items-center gap-4 text-sm text-foreground/60">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                July 2025
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                6 min read
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            CES 2024 Travel Log
          </h1>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              We're getting close to a deal with a Las Vegas-based company, so we thought, "Why not visit with them coinciding with CES?" So, that's what we did.
            </p>

            <p>
              More about the former another time. This post collects a few thoughts about our own CES experience. Which includes a delicious s/o to Able Baker Brewing Company! A perfect start to the week, and we recommend anyone get off The Strip to check out the Art District of Las Vegas.
            </p>

            <p>The few impressions of the show:</p>

            <ol>
              <li>
                CES felt vibrant (maybe because we were shivering). I'd last visited 5 years earlier, which Google reminded me about. Comparatively, post-pandemic and prevailing geo-politics didn't dampen the mood. Perhaps, rather, enhanced the spirit.
              </li>

              <li>
                The biz dev conversations were highly engaged, whether a big enterprise booth, a couple guys in the Euro Pavilion, a someone in line getting coffee at Dunkin'®, even on the elevator. Happily, lots of follow ups.
              </li>

              <li>
                De rigueur observations:
                <ul>
                  <li>Hyperloop was great fun and visually ready to take the jump into hyperspace</li>
                  <li>Transparent TVs, oh yes, can totally see that! Stunning.</li>
                  <li>Bigger electronics companies seemed compelled to give lip service to sustainability, which, given we were at a trade show in Las Vegas, an ethically conflicted position to present.</li>
                  <li>New EV-related brands popped up around every corner.</li>
                  <li>Of course, there were robotics and AI, but we didn't seek it out. It was all around.</li>
                </ul>
              </li>
            </ol>

            <p>
              And one more food-related s/o that filled our stomachs and helped close the week, Siegel's Baglemania was 100% worth the wait.
            </p>

            <p>[end]</p>

            <p className="text-sm text-foreground/60">
              #CES #CES2024<br />
              kerry.baker@tridentx.xyz
            </p>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/post-2" className="block hover:opacity-80 transition-opacity">
                <div className="h-48 bg-gradient-to-br from-indigo-600/40 via-blue-500/40 to-cyan-500/40 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-4xl opacity-30">🌌</div>
                </div>
                <h4 className="font-semibold">The Art of Drawing Readers In</h4>
              </Link>
              <Link to="/post-1" className="block hover:opacity-80 transition-opacity">
                <div className="h-48 bg-gradient-to-br from-purple-600/40 via-pink-500/40 to-orange-500/40 rounded-lg mb-3 flex items-center justify-center">
                  <div className="text-4xl opacity-30">🌌</div>
                </div>
                <h4 className="font-semibold">Crafting Captivating Headlines</h4>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Post3;
