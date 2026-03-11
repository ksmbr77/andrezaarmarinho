import { useState, useMemo } from "react";
import { Spline, Scissors, Package, Grip, Search, ChevronDown, Paintbrush, Needle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useFadeIn } from "@/hooks/useFadeIn";
import ProductCard from "@/components/ProductCard";

import imgCroche from "@/assets/products/croche.jpg";
import imgAviamentos from "@/assets/products/aviamentos.jpg";
import imgCosturaBordado from "@/assets/products/costura-bordado.jpg";
import imgArtesanato from "@/assets/products/artesanato.jpg";
import imgEmbalagens from "@/assets/products/embalagens.jpg";
import imgTecidos from "@/assets/products/tecidos.jpg";

const CATEGORIES_LIST = ["Todos", "Crochê", "Aviamentos", "Costura & Bordado", "Artesanato", "Embalagens", "Tecidos"];
const PRODUCTS_PER_PAGE = 8;

type CategoryInfo = {
  icon: any;
  image: string;
};

const categoryData: Record<string, CategoryInfo> = {
  "Crochê": { icon: Grip, image: imgCroche },
  "Aviamentos": { icon: Scissors, image: imgAviamentos },
  "Costura & Bordado": { icon: Needle, image: imgCosturaBordado },
  "Artesanato": { icon: Paintbrush, image: imgArtesanato },
  "Embalagens": { icon: Package, image: imgEmbalagens },
  "Tecidos": { icon: Spline, image: imgTecidos },
};

const CategoriesSection = () => {
  const { ref, visible } = useFadeIn();
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("active", true)
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  // Get subcategories for the active category
  const subcategories = useMemo(() => {
    if (activeCategory === "Todos") return [];
    const subs = new Set<string>();
    products.forEach(p => {
      if (p.category === activeCategory && p.subcategory) {
        subs.add(p.subcategory);
      }
    });
    return Array.from(subs).sort();
  }, [activeCategory, products]);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
    const matchesSubcategory = !activeSubcategory || p.subcategory === activeSubcategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleCategoryClick = (cat: string) => {
    const newCat = activeCategory === cat ? "Todos" : cat;
    setActiveCategory(newCat);
    setActiveSubcategory(null);
    setSearchTerm("");
    setVisibleCount(PRODUCTS_PER_PAGE);
  };

  const displayCategories = Object.keys(categoryData);

  return (
    <section id="catalogo" className="px-4 sm:px-6 py-16 sm:py-24 md:py-36 lg:py-44" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Catálogo</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">Explore por Categoria</h2>
        </div>

        {/* Category Cards with images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {displayCategories.map((cat, i) => {
            const info = categoryData[cat];
            const Icon = info.icon;
            const count = products.filter(p => p.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`group relative rounded-xl overflow-hidden transition-all duration-500 border-b-2 ${
                  isActive
                    ? "border border-primary/50 border-b-primary shadow-lg shadow-primary/10"
                    : "border border-border hover:border-primary/50 border-b-transparent hover:border-b-primary/60 hover:shadow-xl hover:shadow-primary/10"
                }`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
              >
                <div className="absolute inset-0">
                  <img src={info.image} alt={cat} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/80 via-black/50 to-black/30"
                      : "bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/80 group-hover:via-black/50"
                  }`} />
                </div>

                <div className="relative p-4 sm:p-5 md:p-8 text-center">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-all duration-300 ${
                    isActive
                      ? "bg-primary/30 border border-primary/50 scale-110 backdrop-blur-sm"
                      : "bg-white/15 border border-white/20 group-hover:bg-white/25 group-hover:border-white/40 group-hover:scale-110 backdrop-blur-sm"
                  }`}>
                    <Icon size={24} className={isActive ? "text-primary" : "text-white"} strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-sm md:text-base font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? "text-primary" : "text-white"
                  }`}>{cat}</h3>
                  {count > 0 && (
                    <span className="block mt-1 text-[10px] text-white/60">{count} produtos</span>
                  )}
                  <span className={`block mt-2 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "text-primary opacity-100 translate-y-0"
                      : "text-white/80 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                  }`}>
                    {isActive ? "✓ Selecionado" : "Ver produtos →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Search & Products */}
        <div className="border border-border/50 rounded-2xl p-4 sm:p-6 md:p-8 bg-card/30">
          {/* Search bar */}
          <div className="relative mb-6">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setVisibleCount(PRODUCTS_PER_PAGE); }}
              placeholder="Buscar produto..."
              className="w-full bg-background border border-border rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/40"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setActiveSubcategory(null); setVisibleCount(PRODUCTS_PER_PAGE); }}
                className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat} {cat !== "Todos" && `(${products.filter(p => p.category === cat).length})`}
              </button>
            ))}
          </div>

          {/* Subcategory pills */}
          {subcategories.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6 pl-1">
              <button
                onClick={() => { setActiveSubcategory(null); setVisibleCount(PRODUCTS_PER_PAGE); }}
                className={`px-3 py-1.5 rounded-md text-[11px] font-medium border transition-all duration-200 ${
                  !activeSubcategory
                    ? "bg-primary/15 text-primary border-primary/30"
                    : "border-border/30 text-muted-foreground/70 hover:border-primary/20 hover:text-foreground"
                }`}
              >
                Todas
              </button>
              {subcategories.map((sub) => {
                const subCount = products.filter(p => p.category === activeCategory && p.subcategory === sub).length;
                return (
                  <button
                    key={sub}
                    onClick={() => { setActiveSubcategory(activeSubcategory === sub ? null : sub); setVisibleCount(PRODUCTS_PER_PAGE); }}
                    className={`px-3 py-1.5 rounded-md text-[11px] font-medium border transition-all duration-200 ${
                      activeSubcategory === sub
                        ? "bg-primary/15 text-primary border-primary/30"
                        : "border-border/30 text-muted-foreground/70 hover:border-primary/20 hover:text-foreground"
                    }`}
                  >
                    {sub} ({subCount})
                  </button>
                );
              })}
            </div>
          )}

          {/* Products grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-sm">Nenhum produto encontrado.</p>
              <button
                onClick={() => { setActiveCategory("Todos"); setActiveSubcategory(null); setSearchTerm(""); setVisibleCount(PRODUCTS_PER_PAGE); }}
                className="mt-3 text-primary text-sm hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}

          {/* Ver mais button */}
          {hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleCount(v => v + PRODUCTS_PER_PAGE)}
                className="inline-flex items-center gap-2 px-8 py-3 border border-primary/30 text-primary rounded-xl text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Ver mais produtos
                <ChevronDown size={16} />
              </button>
              <p className="text-[10px] text-muted-foreground/50 mt-2">
                Mostrando {displayedProducts.length} de {filteredProducts.length}
              </p>
            </div>
          )}

          {!hasMore && filteredProducts.length > 0 && (
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground/50">
                {filteredProducts.length} {filteredProducts.length === 1 ? "produto" : "produtos"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
