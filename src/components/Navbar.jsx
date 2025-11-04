import { useState } from 'react';
import { Menu, X, Home, Building2, MapPin, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Unità', href: '#unita', icon: Building2 },
    { label: 'Vicinanze', href: '#vicinanze', icon: MapPin },
    { label: 'Contatti', href: '#contatti', icon: PhoneCall },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-9 w-9 rounded-md bg-emerald-600 text-white grid place-items-center font-bold group-hover:rotate-6 transition">
              V8
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-gray-900">Verdi 8</p>
              <p className="text-xs text-gray-600">Brugherio</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-700 transition"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
            <a
              href="https://www.edilnordre.it" target="_blank" rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition"
            >
              Agenzia promotrice
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-black/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Apri menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-3 py-2 text-sm font-medium text-gray-800 hover:text-emerald-700"
              >
                <Icon size={18} /> {label}
              </a>
            ))}
            <a
              href="https://www.edilnordre.it" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-3 py-2 text-sm font-semibold text-emerald-700"
            >
              Agenzia promotrice
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
