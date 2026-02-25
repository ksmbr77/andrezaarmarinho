import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999?text=Olá Andreza Armarinho! Vim pelo site e gostaria de mais informações.";

const transition = { duration: 1, ease: [0.16, 1, 0.3, 1] };

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Primary glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-primary/[0.08] rounded-full blur-[180px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-primary/[0.05] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] bg-accent/[0.03] rounded-full blur-[80px]" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.035]" style={{
        backgroundImage: 'linear-gradient(hsl(0 100% 40% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(0 100% 40% / 0.4) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.3 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2.5 border border-primary/20 bg-primary/[0.05] rounded-full px-5 py-2.5 text-[11px] md:text-[12px] tracking-[0.15em] text-foreground/70">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            O Maior Armarinho de Sergipe
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.5 }}
          className="font-heading text-[3.2rem] md:text-[5rem] lg:text-[6.5rem] font-bold leading-[1.02] mb-8 tracking-[-0.02em]"
        >
          Sua Produção
          <br />
          Começa{" "}
          <span className="relative inline-block text-primary">
            Aqui
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary rounded-full origin-left"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.7 }}
          className="text-muted-foreground text-base md:text-xl max-w-lg mx-auto mb-6 leading-relaxed"
        >
          Líder em vendas de produtos para fabricação.
          <br className="hidden md:block" />
          Qualidade, variedade e os melhores preços.
        </motion.p>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.85 }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 1 }}
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
            className="inline-flex items-center justify-center gap-2.5 border border-border/60 text-foreground/80 rounded-full px-9 py-4 text-sm tracking-wide hover:border-foreground/30 hover:text-foreground transition-all duration-300 bg-card/30 backdrop-blur-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={18} className="text-muted-foreground/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
