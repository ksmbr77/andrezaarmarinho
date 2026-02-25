import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Truck, MessageCircle } from "lucide-react";

const highlights = [
  {
    icon: Award,
    number: "3x",
    title: "Armarinho Destaque",
    desc: "Reconhecida como referência em qualidade e variedade pelo terceiro ano consecutivo.",
  },
  {
    icon: Truck,
    number: "Brasil",
    title: "Entrega Nacional",
    desc: "Enviamos para todas as regiões do país com segurança e agilidade.",
  },
  {
    icon: MessageCircle,
    number: "24h",
    title: "Atendimento Rápido",
    desc: "Resposta ágil via WhatsApp para tirar dúvidas e fechar pedidos.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="relative" ref={ref}>
      {/* Gradient divider on top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="px-6 py-28 md:py-36 lg:py-44">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20 md:mb-24"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Diferenciais</p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Por que a <span className="text-primary">Andreza</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Mais do que um armarinho — somos parceiras da sua produção.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary/[0.06] border border-primary/10 flex items-center justify-center group-hover:bg-primary/10 transition-all duration-500">
                  <h.icon size={22} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-3">{h.number}</h3>
                <p className="font-medium text-base mb-3">{h.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[260px] mx-auto">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient divider on bottom */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

export default WhyChooseUs;
