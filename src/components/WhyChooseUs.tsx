import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  { number: "3x", label: "Eleita armarinho destaque" },
  { number: "Brasil", label: "Entrega para todo o país" },
  { number: "24h", label: "Atendimento rápido via WhatsApp" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="px-6 py-24 md:py-32 lg:py-40 border-t border-border/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-16 md:mb-20"
        >
          Por que a Andreza
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">{h.number}</h3>
              <p className="text-muted-foreground text-sm tracking-wide">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
