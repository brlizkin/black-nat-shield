import { Shield, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Scan line effect */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-mono text-primary mb-8">
          <Shield className="h-3.5 w-3.5" />
          <span>Managed Security Services Provider</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Consultoria de Segurança
          <br />
          <span className="text-primary text-glow">para seu Negócio</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
          Consultoria especializada em segurança da informação para ambientes SMB.
          Protegemos seu perímetro, endpoints e políticas com inteligência e automação.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:border-glow-strong hover:brightness-110"
          >
            Solicitar Avaliação
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:text-primary"
          >
            Nossos Serviços
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "500+", label: "Endpoints Protegidos" },
            { value: "99.9%", label: "Uptime SLA" },
            { value: "<1h", label: "Tempo de Resposta" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary font-mono">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
