import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Shield className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            Black<span className="text-primary">NAT</span> Security
          </span>
        </a>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BlackNAT Security. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
