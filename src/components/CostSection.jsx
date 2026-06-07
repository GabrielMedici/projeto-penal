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
    <section id="custos" className="py-24 bg-slate-50 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold-accent/5 -skew-x-12 transform origin-top-right"></div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-gold-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Dados & Evidências
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
            A Matemática da <span className="text-gold-accent">Prevenção</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Comparativo financeiro entre prover a assistência material mínima 
            (higiene e saúde preventiva) e o custo de lidar com as crises geradas 
            pela omissão.
          </p>
        </div>

        {/* Infographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Left Card: Prevention */}
          <div className="bg-white border-t-4 border-navy-800 rounded-2xl p-8 shadow-lg flex flex-col justify-between relative overflow-hidden animate-on-scroll animate-fade-in-up">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <TrendingDown size={100} className="text-navy-900" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-navy-800 mb-2 uppercase tracking-wide">Custo Preventivo</h3>
              <p className="text-sm text-slate-500 mb-6">Kit de higiene mensal + medicamentos primários</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-navy-900 mb-2">
                <span className="text-2xl opacity-70 align-top mr-1">R$</span>
                30 a 45
              </div>
              <p className="text-sm font-semibold text-gold-accent">Por interno / mês</p>
            </div>
          </div>

          {/* Center Card: Efficiency */}
          <div className="bg-navy-900 rounded-2xl p-8 shadow-xl flex flex-col justify-center items-center text-center transform scale-105 z-10 animate-on-scroll animate-fade-in-up delay-100">
            <h3 className="text-white/80 font-medium uppercase tracking-widest text-sm mb-4">Eficiência Comprovada</h3>
            <div className="text-5xl lg:text-6xl font-extrabold text-gold-accent mb-4">
              ~166<span className="text-4xl">x</span>
            </div>
            <p className="text-white text-lg font-semibold mb-2">Mais eficiente</p>
            <p className="text-white/60 text-sm">Do que o custo de contenção em saúde pública e escoltas</p>
          </div>

          {/* Right Card: Crisis */}
          <div className="bg-white border-t-4 border-burgundy-cta rounded-2xl p-8 shadow-lg flex flex-col justify-between relative overflow-hidden animate-on-scroll animate-fade-in-up delay-200">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <TrendingUp size={100} className="text-burgundy-cta" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-burgundy-cta mb-2 uppercase tracking-wide">Agir na Crise</h3>
              <p className="text-sm text-slate-500 mb-6">Internação SUS, escolta, surtos de tuberculose/sarna</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-extrabold text-burgundy-cta mb-2">
                <span className="text-2xl opacity-70 align-top mr-1">R$</span>
                5.000<span className="text-3xl">+</span>
              </div>
              <p className="text-sm font-semibold text-burgundy-cta/80">Por evento de crise</p>
            </div>
          </div>
        </div>

        {/* Table replacement - Data Detail below infographic */}
        <div className="mt-12 animate-on-scroll animate-fade-in-up delay-300">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <p className="text-sm text-slate-600 leading-relaxed text-center italic">
              <strong>Metodologia de Cálculo:</strong> Projeção baseada no custo médio de reagir apenas na crise (DEPEN/INFOPEN 2023 + MS/DataSUS 2022) dividido pelo custo preventivo local mensurado pelo projeto (pesquisa de mercado, 2024).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
