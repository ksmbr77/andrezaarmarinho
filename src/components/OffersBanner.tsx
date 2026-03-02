import { useFadeIn } from "@/hooks/useFadeIn";

const WHATSAPP_LINK = "https://wa.me/5579996373312?text=Olá Andreza Armarinho! Quero aproveitar as ofertas especiais do mês!";

const OffersBanner = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="px-6 py-20 md:py-28" ref={ref}>
      <div
        className={`max-w-4xl mx-auto relative overflow-hidden rounded-3xl transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_0%_100%/0.15),transparent_70%)]" />

        <div className="relative p-12 md:p-16 lg:p-20 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary-foreground/80 mb-6">Ofertas Exclusivas</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5 text-primary-foreground">
            Ofertas Especiais do Mês
          </h2>
          <p className="text-primary-foreground/80 text-sm md:text-base mb-12 max-w-md mx-auto leading-relaxed">
            Descontos exclusivos para produção. Condições especiais por tempo limitado.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-primary-foreground text-primary rounded-full px-9 py-4 text-sm font-medium tracking-wide hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-lg"
          >
            Aproveitar Agora
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffersBanner;
