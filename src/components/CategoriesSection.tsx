import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Ribbon, Scissors, Package, Wrench, Ruler } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const categories = [
  { name: "Tecidos", icon: Layers, msg: "Olá! Tenho interesse em Tecidos" },
  { name: "Linhas & Fios", icon: Ribbon, msg: "Olá! Tenho interesse em Linhas & Fios" },
  { name: "Aviamentos", icon: Scissors, msg: "Olá! Tenho interesse em Aviamentos" },
  { name: "Embalagens", icon: Package, msg: "Olá! Tenho interesse em Embalagens" },
  { name: "Ferramentas", icon: Wrench, msg: "Olá! Tenho interesse em Ferramentas de Costura" },
  { name: "Rendas & Elásticos", icon: Ruler, msg: "Olá! Tenho interesse em Rendas & Elásticos" },
];

const CategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="catalogo" className="px-6 py-24 md:py-32 lg:py-40" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Catálogo</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Explore por Categoria</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(cat.msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-border/50 rounded-2xl p-8 md:p-10 text-center transition-all duration-500 hover:border-primary/30 hover:bg-primary/[0.03]"
            >
              <cat.icon size={24} className="mx-auto mb-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
              <h3 className="text-sm md:text-base font-medium tracking-wide">{cat.name}</h3>
            </motion.a>
          ))}
        </div>

        {/* Catalog placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-20 border border-dashed border-border/50 rounded-2xl p-12 md:p-16 text-center"
        >
          <p className="text-muted-foreground/50 text-sm tracking-wide">Espaço reservado para o catálogo completo</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
