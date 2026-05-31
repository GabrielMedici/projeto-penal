import { useEffect, useRef } from 'react';
import { Heart, Users, ShieldCheck } from 'lucide-react';

export default function FamilySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="familia"
      ref={sectionRef}
      className="section-padding backdrop-blur-md"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-green-cta text-sm font-semibold uppercase tracking-widest mb-3">
            Amparo Familiar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
            A pena que cruza os muros
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#64748B' }}>
            O impacto da privação de liberdade se estende muito além do indivíduo encarcerado,
            atingindo diretamente os vínculos familiares e a estrutura social.
          </p>
        </div>

        {/* Grid: Image + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll animate-slide-in-left delay-200">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-auto object-cover pointer-events-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/images/sofrimento.mp4" type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gold-accent/10 border border-gold-accent/20 -z-10 hidden lg:block" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-green-cta/10 border border-green-cta/20 -z-10 hidden lg:block" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll animate-slide-in-right delay-300">
            <div className="space-y-6">
              <p className="text-base leading-relaxed" style={{ color: '#475569' }}>
                Quando um indivíduo é privado de sua liberdade, sua família enfrenta uma série
                de consequências que ultrapassam o âmbito jurídico. A manutenção dos <strong className="text-navy-900">vínculos
                familiares</strong> é reconhecida pela LEP como instrumento essencial de ressocialização.
              </p>

              <p className="text-base leading-relaxed" style={{ color: '#475569' }}>
                O fornecimento de itens básicos de higiene não apenas preserva a dignidade do
                interno, mas também <strong className="text-navy-900">reduz a carga financeira sobre as famílias</strong>, que
                frequentemente comprometem parte significativa de sua renda para suprir essas
                necessidades dentro das unidades prisionais.
              </p>

              {/* Impact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-green-cta-light text-center">
                  <Heart size={24} className="text-green-cta mx-auto mb-2" />
                  <p className="text-xs font-semibold text-navy-900">Proteção de Vínculos</p>
                </div>
                <div className="p-4 rounded-xl text-center" style={{ backgroundColor: '#F5EDD4' }}>
                  <Users size={24} className="mx-auto mb-2" style={{ color: '#D4A843' }} />
                  <p className="text-xs font-semibold text-navy-900">Redução do Ônus Familiar</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-100 text-center">
                  <ShieldCheck size={24} className="text-navy-700 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-navy-900">Dignidade no Cumprimento</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="quote-block mt-8">
              <p className="text-base leading-relaxed mb-3">
                "Constituem direitos do preso: [...] <strong>visita do cônjuge, da companheira,
                de parentes e amigos</strong> em dias determinados."
              </p>
              <footer className="text-sm font-semibold text-navy-700 not-italic">
                — Lei nº 7.210/84 (LEP), Art. 41, inciso X
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
