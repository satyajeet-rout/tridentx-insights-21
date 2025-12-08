// import { Navigation } from "@/components/Navigation";
// import { Footer } from "@/components/Footer";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import { 
//   MapPin, 
//   Globe, 
//   Target, 
//   Lightbulb, 
//   Handshake, 
//   Link as LinkIcon,
//   Users,
//   Calculator,
//   Search
// } from "lucide-react";


// import GA from "@/assets/team/GA.jpg";
// import KB from "@/assets/team/KB.jpg";
// import JS from "@/assets/team/JS.jpg";
// import SS from "@/assets/team/SS.jpg";
// import KY from "@/assets/team/KY.jpg";
// import SR from "@/assets/team/SR.jpg";


// const xMeanings = [
//   { icon: LinkIcon, title: "Connect", description: "A connection, an intersection and crossroads, an opportunity for communications" },
//   { icon: Users, title: "Relate", description: "Represents relationships, people, neighbors, communities working together" },
//   { icon: Search, title: "Solve", description: "The unknown, something to be discovered and solved" },
//   { icon: Calculator, title: "Multiply", description: "A force multiplier in synergistic contexts" }
// ];

// const coreValues = [
//   {
//     icon: Target,
//     title: "Integrity",
//     description: "We prioritize honesty and transparency in all our dealings, building trust and fostering long-lasting relationships with our clients."
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation",
//     description: "Our commitment to innovation drives us to constantly seek creative solutions that empower our clients to stay ahead in a competitive landscape."
//   },
//   {
//     icon: Handshake,
//     title: "Collaboration",
//     description: "We believe in the power of teamwork, working closely with our clients to ensure that their needs are met and their goals achieved."
//   }
// ];

// const About = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="pt-32 pb-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
//         <div className="container mx-auto px-6 relative">
//           <div className="max-w-4xl mx-auto text-center animate-fade-in">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//               Empowering <span className="text-glow">Transformation</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-foreground/70 mb-8">
//               Our Journey to Empowering Organizations
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
//             <div className="animate-fade-in">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6">
//                 Bespoke consulting services that foster <span className="text-primary">innovation</span> and <span className="text-accent">efficiency</span>
//               </h2>
//               <div className="space-y-4 text-foreground/80 leading-relaxed">
//                 <p>
//                   Our mission is not just to advise, but to partner with businesses at every step of their digital journey, creating tailored solutions that are both impactful and sustainable.
//                 </p>
//                 <p>
//                   Founded by visionaries passionate about digital evolution, TRIDENTX emerged from the desire to simplify complex digital transitions for organizations.
//                 </p>
//                 <p>
//                   Our client portfolio spans diverse industries—from wireless to fiber, manufacturing to retail—showcasing our adaptability and expertise in addressing unique challenges across sectors.
//                 </p>
//               </div>
//             </div>
            
//             <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in">
//               <h3 className="text-2xl font-bold mb-4">The Meaning of TRIDENT</h3>
//               <p className="text-foreground/80 mb-4">
//                 We selected our name from the <span className="text-primary font-semibold">TRIDENT</span> for its mythological connotations. The trident's "three teeth" represent:
//               </p>
//               <div className="flex gap-4 mb-6">
//                 <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">Creation</span>
//                 <span className="px-4 py-2 rounded-full bg-accent/10 text-accent font-medium">Preservation</span>
//                 <span className="px-4 py-2 rounded-full bg-destructive/10 text-destructive font-medium">Destruction</span>
//               </div>
//               <p className="text-sm text-foreground/60 italic">
//                 From the circle-of-life to Joseph Schumpeter's creative destruction, the trident is metaphorically broad for us to embrace.
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* X Meaning Section */}
//       <section className="py-20 bg-muted/30">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               What <span className="text-glow">X</span> Means to Us
//             </h2>
//             <p className="text-foreground/70 max-w-2xl mx-auto">
//               The nebulae of tines and four tridents coalesce our logo, with the negative space forming an X—our trademark.
//             </p>
//           </div>
          
