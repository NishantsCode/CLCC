import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaClock, FaArrowLeft } from 'react-icons/fa';
import { useParams, Link, useNavigate } from 'react-router-dom';

const BlogPostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample blog posts data (same as BlogPage)
  const blogPosts = {
    1: {
      title: 'Walking in Faith: A Journey of Trust',
      content: `
        <p>Faith is not just a concept we discuss on Sundays; it's a living, breathing part of our daily walk with God. In this post, we'll explore what it truly means to walk in faith and how it transforms every aspect of our lives.</p>
        
        <h2>Understanding Faith</h2>
        <p>Hebrews 11:1 tells us that "faith is confidence in what we hope for and assurance about what we do not see." This definition challenges us to trust God even when circumstances seem impossible.</p>
        
        <h2>The Journey Begins</h2>
        <p>Walking in faith starts with a decision - a decision to trust God's promises over our circumstances. It's about choosing to believe that God is who He says He is and that He will do what He has promised.</p>
        
        <h2>Daily Steps of Faith</h2>
        <p>1. Start each day with prayer and scripture reading<br/>
        2. Trust God with your decisions, big and small<br/>
        3. Look for God's hand in everyday situations<br/>
        4. Share your faith journey with others<br/>
        5. Remember past faithfulness when facing new challenges</p>
        
        <h2>Overcoming Doubt</h2>
        <p>Even the strongest believers face moments of doubt. The key is not to let doubt paralyze us but to bring our questions to God in honest prayer. He is big enough to handle our doubts and faithful enough to strengthen our faith.</p>
        
        <h2>Conclusion</h2>
        <p>Walking in faith is a journey, not a destination. Each day presents new opportunities to trust God more deeply. As we step out in faith, we discover that God is always faithful to meet us where we are and lead us where we need to go.</p>
      `,
      author: 'Edwin Anthony Paul',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Sermons',
      image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200'
    },
    2: {
      title: 'Community Outreach: Making a Difference',
      content: `
        <p>Our church believes in being the hands and feet of Jesus in our community. This month, we've been actively involved in several outreach initiatives that are making a real difference in people's lives.</p>
        
        <h2>Food Drive Success</h2>
        <p>Thanks to your generous donations, we were able to provide food packages to over 100 families in need. The joy on their faces reminded us why we do what we do.</p>
        
        <h2>Youth Mentorship Program</h2>
        <p>We've launched a new mentorship program connecting our church members with local youth. This initiative aims to provide guidance, support, and positive role models for the next generation.</p>
        
        <h2>How You Can Get Involved</h2>
        <p>There are many ways to participate in our community outreach:<br/>
        - Volunteer at our weekly food distribution<br/>
        - Become a mentor in our youth program<br/>
        - Donate to our community fund<br/>
        - Pray for those we serve</p>
        
        <h2>Impact Stories</h2>
        <p>One family shared how our food assistance came at just the right time when they were struggling. Another parent expressed gratitude for the positive influence our mentors have had on their teenager.</p>
        
        <p>Together, we're not just talking about love - we're showing it in practical ways that transform lives.</p>
      `,
      author: 'Sister Beulah Sesham',
      date: 'December 12, 2024',
      readTime: '4 min read',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200'
    },
    3: {
      title: 'The Power of Prayer in Our Lives',
      content: `
        <p>Prayer is our direct line of communication with God. It's not just a religious duty but a powerful privilege that connects us with the Creator of the universe.</p>
        
        <h2>Why Prayer Matters</h2>
        <p>Prayer changes things - but more importantly, it changes us. Through prayer, we align our hearts with God's will and open ourselves to His transforming power.</p>
        
        <h2>Different Types of Prayer</h2>
        <p>1. Adoration - Praising God for who He is<br/>
        2. Confession - Acknowledging our sins and seeking forgiveness<br/>
        3. Thanksgiving - Expressing gratitude for God's blessings<br/>
        4. Supplication - Bringing our requests to God</p>
        
        <h2>Building a Prayer Life</h2>
        <p>Developing a consistent prayer life takes intentionality. Start small - even five minutes a day can make a difference. Find a quiet place, eliminate distractions, and simply talk to God as you would a close friend.</p>
        
        <h2>Prayer Warriors Needed</h2>
        <p>We're looking for committed individuals to join our prayer team. If you feel called to intercede for our church, community, and world, please reach out to Elder Sister Karuna.</p>
        
        <p>Remember: Prayer is not about changing God's mind but about aligning our hearts with His purposes.</p>
      `,
      author: 'Elder Sister Karuna',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Prayer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200'
    },
    4: {
      title: 'Upcoming Christmas Celebration 2024',
      content: `
        <p>Christmas is almost here, and we're excited to celebrate the birth of our Savior together as a church family!</p>
        
        <h2>Special Christmas Service</h2>
        <p>Join us on December 25th at 7:30 AM for a special Christmas morning service. We'll have worship, a message about the true meaning of Christmas, and special performances by our choir and youth group.</p>
        
        <h2>Christmas Eve Candlelight Service</h2>
        <p>Don't miss our beautiful candlelight service on December 24th at 7:00 PM. This intimate gathering will feature traditional carols, scripture readings, and a time of reflection on the miracle of Christ's birth.</p>
        
        <h2>Children's Christmas Program</h2>
        <p>Our children have been working hard on a special Christmas presentation. Come see them share the story of Jesus' birth through songs, drama, and scripture on December 22nd at 6:00 PM.</p>
        
        <h2>Community Christmas Dinner</h2>
        <p>We're hosting a free community Christmas dinner on December 23rd from 5:00-8:00 PM. Everyone is welcome! If you'd like to volunteer or donate food, please sign up at the welcome desk.</p>
        
        <h2>Gift Drive for Local Families</h2>
        <p>Help us bring joy to families in need this Christmas. Pick up a gift tag from our Christmas tree in the lobby and return unwrapped gifts by December 20th.</p>
        
        <p>Let's make this Christmas season a time of worship, fellowship, and sharing God's love with our community!</p>
      `,
      author: 'Church Admin',
      date: 'December 8, 2024',
      readTime: '3 min read',
      category: 'Events',
      image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=1200'
    },
    5: {
      title: 'Testimony: How God Changed My Life',
      content: `
        <p>My name is Sarah, and I want to share how God completely transformed my life when I thought all hope was lost.</p>
        
        <h2>The Struggle</h2>
        <p>Two years ago, I was at my lowest point. I had lost my job, my marriage was falling apart, and I was battling depression. I felt completely alone and hopeless.</p>
        
        <h2>A Divine Encounter</h2>
        <p>One Sunday, a friend invited me to Christ Life Community Church. I almost didn't go, but something inside me said "yes." That morning, Pastor Edwin's message spoke directly to my situation. It was as if God was speaking right to me.</p>
        
        <h2>The Turning Point</h2>
        <p>After the service, I went forward for prayer. The love and acceptance I felt from the prayer team was overwhelming. For the first time in months, I felt hope.</p>
        
        <h2>The Transformation</h2>
        <p>Over the next few months, God began to work in my life in amazing ways:<br/>
        - I found a new job that I love<br/>
        - My marriage was restored through counseling and prayer<br/>
        - I discovered my purpose in serving others<br/>
        - My depression lifted as I grew closer to God</p>
        
        <h2>Today</h2>
        <p>Today, I'm not just surviving - I'm thriving! I'm actively involved in our church's prayer ministry, helping others who are going through difficult times. God took my mess and turned it into a message of hope.</p>
        
        <p>If you're struggling today, please know that God sees you, loves you, and has a plan for your life. Don't give up - your breakthrough may be just around the corner!</p>
      `,
      author: 'Church Member',
      date: 'December 5, 2024',
      readTime: '7 min read',
      category: 'Testimonies',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200'
    },
    6: {
      title: 'Youth Ministry: Building the Next Generation',
      content: `
        <p>Our youth are not just the church of tomorrow - they're the church of today! We're excited to share updates about our growing youth ministry.</p>
        
        <h2>Weekly Youth Gatherings</h2>
        <p>Every Friday night, our youth meet for a time of worship, teaching, games, and fellowship. We're seeing amazing growth as young people encounter God in powerful ways.</p>
        
        <h2>Upcoming Youth Events</h2>
        <p>- Winter Retreat: January 15-17, 2025<br/>
        - Youth Worship Night: December 30, 2024<br/>
        - Community Service Day: January 25, 2025<br/>
        - Youth Conference: March 2025</p>
        
        <h2>Small Groups</h2>
        <p>We've launched age-specific small groups that meet throughout the week. These groups provide a safe space for teens to discuss real issues, ask tough questions, and build authentic friendships.</p>
        
        <h2>Leadership Development</h2>
        <p>We're investing in the next generation of leaders through our youth leadership program. Students are learning to lead worship, teach, and serve in various ministry capacities.</p>
        
        <h2>Parent Partnership</h2>
        <p>We believe youth ministry is most effective when we partner with parents. We offer monthly parent meetings and resources to help families disciple their teens at home.</p>
        
        <h2>Get Involved</h2>
        <p>We're always looking for adult volunteers who have a heart for youth. If you're interested in making a difference in the lives of young people, please contact our youth ministry team.</p>
        
        <p>Together, we're building a generation that will impact the world for Christ!</p>
      `,
      author: 'Youth Team',
      date: 'December 3, 2024',
      readTime: '4 min read',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1200'
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-gold hover:text-white">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-slate-900 min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-20 sm:-mt-32 relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12"
        >
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-gold hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Blog</span>
          </button>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-gold text-primary px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 font-playfair leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base text-white/60 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <FaUser className="text-gold" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar className="text-gold" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-gold" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div 
            className="blog-content text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: 'rgba(255, 255, 255, 0.9)'
            }}
          />

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/60 text-center">
              Share this post with your friends and family
            </p>
          </div>
        </motion.article>

        {/* Related Posts */}
        <div className="mt-16 mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 font-playfair text-center">
            More from Our Blog
          </h2>
          <div className="text-center">
            <Link 
              to="/blog"
              className="inline-block bg-gold text-primary px-8 py-3 rounded-xl font-semibold hover:bg-white transition-all"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
