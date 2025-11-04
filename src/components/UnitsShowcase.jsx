import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BedDouble, Bath, Ruler, Sparkles, Leaf, Share2 } from 'lucide-react';

const UNITS = [
  {
    id: 'A',
    title: 'Unità A',
    size: '110 mq',
    beds: 3,
    baths: 2,
    efficiency: 'Classe A4',
    features: ['Terrazzo', 'Tripla esposizione', 'Box doppio'],
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'B',
    title: 'Unità B',
    size: '95 mq',
    beds: 2,
    baths: 2,
    efficiency: 'Classe A4',
    features: ['Giardino privato', 'Cucina separata', 'Cantina'],
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'C',
    title: 'Unità C',
    size: '120 mq',
    beds: 3,
    baths: 2,
    efficiency: 'Classe A4',
    features: ['Attico', 'Soggiorno a doppia altezza', 'Box'],
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'D',
    title: 'Unità D',
    size: '88 mq',
    beds: 2,
    baths: 1,
    efficiency: 'Classe A4',
    features: ['Balcone vivibile', 'Living open space', 'Posto auto'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'E',
    title: 'Unità E',
    size: '105 mq',
    beds: 3,
    baths: 2,
    efficiency: 'Classe A4',
    features: ['Duplex', 'Studio privato', 'Box e cantina'],
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function UnitsShowcase() {
  const [active, setActive] = useState(null);

  function shareUnit(u) {
    const shareData = {
      title: `${u.title} – Verdi 8` ,
      text: `${u.title} | ${u.size} | ${u.beds} camere, ${u.baths} bagni – ${u.efficiency}`,
      url: window.location.href,
    };
    if (navigator.share) navigator.share(shareData).catch(() => {});
  }

  return (
    <section id="unita" className="relative py-24 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Le 5 unità abitative</h2>
          <p className="mt-4 text-gray-700">
            Immagini d’impatto per raccontare spazi e luminosità. Clicca su una carta per aprire i dettagli dell’unità.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UNITS.map((u) => (
            <motion.div
              key={u.id}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-2xl transition"
            >
              <button onClick={() => setActive(u)} className="text-left w-full">
                <div className="aspect-[4/3] relative">
                  <img src={u.image} alt={u.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold">{u.title}</p>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500 text-white font-semibold">{u.efficiency}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-4 text-white/90 text-sm">
                      <span className="inline-flex items-center gap-1"><Ruler size={16} /> {u.size}</span>
                      <span className="inline-flex items-center gap-1"><BedDouble size={16} /> {u.beds} letti</span>
                      <span className="inline-flex items-center gap-1"><Bath size={16} /> {u.baths} bagni</span>
                    </div>
                  </div>
                </div>
              </button>
              <div className="p-5">
                <div className="mt-1 flex flex-wrap gap-2">
                  {u.features.map((f) => (
                    <span key={f} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">{f}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <button onClick={() => shareUnit(u)} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-gray-700 font-medium border border-gray-200 hover:bg-gray-50 transition">
                    <Share2 size={16} /> Condividi
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-3xl"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden bg-white shadow-2xl border border-black/5">
                <div className="aspect-video relative">
                  <img src={active.image} alt={active.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-2xl font-bold">{active.title}</p>
                    <p className="mt-1 text-white/90 text-sm">Immagini rappresentative. A breve caricheremo le foto reali di cantiere e rendering definitivi.</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-gray-700">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium"><Sparkles size={16}/> {active.efficiency}</span>
                    <span className="inline-flex items-center gap-2"><Ruler size={18}/> {active.size}</span>
                    <span className="inline-flex items-center gap-2"><BedDouble size={18}/> {active.beds} camere</span>
                    <span className="inline-flex items-center gap-2"><Bath size={18}/> {active.baths} bagni</span>
                    <span className="inline-flex items-center gap-2"><Leaf size={18}/> Isolamento e impianti evoluti</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {active.features.map((f) => (
                      <span key={f} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">{f}</span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#contatti"
                      className="px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
                      onClick={() => setActive(null)}
                    >
                      Richiedi informazioni
                    </a>
                    <button
                      onClick={() => setActive(null)}
                      className="px-5 py-3 rounded-md bg-white text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 transition"
                    >
                      Chiudi
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