//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
//             {xMeanings.map((item, index) => (
//               <Card 
//                 key={index}
//                 className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover-lift text-center animate-scale-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex justify-center mb-4">
//                   <div className="p-3 rounded-full bg-primary/10">
//                     <item.icon className="h-6 w-6 text-primary" />
//                   </div>
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-sm text-foreground/70">{item.description}</p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

      

//       {/* Global Team – Perfectly Rounded Photos */}
//       {/* Global Team – Clean & Consistent */}
// <section className="py-20">
//   <div className="container mx-auto px-6">
//     <div className="text-center mb-16 animate-fade-in">
//       <div className="flex items-center justify-center gap-3 mb-4">
//         <Globe className="h-10 w-10 text-primary" />
//         <h2 className="text-4xl md:text-5xl font-bold">Global Team</h2>
//       </div>
//       <p className="text-foreground/70 text-lg">Strategic leadership driving worldwide transformation</p>
//     </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
//       {[
//         { name: "Gurtaj S Alag", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/gurtaj-alag-026872b/", img: GA },
//         { name: "Kerry Baker", role: "Strategy & Marketing Advisor", linkedin: "https://www.linkedin.com/in/kerry-wm-baker/", img: KB },
//         { name: "Jang Singh", role: "Delivery & Operations Head", linkedin: "https://www.linkedin.com/in/jang-singh-b599624/", img: JS },
//         { 
//           name: "Shruti Sathe", 
//           role: "Principal Engineer\n(Product Management & Solution Architecture)",
//           linkedin: "", 
//           img: SS 
//         }
//       ].map((member, index) => (
//         <div 
//           key={index} 
//           className="group text-center animate-fade-in-up"
//           style={{ animationDelay: `${index * 0.1}s` }}
//         >
//           {/* Photo */}
//           <div className="relative mb-6 mx-auto w-fit">
//             <img
//               src={member.img}
//               alt={member.name}
//               className="w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl 
//                          group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(236,72,153,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//           </div>

//           {/* Name */}
//           {member.linkedin ? (
//             <a 
//               href={member.linkedin} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="block text-2xl font-bold text-white hover:text-primary transition-colors"
//             >
//               {member.name}
//             </a>
//           ) : (
//             <p className="text-2xl font-bold text-white">{member.name}</p>
//           )}

//           {/* Role – with line break for Shruti */}
//           <p className="text-primary text-lg mt-2 whitespace-pre-line">
//             {member.role}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


// {/* APAC Team – Same Beautiful Rounded Style */}
// <section className="py-20 bg-muted/30">
//   <div className="container mx-auto px-6">
//     <div className="text-center mb-16 animate-fade-in">
//       <div className="flex items-center justify-center gap-3 mb-4">
//         <MapPin className="h-10 w-10 text-accent" />
//         <h2 className="text-4xl md:text-5xl font-bold">APAC Team</h2>
//       </div>
//       <p className="text-foreground/70 text-lg">Regional excellence powering Asia-Pacific growth</p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
//       {[
//         { name: "Kajal Yadav", role: "HR & Business Development", linkedin: "https://www.linkedin.com/in/kajal-yadav-690736317/", img: KY },
//         { name: "SatyaJeet Rout", role: "AI ML Telecom Engineer", linkedin: "https://www.linkedin.com/in/satyajeetrout98/", img: SR }
//       ].map((member, index) => (
//         <div 
//           key={index} 
//           className="group text-center animate-fade-in-up"
//           style={{ animationDelay: `${index * 0.15}s` }}
//         >
//           <div className="relative mb-6 mx-auto w-fit">
//             <img
//               src={member.img}
//               alt={member.name}
//               className="w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl 
//                          group-hover:border-accent/50 group-hover:scale-105 transition-all duration-300"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(236,72,153,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//           </div>

