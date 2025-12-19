import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const LiveStream = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  // Your YouTube channel handle
  const channelHandle = '@jesuschristofcorporates3481';
  // Fallback video ID - plays when not live
  const fallbackVideoId = 'LxPIU-N3tig';

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextSunday = new Date();
      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
      nextSunday.setHours(7, 30, 0, 0);

      const difference = nextSunday - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-slate-900 to-primary relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCircle className="text-red-600 animate-pulse" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-playfair">
              LIVE STREAM
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            Join us for live worship every Sunday at 7:30 AM
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="glass-dark p-2 sm:p-4 rounded-xl sm:rounded-2xl min-w-[60px] sm:min-w-[80px] text-center">
              <div className="text-xl sm:text-3xl font-bold text-gold">{value}</div>
              <div className="text-white/60 text-xs sm:text-sm capitalize">{unit}</div>
            </div>
          ))}
        </motion.div>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-dark p-2 sm:p-4 rounded-2xl sm:rounded-3xl shadow-2xl">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl sm:rounded-2xl">
              {/* This will show live stream when active, or fallback video when not */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${fallbackVideoId}?autoplay=0&rel=0`}
                title="Church Service"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Link to channel for live streams */}
            <div className="mt-4 text-center">
              <a 
                href={`https://www.youtube.com/${channelHandle}/live`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors"
              >
                <FaCircle className="text-red-600 animate-pulse text-xs" />
                <span>Click here if we're LIVE now</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-white/60 text-sm">
            Can't make it in person? Watch our services live every Sunday
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LiveStream;
