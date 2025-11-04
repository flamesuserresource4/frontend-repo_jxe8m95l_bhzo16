import { useState } from 'react';
import { Share2, Send } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', messaggio: '' });

  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Info Verdi 8 – richiesta da ${form.nome || 'interessato'}`);
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nTelefono: ${form.telefono}\n\nMessaggio:\n${form.messaggio}`
    );
    window.location.href = `mailto:info@edilnordre.it?subject=${subject}&body=${body}`;
  }

  async function share() {
    const shareData = {
      title: 'Verdi 8 – Brugherio',
      text: 'Scopri Verdi 8 a Brugherio: 5 unità dal design contemporaneo. #Verdi8 #Brugherio',
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (_) {}
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copiato!');
      } catch (_) {
        // no-op
      }
    }
  }

  return (
    <section id="contatti" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                alt="Contatta l'agenzia"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-2xl font-bold">Parliamo del tuo nuovo spazio</p>
                <p className="text-white/90">Brochure, planimetrie, visita in cantiere.</p>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Contattaci</h2>
              <p className="mt-3 text-gray-700">Scrivici per ricevere informazioni, disponibilità e prezzi.</p>

              <form onSubmit={submit} className="mt-8 grid gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Nome e cognome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Telefono"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <textarea
                  rows={5}
                  placeholder="Messaggio"
                  value={form.messaggio}
                  onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <div className="flex flex-wrap gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition">
                    <Send size={18} /> Invia richiesta
                  </button>
                  <button type="button" onClick={share} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 transition">
                    <Share2 size={18} /> Condividi
                  </button>
                </div>

                <p className="mt-4 text-xs text-gray-500">Condividi il progetto con l'hashtag <span className="font-semibold text-gray-700">#Verdi8</span> e tagga l'agenzia per essere ricondiviso.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
