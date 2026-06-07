import { useEffect, useRef } from 'react';
import { Heart, Users, TrendingDown, CheckCircle } from 'lucide-react';

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
    <section id="familia" ref={sectionRef} className="py-24 bg-white relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-navy-800 text-sm font-semibold uppercase tracking-widest mb-3">
            Amparo Familiar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
            A Conta Invisível das <span className="text-gold-accent">Famílias</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Sem o mínimo existencial garantido pelo Estado, o ônus financeiro
            é brutalmente transferido para as famílias — em sua maioria, mães 
            e esposas em situação de extrema vulnerabilidade.
          </p>
        </div>

        {/* Flat Icons and Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center animate-on-scroll animate-fade-in-up">
            <div className="w-16 h-16 rounded-full bg-navy-900/5 text-navy-900 flex items-center justify-center mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2 justify-center w-full">
              <CheckCircle size={18} className="text-gold-accent" />
              Proteção de Vínculos
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              O kit previne o rompimento dos laços familiares, garantindo que o tempo de visita seja focado no afeto, e não na miséria material.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center animate-on-scroll animate-fade-in-up delay-100">
            <div className="w-16 h-16 rounded-full bg-navy-900/5 text-navy-900 flex items-center justify-center mb-6">
              <TrendingDown size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2 justify-center w-full">
              <CheckCircle size={18} className="text-gold-accent" />
              Redução do Ônus
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              A intervenção elimina a necessidade de endividamento familiar para sustentar itens básicos que já são de responsabilidade do Estado.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center animate-on-scroll animate-fade-in-up delay-200">
            <div className="w-16 h-16 rounded-full bg-navy-900/5 text-navy-900 flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2 justify-center w-full">
              <CheckCircle size={18} className="text-gold-accent" />
              Dignidade Restaurada
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              A saúde preventiva e a higiene básica devolvem a dignidade humana fundamental, pavimentando o caminho real para a ressocialização.
            </p>
          </div>
        </div>

        {/* Legal Foundation Quote */}
        <div className="mt-16 max-w-3xl mx-auto animate-on-scroll animate-fade-in-up delay-300">
          <div className="blockquote-styled text-center !rounded-xl !border-l-0 !border-t-4">
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
    </section>
  );
}
