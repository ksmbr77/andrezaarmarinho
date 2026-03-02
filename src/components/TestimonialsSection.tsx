import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const testimonials = [
  { name: "Maria S.", location: "Aracaju, SE", text: "Melhor armarinho da região. Sempre encontro tudo que preciso para minha confecção. Atendimento impecável.", rating: 5 },
  { name: "Carla M.", location: "Itabaiana, SE", text: "Preços imbatíveis e qualidade surpreendente. Já sou cliente há 3 anos e não troco por nada.", rating: 5 },
  { name: "Juliana R.", location: "Lagarto, SE", text: "Encomendei pelo WhatsApp e chegou super rápido. Produtos de primeira qualidade.", rating: 5 },
  { name: "Fernanda L.", location: "Estância, SE", text: "Variedade incrível de tecidos e aviamentos. A Andreza sempre nos surpreende.", rating: 5 },
  { name: "Patricia O.", location: "São Paulo, SP", text: "Mesmo de longe, compro com elas. Entrega rápida e segura para todo o Brasil.", rating: 5 },
];

const TestimonialsSection = () => {
  const { ref, visible } = useFadeIn();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="px-6 py-24 md:py-32 lg:py-40" ref={ref}>
      <div className={`max-w-3xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 text-center mb-16 md:mb-20">
          Depoimentos
        </p>

        <div className="text-center">
          <div className="flex justify-center gap-1.5 mb-10">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={14} className="text-accent fill-accent" />
            ))}
          </div>

          <p className="font-heading text-lg md:text-2xl lg:text-3xl leading-relaxed mb-10 text-foreground/90">
            "{t.text}"
          </p>

          <p className="text-sm font-medium tracking-wide">{t.name}</p>
          <p className="text-muted-foreground text-xs mt-1.5 tracking-wide">{t.location}</p>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
              <ChevronLeft size={16} className="text-muted-foreground" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6 h-1.5" : "bg-muted-foreground/20 w-1.5 h-1.5"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
              <ChevronRight size={16} className="text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
