import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    employees: '',
    bottleneck: '',
    additional: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added here for GoHighLevel integration
    console.log('Form submitted:', formData);
    alert('Thank you! We will be in touch within one business day.');
  };

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
            Book a Call
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A focused strategy call. Thirty to forty five minutes. We review goals, your current path, 
            and where the quick lift lives. You leave with an action plan.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
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
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-pink-400 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-pink-400 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-pink-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-pink-400 mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-pink-400 mb-2">
                  Number of Employees
                </label>
                <select
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-pink-500 transition-colors duration-200"
                >
                  <option value="">Select range</option>
                  <option value="1-5">1-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21-50">21-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>

              <div>
                <label htmlFor="bottleneck" className="block text-sm font-medium text-pink-400 mb-2">
                  Biggest Bottleneck *
                </label>
                <textarea
                  id="bottleneck"
                  name="bottleneck"
                  required
                  rows={4}
                  value={formData.bottleneck}
                  onChange={handleChange}
                  placeholder="What's the biggest challenge in your current sales/marketing process?"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors duration-200 resize-none"
                />
              </div>

              <div>
                <label htmlFor="additional" className="block text-sm font-medium text-pink-400 mb-2">
                  Anything else we should know?
                </label>
                <textarea
                  id="additional"
                  name="additional"
                  rows={3}
                  value={formData.additional}
                  onChange={handleChange}
                  placeholder="Any additional context or specific goals..."
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white py-4 px-6 rounded-lg font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Book My Call
              </button>

              <p className="text-sm text-slate-400 text-center">
                You will hear back within one business day.
              </p>
            </form>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative">
              <img 
                src="/images/handshake.jpg" 
                alt="Professional handshake" 
                className="w-full rounded-lg shadow-2xl border border-slate-700"
              />
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

