import { useEffect, useRef } from 'react';
import { BookOpen, Scale, ShieldCheck } from 'lucide-react';

const keyPoints = [
  {
    icon: BookOpen,
    title: 'Lacuna Assistencial',
    text: 'A Lei de Execução Penal (Art. 12) assegura assistência material ao preso. Na prática, a insuficiência de recursos gera um vácuo que potencializa riscos sanitários e compromete a eficiência do sistema.',
  },
  {
    icon: Scale,
    title: 'Visão Criminológica',
    text: 'Estudos demonstram que condições dignas de cumprimento de pena estão diretamente correlacionadas a menores índices de reincidência. A prevenção é, portanto, instrumento de política pública eficaz.',
  },
  {
    icon: ShieldCheck,
    title: 'Inteligência Preventiva',
    text: 'A abordagem preventiva reduz custos emergenciais, melhora indicadores de saúde pública intramuros e otimiza a alocação de recursos do Estado na gestão penitenciária.',
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
    <section
      id="problema"
      ref={sectionRef}
      className="section-padding backdrop-blur-md"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-green-cta text-sm font-semibold uppercase tracking-widest mb-3">
            O Contexto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
            A lacuna na assistência material
            <br />
            <span className="text-navy-700">e o seu custo sistêmico</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg" style={{ color: '#64748B' }}>
            A análise dos dados revela um ciclo previsível: a falha na assistência material básica gera gastos muito maiores para o bolso do cidadão.
          </p>
        </div>

        {/* Grid: Points + Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Key Points - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {keyPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={point.title}
                  className={`animate-on-scroll animate-fade-in-up delay-${(i + 1) * 100} card-elevated flex gap-5 items-start`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-cta/10 flex items-center justify-center">
                    <Icon size={22} className="text-green-cta" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{point.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                      {point.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quote - 2 columns */}
          <div className="lg:col-span-2 animate-on-scroll animate-slide-in-right delay-300">
            <div className="quote-block mb-6">
              <p className="text-base leading-relaxed mb-4">
                "A assistência material ao preso e ao internado consistirá no fornecimento
                de alimentação, vestuário e <strong>instalações higiênicas</strong>."
              </p>
              <footer className="text-sm font-semibold text-navy-700 not-italic">
                — Lei nº 7.210/84 (LEP), Art. 12
              </footer>
            </div>

            <div className="quote-block" style={{ borderLeftColor: '#D4A843', backgroundColor: '#FDF8EE' }}>
              <p className="text-base leading-relaxed mb-4">
                "A assistência à saúde do preso e do internado, de caráter preventivo e
                curativo, compreenderá <strong>atendimento médico, farmacêutico e odontológico</strong>."
              </p>
              <footer className="text-sm font-semibold text-navy-700 not-italic">
                — Lei nº 7.210/84 (LEP), Art. 14
              </footer>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-navy-900 text-white">
              <p className="text-xs uppercase tracking-widest text-slate-300 mb-1">Dados do DEPEN (2023)</p>
              <p className="text-sm leading-relaxed text-slate-200">
                O déficit de vagas no sistema prisional brasileiro supera <strong className="text-white">200 mil</strong>.
                A superlotação agrava exponencialmente os custos com saúde emergencial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
