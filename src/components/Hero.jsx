import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1600&auto=format&fit=crop"
          alt="Residenze moderne a Brugherio"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/0" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-7"
            >
              <span className="inline-block text-xs tracking-widest uppercase font-semibold text-emerald-200/90 bg-emerald-900/30 backdrop-blur px-3 py-1 rounded-full">Brugherio</span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Verdi 8
                <span className="block text-emerald-200">Abitare bene, oggi</span>
              </h1>
              <p className="mt-6 text-lg text-white/90 max-w-xl">
                5 unità dal design contemporaneo, efficienti e luminose. Spazi pensati per la vita reale, nel cuore di una città con tutto a portata di mano.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#unita"
                  className="px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition shadow-lg shadow-emerald-500/20"
                >
                  Scopri le unità
                </a>
                <a
                  href="#vicinanze"
                  className="px-5 py-3 rounded-md bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition backdrop-blur"
                >
                  La zona di Brugherio
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/> Classe energetica A4</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/> Finiture ricercate</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/> Comfort acustico</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="col-span-12 lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/60 backdrop-blur shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop"
                  alt="Interni eleganti e luminosi"
                  className="w-full h-[320px] object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-700">Materiali di qualità, luce naturale e impianti ad alta efficienza per un benessere quotidiano.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
