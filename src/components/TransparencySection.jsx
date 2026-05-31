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
      'Sabonete neutro',
      'Creme dental e escova',
      'Papel higiênico',
      'Absorventes (ala feminina)',
      'Itens aprovados pela direção da UP',
    ],
  },
  {
    icon: Truck,
    number: '02',
    title: 'Logística',
    subtitle: 'Distribuição coordenada',
    description:
      'Operação logística com suporte institucional, garantindo a entrega segura e documentada nas unidades prisionais participantes.',
    details: [
      'PEM — Penitenciária Estadual de Maringá',
      'CCM — Cadeia de Custódia de Maringá',
      'CPIM — Centro de Prog. e Integração',
      'Transporte documentado',
      'Protocolos de segurança atendidos',
    ],
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Entrega',
    subtitle: 'Visita técnica documentada',
    description:
      'Entrega acompanhada por visita técnica, com registro fotográfico e prestação de contas pública, garantindo total transparência do processo.',
    details: [
      'Visita técnica presencial',
      'Registro fotográfico documentado',
      'Relatório de prestação de contas',
      'Publicação dos resultados',
      'Acompanhamento pós-entrega',
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
    <section
      id="transparencia"
      ref={sectionRef}
      className="section-padding backdrop-blur-md"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-green-cta text-sm font-semibold uppercase tracking-widest mb-3">
            Metodologia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight mb-4">
            Transparência em cada etapa
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: '#64748B' }}>
            Cada fase da intervenção é documentada e auditável, garantindo a
            rastreabilidade completa dos recursos aplicados.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-[2px]">
            <div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(90deg, #009C3B, #D4A843, #009C3B)',
                opacity: 0.3,
              }}
            />
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`animate-on-scroll animate-fade-in-up delay-${(i + 1) * 200} card-elevated relative`}
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-green-cta text-white text-xs font-bold flex items-center justify-center shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-navy-900 flex items-center justify-center mb-5 mt-2">
                  <Icon size={26} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy-900 mb-1">{step.title}</h3>
                <p className="text-sm font-medium text-green-cta mb-3">{step.subtitle}</p>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748B' }}>
                  {step.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                      <CheckCircle size={14} className="text-green-cta mt-0.5 flex-shrink-0" />
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
