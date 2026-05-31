import { BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 30%, rgba(0, 156, 59, 0.3), transparent 60%)',
          }}
        />
      </div>

      <div className="section-container w-full px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="relative z-10">
            {/* Tag */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-cta animate-[pulse-soft_2s_ease-in-out_infinite]" />
              <span className="text-white/80 text-xs font-medium uppercase tracking-widest">
                3° Semestre · Direito Noturno, Turma B · UniCesumar
              </span>
            </div>

            {/* Title */}
            <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              EFEITO
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #00C853 0%, #009C3B 50%, #D4A843 100%)',
                }}
              >
                REBOTE
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-200 text-xl md:text-2xl text-white font-semibold leading-snug max-w-lg mb-4">
              Como a falta do mínimo existencial no cárcere financia facções e pune as famílias.
            </p>
            <p className="animate-fade-in-up delay-300 text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mb-8">
              Inteligência preventiva aplicada ao sistema prisional: quando{' '}
              <strong className="text-slate-200">R$&nbsp;30 a R$&nbsp;45 em higiene</strong> evitam{' '}
              <strong className="text-slate-200">R$&nbsp;5.000 em crises de saúde pública</strong>.
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4">
              <a href="#problema" className="btn-cta btn-cta-secondary">
                <BookOpen size={18} />
                Conheça a Pesquisa
              </a>
            </div>

            {/* Stats mini */}
            <div className="animate-fade-in-up delay-500 mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">~166x</div>
                <div className="text-sm text-slate-300 mt-2 leading-snug">Mais eficiente que agir apenas na crise</div>
              </div>
              <div className="text-center border-y sm:border-y-0 sm:border-x border-white/15 py-4 sm:py-0 px-0 sm:px-4">
                <div className="text-3xl font-bold text-white">LEP</div>
                <div className="text-sm text-slate-300 mt-2 leading-snug">Fundamentação nos Arts. 12–14</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-slate-300 mt-2 leading-snug">Unidades prisionais beneficiadas</div>
              </div>
            </div>
          </div>

          {/* Hero Mosaic */}
          <div className="animate-fade-in-up delay-300 relative flex items-center justify-center self-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-w-lg w-full">
              {/* Top: A Intervenção (Solution) */}
              <div className="relative">
                <video
                  className="w-full h-56 md:h-64 object-cover pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/images/hero_kit_delivery.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-cta"></span>
                  A Intervenção
                </span>
              </div>

              {/* Divider line */}
              <div className="h-[2px] bg-gradient-to-r from-green-cta via-gold-accent to-green-cta" />

              {/* Bottom: O Impacto (Problem) */}
              <div className="relative">
                <img
                  src="/images/hero_family_suffering.png"
                  alt="Mãe e criança aguardando em ambiente austero — impacto familiar do encarceramento"
                  className="w-full h-56 md:h-64 object-cover animate-pan-zoom"
                  loading="eager"
                />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-white uppercase tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  O Impacto Familiar
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}
