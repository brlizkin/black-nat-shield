import { Zap, Eye, Users, TrendingUp } from "lucide-react";

const differentials = [
  {
    icon: Eye,
    title: "Visibilidade Total",
    description: "Dashboard centralizado com visão 360° do seu ambiente de segurança em tempo real.",
  },
  {
    icon: Zap,
    title: "Resposta Rápida",
    description: "SLA agressivo com tempo de resposta inferior a 1 hora para incidentes críticos.",
  },
  {
    icon: Users,
    title: "Foco em SMB",
    description: "Soluções dimensionadas e acessíveis para pequenas e médias empresas, sem complexidade desnecessária.",
  },
  {
    icon: TrendingUp,
    title: "Melhoria Contínua",
    description: "Relatórios mensais com métricas, recomendações e roadmap de maturidade de segurança.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="diferenciais" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Por que a <span className="text-primary text-glow">BlackNAT</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Combinamos expertise ofensiva com operações defensivas para entregar segurança real e mensurável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {differentials.map((item, i) => (
            <div key={item.title} className="flex gap-4 items-start">
              <div className="flex-shrink-0 rounded-md border border-primary/20 bg-primary/5 p-3">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
