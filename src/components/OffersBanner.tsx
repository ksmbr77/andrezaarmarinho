import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WHATSAPP_LINK = "https://wa.me/5579999999999?text=Olá! Quero aproveitar as ofertas do mês!";

const OffersBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-24 md:py-32" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto bg-primary/[0.06] border border-primary/10 rounded-3xl p-12 md:p-16 text-center"
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-primary mb-6">Ofertas do mês</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Ofertas Especiais do Mês
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">
          Descontos exclusivos para produção. Condições especiais por tempo limitado.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
        >
          Aproveitar Agora
        </a>
      </motion.div>
    </section>
  );
};

export default OffersBanner;
