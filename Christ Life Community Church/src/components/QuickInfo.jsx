import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaBible } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const QuickInfo = () => {
  const [verse, setVerse] = useState({ text: '', reference: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://beta.ourmanna.com/api/v1/get?format=json')
      .then(res => res.json())
      .then(data => {
        setVerse({
          text: data.verse.details.text,
          reference: data.verse.details.reference
        });
        setLoading(false);
      })
      .catch(() => {
        setVerse({
          text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.',
          reference: 'John 3:16'
        });
        setLoading(false);
      });
  }, []);

  const cards = [
    {
      icon: <FaMapMarkerAlt className="text-4xl text-gold" />,
      title: 'Location',
      content: '409 2620 16th Street SW Calgary, Alberta Canada, T2T 4G2'
    },
    {
      icon: <FaClock className="text-4xl text-gold" />,
      title: 'Service Times',
      content: 'Sunday: 7:30 AM - 8:30 AM (MST) Online\nWednesday: 7:00 PM - 8:00 PM Bible Study\nSaturday: Street Ministry at Tomkins Park',
      multiline: true
    },
    {
      icon: <FaBible className="text-4xl text-gold" />,
      title: 'Verse of the Day',
      content: loading ? 'Loading...' : verse.text,
      subtitle: loading ? '' : verse.reference
    }
  ];

  return (
    <div className="relative -mt-20 z-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-gold/20 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 sm:mb-4">{card.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className={`text-white/80 text-xs sm:text-sm ${card.multiline ? 'whitespace-pre-line leading-relaxed' : ''}`}>
                  {card.content}
                </p>
                {card.subtitle && (
                  <p className="text-gold text-xs mt-2 font-semibold">{card.subtitle}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
