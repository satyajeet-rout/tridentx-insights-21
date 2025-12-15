import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Real images
import cesHero from "@/assets/CES_1.webp";
import post1Hero from "@/assets/post1.png";   // ← Now used in Related
import post2Hero from "@/assets/post2.png";   // ← Now used in Related

// Same cosmic background as Contact page
import cosmicBg from "@/assets/cosmic-lightning-storm-space-background.jpg";

const Post3 = () => {
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
            <Link to="/blog">
              <Button variant="ghost" className="mb-10 text-white hover:bg-white/10 border border-white/20">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Blog
              </Button>
            </Link>

            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-white/20">
              <img 
                src={cesHero} 
                alt="CES 2024 Travel Log" 
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
                  <span>July 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white mb-16 leading-tight drop-shadow-2xl">
              CES 2024 Travel Log
            </h1>

            {/* Article Content */}
            <div className="prose prose-xl max-w-none text-white/90 space-y-10 leading-relaxed">
              <p className="text-lg">
                We're getting close to a deal with a Las Vegas-based company, so we thought, <em>"Why not visit with them coinciding with CES?"</em> So, that's what we did.
              </p>

              <p className="text-lg">
                More about the former another time. This post collects a few thoughts about our own CES experience. Which includes a delicious s/o to <strong>Able Baker Brewing Company!</strong> A perfect start to the week — we recommend anyone get off The Strip to check out the Art District of Las Vegas.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6 drop-shadow-lg">
                The few impressions of the show:
              </h2>

              <ol className="space-y-6 text-lg">
                <li>
                  <strong>CES felt vibrant</strong> (maybe because we were shivering). I'd last visited 5 years earlier — Google reminded me about it. Comparatively, post-pandemic and prevailing geo-politics didn't dampen the mood. Perhaps, rather, enhanced the spirit.
                </li>
                <li>
                  The <strong>biz dev conversations were highly engaged</strong> — whether at a big enterprise booth, a couple guys in the Euro Pavilion, someone in line getting coffee at Dunkin'®, even on the elevator. Happily, lots of follow-ups.
                </li>
                <li>
                  <strong>De rigueur observations:</strong>
                  <ul className="mt-4 ml-8 space-y-3 text-white/90">
                    <li>Hyperloop was great fun and visually ready to take the jump into hyperspace</li>
                    <li>Transparent TVs — oh yes, can totally see that! Stunning.</li>
                    <li>Bigger electronics companies seemed compelled to give lip service to sustainability — which, given we were at a trade show in Las Vegas, felt like an ethically conflicted position to present.</li>
                    <li>New EV-related brands popped up around every corner.</li>
                    <li>Of course, there were robotics and AI — but we didn't seek it out. It was all around.</li>
                  </ul>
                </li>
              </ol>

              <p className="text-lg mt-10">
                And one more food-related s/o that filled our stomachs and helped close the week: <strong>Siegel's Bagelmania</strong> was 100% worth the wait.
              </p>

              <p className="text-2xl font-bold text-primary mt-12">[end]</p>

              <div className="mt-12 pt-8 border-t border-white/20 text-white/70 text-sm">
                <p>#CES #CES2024</p>
                <p className="mt-2">kerry.baker@tridentx.xyz</p>
              </div>
            </div>

            {/* Related Posts — NOW USING REAL post1.png & post2.png */}
            <div className="mt-24 pt-16 border-t border-white/20">
              <h3 className="text-3xl font-bold text-white mb-12">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-10">
                {/* Post 2 */}
                <Link to="/post-2" className="group block">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl mb-6 border border-white/20 group-hover:border-primary transition-all">
                    <img 
                      src={post2Hero} 
                      alt="The Art of Drawing Readers In" 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <h4 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors">
                    The Art of Drawing Readers In
                  </h4>
                </Link>

                {/* Post 1 */}
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

export default Post3;