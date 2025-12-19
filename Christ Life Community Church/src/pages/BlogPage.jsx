import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaClock } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sermons', 'Community', 'Prayer', 'Events', 'Testimonies'];

  const blogPosts = [
    {
      id: 1,
      title: 'Walking in Faith: A Journey of Trust',
      excerpt: 'Discover how faith transforms our daily lives and strengthens our relationship with God...',
      author: 'Edwin Anthony Paul',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Sermons',
      image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800'
    },
    {
      id: 2,
      title: 'Community Outreach: Making a Difference',
      excerpt: 'Learn about our recent community service initiatives and how you can get involved...',
      author: 'Sister Beulah Sesham',
      date: 'December 12, 2024',
      readTime: '4 min read',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800'
    },
    {
      id: 3,
      title: 'The Power of Prayer in Our Lives',
      excerpt: 'Understanding the importance of prayer and how it connects us with God...',
      author: 'Elder Sister Karuna',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Prayer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
    },
    {
      id: 4,
      title: 'Upcoming Christmas Celebration 2024',
      excerpt: 'Join us for a special Christmas service filled with worship, joy, and celebration...',
      author: 'Church Admin',
      date: 'December 8, 2024',
      readTime: '3 min read',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800'
    },
    {
      id: 5,
      title: 'Testimony: How God Changed My Life',
      excerpt: 'A powerful testimony of transformation and God\'s grace in the midst of trials...',
      author: 'Church Member',
      date: 'December 5, 2024',
      readTime: '7 min read',
      category: 'Testimonies',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800'
    },
    {
      id: 6,
      title: 'Youth Ministry: Building the Next Generation',
      excerpt: 'Exciting updates about our youth programs and upcoming activities...',
      author: 'Youth Team',
      date: 'December 3, 2024',
      readTime: '4 min read',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800'
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center bg-gradient-to-b from-primary to-slate-900">
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 font-playfair"
          >
            Church Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Stories, Sermons & Updates from Our Community
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gold text-primary'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-dark rounded-3xl overflow-hidden cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gold text-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-playfair hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-gold" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaClock className="text-gold" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <FaCalendar className="text-gold" />
                    <span>{post.date}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="mt-4 w-full bg-gold/10 hover:bg-gold text-gold hover:text-primary py-2 rounded-xl font-semibold transition-all block text-center"
                  >
                    Read More
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60 text-xl">No posts found in this category.</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-playfair">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-8">
              Get the latest blog posts, sermons, and updates delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/50"
              />
              <button className="bg-gold text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
