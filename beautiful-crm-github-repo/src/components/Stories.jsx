import { motion } from 'framer-motion';
import { Marquee } from './magicui/marquee';

function Stories() {
  const stories = [
    {
      company: "Tech Startup",
      quote: "We cut time to first touch from hours to under a minute. Show rates jumped. Revenue followed.",
      industry: "SaaS",
      avatar: "TS"
    },
    {
      company: "Marketing Agency",
      quote: "Once the path was simple, our team stopped arguing about tools and started selling.",
      industry: "Agency",
      avatar: "MA"
    },
    {
      company: "Professional Services",
      quote: "The AI replies felt like us. Prospects leaned in. Scheduling became easy.",
      industry: "Consulting",
      avatar: "PS"
    },
    {
      company: "B2B Software",
      quote: "Weekly reviews ended the fog. We could finally coach what mattered.",
      industry: "Software",
      avatar: "BS"
    },
    {
      company: "Health & Wellness",
      quote: "Our scattered efforts became a single system. Clients feel cared for, we feel in control.",
      industry: "Healthcare",
      avatar: "HW"
    },
    {
      company: "Home Services",
      quote: "From first click to signed deal, everything flows. Our brand feels consistent everywhere.",
      industry: "Services",
      avatar: "HS"
    }
  ];

  // Split stories into 3 columns for desktop
  const column1 = [stories[0], stories[3]]; // Tech Startup, B2B Software
  const column2 = [stories[1], stories[4]]; // Marketing Agency, Health & Wellness  
  const column3 = [stories[2], stories[5]]; // Professional Services, Home Services

  const StoryCard = ({ story, size = "normal" }) => (
    <div className={`bg-slate-800/80 border border-slate-700/50 rounded-lg p-6 mb-4 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300 ${
      size === "large" ? "min-h-[280px]" : size === "medium" ? "min-h-[240px]" : "min-h-[200px]"
    }`}>
      <p className="text-slate-300 leading-relaxed mb-6 text-sm">
        "{story.quote}"
      </p>
      
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {story.avatar}
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm">
            {story.company}
          </h4>
          <p className="text-slate-400 text-xs">
            {story.industry}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="stories" className="py-20 px-6 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-pink-400 tracking-wider uppercase mb-4">
            STORIES
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Real shifts beat vanity screenshots
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Here are the patterns we create again and again.
          </p>
        </motion.div>
        
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-center items-start gap-6 h-[500px] overflow-hidden max-w-4xl mx-auto">
          {/* First Column - Moving Up */}
          <div className="w-80">
            <Marquee vertical pauseOnHover className="h-full">
              <StoryCard story={column1[0]} size="medium" />
              <StoryCard story={column1[1]} size="large" />
            </Marquee>
          </div>
          
          {/* Second Column - Moving Down */}
          <div className="w-80">
            <Marquee vertical reverse pauseOnHover className="h-full">
              <StoryCard story={column2[0]} size="large" />
              <StoryCard story={column2[1]} size="medium" />
            </Marquee>
          </div>
          
          {/* Third Column - Moving Up */}
          <div className="w-80">
            <Marquee vertical pauseOnHover className="h-full">
              <StoryCard story={column3[0]} size="normal" />
              <StoryCard story={column3[1]} size="medium" />
            </Marquee>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <Marquee pauseOnHover className="h-[400px]">
            {stories.map((story, index) => (
              <div key={index} className="mr-4">
                <StoryCard story={story} size="normal" />
              </div>
            ))}
          </Marquee>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-slate-300 mb-6">
            Want the same arc in your business? Let's talk.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Stories;

