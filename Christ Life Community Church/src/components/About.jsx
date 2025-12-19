import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-primary to-slate-900">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0f172a"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800"
                alt="Church"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 font-playfair">
              History & Vision
            </h2>
            <p className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed">
              Christ Life community church was founded in 1985 with a vision to create a welcoming community where people can encounter God's love and grow in their faith. For over three decades, we've been a beacon of hope in our community.
            </p>
            <p className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed">
              Our mission is to worship God, build authentic relationships, and serve our community with the love of Christ. We believe in creating a space where everyone belongs, regardless of where they are in their spiritual journey.
            </p>
            <p className="text-sm sm:text-base text-gold mb-6 leading-relaxed font-semibold italic">
              Our life belongs to Christ. Let's be ready to receive God when He returns. Our exit from Earth should be our entry into Jesus' hands.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-gradient-to-r from-gold to-yellow-600 text-primary rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0f172a"></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
