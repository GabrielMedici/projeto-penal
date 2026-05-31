import { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'O Problema', href: '#problema' },
  { label: 'Custos', href: '#custos' },
  { label: 'Família', href: '#familia' },
  { label: 'Transparência', href: '#transparencia' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="header"
        className={`glass-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'scrolled' : ''
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-18 px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-underline">
            <div className="w-10 h-10 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center bg-slate-100/50">
              <span className="text-slate-400 text-[8px] font-medium leading-tight text-center">Logo</span>
            </div>
            <span className="text-navy-900 font-bold text-lg tracking-tight">
              Efeito Rebote
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-navy-700 hover:text-navy-900 text-sm font-medium transition-colors duration-200 no-underline relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-green-cta after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div className={`mobile-menu-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center mb-8">
          <span className="text-navy-900 font-bold text-lg">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-navy-800 hover:text-green-cta text-base font-medium py-2 border-b border-slate-100 transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
