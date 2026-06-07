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
    <section id="problema" ref={sectionRef} className="py-24 bg-slate-950 relative">
      <div className="section-container px-6">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-gold-accent text-sm font-bold uppercase tracking-widest mb-3 glow-amber-text">
            O Contexto
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            A lacuna na assistência material
            <br />
            <span className="text-slate-400">e o seu custo sistêmico</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg font-medium">
            A análise dos dados revela um ciclo previsível: a falha na assistência material básica gera gastos muito maiores para o bolso do cidadão.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Main Massive Card (Spans 2 columns) */}
          <div className="obsidian-card md:col-span-2 p-10 flex flex-col justify-between animate-on-scroll animate-fade-in-up">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center mb-8">
              <Activity size={26} className="text-gold-accent" />
            </div>
            <div>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-gold-accent mb-4 glow-amber-text break-words">166x</div>
              <h3 className="text-2xl font-bold text-white mb-3">Omissão Estatal</h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                A falha estrutural no fornecimento do mínimo existencial cria um ciclo vicioso, exigindo intervenções reativas de alto custo a médio e longo prazo.
              </p>
            </div>
          </div>

          {/* Secondary Tall Card */}
          <div className="obsidian-card p-10 flex flex-col justify-between animate-on-scroll animate-fade-in-up delay-100">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-burgundy-cta/20 border border-burgundy-cta/30 flex items-center justify-center mb-8">
              <ShieldAlert size={26} className="text-burgundy-cta" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">A Lacuna Assistencial</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                A ausência de assistência material adequada aos apenados, especialmente no que tange ao fornecimento de itens básicos de higiene, desencadeia o chamado efeito rebote na execução penal.
              </p>
            </div>
          </div>

          {/* Bottom Card 1 */}
          <div className="obsidian-card p-10 flex flex-col justify-between animate-on-scroll animate-fade-in-up delay-200">
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center mb-8">
              <Briefcase size={26} className="text-gold-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Inteligência Preventiva</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                A aquisição preventiva de kits básicos de higiene é irrisória quando confrontada com o ônus da gestão de crises com saúde e escoltas externas.
              </p>
            </div>
          </div>

          {/* Bottom Card 2 (Massive Number 200 mil) */}
          <div className="obsidian-card md:col-span-2 p-10 flex flex-col sm:flex-row gap-8 justify-between items-center animate-on-scroll animate-fade-in-up delay-300">
            <div className="flex-1">
              <p className="text-sm font-bold uppercase tracking-widest text-gold-accent mb-2">Déficit Estrutural</p>
              <h3 className="text-xl font-bold text-white mb-3">Superlotação e Degradação</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                A superlotação e a insuficiência orçamentária frequentemente convertem a privação de liberdade em degradação sanitária.
              </p>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-burgundy-cta mb-2 drop-shadow-[0_0_15px_rgba(139,28,49,0.5)] break-words">+200k</div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Déficit de Vagas</div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
