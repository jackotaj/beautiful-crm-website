import { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import { RainbowButton } from './magicui/rainbow-button';

function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  
  // Transform for 3D rotation effect - starts inclined and becomes upright
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section id="home" ref={container} className="relative py-20 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      <div className="relative container mx-auto text-center">
        {/* Main content */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
              Grow without
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                the chaos
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We rebuild how your business wins. One system. One story. From first click to signed deal. 
            <span className="text-pink-400 font-medium"> You feel the lift in 30 days.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book a Call
            </a>
          </div>

          {/* What changes for you */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 mb-8 border border-slate-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">What changes for you</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Clarity replaces noise</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Momentum replaces guesswork</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Follow up happens automatically and sounds human</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">Your team knows the next action in every deal</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-slate-300">You stop juggling tools and start compounding results</p>
              </div>
            </div>
          </Motion.div>

          {/* Simple truth */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-slate-400 mb-2">
              <span className="font-semibold text-pink-400">Simple truth:</span>
            </p>
            <p className="text-xl text-slate-200 font-medium">
              Growth is not a stack of apps. Growth is a clean path that customers love to follow.
            </p>
          </Motion.div>
        </Motion.div>
        
        {/* Team Image */}
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            rotateX: rotateX,
            scale: scale,
            transformPerspective: 1000,
            transformStyle: 'preserve-3d'
          }}
          className="relative max-w-4xl mx-auto"
        >
          <img 
            src="/images/hero-team.jpg" 
            alt="Professional team collaboration" 
            className="w-full rounded-lg shadow-2xl border border-slate-700"
          />
        </Motion.div>

        {/* The Promise */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-pink-900/30 to-rose-900/30 backdrop-blur-sm rounded-xl p-8 border border-pink-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">The Promise</h3>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            We turn your scattered efforts into a single, living system. It captures attention, earns trust, 
            books meetings, and closes. You get time back. Your brand feels consistent. Revenue gets steadier.
          </p>
          <a 
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Book a Call
          </a>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;

