import { ArrowDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579996373312?text=Olá Andreza Armarinho! Vim pelo site e gostaria de mais informações.";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Subtle dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_100%_30%/0.4)_90%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="mb-10 animate-hero-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2.5 border border-primary-foreground/40 bg-primary-foreground/15 rounded-lg px-5 py-2.5 text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.15em] text-primary-foreground font-medium backdrop-blur-sm shadow-lg shadow-black/10 animate-pulse-glow">
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
            O Maior Armarinho de Sergipe
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading text-[2.2rem] sm:text-[3rem] md:text-[5rem] lg:text-[5.5rem] font-bold leading-[1.02] mb-8 tracking-[-0.02em] text-primary-foreground animate-hero-fade-in"
          style={{ animationDelay: '0.35s' }}
        >
          Sua Produção
          <br />
          Começa{" "}
          <span className="relative inline-block">
            Aqui
            <span className="absolute -bottom-2 left-[-5%] w-[110%] h-[4px] bg-primary-foreground rounded-full animate-fade-in" style={{ animationDelay: '1s', boxShadow: '0 0 12px hsl(0 0% 100% / 0.3)' }} />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-primary-foreground/80 text-sm sm:text-base md:text-xl max-w-lg mx-auto mb-6 leading-relaxed animate-hero-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          Tudo para sua produção artesanal e industrial.{" "}
          <br className="hidden md:block" />
          Qualidade, variedade e os melhores preços do mercado.
        </p>

        {/* Decorative line */}
        <div
          className="flex items-center justify-center gap-3 mb-14 animate-hero-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <span className="w-8 h-[1px] bg-primary-foreground/30" />
          <p className="text-primary-foreground/50 text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
            3x Armarinho Destaque &nbsp;·&nbsp; Entregamos para todo o Sergipe
          </p>
          <span className="w-8 h-[1px] bg-primary-foreground/30" />
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#catalogo"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary-foreground text-primary rounded-lg px-9 py-4 text-sm font-bold tracking-wide hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-lg hover:shadow-black/20"
          >
            Ver Catálogo
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-primary-foreground/40 text-primary-foreground rounded-lg px-9 py-4 text-sm tracking-wide hover:border-primary-foreground/70 hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-gentle-bounce">
        <ArrowDown size={18} className="text-primary-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