//           <a 
//             href={member.linkedin} 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="block text-2xl font-bold text-white hover:text-accent transition-colors"
//           >
//             {member.name}
//           </a>
//           <p className="text-accent text-lg mt-2">{member.role}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Core Values */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12 animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
//             <p className="text-foreground/70 max-w-2xl mx-auto">
//               The foundation of our approach lies in our strong values, guiding our actions and fostering a culture of excellence.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {coreValues.map((value, index) => (
//               <Card 
//                 key={index}
//                 className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover-lift animate-scale-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="flex justify-center mb-6">
//                   <div className="p-4 rounded-full bg-primary/10">
//                     <value.icon className="h-8 w-8 text-primary" />
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-center mb-4">{value.title}</h3>
//                 <p className="text-foreground/70 text-center leading-relaxed">
//                   {value.description}
//                 </p>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
//         <div className="container mx-auto px-6">
//           <div className="max-w-3xl mx-auto text-center animate-fade-in">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Start Your <span className="text-glow">Transformation</span>
//             </h2>
//             <p className="text-xl text-foreground/70 mb-8">
//               Join us today and unlock the potential of your business through innovative digital solutions tailored to your success.
//             </p>
//             <Link to="/offerings">
//               <Button size="lg" className="hover-lift">
//                 Get Started
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;


import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Globe, 
  Target, 
  Lightbulb, 
  Handshake, 
  Link as LinkIcon,
  Users,
  Calculator,
  Search
} from "lucide-react";

// Team Photos
import GA from "@/assets/team/GA.jpg";
import KB from "@/assets/team/KB.jpg";
import JS from "@/assets/team/JS.jpg";
import SS from "@/assets/team/SS.jpg";
import KY from "@/assets/team/KY.jpg";
import SR from "@/assets/team/SR.jpg";

// Cosmic Background
import cosmicBg from "@/assets/cosmic-lightning-storm-space-background.jpg";

const xMeanings = [
  { icon: LinkIcon, title: "Connect", description: "A connection, an intersection and crossroads, an opportunity for communications" },
  { icon: Users, title: "Relate", description: "Represents relationships, people, neighbors, communities working together" },
  { icon: Search, title: "Solve", description: "The unknown, something to be discovered and solved" },
  { icon: Calculator, title: "Multiply", description: "A force multiplier in synergistic contexts" }
];

const coreValues = [
  {
    icon: Target,
    title: "Integrity",
    description: "We prioritize honesty and transparency in all our dealings, building trust and fostering long-lasting relationships with our clients."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Our commitment to innovation drives us to constantly seek creative solutions that empower our clients to stay ahead in a competitive landscape."
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "We believe in the power of teamwork, working closely with our clients to ensure that their needs are met and their goals achieved."
  }
];

