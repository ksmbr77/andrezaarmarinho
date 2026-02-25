import { Instagram, MessageCircle } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import flyLogo from "@/assets/fly-agency.png";

const WHATSAPP_LINK = "https://wa.me/5579999999999?text=Olá Andreza Armarinho! Vim pelo site e gostaria de mais informações.";

const Footer = () => {
  const links = [
    { label: "Início", href: "#hero" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="border-t border-border/20">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-16">
          <div className="max-w-xs">
            <img src={logoFull} alt="Andreza Armarinho" className="h-10 mb-5" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sua produção começa aqui. Líder em vendas de produtos para fabricação em Sergipe.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-5">Navegação</p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-foreground/50 hover:text-foreground transition-colors duration-300 text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-5">Social</p>
              <div className="flex gap-3">
                <a href="https://instagram.com/andrezaarmarinho" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                  <Instagram size={16} className="text-muted-foreground" />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                  <MessageCircle size={16} className="text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/40 text-xs">© 2026 Andreza Armarinho® — Todos os direitos reservados</p>
          <div className="flex items-center gap-2 text-muted-foreground/40 text-xs">
            <span>Desenvolvido por</span>
            <img src={flyLogo} alt="Fly Agency" className="h-5 opacity-40" />
            <span className="font-medium">Fly Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
