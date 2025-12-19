import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SimpleChatbot from './components/SimpleChatbot';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import LivePage from './pages/LivePage';
import GalleryPage from './pages/GalleryPage';
import TestimoniesPage from './pages/TestimoniesPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

function App() {
  return (
    <Router>
      <div className="bg-primary overflow-x-hidden w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonies" element={<TestimoniesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <SimpleChatbot />
      </div>
    </Router>
  );
}

export default App;
