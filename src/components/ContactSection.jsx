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
      text: 'Scopri il nuovo progetto residenziale Verdi 8 a Brugherio: 5 unità moderne ed efficienti.',
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Contattaci</h2>
            <p className="mt-4 text-gray-700">Vuoi una brochure, una planimetria dettagliata o prenotare una visita al cantiere? Scrivici e ti risponderemo rapidamente.</p>

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
            </form>
          </div>

          <div className="rounded-2xl border border-black/5 overflow-hidden shadow-sm bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900">Perché scegliere Verdi 8</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>• Classe energetica A4 e impianti ad alta efficienza</li>
                <li>• Materiali di qualità e design contemporaneo</li>
                <li>• Spazi pensati per la vita quotidiana: luce, silenzio, comfort</li>
                <li>• Contesto servito: trasporti, scuole, servizi e verde</li>
              </ul>
            </div>
            <div className="bg-emerald-700 text-white p-6">
              <p className="font-semibold">Promotore commerciale</p>
              <a href="https://www.edilnordre.it" target="_blank" rel="noreferrer" className="underline underline-offset-4">
                www.edilnordre.it
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
