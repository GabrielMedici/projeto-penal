import { useEffect, useRef, useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';

function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="counter-value">
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
}

const comparisonData = [
  {
    indicator: 'Custo por interno/mês',
    prevention: 'R$ 30 a R$ 45',
    reactive: 'R$ 5.000+',
    source: 'Levantamento de mercado local (Maringá/PR, 2024)',
  },
  {
    indicator: 'Tipo de intervenção',
    prevention: 'Preventiva',
    reactive: 'Apenas na crise',
    source: 'Classificação conforme Art. 14, LEP (Lei 7.210/84)',
  },
  {
    indicator: 'Impacto no SUS',
    prevention: 'Mínimo',
    reactive: 'Alto (escoltas, internações)',
    source: 'MS/DataSUS — Internações por doenças infecciosas em pop. carcerária (2022)',
  },
  {
    indicator: 'Eficiência administrativa',
    prevention: 'Alta — planejável',
    reactive: 'Baixa — só na crise',
    source: 'Relatório de Gestão CNJ/DMF (2022)',
  },
  {
    indicator: 'Retorno sobre investimento',
    prevention: '~110x a 166x',
    reactive: 'Custo irrecuperável',
    source: 'Cálculo: R$ 5.000 ÷ R$ 30–45 = 111–166x (estimativa projetada)',
  },
];

export default function CostSection() {
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
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="custos"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-green-cta text-sm font-semibold uppercase tracking-widest mb-3">
            Dados & Evidências
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            A Matemática da Prevenção
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comparativo entre o custo da intervenção preventiva e o custo de
            agir apenas na crise no sistema de saúde pública.
          </p>
        </div>

        {/* Counters */}
        <div className="animate-on-scroll animate-fade-in-up delay-200 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="counter-value">R$ 30–45</div>
            <p className="text-slate-300 text-sm mt-2">Custo preventivo mensal<br />por interno</p>
            <p className="text-slate-300/50 text-xs mt-2 italic">Levantamento de mercado — Maringá/PR, 2024</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
            <AnimatedCounter target={5000} prefix="R$ " suffix="+" />
            <p className="text-slate-300 text-sm mt-2">Custo de agir na crise<br />(SUS + escoltas)</p>
            <p className="text-slate-300/50 text-xs mt-2 italic">DEPEN/INFOPEN 2023 + MS/DataSUS</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
            <div className="counter-value">~110–166x</div>
            <p className="text-slate-300 text-sm mt-2">Mais eficiente que<br />agir apenas na crise</p>
            <p className="text-slate-300/50 text-xs mt-2 italic">Razão: R$ 5.000 ÷ R$ 30–45</p>
          </div>
        </div>

        {/* Sources note */}
        <div className="animate-on-scroll animate-fade-in-up delay-300 text-center mb-16">
          <p className="text-xs text-slate-300/40 max-w-2xl mx-auto leading-relaxed">
            Fontes: Levantamento Nacional de Informações Penitenciárias (INFOPEN/DEPEN, 2023); 
            Relatório Justiça em Números (CNJ/DMF, 2022); Sistema de Informações Hospitalares 
            do SUS (SIH/DataSUS, 2022); Pesquisa de preços no comércio local de Maringá/PR (2024).
          </p>
        </div>

        {/* Layout: Image centered above, Table full width below */}
        <div className="flex flex-col gap-12 items-center mt-12">
          {/* Image */}
          <div className="w-full max-w-3xl animate-on-scroll animate-slide-in-up delay-200">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/chart_cost_healthcare.png"
                alt="Gráfico demonstrando o crescimento exponencial dos custos de agir apenas na crise em saúde pública"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-slate-300 mt-3 text-center italic">
              Representação conceitual do crescimento exponencial dos custos de agir apenas na crise no sistema prisional.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="w-full animate-on-scroll animate-slide-in-up delay-300">
            <div>
              <table className="comparison-table w-full">
              <thead>
                <tr>
                  <th>Indicador</th>
                  <th>
                    <span className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-300" />
                      Prevenção
                    </span>
                  </th>
                  <th>
                    <span className="flex items-center gap-2">
                      <AlertTriangle size={14} className="text-amber-300" />
                      Agir na crise
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.indicator}>
                    <td data-label="Indicador">
                      <span className="font-medium text-white block">{row.indicator}</span>
                      {row.source && (
                        <span className="text-xs text-slate-300/60 italic block mt-1">{row.source}</span>
                      )}
                    </td>
                    <td data-label="Prevenção">
                      <span className="inline-flex items-center gap-1 text-green-400">
                        <TrendingDown size={14} />
                        {row.prevention}
                      </span>
                    </td>
                    <td data-label="Agir na crise">
                      <span className="inline-flex items-center gap-1 text-amber-400">
                        <TrendingUp size={14} />
                        {row.reactive}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-green-cta/10 border border-green-cta/20">
              <p className="text-sm text-green-300 leading-relaxed">
                <strong>Conclusão:</strong> Cada R$ 1,00 investido em prevenção evita entre
                R$ 110,00 e R$ 166,00 em custos emergenciais de saúde, escoltas e internações do SUS.
              </p>
              <p className="text-xs text-green-300/60 mt-2 italic">
                Cálculo projetado: custo médio de agir apenas na crise (DEPEN/INFOPEN 2023 + MS/DataSUS 2022) ÷ custo preventivo (pesquisa de mercado local, 2024).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
