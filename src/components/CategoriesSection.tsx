import { Layers, Spline, Scissors, Package, Waves, Grip } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const WHATSAPP_LINK = "https://wa.me/5579996373312";

const categories = [
  { name: "Tecidos", icon: Layers, msg: "Olá Andreza! Tenho interesse em Tecidos." },
  { name: "Linhas & Fios", icon: Spline, msg: "Olá Andreza! Tenho interesse em Linhas & Fios." },
  { name: "Aviamentos", icon: Scissors, msg: "Olá Andreza! Tenho interesse em Aviamentos." },
  { name: "Embalagens", icon: Package, msg: "Olá Andreza! Tenho interesse em Embalagens." },
  { name: "Crochê", icon: Grip, msg: "Olá Andreza! Tenho interesse em Crochê." },
  { name: "Rendas & Elásticos", icon: Waves, msg: "Olá Andreza! Tenho interesse em Rendas & Elásticos." },
];

const CategoriesSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="catalogo" className="px-4 sm:px-6 py-16 sm:py-24 md:py-36 lg:py-44" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Catálogo</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">Explore por Categoria</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.name}
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(cat.msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-card border border-border hover:border-primary/50 rounded-xl p-4 sm:p-5 md:p-8 text-center transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 overflow-hidden border-b-2 border-b-transparent hover:border-b-primary/60 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.00] to-primary/[0.00] group-hover:from-primary/[0.06] group-hover:to-primary/[0.02] transition-all duration-500" />
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:bg-primary/25 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                  <cat.icon size={24} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm md:text-base font-medium tracking-wide group-hover:text-primary transition-colors duration-300">{cat.name}</h3>
                <span className="block mt-3 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  Ver produtos →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 border border-dashed border-primary/20 rounded-xl p-6 sm:p-8 md:p-16 text-center bg-primary/[0.02]">
          <p className="text-muted-foreground/50 text-sm tracking-wide">Espaço reservado para o catálogo completo</p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
