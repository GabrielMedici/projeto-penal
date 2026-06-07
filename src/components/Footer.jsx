import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="section-padding pb-8 bg-navy-900"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/logo_efeito_rebote.png" alt="Logo Efeito Rebote" className="h-16 w-auto opacity-90" />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Projeto de Extensão: Efeito Rebote.<br/>
              Curso de Direito - 3º Semestre Noturno, Turma B.<br/>
              Centro Universitário Cesumar (UniCesumar) - Maringá/PR - 2026.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: 'O Problema', href: '#problema' },
                { label: 'Matemática da Prevenção', href: '#custos' },
                { label: 'Amparo Familiar', href: '#familia' },
                { label: 'Transparência', href: '#transparencia' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-gold-accent text-sm transition-colors no-underline flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-gold-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Vínculo Acadêmico
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-2">
              3° Semestre — Direito Noturno, Turma B
            </p>
            <p className="text-sm text-slate-300 leading-relaxed mb-2">
              Centro Universitário Cesumar — UniCesumar
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Maringá — Paraná, Brasil
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Disclaimer */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8">
          <p className="text-xs text-slate-300 leading-relaxed text-center">
            <strong className="text-white">Isenção de responsabilidade:</strong> Este projeto
            tem caráter exclusivamente acadêmico, desenvolvido no âmbito do 3° Semestre
            de Direito Noturno, Turma B da UniCesumar, e não possui vínculo institucional com órgãos
            do sistema penitenciário. Todas as ações são realizadas em conformidade com as
            normativas vigentes e mediante autorização prévia das autoridades competentes.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-300/60">
            © {new Date().getFullYear()} Efeito Rebote — 3° Semestre de Direito Noturno, Turma B · UniCesumar.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-slate-300/60 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Voltar ao topo"
          >
            Voltar ao topo
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
