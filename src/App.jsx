import Hero from './components/Hero.jsx';
import LayersPanel from './components/LayersPanel.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="font-sans">
      <Hero />
      <LayersPanel />
      <Contact />
      <Footer />
    </div>
  );
}
