import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaCross } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaCross className="text-gold text-2xl sm:text-3xl flex-shrink-0" />
              <span className="text-white text-lg sm:text-xl md:text-2xl font-bold font-playfair">Christ Life community church</span>
            </div>
            <p className="text-white/70 mb-4 text-sm sm:text-base">
              A community of faith, hope, and love. Join us as we worship together and grow in Christ.
            </p>
            <p className="text-gold italic text-xs sm:text-sm">
              "For where two or three gather in my name, there am I with them." - Matthew 18:20
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 font-playfair text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="/" className="text-white/70 hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-gold transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/events" className="text-white/70 hover:text-gold transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold mb-3 sm:mb-4 font-playfair text-base sm:text-lg">Connect</h3>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://www.facebook.com/christlifecommunitychurch" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors text-xl sm:text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://www.instagram.com/christlifecommunitychurch" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors text-xl sm:text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.youtube.com/@jesuschristofcorporates3481" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors text-xl sm:text-2xl"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://twitter.com/christlifechurch" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors text-xl sm:text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            © {currentYear} Christ Life Community Church | Canada. All rights reserved. Built with love and faith.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
