import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-400 py-12 border-t border-white/5 relative">
      <div className="section-container px-6 flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="mb-6 relative inline-flex justify-center items-center">
          <div className="absolute w-[46%] h-[46%] bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] z-0"></div>
          <img src="/images/logo_efeito_rebote.png" alt="Logo Efeito Rebote" className="h-28 w-auto opacity-95 hover:opacity-100 transition-opacity relative z-10 scale-125" />
        </div>

        {/* Academic Text */}
        <p className="text-sm font-medium leading-relaxed mb-8 max-w-xl">
          Projeto de Extensão: Efeito Rebote.<br/>
          Curso de Direito - 3º Semestre Noturno, Turma B.<br/>
          Centro Universitário Cesumar (UniCesumar) - Maringá/PR - 2026.
        </p>

        {/* Disclaimer */}
        <div className="p-4 bg-white/5 rounded-xl border border-white/10 max-w-3xl mb-12">
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-300">Aviso Legal:</strong> Este site possui caráter exclusivamente acadêmico e institucional,
            desenvolvido no âmbito do projeto de extensão universitária do curso de Direito.
            As informações e doações arrecadadas são destinadas aos fins estritos do projeto.
            Esta iniciativa não possui vínculo político ou subordinação com os órgãos de administração penitenciária.
          </p>
        </div>

        {/* Links & Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Projeto Efeito Rebote. Todos os direitos reservados.
          </p>
        </div>

        <button 
          onClick={scrollToTop}
          className="absolute right-6 top-12 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gold-accent transition-all hover:-translate-y-1"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} />
        </button>

      </div>
    </footer>
  );
}
