import { ArrowRight, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-xl border border-primary/20 gradient-card p-10 md:p-16 text-center overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

          <Shield className="h-10 w-10 text-primary mx-auto mb-6 animate-pulse-neon" />

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para blindar seu ambiente?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-8">
            Agende um bate-papo e descubra como podemos fortalecer
            a segurança do seu negócio de forma simples e acessível.
          </p>

          <a
            href="/contato"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:border-glow-strong hover:brightness-110"
          >
            Agende um Bate-papo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
