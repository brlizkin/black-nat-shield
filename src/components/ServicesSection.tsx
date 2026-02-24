import { ShieldCheck, Search, Monitor, Lock, ServerCrash, FileSearch } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Healthcheck de Segurança",
    description: "Avaliação completa do seu ambiente de TI, identificando vulnerabilidades e gaps de conformidade com frameworks reconhecidos.",
  },
  {
    icon: Monitor,
    title: "Proteção de Endpoints",
    description: "Gerenciamento e monitoramento contínuo de endpoints com EDR/XDR, resposta a incidentes e políticas de proteção avançadas.",
  },
  {
    icon: Search,
    title: "Análise de Vulnerabilidades",
    description: "Varreduras automatizadas e manuais para identificar e priorizar vulnerabilidades críticas no seu ambiente.",
  },
  {
    icon: ServerCrash,
    title: "Testes de Intrusão",
    description: "Simulações de ataque automatizadas e manuais para validar a resiliência do seu perímetro e aplicações.",
  },
  {
    icon: Lock,
    title: "Segurança de Perímetro",
    description: "Gestão de firewalls, VPNs, segmentação de rede e políticas de acesso para blindar o perímetro da sua organização.",
  },
  {
    icon: FileSearch,
    title: "Treinamento e Conscientização",
    description: "Capacitação de equipes com simulações de phishing, treinamentos práticos de segurança e campanhas de conscientização para reduzir o risco humano e fortalecer a primeira linha de defesa da sua organização.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-primary tracking-widest uppercase">Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Proteção <span className="text-primary">End-to-End</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Serviços recorrentes de segurança que cobrem desde a avaliação inicial até a proteção contínua do seu ambiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group gradient-card rounded-lg border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:border-glow"
            >
              <div className="inline-flex items-center justify-center rounded-md bg-primary/10 p-3 mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
