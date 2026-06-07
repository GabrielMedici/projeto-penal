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
    <section id="fundamentacao" ref={sectionRef} className="py-24 bg-slate-50 relative">
      <div className="section-container px-6">
        
        {/* LEGAL FOUNDATION HEADER */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-burgundy-cta text-sm font-bold uppercase tracking-widest mb-3">
            Fundamentação Legal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 leading-tight mb-4">
            A Lei de Execução Penal
            <br />
            <span className="text-slate-500 font-bold">(LEP)</span>
          </h2>
        </div>

        {/* LEGAL BLOCKQUOTES (Editorial Style) */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8 mb-24">
          <blockquote className="bg-white p-8 md:p-10 rounded-r-2xl border-l-[8px] border-burgundy-cta shadow-[0_20px_50px_rgba(0,0,0,0.05)] animate-on-scroll animate-fade-in-up">
            <h4 className="text-xl font-bold text-navy-900 mb-3">Artigo 12</h4>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              "A assistência material ao preso e ao internado consistirá no fornecimento de alimentação, vestuário e <strong className="text-burgundy-cta">instalações higiênicas</strong>."
            </p>
          </blockquote>

          <blockquote className="bg-white p-8 md:p-10 rounded-r-2xl border-l-[8px] border-burgundy-cta shadow-[0_20px_50px_rgba(0,0,0,0.05)] animate-on-scroll animate-fade-in-up delay-100">
            <h4 className="text-xl font-bold text-navy-900 mb-3">Artigo 14</h4>
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              "A assistência à saúde do preso e do internado, de caráter preventivo e curativo, compreenderá <strong className="text-burgundy-cta">atendimento médico, farmacêutico e odontológico</strong>."
            </p>
          </blockquote>
        </div>

        {/* FAMILY SECTION HEADER */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-navy-600 text-sm font-bold uppercase tracking-widest mb-3">
            Amparo Familiar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 leading-tight mb-4">
            A Conta Invisível das <span className="text-gold-accent">Famílias</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            O fornecimento sistemático dos materiais de higiene suprime o ônus econômico indevido suportado pelas famílias, viabilizando a manutenção da regularidade das visitas.
          </p>
        </div>

        {/* FLAT ICONS AND HORIZONTAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 flex flex-col items-center text-center animate-on-scroll animate-fade-in-up transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-navy-900/5 text-navy-900 flex items-center justify-center mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2 justify-center w-full">
              <CheckCircle size={18} className="text-gold-accent" />
              Proteção de Vínculos
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              A manutenção dos laços afetivos atua concretamente como fator redutor da reincidência criminal.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 flex flex-col items-center text-center animate-on-scroll animate-fade-in-up delay-100 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-navy-900/5 text-navy-900 flex items-center justify-center mb-6">
              <TrendingDown size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2 justify-center w-full">
              <CheckCircle size={18} className="text-gold-accent" />
              Redução do Ônus
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Elimina a exigência financeira imposta indevidamente às famílias para sustentar o mínimo existencial que é dever do Estado.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 flex flex-col items-center text-center animate-on-scroll animate-fade-in-up delay-200 transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 rounded-full bg-navy-900/5 text-navy-900 flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-3 flex items-center gap-2 justify-center w-full">
              <CheckCircle size={18} className="text-gold-accent" />
              Dignidade Restaurada
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Previne a degradação moral dos detentos e fomenta a responsabilidade cidadã e a reinserção social.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
