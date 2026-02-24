import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-surface">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Black<span className="text-primary">NAT</span> Security
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-glow"
        >
          Fale Conosco
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-surface border-t border-border px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#servicos" className="text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Serviços</a>
          <a href="#diferenciais" className="text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Diferenciais</a>
          <a href="#contato" className="text-muted-foreground hover:text-primary" onClick={() => setOpen(false)}>Contato</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
