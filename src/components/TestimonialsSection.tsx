import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Maria S.", location: "Aracaju, SE", text: "Melhor armarinho da região! Sempre encontro tudo que preciso para minha confecção. Atendimento impecável!", rating: 5 },
  { name: "Carla M.", location: "Itabaiana, SE", text: "Preços imbatíveis e qualidade surpreendente. Já sou cliente há 3 anos e não troco por nada!", rating: 5 },
  { name: "Juliana R.", location: "Lagarto, SE", text: "Encomendei pelo WhatsApp e chegou super rápido. Produtos de primeira, recomendo demais!", rating: 5 },
  { name: "Fernanda L.", location: "Estância, SE", text: "Variedade incrível de tecidos e aviamentos. A Andreza sempre nos surpreende com novidades!", rating: 5 },
  { name: "Patricia O.", location: "São Paulo, SP", text: "Mesmo de longe, compro com elas. Entrega rápida e segura para todo o Brasil!", rating: 5 },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">O Que Dizem Nossas Clientes</h2>
          <div className="red-line mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-12 text-center relative"
        >
          <Quote size={48} className="text-primary/30 mx-auto mb-6" />
          
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={20} className="text-accent fill-accent" />
            ))}
          </div>

          <p className="text-lg md:text-xl mb-6 text-foreground/90 leading-relaxed">"{t.text}"</p>

          <p className="font-heading font-bold text-lg">{t.name}</p>
          <p className="text-muted-foreground text-sm">{t.location}</p>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
