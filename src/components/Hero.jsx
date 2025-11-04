import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Verdi 8
              <span className="block text-emerald-700">Bellezza, efficienza, comfort</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">
              Un nuovo intervento residenziale nel cuore di Brugherio: 5 unità abitative moderne ed efficienti, progettate per vivere bene ogni giorno.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#unita"
                className="px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition"
              >
                Scopri le unità
              </a>
              <a
                href="#vicinanze"
                className="px-5 py-3 rounded-md bg-white text-emerald-700 font-semibold border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition"
              >
                La zona di Brugherio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-4 shadow-[0_20px_80px_-20px_rgba(16,185,129,0.4)]">
              <div className="h-full w-full rounded-xl bg-white grid place-items-center overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_40%),_radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.15),transparent_40%)]" />
                  <motion.div
                    className="absolute inset-6 rounded-xl bg-emerald-600/10 border border-emerald-200"
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
                  />
                  <motion.div
                    className="absolute inset-10 rounded-xl bg-emerald-600/10 border border-emerald-200"
                    animate={{ rotate: [0, -3, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-widest text-emerald-700/80 font-semibold">Vista concettuale</p>
                      <p className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">Complesso Verdi 8</p>
                      <p className="mt-2 text-gray-600 max-w-xs mx-auto">
                        Interazione 3D e animazioni leggere per un impatto moderno.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
