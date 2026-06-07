import { BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Cinematic Breathing Background */}
      <div className="absolute inset-0 bg-pattern opacity-20 animate-[breathe_8s_ease-in-out_infinite]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 to-slate-950"></div>

      <div className="section-container w-full px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            {/* Tag */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-500/20 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold-accent animate-[pulse-soft_2s_ease-in-out_infinite] shadow-[0_0_10px_#D4AF37]" />
              <span className="text-amber-500/90 text-xs font-bold uppercase tracking-widest">
                3° Semestre · Direito Noturno, Turma B · UniCesumar
              </span>
            </div>

            {/* Title */}
            <div className="flex flex-col mb-6">
              <h1 className="animate-fade-in-up delay-100 text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight shrink-0">
                EFEITO
                <br />
                <span className="text-gold-accent glow-amber-text">REBOTE</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-200 text-xl md:text-2xl text-slate-200 font-bold leading-snug max-w-xl mb-6">
              O Custo da Reincidência e a Falha na Assistência Material.
            </p>
            <p className="animate-fade-in-up delay-300 text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-xl mb-10">
              Um fenômeno que eleva os problemas sanitários no cárcere, sobrecarrega financeiramente as famílias e gera custos públicos infinitamente superiores aos investimentos preventivos necessários.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4">
              <a href="#problema" className="btn-cta-amber px-8 py-4 rounded-full flex items-center gap-3 font-bold uppercase tracking-wide text-sm">
                <BookOpen size={18} />
                Conheça o Projeto
              </a>
            </div>
          </div>

          {/* Right Column: Visual Component */}
          <div className="animate-fade-in-up delay-500 relative flex justify-center items-center w-full aspect-square max-w-[28rem] mx-auto">
            {/* Glowing Rings behind logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-accent/15 rounded-full blur-[80px] animate-pulse pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-amber-500/30 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-amber-500/10 rounded-full animate-[spin_30s_linear_reverse_infinite] pointer-events-none"></div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
              {/* White Backplate Shield - Reduzido drasticamente para caber apenas no gráfico da logo */}
              <div className="absolute w-[45%] aspect-square bg-white rounded-full z-0 shadow-inner scale-125"></div>
              <img 
                src="/images/logo_efeito_rebote.png" 
                alt="Logo Efeito Rebote" 
                className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.4)] scale-[1.35] relative z-10" 
              />
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