const About = () => {
  return (
    <>
      {/* Full-screen Cosmic Background */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${cosmicBg})`,
          backgroundAttachment: "fixed" // Parallax effect
        }}
      />

      {/* Dark overlay for perfect text readability + cinematic depth */}
      <div className="fixed inset-0 -z-10 bg-black/70" />

      {/* Main Content with subtle glassmorphic backdrop */}
      <div className="relative min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-2xl">
                Empowering <span className="text-glow">Transformation</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 drop-shadow-lg">
                Our Journey to Empowering Organizations
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in space-y-6 text-white/90">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Bespoke consulting services that foster <span className="text-primary">innovation</span> and <span className="text-accent">efficiency</span>
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>Our mission is not just to advise, but to partner with businesses at every step of their digital journey, creating tailored solutions that are both impactful and sustainable.</p>
                  <p>Founded by visionaries passionate about digital evolution, TRIDENTX emerged from the desire to simplify complex digital transitions for organizations.</p>
                  <p>Our client portfolio spans diverse industries—from wireless to fiber, manufacturing to retail—showcasing our adaptability and expertise in addressing unique challenges across sectors.</p>
                </div>
              </div>

              <Card className="p-8 bg-card/70 backdrop-blur-lg border-white/20 shadow-2xl animate-scale-in">
                <h3 className="text-2xl font-bold mb-4 text-white">The Meaning of TRIDENT</h3>
                <p className="text-white/80 mb-4">
                  We selected our name from the <span className="text-primary font-semibold">TRIDENT</span> for its mythological connotations. The trident's "three teeth" represent:
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-5 py-2 rounded-full bg-primary/20 text-primary font-medium border border-primary/30">Creation</span>
                  <span className="px-5 py-2 rounded-full bg-accent/20 text-accent font-medium border border-accent/30">Preservation</span>
                  <span className="px-5 py-2 rounded-full bg-destructive/20 text-destructive font-medium border border-destructive/30">Destruction</span>
                </div>
                <p className="text-sm text-white/60 italic">
                  From the circle-of-life to Joseph Schumpeter's creative destruction, the trident is metaphorically broad for us to embrace.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* X Meaning Section */}
        <section className="py-20 bg-black/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl">
                What <span className="text-glow">X</span> Means to Us
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                The nebulae of tines and four tridents coalesce our logo, with the negative space forming an X—our trademark.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {xMeanings.map((item, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-lg border-white/20 hover-lift hover:bg-white/20 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/20">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white text-center">{item.title}</h3>
                  <p className="text-sm text-white/70 text-center">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Team */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="h-10 w-10 text-primary" />
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">Global Team</h2>
              </div>
              <p className="text-white/70 text-lg">Strategic leadership driving worldwide transformation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
              {[
                { name: "Gurtaj S Alag", role: "Founder & CEO", linkedin: "https://www.linkedin.com/in/gurtaj-alag-026872b/", img: GA },
                { name: "Kerry Baker", role: "Strategy & Marketing Advisor", linkedin: "https://www.linkedin.com/in/kerry-wm-baker/", img: KB },
                { name: "Jang Singh", role: "Delivery & Operations Head", linkedin: "https://www.linkedin.com/in/jang-singh-b599624/", img: JS },
                { name: "Shruti Sathe", role: "Principal Engineer\n(Product Management & Solution Architecture)", linkedin: "", img: SS }
              ].map((member, index) => (
                <div key={index} className="group text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative mb-6 mx-auto w-fit">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl 
                                 group-hover:border-primary/70 group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                  </div>

                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                       className="block text-2xl font-bold text-white hover:text-primary transition-colors drop-shadow-lg">
                      {member.name}
                    </a>
                  ) : (
                    <p className="text-2xl font-bold text-white drop-shadow-lg">{member.name}</p>
                  )}
                  <p className="text-primary text-lg mt-2 whitespace-pre-line drop-shadow-md">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APAC Team */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-in">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MapPin className="h-10 w-10 text-accent" />
                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">APAC Team</h2>
              </div>
              <p className="text-white/70 text-lg">Regional excellence powering Asia-Pacific growth</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              {[
                { name: "Kajal Yadav", role: "HR & Business Development", linkedin: "https://www.linkedin.com/in/kajal-yadav-690736317/", img: KY },
                { name: "SatyaJeet Rout", role: "AI ML Telecom Engineer", linkedin: "https://www.linkedin.com/in/satyajeetrout98/", img: SR }
              ].map((member, index) => (
                <div key={index} className="group text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="relative mb-6 mx-auto w-fit">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl 
                                 group-hover:border-accent/70 group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                  </div>

                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                     className="block text-2xl font-bold text-white hover:text-accent transition-colors drop-shadow-lg">
                    {member.name}
                  </a>
                  <p className="text-accent text-lg mt-2 drop-shadow-md">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-2xl">Our Core Values</h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                The foundation of our approach lies in our strong values, guiding our actions and fostering a culture of excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {coreValues.map((value, index) => (
                <Card 
                  key={index}
                  className="p-8 bg-white/10 backdrop-blur-lg border-white/20 hover-lift hover:bg-white/15 transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/20">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-white">{value.title}</h3>
                  <p className="text-white/70 text-center leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-t from-primary/10 via-transparent to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-2xl">
                Start Your <span className="text-glow">Transformation</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 drop-shadow-lg">
                Join us today and unlock the potential of your business through innovative digital solutions tailored to your success.
              </p>
              <Link to="/offerings">
                <Button size="lg" className="hover-lift text-lg px-10">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;