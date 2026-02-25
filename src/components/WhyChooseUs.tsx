import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Truck, MessageCircle } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "3x Armarinho Destaque",
    desc: "Reconhecida como referência em qualidade e variedade pelo terceiro ano consecutivo.",
  },
  {
    icon: Truck,
    title: "Entrega Nacional",
    desc: "Enviamos para todas as regiões do país com segurança e agilidade.",
  },
  {
    icon: MessageCircle,
    title: "Atendimento Rápido",
    desc: "Resposta ágil via WhatsApp para tirar dúvidas e fechar pedidos.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" className="relative" ref={ref}>
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

          {/* Glass card list — stacked style */}
          <div className="max-w-2xl mx-auto space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-5 bg-foreground/[0.03] backdrop-blur-sm border border-border/20 rounded-2xl px-7 py-6 hover:bg-foreground/[0.06] hover:border-primary/15 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/15 transition-colors duration-500">
                  <h.icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

export default WhyChooseUs;
