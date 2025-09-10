import { motion } from 'framer-motion';
import { Settings, Bot, TrendingUp, Zap } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: Settings,
      title: "System Rebuild",
      description: "We map your customer journey and strip out friction. Your brand voice gets wired into every touch. The result is a simple path from ad to calendar to closed won. People feel cared for. You feel in control.",
      benefits: "faster replies, higher show rates, clean handoffs, fewer dropped balls."
    },
    {
      icon: Bot,
      title: "AI That Sounds Like You",
      description: "Your first response arrives in seconds, not hours. It is on brand. It qualifies. It schedules. Humans step in when the moment requires judgment. No robotic tone. No awkward loops. Just momentum.",
      benefits: "more booked calls, less busywork, happy prospects."
    },
    {
      icon: TrendingUp,
      title: "Sales Rhythm Installed",
      description: "We install a daily operating cadence. Clear stages. Clear SLAs. Clear coaching. Managers see where deals stall. Reps always know the next move.",
      benefits: "shorter cycles, better close rates, predictable weeks."
    },
    {
      icon: Zap,
      title: "Continuous Lift",
      description: "Your system does not sit still. We run small tests that add up. Offers. Timing. Pages. Follow ups. What works stays. What fails goes. The compounding is real.",
      benefits: "steady gains without extra ad spend."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-pink-400 tracking-wider uppercase mb-4">
            SERVICES
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            High touch. Done for you. Built to change how you operate.
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-pink-500/50 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center group-hover:bg-pink-600/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-pink-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="border-t border-slate-700 pt-4">
                  <p className="text-sm text-slate-400 mb-2">
                    <span className="font-semibold text-pink-400">You notice:</span>
                  </p>
                  <p className="text-sm text-slate-300">
                    {service.benefits}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
    </section>
  );
}

export default Services;

