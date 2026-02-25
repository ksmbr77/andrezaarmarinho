import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const transition = { duration: 1, ease: [0.16, 1, 0.3, 1] };

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Minimal grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="text-[11px] md:text-[13px] tracking-[0.3em] uppercase text-muted-foreground mb-8"
        >
          Líder em produtos para fabricação em Sergipe
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] mb-8 tracking-tight"
        >
          Sua Produção
          <br />
          <span className="text-primary">Começa Aqui</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.6 }}
          className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-12 leading-relaxed"
        >
          Tudo para sua produção artesanal e industrial. Qualidade, variedade e os melhores preços.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <a href="#catalogo" className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]">
            Ver Catálogo
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground rounded-full px-8 py-3.5 text-sm tracking-wide hover:border-foreground/30 transition-all duration-300"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 1 }}
          className="text-muted-foreground/50 text-[11px] tracking-[0.2em] uppercase"
        >
          3x eleita armarinho destaque &nbsp;·&nbsp; Entregas para todo o Brasil
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
