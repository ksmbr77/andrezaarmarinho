import { Instagram, MessageCircle } from "lucide-react";
import logoFull from "@/assets/logo-full.png";
import flyLogo from "@/assets/fly-agency.png";

const WHATSAPP_LINK = "https://wa.me/5579996373312?text=Olá Andreza Armarinho! Vim pelo site e gostaria de mais informações.";

const Footer = () => {
  const links = [
    { label: "Início", href: "#hero" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20">
        <div className="flex flex-col items-center text-center md:items-start md:text-left md:flex-row md:justify-between gap-8 sm:gap-10 mb-10 sm:mb-16">
          <div className="max-w-xs">
            <img src={logoFull} alt="Andreza Armarinho" className="h-14 sm:h-16 md:h-20 mb-4 sm:mb-5 mx-auto md:mx-0 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
              Sua produção começa aqui. Líder em vendas de produtos para fabricação em Sergipe.
            </p>
          </div>

          <div className="flex gap-8 sm:gap-16">
            <div>
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-primary-foreground/50 mb-4 sm:mb-5">Navegação</p>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 text-xs sm:text-sm">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-primary-foreground/50 mb-4 sm:mb-5">Social</p>
              <div className="flex gap-3">
                <a href="https://instagram.com/andrezaarmarinho" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all duration-300">
                  <Instagram size={14} className="text-primary-foreground/80 sm:w-4 sm:h-4" />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-primary-foreground/30 flex items-center justify-center hover:border-primary-foreground/60 hover:bg-primary-foreground/10 transition-all duration-300">
                  <MessageCircle size={14} className="text-primary-foreground/80 sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-5 sm:pt-8 flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
          <p className="text-primary-foreground/50 text-[10px] sm:text-xs">© 2026 Andreza Armarinho® — Todos os direitos reservados</p>
          <a href="https://www.instagram.com/fly.agencyy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-all duration-300">
            <span className="text-[10px] sm:text-sm">Desenvolvido por</span>
            <img src={flyLogo} alt="Fly Agency" className="h-7 sm:h-10 md:h-12" />
            <span className="font-bold text-[10px] sm:text-sm md:text-base">Fly Agency</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
