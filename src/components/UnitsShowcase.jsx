import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BedDouble, Bath, Ruler, Sparkles, Leaf } from 'lucide-react';

const UNITS = [
  {
    id: 'A',
    title: 'Unità A',
    size: '110 mq',
    beds: 3,
    baths: 2,
    efficiency: 'Classe A4',
    features: ['Terrazzo', 'Tripla esposizione', 'Box doppio'],
  },
  {
    id: 'B',
    title: 'Unità B',
    size: '95 mq',
    beds: 2,
    baths: 2,
    efficiency: 'Classe A4',
    features: ['Giardino privato', 'Cucina separata', 'Cantina'],
  },
  {
    id: 'C',
    title: 'Unità C',
    size: '120 mq',
    beds: 3,
    baths: 2,
    efficiency: 'Classe A4',
    features: ['Attico', 'Soggiorno a doppia altezza', 'Box'],
  },
  {
    id: 'D',
    title: 'Unità D',
    size: '88 mq',
    beds: 2,
    baths: 1,
    efficiency: 'Classe A4',
    features: ['Balcone vivibile', 'Living open space', 'Posto auto'],
  },
  {
    id: 'E',
    title: 'Unità E',
    size: '105 mq',
    beds: 3,
    baths: 2,
    efficiency: 'Classe A4',
    features: ['Duplex', 'Studio privato', 'Box e cantina'],
  },
];

export default function UnitsShowcase() {
  const [active, setActive] = useState(null);

  return (
    <section id="unita" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Le 5 unità abitative</h2>
          <p className="mt-4 text-gray-700">
            Ciascuna unità è pensata per comfort, luce naturale ed efficienza energetica. Clicca su una carta per aprire la scheda dedicata.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UNITS.map((u) => (
            <motion.button
              key={u.id}
              onClick={() => setActive(u)}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group text-left rounded-xl bg-white border border-black/5 shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-emerald-50 to-white relative">
                <div className="absolute inset-0 p-5">
                  <div className="h-full w-full rounded-lg bg-white/70 backdrop-blur-sm border border-emerald-200 grid place-items-center">
                    <div className="text-center">
                      <p className="text-xs uppercase tracking-widest text-emerald-700/80 font-semibold">Modello 3D</p>
                      <p className="text-lg font-semibold text-gray-900">{u.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-gray-900">{u.title}</p>
                  <span className="text-sm px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 font-semibold">{u.efficiency}</span>
                </div>
                <div className="mt-3 flex items-center gap-4 text-gray-600 text-sm">
                  <span className="inline-flex items-center gap-1"><Ruler size={16} /> {u.size}</span>
                  <span className="inline-flex items-center gap-1"><BedDouble size={16} /> {u.beds} letti</span>
                  <span className="inline-flex items-center gap-1"><Bath size={16} /> {u.baths} bagni</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {u.features.map((f) => (
                    <span key={f} className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">{f}</span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="rounded-2xl overflow-hidden bg-white shadow-2xl border border-black/5">
                <div className="aspect-video bg-gradient-to-br from-emerald-50 to-white relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-widest text-emerald-700/80 font-semibold">Modello 3D interattivo</p>
                      <p className="mt-2 text-2xl font-bold text-gray-900">{active.title}</p>
                      <p className="mt-2 text-gray-600 max-w-md mx-auto">Anteprima concettuale dell'unità. Zoom e rotazione per esplorare gli spazi.</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 text-gray-700">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium"><Sparkles size={16}/> {active.efficiency}</span>
                    <span className="inline-flex items-center gap-2"><Ruler size={18}/> {active.size}</span>
                    <span className="inline-flex items-center gap-2"><BedDouble size={18}/> {active.beds} camere</span>
                    <span className="inline-flex items-center gap-2"><Bath size={18}/> {active.baths} bagni</span>
                    <span className="inline-flex items-center gap-2"><Leaf size={18}/> Cappotto e impianti ad alta efficienza</span>
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
