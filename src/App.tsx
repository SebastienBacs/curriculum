import Experiences from '@/sections/Experiences';
import Projects from '@/sections/Projects';
import Reviews from '@/sections/Reviews';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import About from '@/sections/About';
import Home from '@/sections/Home';

const App = () => {
  return (
    <main className="bg-background">
      <Home />
      <About />
      <Experiences />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
