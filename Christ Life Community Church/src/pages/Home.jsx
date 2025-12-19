import Hero from '../components/Hero';
import QuickInfo from '../components/QuickInfo';
import About from '../components/About';
import Events from '../components/Events';
import LiveStream from '../components/LiveStream';
import Gallery from '../components/Gallery';
import Testimonies from '../components/Testimonies';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <QuickInfo />
      <About />
      <Events />
      <LiveStream />
      <Gallery />
      <Testimonies />
      <Contact />
    </div>
  );
};

export default Home;
