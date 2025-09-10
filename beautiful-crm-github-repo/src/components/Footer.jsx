import { handleAnchorClick } from '@/utils/scrollUtils';

function Footer() {
  const handleLinkClick = (e) => {
    handleAnchorClick(e);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/beautiful-crm-logo.png" 
                alt="Beautiful CRM Logo" 
                className="h-8"
              />
            </div>
            <p className="text-slate-400 leading-relaxed">
              We rebuild how your business wins. One system. One story. From first click to signed deal.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#services" 
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#stories" 
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Stories
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#contact" 
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                  onClick={handleLinkClick}
                >
                  Book a Call
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@beautifulcrm.com"
                  className="text-slate-400 hover:text-pink-400 transition-colors duration-200"
                >
                  hello@beautifulcrm.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-slate-400 text-sm">
              © Beautiful CRM
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors duration-200">
                Terms
              </a>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-4 md:mt-0">
            <a 
              href="#contact"
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              onClick={handleLinkClick}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

