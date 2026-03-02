import { Award, Truck, MessageCircle, Gem, ShieldCheck } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const highlights = [
  { icon: Award, title: "3x Armarinho Destaque", desc: "Reconhecida como referência em qualidade e variedade pelo terceiro ano consecutivo." },
  { icon: Gem, title: "Produtos de Alta Qualidade", desc: "Trabalhamos apenas com fornecedores selecionados para garantir o melhor para sua produção." },
  { icon: ShieldCheck, title: "Garantia de Satisfação", desc: "Compromisso com a qualidade em cada produto. Sua confiança é nossa prioridade." },
  { icon: Truck, title: "Entrega Nacional", desc: "Enviamos para todas as regiões do país com segurança e agilidade." },
  { icon: MessageCircle, title: "Atendimento Personalizado", desc: "Resposta ágil via WhatsApp para tirar dúvidas e fechar pedidos sob medida." },
];

const WhyChooseUs = () => {
  const { ref, visible } = useFadeIn("-60px");

  return (
    <section id="diferenciais" className="relative" ref={ref}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="px-6 py-24 md:py-32 lg:py-40">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary mb-5">Diferenciais</p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Por que a <span className="text-primary">Andreza</span>?
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              Mais do que um armarinho — somos parceiras da sua produção com produtos de qualidade comprovada.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="group flex items-start gap-5 bg-muted border border-border/50 rounded-2xl px-7 py-6 hover:bg-primary/[0.04] hover:border-primary/25 transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:border-primary/30 transition-colors duration-300">
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

      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default WhyChooseUs;
