import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonies } from '../data/content';

const Testimonies = () => {
  return (
    <div className="py-20 bg-primary relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-purple/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-playfair">
            Testimonies
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from our community members about their faith journey
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonies.map((testimony) => (
            <SwiperSlide key={testimony.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                className="glass-dark p-8 rounded-3xl shadow-2xl h-full"
              >
                <FaQuoteLeft className="text-gold text-3xl mb-4" />
                <p className="text-white/80 mb-6 leading-relaxed italic">
                  "{testimony.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className="w-16 h-16 rounded-full border-2 border-gold"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimony.name}</h4>
                    <p className="text-gold text-sm">Church Member</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonies;
