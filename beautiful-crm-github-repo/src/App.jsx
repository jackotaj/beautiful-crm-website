import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Stories from '@/components/Stories';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToAnchor from '@/components/ScrollToAnchor';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />
        <main>
          <Hero />
          <Services />
          <Stories />
          <Process />
          <Pricing />
          <About />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

