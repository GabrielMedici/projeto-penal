import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="section-padding pb-8"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg border-2 border-dashed border-white/30 flex items-center justify-center">
                <span className="text-white/40 text-[8px] font-medium leading-tight text-center">Logo</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Efeito Rebote
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Projeto acadêmico do 3° Semestre de Direito Noturno, Turma B — UniCesumar.
              Intervenção preventiva no sistema prisional, fundamentada na Lei de Execução
              Penal e em evidências de eficiência administrativa.
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
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-white text-sm transition-colors no-underline"
                >
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
