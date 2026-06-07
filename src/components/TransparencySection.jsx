import { useEffect, useRef } from 'react';
import { ClipboardCheck, Truck, ShieldCheck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Triagem',
    subtitle: 'Seleção dos itens permitidos',
    description:
      'Levantamento criterioso dos itens de higiene pessoal autorizados pela administração penitenciária, em conformidade com as normativas de segurança vigentes.',
    details: [
      'Aparelho de barbear descartável (duas lâminas)',
      'Escova dental simples',
      'Creme dental branco (limite de 100g)',
      'Detergente (acondicionado em frasco transparente)',
    ],
  },
  {
    icon: Truck,
    number: '02',
    title: 'Logística',
    subtitle: 'Distribuição coordenada',
    description:
      'Translado das doações até a PEM, CCM e CPIM utilizando veículos oficiais da universidade.',
    details: [
      'PEM — Penitenciária Estadual de Maringá',
      'CCM — Cadeia de Custódia de Maringá',
      'CPIM — Centro de Prog. e Integração',
      'Veículos oficiais universitários',
    ],
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Entrega',
    subtitle: 'Visita técnica documentada',
    description:
      'Prestação de contas contendo o registro fotográfico e o quantitativo exato arrecadado, superando a meta de 8.000 itens.',
    details: [
      'Visita técnica presencial',
      'Registro fotográfico documentado',
      'Prestação de contas detalhada',
      'Mais de 8.000 itens arrecadados',
    ],
  },
];

export default function TransparencySection() {
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
    <section id="transparencia" ref={sectionRef} className="py-24 bg-navy-900 relative">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-gold-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Transparência em cada etapa
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Cada fase da intervenção é documentada e auditável, garantindo a
            rastreabilidade completa dos recursos aplicados.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16.67%] right-[16.67%] h-[2px]">
            <div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #D4A843, transparent)',
                opacity: 0.3,
              }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`animate-on-scroll animate-fade-in-up delay-${(i + 1) * 200} bg-navy-800 rounded-2xl p-8 border border-white/5 shadow-xl relative z-10`}
              >
                {/* Icon in place of number */}
                <div className="w-16 h-16 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-gold-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-1 text-center">{step.title}</h3>
                <p className="text-sm font-medium text-gold-accent mb-4 text-center">{step.subtitle}</p>
                <p className="text-sm leading-relaxed mb-6 text-slate-300 text-center">
                  {step.description}
                </p>

                {/* Details list */}
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle size={16} className="text-gold-accent flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Academic closing */}
        <div className="animate-on-scroll animate-fade-in-up delay-600 text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-navy-900 text-white max-w-2xl">
            <h3 className="text-2xl font-bold mb-3">Metodologia auditável e replicável</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              Todo o processo é documentado com registros fotográficos, relatórios de prestação
              de contas e acompanhamento pós-entrega — garantindo transparência total e
              possibilidade de replicação em outras unidades prisionais do país.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
