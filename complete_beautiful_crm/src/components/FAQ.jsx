import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most builds complete in 4-6 weeks. Simple setups can be faster. Complex integrations may take longer. We give you a clear timeline after discovery."
    },
    {
      question: "Do you work with our existing tools?",
      answer: "Yes. We integrate with your current CRM, email platform, and other tools. The goal is to make everything work together, not replace what's working."
    },
    {
      question: "What if we need changes after launch?",
      answer: "That's what stewardship is for. We continuously improve your system based on real performance data. Small tests, quick wins, steady gains."
    },
    {
      question: "How do you measure success?",
      answer: "We track what matters: response times, show rates, conversion rates, cycle length. You'll see the metrics that directly impact revenue."
    },
    {
      question: "Do we own our data and accounts?",
      answer: "Absolutely. Everything stays in your name. We build and optimize, but you own and control all your data, accounts, and systems."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with B2B service businesses that sell through relationships. Professional services, agencies, consultants, and SaaS companies see the best results."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-pink-400 tracking-wider uppercase mb-4">
            FAQ
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Straight answers to real concerns
          </h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-pink-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-pink-400" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-slate-300 mb-6">
              Still have questions? Let's talk.
            </p>
            <a 
              href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book a Call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

