import { motion } from "framer-motion";
import { MessageCircle, Star, Package, Phone } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background animate-mesh" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(0 100% 40%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 100% 40%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block bg-primary/20 text-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-primary/30">
            Líder em vendas de produtos para fabricação
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Sua Produção{" "}
          <span className="text-gradient">Começa Aqui</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          O maior armarinho de Sergipe com tudo para sua produção artesanal e industrial. Qualidade, variedade e os melhores preços.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#catalogo" className="btn-cta text-lg">
            Ver Catálogo
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg flex items-center justify-center gap-2">
            <MessageCircle size={20} />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {[
            { icon: Star, text: "3x Armarinho Destaque" },
            { icon: Package, text: "Entrega para todo Brasil" },
            { icon: Phone, text: "Atendimento via WhatsApp" },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-muted-foreground text-sm">
              <badge.icon size={16} className="text-accent" />
              <span>{badge.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
