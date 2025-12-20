import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaPray, FaHandsHelping } from 'react-icons/fa';
import edwinImage from '../assets/edwin.jpg';
import sisterImage from '../assets/sister.jpg';
import brotherImage from '../assets/brother.jpg';
import heroImage from '../assets/photo-1438232992991-995b7058bbb3.jpg';

const AboutPage = () => {
  const values = [
    {
      icon: <FaHeart className="text-5xl text-gold" />,
      title: 'Love',
      description: 'We believe in showing God\'s love to everyone we meet'
    },
    {
      icon: <FaUsers className="text-5xl text-gold" />,
      title: 'Community',
      description: 'Building authentic relationships and supporting one another'
    },
    {
      icon: <FaPray className="text-5xl text-gold" />,
      title: 'Worship',
      description: 'Honoring God through heartfelt worship and prayer'
    },
    {
      icon: <FaHandsHelping className="text-5xl text-gold" />,
      title: 'Service',
      description: 'Serving our community and making a positive impact'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Our Story, Mission & Values
          </motion.p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">Our Story</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Christ Life community church was founded in 2023 in Canada by Edwin Anthony Paul and a small group of believers who shared a vision for a church that would be a beacon of hope in the community. What started as a gathering of 20 people in a living room has grown into a vibrant and welcoming community.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              From the beginning, we've remained committed to our core values of worship, community, and service. We believe that the church should be a place where people can encounter God's love, build meaningful relationships, and discover their purpose.
            </p>
            <p className="text-white/80 leading-relaxed">
              Today, Christ Life community church continues to grow and evolve, but our mission remains the same: to love God, love people, and make a difference in our world.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">Our Values</h2>
            <p className="text-white/70">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-dark p-8 rounded-3xl text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 font-playfair">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">Our Church Team</h2>
            <p className="text-white/70">Meet the dedicated team serving our community</p>
          </motion.div>

          {/* Senior Leadership */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-8 text-center">Senior Leadership</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
              {[
                { name: 'Edwin Anthony Paul', role: 'Senior Pastor', image: edwinImage },
                { name: 'Sister Beulah Sesham', role: 'Worship Leader & Finance', image: sisterImage }
              ].map((leader, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-dark rounded-3xl overflow-hidden"
                >
                  <img src={leader.image} alt={leader.name} className="w-full h-80 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{leader.name}</h3>
                    <p className="text-gold">{leader.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Committee Members */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-8 text-center">Committee Members</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { name: 'Elder Brother Raja', role: 'Church Committee', image: brotherImage },
                { name: 'Sister Tryphena Paul', role: 'Finance Team', image: sisterImage },
                { name: 'Master Judah Leonidas Nyman', role: 'Social Media Expert', image: brotherImage },
                { name: 'Elder Sister Karuna', role: 'India Prayer Leader', image: sisterImage }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-dark rounded-3xl overflow-hidden"
                >
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-gold text-sm">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Youth Ministry - Coming Soon */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-8 text-center">Youth Ministry</h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-dark rounded-3xl p-12 text-center max-w-2xl mx-auto"
            >
              <FaUsers className="text-6xl text-gold mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-white mb-3">Youth Leaders</h4>
              <p className="text-white/70 text-lg">Coming Soon - We're building an amazing youth ministry team!</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
