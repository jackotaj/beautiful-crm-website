import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

function Pricing() {
  const offerings = [
    {
      name: "Blueprint and Build",
      description: "One-time engagement to design and implement your complete system",
      features: [
        "Discovery and friction analysis",
        "Custom system blueprint design", 
        "Complete system build and setup",
        "Brand voice integration",
        "AI response configuration",
        "Dashboard and reporting setup"
      ],
      pricing: "Quoted after discovery call",
      note: "Scope depends on your complexity and goals"
    },
    {
      name: "Stewardship",
      description: "Ongoing partnership to continuously improve and optimize your system",
      features: [
        "Weekly system improvements",
        "Performance monitoring",
        "A/B testing and optimization",
        "Regular strategy reviews",
        "Priority support",
        "Monthly reporting"
      ],
      pricing: "Monthly partnership",
      note: "Continuous lift through small, compounding changes"
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-pink-400 tracking-wider uppercase mb-4">
            PRICING
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            We sell outcomes, not software seats
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Scope depends on your complexity and goals. Most engagements include a one time build and ongoing stewardship.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {offering.name}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {offering.description}
                </p>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl font-bold text-pink-400 mb-2">
                  {offering.pricing}
                </div>
                <p className="text-sm text-slate-400">
                  {offering.note}
                </p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-white font-semibold mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {offering.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center bg-slate-800/30 rounded-lg p-8 border border-slate-700 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            We take a limited number of clients. Depth over volume.
          </h3>
          <p className="text-slate-300 mb-6 leading-relaxed">
            Every engagement is custom-designed around your specific business, goals, and challenges. 
            We work with you to create a system that actually moves the needle.
          </p>
          <a 
            href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;

