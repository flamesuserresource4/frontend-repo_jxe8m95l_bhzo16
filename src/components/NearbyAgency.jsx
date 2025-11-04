import { motion } from 'framer-motion';
import { Train, Bus, ShoppingBag, Trees, School, Hospital, ArrowUpRight } from 'lucide-react';

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
    <section id="vicinanze" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-black/5 shadow-lg"
          >
            <div className="aspect-[5/3] relative">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1600&auto=format&fit=crop"
                alt="Vivere a Brugherio"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-widest font-semibold">Brugherio</p>
                <p className="mt-1 text-2xl font-bold">Servizi, trasporti e verde a portata di mano</p>
              </div>
            </div>
          </motion.div>

          <div>
            <div className="text-left max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">La città, il tuo ritmo</h2>
              <p className="mt-4 text-gray-700">Una posizione strategica per muoverti facilmente e vivere bene ogni giorno.</p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {nearby.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -6 }}
                  className="rounded-xl bg-white p-5 border border-black/5 shadow-sm hover:shadow-xl transition"
                >
                  <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
                    <Icon size={18} />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1 text-gray-700">{desc}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.edilnordre.it"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
            >
              Agenzia promotrice Edilnordre <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
