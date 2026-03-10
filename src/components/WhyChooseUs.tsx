import { Award, Truck, MessageCircle, Gem, ShieldCheck } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const highlights = [
  { icon: Award, title: "3x Armarinho Destaque", desc: "Reconhecida como referência em qualidade e variedade pelo terceiro ano consecutivo." },
  { icon: Gem, title: "Produtos de Alta Qualidade", desc: "Trabalhamos apenas com fornecedores selecionados para garantir o melhor para sua produção." },
  { icon: ShieldCheck, title: "Garantia de Satisfação", desc: "Compromisso com a qualidade em cada produto. Sua confiança é nossa prioridade." },
  { icon: Truck, title: "Entrega para todo Sergipe", desc: "Enviamos para todas as regiões do estado com segurança e agilidade." },
  { icon: MessageCircle, title: "Atendimento Personalizado", desc: "Resposta ágil via WhatsApp para tirar dúvidas e fechar pedidos sob medida." },
];

const WhyChooseUs = () => {
  const { ref, visible } = useFadeIn("-60px");

  return (
    <section id="diferenciais" className="relative" ref={ref}>
      <div className="section-divider" />

      <div className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary mb-5">Diferenciais</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Por que a <span className="text-primary">Andreza</span>?
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg max-w-lg mx-auto leading-relaxed">
              Mais do que um armarinho — somos parceiras da sua produção com produtos de qualidade comprovada.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`group flex items-start gap-4 sm:gap-5 bg-card border border-border/50 border-l-[4px] border-l-primary/60 rounded-xl px-5 py-5 sm:px-7 sm:py-6 hover:border-primary/30 hover:border-l-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-default ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/8 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-primary/30 group-hover:to-primary/15 group-hover:border-primary/40 transition-all duration-300">
                  <h.icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-base mb-1.5 group-hover:text-primary transition-colors duration-300">{h.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-divider" />
    </section>
  );
};

export default WhyChooseUs;
