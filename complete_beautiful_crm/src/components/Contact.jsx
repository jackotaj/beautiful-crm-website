import { motion } from 'framer-motion';

function Contact() {
  const expectations = [
    "Review of your current process",
    "Identification of quick wins", 
    "Custom roadmap for first 30 days",
    "Clear next steps"
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-semibold text-pink-400 tracking-wider uppercase mb-4">
            CONTACT
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your business? Have questions about our services? 
            We're here to help you grow without the chaos.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* GoHighLevel Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Tell us what feels stuck. We will show you the path out.
            </h3>
            
            {/* GoHighLevel Contact Form */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://links.beautifulcrm.com/widget/form/halGBNWTJ0U6J9nLKsVp"
                style={{
                  width: '100%',
                  height: '742px',
                  border: 'none',
                  borderRadius: '8px'
                }}
                id="inline-halGBNWTJ0U6J9nLKsVp" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="742"
                data-layout-iframe-id="inline-halGBNWTJ0U6J9nLKsVp"
                data-form-id="halGBNWTJ0U6J9nLKsVp"
                title="Contact Form"
              />
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Booking Calendar */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-4">
                Ready to Book a Call?
              </h4>
              <p className="text-slate-300 mb-6">
                Schedule a focused strategy call. Thirty to forty five minutes. We review goals, 
                your current path, and where the quick lift lives. You leave with an action plan.
              </p>
              
              {/* GoHighLevel Booking Calendar */}
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01" 
                  style={{
                    width: '100%',
                    height: '600px',
                    border: 'none',
                    borderRadius: '8px'
                  }} 
                  scrolling="no" 
                  id="lHrJjJEhCPY2Atu8hj01_1757532823458"
                  title="Book a Call"
                />
              </div>
            </div>

            {/* Alternative Contact */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-4">Alternative Contact</h4>
              <a 
                href="mailto:hello@beautifulcrm.com"
                className="text-pink-400 hover:text-pink-300 transition-colors duration-200 text-lg"
              >
                hello@beautifulcrm.com
              </a>
            </div>

            {/* What to expect */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-white mb-4">What to expect:</h4>
              <ul className="space-y-3">
                {expectations.map((expectation, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300">{expectation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

