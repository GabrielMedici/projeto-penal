import { BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-pattern"
    >
      <div className="section-container w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            {/* Tag */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-900/5 border border-navy-900/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-accent animate-[pulse-soft_2s_ease-in-out_infinite]" />
              <span className="text-navy-800 text-xs font-bold uppercase tracking-widest">
                3° Semestre · Direito Noturno, Turma B · UniCesumar
              </span>
            </div>

            {/* Title & Logo */}
            <div className="flex flex-row items-center gap-6 mb-6">
              <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 leading-[1.05] tracking-tight shrink-0">
                EFEITO
                <br />
                <span className="text-burgundy-cta">REBOTE</span>
              </h1>
              <div className="animate-fade-in-up delay-200">
                <img 
                  src="/images/logo_efeito_rebote.png" 
                  alt="Logo Efeito Rebote" 
                  className="w-40 md:w-64 lg:w-72 h-auto drop-shadow-2xl" 
                />
              </div>
            </div>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-200 text-xl md:text-2xl text-burgundy-cta font-semibold leading-snug max-w-xl mb-6">
              Como a falta do mínimo existencial no cárcere financia facções e pune as famílias.
            </p>
            <p className="animate-fade-in-up delay-300 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mb-10">
              Inteligência preventiva aplicada ao sistema prisional: quando{' '}
              <strong className="text-navy-900">R$&nbsp;30 a R$&nbsp;45 em higiene</strong> evitam{' '}
              <strong className="text-burgundy-cta">R$&nbsp;5.000 em crises de saúde pública</strong>.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4">
              <a href="#problema" className="btn-cta bg-navy-900 text-white hover:bg-navy-800 shadow-xl border-none">
                <BookOpen size={18} />
                Conheça a Pesquisa
              </a>
            </div>
          </div>

          {/* Right Column: Cards Modernos em vez de fotos */}
          <div className="animate-fade-in-up delay-500 relative grid grid-cols-1 sm:grid-cols-2 gap-6 self-center">
            <div className="card-elevated flex flex-col justify-center text-center p-8 bg-white border-l-4 border-gold-accent">
              <div className="text-5xl font-extrabold text-navy-900 mb-3">~166x</div>
              <div className="text-sm font-medium text-slate-600 leading-snug">
                Mais eficiente que agir apenas na crise estatal
              </div>
            </div>

            <div className="card-elevated flex flex-col justify-center text-center p-8 bg-white border-l-4 border-navy-800 mt-0 sm:mt-12">
              <div className="text-5xl font-extrabold text-navy-900 mb-3">LEP</div>
              <div className="text-sm font-medium text-slate-600 leading-snug">
                Fundamentação Legal rigorosa nos Arts. 12 a 14
              </div>
            </div>

            <div className="card-elevated flex flex-col justify-center text-center p-8 bg-white border-l-4 border-burgundy-cta sm:col-span-2 mx-0 sm:mx-8 mt-0 sm:-mt-6">
              <div className="text-5xl font-extrabold text-burgundy-cta mb-3">3</div>
              <div className="text-sm font-medium text-slate-600 leading-snug">
                Unidades prisionais abrangidas pelo projeto
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
