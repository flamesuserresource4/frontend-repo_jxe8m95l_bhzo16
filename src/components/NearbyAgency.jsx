import { motion } from 'framer-motion';
import { Train, Bus, ShoppingBag, Trees, School, Hospital, Landmark, ArrowUpRight } from 'lucide-react';

const nearby = [
  { icon: Train, title: 'Collegamenti', desc: 'Stazioni vicine e linee verso Milano e Monza.' },
  { icon: Bus, title: 'Mezzi pubblici', desc: 'Linee bus con fermate a pochi passi.' },
  { icon: ShoppingBag, title: 'Servizi', desc: 'Negozi, supermercati, palestre e ristoranti.' },
  { icon: Trees, title: 'Parchi', desc: 'Aree verdi e piste ciclopedonali attorno al complesso.' },
  { icon: School, title: 'Scuole', desc: 'Asili, primarie e secondarie a breve distanza.' },
  { icon: Hospital, title: 'Salute', desc: 'Farmacie e strutture sanitarie in zona.' },
];

export default function NearbyAgency() {
  return (
    <section id="vicinanze" className="py-24 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Brugherio e le vicinanze</h2>
          <p className="mt-4 text-gray-700">Una città vivace e servita, perfetta per la vita quotidiana e i collegamenti con la metropoli.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {nearby.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="rounded-xl bg-white p-6 border border-black/5 shadow-sm hover:shadow-xl transition"
            >
              <div className="h-12 w-12 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
                <Icon />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-700">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Promotore commerciale</h3>
            <p className="mt-3 text-gray-700">L'iniziativa è promossa da Edilnordre, realtà di riferimento sul territorio per serietà e competenza.</p>
            <a
              href="https://www.edilnordre.it"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
            >
              Visita il sito di Edilnordre <ArrowUpRight size={18} />
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-black/5 shadow-lg"
          >
            <div className="aspect-video bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-4">
              <div className="h-full w-full rounded-xl bg-white grid place-items-center">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-emerald-700/80 font-semibold">Brugherio, Via Verdi</p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">La tua nuova casa in una città a misura d'uomo</p>
                  <p className="mt-2 text-gray-600 max-w-md mx-auto">Servizi, trasporti e natura: tutto a portata di mano.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
