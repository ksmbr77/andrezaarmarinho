import { Layers, Ribbon, Scissors, Package, Wrench, Ruler } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const WHATSAPP_LINK = "https://wa.me/5579996373312";

const categories = [
  { name: "Tecidos", icon: Layers, msg: "Olá Andreza! Tenho interesse em Tecidos." },
  { name: "Linhas & Fios", icon: Ribbon, msg: "Olá Andreza! Tenho interesse em Linhas & Fios." },
  { name: "Aviamentos", icon: Scissors, msg: "Olá Andreza! Tenho interesse em Aviamentos." },
  { name: "Embalagens", icon: Package, msg: "Olá Andreza! Tenho interesse em Embalagens." },
  { name: "Ferramentas", icon: Wrench, msg: "Olá Andreza! Tenho interesse em Ferramentas de Costura." },
  { name: "Rendas & Elásticos", icon: Ruler, msg: "Olá Andreza! Tenho interesse em Rendas & Elásticos." },
];

const CategoriesSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="catalogo" className="px-6 py-28 md:py-36 lg:py-44" ref={ref}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Catálogo</p>
          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold">Explore por Categoria</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(cat.msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-border/40 rounded-2xl p-8 md:p-10 text-center transition-all duration-500 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-lg hover:shadow-primary/5"
            >
              <cat.icon size={26} className="mx-auto mb-5 text-muted-foreground group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
              <h3 className="text-sm md:text-base font-medium tracking-wide">{cat.name}</h3>
              <span className="block mt-3 text-primary text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                Ver produtos →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 md:mt-20 border border-dashed border-border/30 rounded-2xl p-12 md:p-16 text-center">
          <p className="text-muted-foreground/40 text-sm tracking-wide">Espaço reservado para o catálogo completo</p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
