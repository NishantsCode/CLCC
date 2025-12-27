# Christ Life Community Church Website

A modern, responsive church website built with React, featuring online worship services, events, testimonies, and community engagement tools.

## 🌐 Live Website

**URL:** [https://clcc.vercel.app](https://clcc.vercel.app)

## ✨ Features

- **Live Streaming** - Join our Sunday worship services at 7:30 AM MST
- **Events Calendar** - Stay updated with upcoming church events
- **Blog & Sermons** - Read inspiring content and testimonies
- **Photo Gallery** - View moments from our community
- **Contact Form** - Get in touch with our church team
- **Interactive Chatbot** - Get quick answers to common questions
- **Responsive Design** - Optimized for all devices
- **SEO Optimized** - Enhanced for search engines with Canada targeting

## 🚀 Tech Stack

- **Frontend:** React 19
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Image Gallery:** Yet Another React Lightbox
- **Carousel:** Swiper
- **Build Tool:** Vite
- **Deployment:** Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Christ Life Community Church"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
Christ Life Community Church/
├── public/
│   ├── robots.txt          # SEO crawler instructions
│   └── sitemap.xml         # Site structure for search engines
├── src/
│   ├── assets/             # Images and media files
│   ├── components/         # React components
│   │   ├── About.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Contact.jsx
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── LiveStream.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── data/               # Static data and content
│   │   ├── chatbotData.js
│   │   └── content.js
│   ├── pages/              # Page components
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── EventsPage.jsx
│   │   └── ...
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template with SEO meta tags
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Update Church Information

1. **Service Times:** Edit `src/components/Hero.jsx` and `src/components/LiveStream.jsx`
2. **Events:** Modify `src/data/content.js`
3. **Team Members:** Update `src/pages/AboutPage.jsx`
4. **Blog Posts:** Edit `src/pages/BlogPage.jsx`
5. **Contact Info:** Update `src/components/Contact.jsx`

### Update Links

- **Google Meet:** `src/components/LiveStream.jsx`
- **YouTube Channel:** `src/components/Hero.jsx` and `src/components/Footer.jsx`
- **Social Media:** `src/components/Footer.jsx`

## 🔍 SEO Configuration

The website is optimized for search engines with:
- Meta tags for Canada targeting
- Schema.org structured data
- Open Graph tags for social sharing
- Sitemap and robots.txt
- Optimized image alt text

**Important:** After deployment, complete these steps:
1. Create Google Business Profile
2. Set up Google Search Console
3. Submit sitemap at: `https://clcc.vercel.app/sitemap.xml`

See `SEO-GUIDE.md` for detailed instructions.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy
4. Your site will be live at `https://your-project.vercel.app`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📄 Additional Documentation

- `SEO-GUIDE.md` - Complete SEO optimization guide
- `CONTENT-CHECKLIST.md` - Content and feature checklist
- `SEO-UPDATES-COMPLETED.md` - Recent SEO updates summary

## 🤝 Contributing

This is a church website project. For updates or improvements:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📞 Support

For technical support or questions:
- Visit: [https://clcc.vercel.app/contact](https://clcc.vercel.app/contact)
- Email: Contact through website form

## 📜 License

© 2024 Christ Life Community Church. All rights reserved.

## 🙏 Acknowledgments

Built with love and faith to serve the Christian community across Canada.

---

**Service Times:** Sunday 7:30 AM - 8:30 AM MST (Online)  
**Website:** [https://clcc.vercel.app](https://clcc.vercel.app)  
**YouTube:** [@jesuschristofcorporates3481](https://youtube.com/@jesuschristofcorporates3481)
