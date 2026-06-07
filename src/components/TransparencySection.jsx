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
  {
    icon: ClipboardCheck,
    number: '04',
    title: 'Auditoria Acadêmica',
    subtitle: 'Rastreabilidade total',
    description:
      'Validação de todo o processo pelo corpo docente, assegurando que os recursos aplicados tiveram o impacto previsto.',
    details: [
      'Documentação comprobatória',
      'Certificação pelo corpo docente',
      'Relatório final de impacto social',
      'Publicização dos resultados',
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
    <section id="transparencia" ref={sectionRef} className="py-24 bg-slate-950 relative border-t border-amber-500/10">
      <div className="section-container px-6">
        {/* Section header */}
        <div className="text-center mb-20 animate-on-scroll animate-fade-in-up">
          <span className="inline-block text-gold-accent text-sm font-bold uppercase tracking-widest mb-3 glow-amber-text">
            Transparência
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Metodologia <span className="text-slate-400">&</span> Logística
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`obsidian-card p-8 animate-on-scroll animate-fade-in-up delay-${(index + 1) * 100}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gold-accent/10 border border-gold-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-gold-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                      {step.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {step.description}
                </p>

                <ul className="space-y-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle size={16} className="text-gold-accent" />
                      </div>
                      <span className="text-sm font-medium text-slate-300 leading-snug">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          
          {/* Academic closing */}
          <div className="obsidian-card p-8 animate-on-scroll animate-fade-in-up delay-400 md:col-span-2">
            <h3 className="text-2xl font-bold mb-3 text-white">Metodologia auditável e replicável</h3>
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
