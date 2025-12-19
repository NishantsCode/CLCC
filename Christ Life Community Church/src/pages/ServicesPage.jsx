import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt, FaChild, FaMusic } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      title: 'Sunday Worship',
      time: '7:30 AM - 8:30 AM (MST)',
      description: 'Join us for our online worship service with contemporary music, inspiring messages, and communion. Time zone: America/Edmonton',
      icon: <FaMusic className="text-5xl text-gold" />
    },
    {
      title: 'Wednesday Bible Study',
      time: '7:00 PM - 8:00 PM (MST)',
      description: 'Mid-week Bible study and prayer gathering for spiritual growth and fellowship.',
      icon: <FaClock className="text-5xl text-gold" />
    },
    {
      title: 'Saturday Street Ministry',
      time: 'Weekly Outreach',
      description: 'Street Ministry at 17th Ave SW Calgary, Tomkins Park. Join us as we serve our community.',
      icon: <FaChild className="text-5xl text-gold" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507692049790-de58290a4334?w=1920)',
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
            Services & Location
          </motion.h1>
        </div>
      </div>

      {/* Services */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">Our Services</h2>
            <p className="text-white/70">Join us for worship and fellowship</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-dark p-8 rounded-3xl text-center"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">{service.title}</h3>
                <p className="text-gold mb-4">{service.time}</p>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">Find Us</h2>
            <p className="text-white/70">We'd love to see you in person</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-dark p-4 rounded-3xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98823492346069!3d40.75889097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-gold text-2xl mt-1" />
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Address</h3>
                  <p className="text-white/70">123 Faith Street<br />Grace City, GC 12345</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaClock className="text-gold text-2xl mt-1" />
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">Service Times</h3>
                  <p className="text-white/70">
                    Sunday: 7:30 AM - 8:30 AM (MST) - Online<br />
                    Wednesday: 7:00 PM - 8:00 PM (MST)<br />
                    Saturday: Street Ministry at Tomkins Park
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple to-gold text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
