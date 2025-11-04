import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UnitsShowcase from './components/UnitsShowcase';
import NearbyAgency from './components/NearbyAgency';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <UnitsShowcase />
        <NearbyAgency />
        <ContactSection />
      </main>
      <footer className="border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Verdi 8 – Brugherio. Tutti i diritti riservati.</p>
          <div className="text-sm text-gray-600">
            Progetto promozionale a cura di <a className="text-emerald-700 font-medium hover:underline" href="https://www.edilnordre.it" target="_blank" rel="noreferrer">Edilnordre</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
