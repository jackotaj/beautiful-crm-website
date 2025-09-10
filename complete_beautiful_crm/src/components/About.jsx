import { motion } from 'framer-motion';
import { Heart, Zap, Shield } from 'lucide-react';

function About() {
  const values = [
    {
      icon: Heart,
      title: "Direct Talk",
      description: "We believe in clear communication without jargon or fluff. You'll always know where you stand."
    },
    {
      icon: Zap,
      title: "Fast Shipping",
      description: "We move quickly to deliver results. No endless meetings or drawn-out timelines."
    },
    {
      icon: Shield,
      title: "Clean Execution",
      description: "Every system we build is designed for clarity, reliability, and long-term success."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-pink-400 tracking-wider uppercase mb-4">
            ABOUT
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why we build the way we build
          </h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Business gets easier when the path is simple and the promises are kept
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                We build systems that make that happen. Every touchpoint in your customer journey should feel intentional. 
                Every promise your brand makes should be kept automatically. Every team member should know exactly what to do next.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Your data and accounts stay yours. We're here to make your business run better, not to own it.
              </p>
              <div className="bg-pink-900/30 border border-pink-500/20 rounded-lg p-6">
                <p className="text-lg text-pink-200 font-medium">
                  Working with us feels like this: fewer meetings, faster answers, thoughtful changes that stick.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="/images/office.jpg" 
                alt="Clean office workspace" 
                className="w-full rounded-lg shadow-2xl border border-slate-700"
              />
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-pink-400" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
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

export default About;

