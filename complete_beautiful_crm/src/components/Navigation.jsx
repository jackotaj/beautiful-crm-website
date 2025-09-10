import { useState } from 'react';
import { handleAnchorClick } from '@/utils/scrollUtils';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e) => {
    handleAnchorClick(e);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/beautiful-crm-logo.png" 
            alt="Beautiful CRM Logo" 
            className="h-10"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a 
            href="#home" 
            className="text-slate-300 hover:text-pink-400 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a 
            href="#services" 
            className="text-slate-300 hover:text-pink-400 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Services
          </a>
          <a 
            href="#stories" 
            className="text-slate-300 hover:text-pink-400 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Stories
          </a>
          <a 
            href="#process" 
            className="text-slate-300 hover:text-pink-400 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Process
          </a>
          <a 
            href="#pricing" 
            className="text-slate-300 hover:text-pink-400 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Pricing
          </a>
          <a 
            href="#about" 
            className="text-slate-300 hover:text-pink-400 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a 
            href="#faq" 
            className="text-slate-300 hover:text-pink-400 transition-colors duration-200"
            onClick={handleLinkClick}
          >
            FAQ
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Book a Call
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none text-pink-400 relative z-50" 
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span 
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            ></span>
            <span 
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            ></span>
          </div>
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-slate-800/95 border-t border-slate-700 backdrop-blur-md">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col space-y-1">
              <a 
                href="#home" 
                className="text-slate-300 hover:text-pink-400 hover:bg-slate-700 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium"
                onClick={handleLinkClick}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="text-slate-300 hover:text-pink-400 hover:bg-slate-700 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium"
                onClick={handleLinkClick}
              >
                Services
              </a>
              <a 
                href="#stories" 
                className="text-slate-300 hover:text-pink-400 hover:bg-slate-700 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium"
                onClick={handleLinkClick}
              >
                Stories
              </a>
              <a 
                href="#process" 
                className="text-slate-300 hover:text-pink-400 hover:bg-slate-700 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium"
                onClick={handleLinkClick}
              >
                Process
              </a>
              <a 
                href="#pricing" 
                className="text-slate-300 hover:text-pink-400 hover:bg-slate-700 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium"
                onClick={handleLinkClick}
              >
                Pricing
              </a>
              <a 
                href="#about" 
                className="text-slate-300 hover:text-pink-400 hover:bg-slate-700 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium"
                onClick={handleLinkClick}
              >
                About
              </a>
              <a 
                href="#faq" 
                className="text-slate-300 hover:text-pink-400 hover:bg-slate-700 py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium"
                onClick={handleLinkClick}
              >
                FAQ
              </a>
              <a 
                href="https://links.beautifulcrm.com/widget/booking/lHrJjJEhCPY2Atu8hj01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-3 px-4 rounded-lg font-medium text-center mt-4"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;

