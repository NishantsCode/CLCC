import { motion } from 'framer-motion';
import { FaCalendar, FaClock } from 'react-icons/fa';
import { events } from '../data/content';

const EventsPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-primary">
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 font-playfair"
          >
            Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Join us for upcoming gatherings and special services
          </motion.p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-dark rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-playfair">
                    {event.title}
                  </h3>
                  <p className="text-white/70 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 text-gold mb-4">
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
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
