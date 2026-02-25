import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Truck, DollarSign, Smartphone } from "lucide-react";

const features = [
  { icon: Trophy, title: "3x Premiada", desc: "Eleita armarinho destaque pelo terceiro ano consecutivo" },
  { icon: Truck, title: "Entrega Rápida", desc: "Enviamos para todo o Brasil com agilidade e segurança" },
  { icon: DollarSign, title: "Melhores Preços", desc: "Preços competitivos para atacado e varejo" },
  { icon: Smartphone, title: "Atendimento Ágil", desc: "Resposta rápida via WhatsApp e redes sociais" },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Por que escolher a Andreza?</h2>
          <div className="red-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <f.icon size={32} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{f.title}</h3>
              <div className="red-line mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
