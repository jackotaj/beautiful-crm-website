import React, { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/images/BeautifulCRM.png" alt="Beautiful CRM" className="h-8 w-auto" />
              <span className="text-white text-xl font-bold">Beautiful CRM</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-pink-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-pink-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('stories')} className="text-slate-300 hover:text-pink-400 transition-colors">Stories</button>
              <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-pink-400 transition-colors">Process</button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-pink-400 transition-colors">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-pink-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-pink-400 transition-colors">FAQ</button>
              <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">Book a Call</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-pink-400 transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-pink-400 transition-colors text-left">Services</button>
                <button onClick={() => scrollToSection('stories')} className="text-slate-300 hover:text-pink-400 transition-colors text-left">Stories</button>
                <button onClick={() => scrollToSection('process')} className="text-slate-300 hover:text-pink-400 transition-colors text-left">Process</button>
                <button onClick={() => scrollToSection('pricing')} className="text-slate-300 hover:text-pink-400 transition-colors text-left">Pricing</button>
                <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-pink-400 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-pink-400 transition-colors text-left">FAQ</button>
                <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-6 py-2 rounded-lg font-medium text-center">Book a Call</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
              Grow without
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                the chaos
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto">
            We rebuild how your business wins. One system. One story. From first click to signed deal. 
            <span className="text-pink-400 font-medium"> You feel the lift in 30 days.</span>
          </p>
          
          <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg inline-block">
            Book a Call
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What we do</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We specialize in four core areas that transform how your business operates and grows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">CRM & Automation</h3>
              <p className="text-slate-300">
                We build systems that capture, nurture, and convert leads automatically. Your sales process runs while you sleep.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Analytics & Insights</h3>
              <p className="text-slate-300">
                Know exactly what's working. We track every touchpoint and show you where your best customers come from.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Process Optimization</h3>
              <p className="text-slate-300">
                We eliminate bottlenecks and streamline workflows. Your team focuses on high-value activities, not busy work.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Team Training</h3>
              <p className="text-slate-300">
                Your team learns the new systems inside and out. We provide training, documentation, and ongoing support.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Stories from the field</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real results from real businesses who transformed their operations with our systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Sarah Chen</h4>
                  <p className="text-slate-400">Marketing Agency Owner</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "We went from manually tracking 50 leads to automatically nurturing 500+. Our close rate doubled and our team stress halved."
              </p>
              <div className="text-pink-400 font-semibold">
                2x close rate, 10x lead capacity
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Marcus Rodriguez</h4>
                  <p className="text-slate-400">SaaS Founder</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "The automation freed up 20 hours per week. I can finally focus on product development instead of chasing leads."
              </p>
              <div className="text-pink-400 font-semibold">
                20 hours/week saved, 40% revenue growth
              </div>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Lisa Thompson</h4>
                  <p className="text-slate-400">E-commerce Director</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "Our customer lifetime value increased 60% through better segmentation and automated follow-ups. Game changer."
              </p>
              <div className="text-pink-400 font-semibold">
                60% higher LTV, 3x repeat purchases
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How we work</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our proven 6-step process takes you from chaos to clarity in 90 days.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Discovery & Audit</h3>
              <p className="text-slate-300">
                We map your current processes, identify bottlenecks, and uncover hidden opportunities for growth.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategy Design</h3>
              <p className="text-slate-300">
                We create a custom blueprint for your new systems, workflows, and automation sequences.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">System Build</h3>
              <p className="text-slate-300">
                We implement the CRM, automation tools, and integrations that will power your new operations.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Migration</h3>
              <p className="text-slate-300">
                We safely transfer your existing data and ensure nothing falls through the cracks during transition.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6 text-white font-bold text-xl">
                5
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Team Training</h3>
              <p className="text-slate-300">
                We train your team on the new systems and provide documentation for ongoing success.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6 text-white font-bold text-xl">
                6
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Optimization</h3>
              <p className="text-slate-300">
                We monitor performance, make adjustments, and ensure you're getting maximum ROI from day one.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Investment</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We price based on engagement, not hours. Your success is our success.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900/50 p-8 rounded-xl border border-slate-700">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Complete Transformation Package</h3>
                <p className="text-slate-300 mb-6">
                  Everything you need to go from chaos to clarity in 90 days.
                </p>
                <div className="text-4xl font-bold text-pink-400 mb-2">
                  Starting at $15,000
                </div>
                <p className="text-slate-400">
                  Investment varies based on complexity and scope
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Complete CRM setup and configuration
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Custom automation workflows
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Data migration and integration
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Team training and documentation
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Ongoing Support:</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      90 days of optimization support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Monthly performance reviews
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Priority technical support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-pink-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Quarterly strategy sessions
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">About Beautiful CRM</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              We're a team of systems architects, automation specialists, and business strategists who believe 
              that growth shouldn't come at the cost of sanity. We've helped hundreds of businesses transform 
              their operations from chaotic to systematic, from reactive to proactive.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our approach is different. We don't just implement tools – we redesign how your business works. 
              We create systems that scale with you, processes that your team actually wants to use, and 
              automation that feels like magic.
            </p>
            <div className="text-center">
              <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Straight answers to real concerns</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">How long does implementation take?</h3>
              <p className="text-slate-300">
                Most implementations are complete within 90 days. Simple setups can be done in 30-45 days, 
                while complex enterprise systems may take up to 120 days. We'll give you a precise timeline 
                during our discovery call.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">What if my team resists the new systems?</h3>
              <p className="text-slate-300">
                Change management is built into our process. We involve your team in the design phase, 
                provide comprehensive training, and ensure the new systems actually make their jobs easier. 
                Most teams become advocates once they see the benefits.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">Do you work with our existing tools?</h3>
              <p className="text-slate-300">
                Absolutely. We integrate with virtually any business tool through APIs, webhooks, or direct 
                integrations. If you're happy with certain tools, we'll build around them. If something 
                needs upgrading, we'll recommend the best alternatives.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">What happens after the 90-day implementation?</h3>
              <p className="text-slate-300">
                You get 90 days of optimization support included. After that, many clients choose our 
                ongoing support package for continued optimization, new feature rollouts, and strategic 
                guidance. But the systems are designed to run independently.
              </p>
            </div>

            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-3">How do you measure success?</h3>
              <p className="text-slate-300">
                We track metrics that matter to your business: lead conversion rates, sales cycle length, 
                customer lifetime value, team productivity, and revenue growth. We establish baselines 
                during discovery and measure improvement throughout the engagement.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Book a Call</h2>
            <p className="text-xl text-slate-300">
              A focused strategy call. Thirty to forty five minutes. We review goals, your current path, and where the quick lift lives.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-slate-900/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Tell us what feels stuck. We will show you the path out.</h3>
              <iframe
                src="https://links.beautifulcrm.com/widget/form/halGBNWTJ0U6J9nLKsVp"
                style={{width:'100%', height:'600px', border:'none', borderRadius:'8px'}}
                id="inline-halGBNWTJ0U6J9nLKsVp" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="600"
                data-layout-iframe-id="inline-halGBNWTJ0U6J9nLKsVp"
                data-form-id="halGBNWTJ0U6J9nLKsVp"
                title="Contact Form"
              />
            </div>
            
            {/* Booking Calendar */}
            <div className="bg-slate-900/50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Or book directly:</h3>
              <iframe 
                src="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                style={{width: '100%', height:'600px', border:'none', borderRadius:'8px'}} 
                scrolling="no" 
                id="lHrJjJEhCPY2Atu8hj01_booking"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="/images/BeautifulCRM.png" alt="Beautiful CRM" className="h-8 w-auto" />
                <span className="text-white text-xl font-bold">Beautiful CRM</span>
              </div>
              <p className="text-slate-400 mb-4">
                We rebuild how your business wins. One system. One story. From first click to signed deal.
              </p>
              <a href="mailto:hello@beautifulcrm.com" className="text-pink-400 hover:text-pink-300">
                hello@beautifulcrm.com
              </a>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-pink-400 transition-colors">CRM & Automation</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-pink-400 transition-colors">Analytics & Insights</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-pink-400 transition-colors">Process Optimization</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-pink-400 transition-colors">Team Training</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-pink-400 transition-colors">About</button></li>
                <li><button onClick={() => scrollToSection('stories')} className="hover:text-pink-400 transition-colors">Stories</button></li>
                <li><button onClick={() => scrollToSection('process')} className="hover:text-pink-400 transition-colors">Process</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-pink-400 transition-colors">Contact</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 mb-4">© 2024 Beautiful CRM. All rights reserved.</p>
            <a href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
              Book a Call
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

