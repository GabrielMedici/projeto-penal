import { useEffect, useRef } from 'react';
import { BookOpen, Scale, ShieldCheck, ShieldAlert, Activity, Briefcase } from 'lucide-react';

const keyPoints = [
  {
    icon: ShieldAlert,
    title: 'A Lacuna Assistencial',
    text: 'A ausência de assistência material adequada aos apenados, especialmente no que tange ao fornecimento de itens básicos de higiene, desencadeia o chamado efeito rebote na execução penal.',
  },
  {
    icon: Activity,
    title: 'Omissão Estatal',
    text: 'A falha estrutural no fornecimento do mínimo existencial cria um ciclo vicioso, exigindo intervenções reativas de alto custo a médio e longo prazo.',
  },
  {
    icon: Briefcase,
    title: 'Inteligência Preventiva',
    text: 'A aquisição preventiva de kits básicos de higiene é irrisória quando confrontada com o ônus da gestão de crises com saúde e escoltas externas.',
  },
];

export default function ProblemSection() {
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
    <section id="problema" ref={sectionRef} className="py-24 bg-white relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-burgundy-cta text-sm font-semibold uppercase tracking-widest mb-3">
            O Contexto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
            A lacuna na assistência material
            <br />
            <span className="text-navy-700">e o seu custo sistêmico</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A análise dos dados revela um ciclo previsível: a falha na assistência material básica gera gastos muito maiores para o bolso do cidadão.
          </p>
        </div>

        {/* Grid: Points */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {keyPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className={`animate-on-scroll animate-fade-in-up delay-${(i + 1) * 100} card-elevated p-8 flex flex-col gap-5`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-burgundy-cta/10 flex items-center justify-center">
                  <Icon size={22} className="text-burgundy-cta" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{point.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legal Foundation */}
        <div className="animate-on-scroll animate-fade-in-up delay-400">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center justify-center gap-3">
            <Scale className="text-burgundy-cta" size={28} />
            Fundamentação Legal (LEP)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border-l-4 border-navy-800 bg-white shadow-md rounded-r-xl">
              <p className="font-semibold text-navy-900 mb-2">Artigo 12</p>
              <p className="text-sm text-slate-600">
                "A assistência material ao preso e ao internado consistirá no fornecimento de alimentação, 
                vestuário e <strong>instalações higiênicas</strong>."
              </p>
            </div>

            <div className="p-6 border-l-4 border-navy-800 bg-white shadow-md rounded-r-xl">
              <p className="font-semibold text-navy-900 mb-2">Artigo 14</p>
              <p className="text-sm text-slate-600">
                "A assistência à saúde do preso e do internado, de caráter preventivo e 
                curativo, compreenderá <strong>atendimento médico, farmacêutico e odontológico</strong>."
              </p>
            </div>
            
            <div className="mt-6 p-6 rounded-xl bg-navy-900 text-white shadow-xl md:col-span-2">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-accent mb-2">Déficit Estrutural</p>
              <p className="text-sm leading-relaxed text-slate-200">
                O Brasil possui um déficit que supera <strong className="text-white">200 mil postos</strong>. 
                A superlotação e a insuficiência orçamentária frequentemente convertem a privação de liberdade 
                em degradação sanitária.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
