import React, { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/images/BeautifulCRM.png" alt="Beautiful Systems" className="h-8 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-pink-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-pink-500 transition-colors">Services</button>
              <button onClick={() => scrollToSection('stories')} className="text-gray-300 hover:text-pink-500 transition-colors">Stories</button>
              <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-pink-500 transition-colors">Process</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-pink-500 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-pink-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-pink-500 transition-colors">FAQ</button>
              <a 
                href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
              <div className="flex flex-col space-y-4 mt-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-pink-500 transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-pink-500 transition-colors text-left">Services</button>
                <button onClick={() => scrollToSection('stories')} className="text-gray-300 hover:text-pink-500 transition-colors text-left">Stories</button>
                <button onClick={() => scrollToSection('process')} className="text-gray-300 hover:text-pink-500 transition-colors text-left">Process</button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-pink-500 transition-colors text-left">Pricing</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-pink-500 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-pink-500 transition-colors text-left">FAQ</button>
                <a 
                  href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  Book a Call
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Grow without <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              the chaos
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We rebuild how your business wins. One system. One story. From first click to signed deal. You feel the lift in 30 days.
          </p>
          <a 
            href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Book a Call
          </a>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">What changes for you</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  Clarity replaces noise
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  Momentum replaces guesswork
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  Follow up happens automatically and sounds human
                </li>
              </ul>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  Your team knows the next action in every deal
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  You stop juggling tools and start compounding results
                </li>
              </ul>
            </div>
            
            <div className="mt-12 p-6 bg-slate-800/50 rounded-lg">
              <p className="text-lg text-gray-300 mb-4">
                <strong className="text-white">Simple truth:</strong> Growth is not a stack of apps. Growth is a clean path that customers love to follow.
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">The Promise</h3>
              <p className="text-lg text-gray-300 mb-8">
                We turn your scattered efforts into a single, living system. It captures attention, earns trust, books meetings, and closes. You get time back. Your brand feels consistent. Revenue gets steadier.
              </p>
              <a 
                href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High touch. Done for you. Built to change how you operate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-900/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-pink-500">System Rebuild</h3>
              <p className="text-gray-300 mb-4">
                We map your customer journey and strip out friction. Your brand voice gets wired into every touch. The result is a simple path from ad to calendar to closed won. People feel cared for. You feel in control.
              </p>
              <p className="text-sm text-gray-400">
                <strong>You notice:</strong> faster replies, higher show rates, clean handoffs, fewer dropped balls.
              </p>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-pink-500">AI That Sounds Like You</h3>
              <p className="text-gray-300 mb-4">
                Your first response arrives in seconds, not hours. It is on brand. It qualifies. It schedules. Humans step in when the moment requires judgment. No robotic tone. No awkward loops. Just momentum.
              </p>
              <p className="text-sm text-gray-400">
                <strong>You notice:</strong> more booked calls, less busywork, happy prospects.
              </p>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-pink-500">Sales Rhythm Installed</h3>
              <p className="text-gray-300 mb-4">
                We install a daily operating cadence. Clear stages. Clear SLAs. Clear coaching. Managers see where deals stall. Reps always know the next move.
              </p>
              <p className="text-sm text-gray-400">
                <strong>You notice:</strong> shorter cycles, better close rates, predictable weeks.
              </p>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-pink-500">Continuous Lift</h3>
              <p className="text-gray-300 mb-4">
                Your system does not sit still. We run small tests that add up. Offers. Timing. Pages. Follow ups. What works stays. What fails goes. The compounding is real.
              </p>
              <p className="text-sm text-gray-400">
                <strong>You notice:</strong> steady gains without extra ad spend.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real shifts beat vanity screenshots. Here are the patterns we create again and again.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-pink-500">
              <p className="text-gray-300 italic">
                "We cut time to first touch from hours to under a minute. Show rates jumped. Revenue followed."
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-pink-500">
              <p className="text-gray-300 italic">
                "Once the path was simple, our team stopped arguing about tools and started selling."
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-pink-500">
              <p className="text-gray-300 italic">
                "The AI replies felt like us. Prospects leaned in. Scheduling became easy."
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-pink-500">
              <p className="text-gray-300 italic">
                "Weekly reviews ended the fog. We could finally coach what mattered."
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 mb-8">Want the same arc in your business? Let's talk.</p>
            <a 
              href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Six steps. No fluff. Designed to deliver change fast.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Discovery</h3>
                  <p className="text-gray-300">We listen. We find the friction that costs you money and time.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Blueprint</h3>
                  <p className="text-gray-300">We draw the new path. Offers, stages, voice, timing. You approve.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Build</h3>
                  <p className="text-gray-300">We create the assets and the system. Pages. Journeys. Messaging. Routing. Dashboards.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Go Live</h3>
                  <p className="text-gray-300">Traffic on. Replies in seconds. We watch every transition and fix what squeaks.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Coach</h3>
                  <p className="text-gray-300">We install the daily rhythm. Managers get real visibility. Reps get clear next steps.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Compound</h3>
                  <p className="text-gray-300">We test small. We keep winners. The system gets sharper each week.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              We sell outcomes, not software seats. Scope depends on your complexity and goals. Most engagements include a one time build and ongoing stewardship.
            </p>
            
            <div className="bg-slate-800/50 p-8 rounded-lg mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Blueprint and Build:</span>
                  <span className="text-white">quoted after the discovery call</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Stewardship:</span>
                  <span className="text-white">monthly partnership with weekly improvements</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8">
              We take a limited number of clients. Depth over volume.
            </p>
            
            <a 
              href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              We believe business gets easier when the path is simple and the promises are kept. We build systems that make that happen. Direct talk. Fast shipping. Clean execution. Your data and accounts stay yours.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              <strong className="text-white">Working with us feels like this:</strong> fewer meetings, faster answers, thoughtful changes that stick.
            </p>
            
            <a 
              href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h2>
            <p className="text-xl text-gray-300">Straight answers to real concerns</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-pink-500">How fast will we feel it?</h3>
              <p className="text-gray-300">Week one brings clarity. Week two goes live. First month shows lift. We aim for visible wins early.</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-pink-500">Do you replace our tools?</h3>
              <p className="text-gray-300">Only when it helps. The goal is a clean path, not change for its own sake.</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-pink-500">Can my team run it without you?</h3>
              <p className="text-gray-300">Yes. You own the workspace and assets. We document everything. Many clients keep us to drive compounding improvements.</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-pink-500">Who is this for?</h3>
              <p className="text-gray-300">Leaders who want one simple system that turns attention into revenue. Agencies, pro services, creators, health and medspa, home services, B2B.</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-pink-500">Next step?</h3>
              <p className="text-gray-300">Book a call. We will review where you are now and map the first 30 days.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Book a Call</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A focused strategy call. Thirty to forty five minutes. We review goals, your current path, and where the quick lift lives. You leave with an action plan.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Tell us what feels stuck. We will show you the path out.</h3>
                <iframe
                  src="https://links.beautifulcrm.com/widget/form/halGBNWTJ0U6J9nLKsVp"
                  style={{width:'100%',height:'600px',border:'none',borderRadius:'8px'}}
                  id="inline-halGBNWTJ0U6J9nLKsVp" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Form"
                  data-height="600"
                  data-layout-iframe-id="inline-halGBNWTJ0U6J9nLKsVp"
                  data-form-id="halGBNWTJ0U6J9nLKsVp"
                  title="Contact Form"
                />
              </div>
              
              {/* Booking Calendar */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Or book directly:</h3>
                <iframe 
                  src="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                  style={{width: '100%', height:'600px', border:'none', borderRadius:'8px'}} 
                  scrolling="no" 
                  id="lHrJjJEhCPY2Atu8hj01_booking"
                />
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-300">
                Alternate contact: <a href="mailto:hello@beautifulsystems.com" className="text-pink-500 hover:text-pink-400">hello@beautifulsystems.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img src="/images/BeautifulCRM.png" alt="Beautiful Systems" className="h-8 w-auto" />
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 mb-6 md:mb-0">
              <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-pink-500 transition-colors">Services</button>
              <button onClick={() => scrollToSection('stories')} className="text-gray-400 hover:text-pink-500 transition-colors">Stories</button>
              <button onClick={() => scrollToSection('process')} className="text-gray-400 hover:text-pink-500 transition-colors">Process</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-pink-500 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-pink-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-pink-500 transition-colors">FAQ</button>
              <a 
                href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">© Beautiful Systems</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors text-sm">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

