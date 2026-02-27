import { useState } from "react";
import { ArrowRight, Mail, User, Building2, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Contato = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Preencha todos os campos obrigatórios.", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      toast({ title: "Informe um e-mail válido.", variant: "destructive" });
      return;
    }

    setLoading(true);

    const subject = encodeURIComponent(`Contato via site - ${form.name.trim()}`);
    const body = encodeURIComponent(
      `Nome: ${form.name.trim()}\nEmpresa: ${form.company.trim() || "Não informada"}\nE-mail: ${form.email.trim()}\n\nMensagem:\n${form.message.trim()}`
    );

    window.location.href = `mailto:contato@blacknat.security?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setLoading(false);
      toast({ title: "Seu cliente de e-mail foi aberto!", description: "Envie a mensagem para completar o contato." });
      setForm({ name: "", email: "", company: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-mono text-primary mb-6">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Fale Conosco</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos <span className="text-primary text-glow">conversar</span>?
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Preencha o formulário abaixo e entraremos em contato para entender
              suas necessidades e propor a melhor solução.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="gradient-card rounded-xl border border-border p-8 space-y-6">
            {/* Nome */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                Nome *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                placeholder="Seu nome completo"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                E-mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                maxLength={255}
                placeholder="seu@email.com"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
              />
            </div>

            {/* Empresa */}
            <div className="space-y-2">
              <label htmlFor="company" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                Empresa
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                maxLength={100}
                placeholder="Nome da sua empresa (opcional)"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
              />
            </div>

            {/* Mensagem */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
                rows={5}
                placeholder="Conte-nos sobre suas necessidades de segurança..."
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:border-glow-strong hover:brightness-110 disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Enviar Mensagem"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground mt-6 font-mono">
            contato@blacknat.security
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
