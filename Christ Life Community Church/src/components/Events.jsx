import { motion } from 'framer-motion';
import { FaCalendar, FaClock } from 'react-icons/fa';
import { events } from '../data/content';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Upcoming Events
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Join us for these special gatherings and be part of our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="glass-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple/30 transition-all duration-300"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-playfair">
                  {event.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 mb-4">{event.description}</p>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gold mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendar />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock />
                    <span className="text-sm">{event.time}</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-purple to-gold text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/events"
            className="inline-block px-8 py-3 glass text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
          >
            View All Events
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
