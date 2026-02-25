import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const transition = { duration: 1, ease: [0.16, 1, 0.3, 1] };

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark radial glow background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/[0.07] rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(0 100% 40% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(0 100% 40% / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Noise/grain texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Exclusive badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 border border-border/60 rounded-full px-5 py-2 text-[11px] md:text-[12px] tracking-[0.15em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            O Maior Armarinho de Sergipe
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 tracking-tight"
        >
          Sua Produção
          <br />
          Começa{" "}
          <span className="relative inline-block text-primary">
            Aqui
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-1 left-0 w-full h-[3px] bg-primary rounded-full origin-left"
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.6 }}
          className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-6 leading-relaxed"
        >
          Líder em vendas de produtos para fabricação.
          <br className="hidden md:block" />
          Qualidade, variedade e os melhores preços.
        </motion.p>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.75 }}
          className="text-muted-foreground/40 text-[11px] tracking-[0.15em] mb-12"
        >
          3x Eleita Armarinho Destaque &nbsp;|&nbsp; Entregas para todo o Brasil
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#catalogo"
            className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
          >
            Ver Catálogo
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border/60 text-foreground/80 rounded-full px-8 py-3.5 text-sm tracking-wide hover:border-foreground/30 hover:text-foreground transition-all duration-300 bg-card/30 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366]" />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
