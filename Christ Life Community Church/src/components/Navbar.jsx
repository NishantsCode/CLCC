import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCross, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const dropdownLinks = [
    { name: 'Events', path: '/events' },
    { name: 'Live Stream', path: '/live' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonies', path: '/testimonies' },
    { name: 'Blog', path: '/blog' }
  ];

  const allLinks = [...mainLinks, ...dropdownLinks];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/95 backdrop-blur-lg shadow-lg' : 'glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaCross className="text-gold text-2xl sm:text-3xl" />
            <span className="text-white text-base sm:text-xl md:text-2xl font-bold font-playfair">
              <span className="hidden sm:inline">Christ Life Community Church</span>
              <span className="sm:hidden">CLCC</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-gold transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-gold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`text-white hover:text-gold transition-colors duration-300 flex items-center space-x-1 ${
                  dropdownLinks.some(link => link.path === location.pathname) ? 'text-gold' : ''
                }`}
              >
                <span>More</span>
                <FaChevronDown className={`text-sm transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-primary/95 backdrop-blur-lg shadow-xl rounded-lg overflow-hidden"
                  >
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-6 py-3 text-white hover:bg-gold/20 hover:text-gold transition-colors duration-300 ${
                          location.pathname === link.path ? 'bg-gold/10 text-gold' : ''
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark"
          >
            <div className="px-4 py-6 space-y-4">
              {allLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-white hover:text-gold transition-colors duration-300 ${
                    location.pathname === link.path ? 'text-gold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
