import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 border-b border-white/20 transition-colors duration-300 ${scrolled ? 'bg-indigo-700/90 backdrop-blur-lg' : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-800 backdrop-blur-lg'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="text-white font-bold text-xl">
              Move In <span className="text-yellow-400">Corp</span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/team" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Team
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/projects" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium">
              Projects
            </Link>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="px-6 py-2 bg-white text-indigo-600 rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-lg flex items-center justify-center">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-yellow-400 transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;