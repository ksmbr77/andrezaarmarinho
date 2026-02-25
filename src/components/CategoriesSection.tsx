import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Layers, CircleDot, Package, Shield, Wrench, Ruler, Ribbon } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const categories = [
  { name: "Tecidos", icon: Layers, msg: "Olá! Tenho interesse na categoria Tecidos" },
  { name: "Linhas & Fios", icon: Ribbon, msg: "Olá! Tenho interesse na categoria Linhas & Fios" },
  { name: "Botões & Fechos", icon: CircleDot, msg: "Olá! Tenho interesse na categoria Botões & Fechos" },
  { name: "Embalagens", icon: Package, msg: "Olá! Tenho interesse na categoria Embalagens" },
  { name: "Envelopes de Segurança", icon: Shield, msg: "Olá! Tenho interesse na categoria Envelopes de Segurança" },
  { name: "Aviamentos", icon: Scissors, msg: "Olá! Tenho interesse na categoria Aviamentos" },
  { name: "Ferramentas de Costura", icon: Wrench, msg: "Olá! Tenho interesse na categoria Ferramentas de Costura" },
  { name: "Rendas & Elásticos", icon: Ruler, msg: "Olá! Tenho interesse na categoria Rendas & Elásticos" },
];

const CategoriesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="catalogo" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Nosso Catálogo</h2>
          <div className="red-line mx-auto mb-4" />
          <p className="text-muted-foreground max-w-lg mx-auto">Encontre tudo o que precisa para sua produção em um só lugar</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(cat.msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6 text-center card-hover group cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cat.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base mb-2">{cat.name}</h3>
              <span className="text-primary text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Ver produtos →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
