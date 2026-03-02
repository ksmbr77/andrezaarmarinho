import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579996373312?text=Olá Andreza Armarinho! Vim pelo site e gostaria de mais informações.";

const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle glow for light theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] will-change-transform" />

      {/* Grid — subtle on white */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 0% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 0% / 0.08) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Vignette — light fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_80%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 border border-primary/20 bg-primary/[0.05] rounded-full px-5 py-2.5 text-[11px] md:text-[12px] tracking-[0.15em] text-foreground/70">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            O Maior Armarinho de Sergipe
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.35 }}
          className="font-heading text-[3.2rem] md:text-[5rem] lg:text-[6.5rem] font-bold leading-[1.02] mb-8 tracking-[-0.02em]"
        >
          Sua Produção
          <br />
          Começa{" "}
          <span className="relative inline-block text-primary">
            Aqui
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary rounded-full animate-fade-in" style={{ animationDelay: '1s' }} />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.5 }}
          className="text-muted-foreground text-base md:text-xl max-w-lg mx-auto mb-6 leading-relaxed"
        >
          Tudo para sua produção artesanal e industrial.
          <br className="hidden md:block" />
          Qualidade, variedade e os melhores preços do mercado.
        </motion.p>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.65 }}
          className="flex items-center justify-center gap-3 mb-14"
        >
          <span className="w-8 h-[1px] bg-primary/30" />
          <p className="text-muted-foreground/40 text-[10px] md:text-[11px] tracking-[0.2em] uppercase">
            3x Armarinho Destaque &nbsp;·&nbsp; Entregas para todo o Brasil
          </p>
          <span className="w-8 h-[1px] bg-primary/30" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#catalogo"
            className="group inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground rounded-full px-9 py-4 text-sm font-medium tracking-wide hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            Ver Catálogo
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 border border-border/60 text-foreground/80 rounded-full px-9 py-4 text-sm tracking-wide hover:border-foreground/30 hover:text-foreground transition-all duration-300"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — CSS only */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <ArrowDown size={18} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
