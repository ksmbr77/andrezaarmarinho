import { Instagram, MessageCircle } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import flyLogo from "@/assets/fly-agency.png";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const Footer = () => {
  const links = [
    { label: "Início", href: "#hero" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Ofertas", href: "#ofertas" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <footer className="border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logoFull} alt="Andreza Armarinho" className="h-10 brightness-0 invert mb-4" />
            <p className="text-muted-foreground text-sm">Sua produção começa aqui! Líder em vendas de produtos para fabricação em Sergipe.</p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="https://instagram.com/andrezaarmarinho" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-whatsapp transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs text-center">© 2026 Andreza Armarinho® — Todos os direitos reservados</p>
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span>Desenvolvido por</span>
            <img src={flyLogo} alt="Fly Agency" className="h-6" />
            <span className="font-semibold">Fly Agency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
