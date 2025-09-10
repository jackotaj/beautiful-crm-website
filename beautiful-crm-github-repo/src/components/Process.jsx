import { motion } from 'framer-motion';
import { Search, FileText, Wrench, Play, Users, TrendingUp } from 'lucide-react';

function Process() {
  const steps = [
    {
      stepNumber: "01",
      title: "Discovery",
      description: "We listen. We find the friction that costs you money and time.",
      icon: Search
    },
    {
      stepNumber: "02",
      title: "Blueprint",
      description: "We draw the new path. Offers, stages, voice, timing. You approve.",
      icon: FileText
    },
    {
      stepNumber: "03",
      title: "Build",
      description: "We create the assets and the system. Pages. Journeys. Messaging. Routing. Dashboards.",
      icon: Wrench
    },
    {
      stepNumber: "04",
      title: "Go Live",
      description: "Traffic on. Replies in seconds. We watch every transition and fix what squeaks.",
      icon: Play
    },
    {
      stepNumber: "05",
      title: "Coach",
      description: "We install the daily rhythm. Managers get real visibility. Reps get clear next steps.",
      icon: Users
    },
    {
      stepNumber: "06",
      title: "Compound",
      description: "We test small. We keep winners. The system gets sharper each week.",
      icon: TrendingUp
    }
  ];

  return (
    <section id="process" className="py-20 px-6 bg-slate-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-pink-400 tracking-wider uppercase mb-4">
            PROCESS
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Six steps. No fluff. Designed to deliver change fast.
          </h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Process Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <img 
              src="/images/workflow.jpg" 
              alt="Business automation workflow" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl border border-slate-700"
            />
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="relative bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-pink-500/50 transition-all duration-300 group backdrop-blur-sm"
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.stepNumber}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4">
                    <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center group-hover:bg-pink-600/30 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-pink-400" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a 
              href="#contact"
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

export default Process;

