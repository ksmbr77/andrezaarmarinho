import { useState } from "react";
import { Layers, Spline, Scissors, Package, Waves, Grip, Search } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { products, categories as categoryList } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const WHATSAPP_LINK = "https://wa.me/5579996373312";

const categoryIcons: Record<string, any> = {
  "Tecidos": Layers,
  "Linhas & Fios": Spline,
  "Aviamentos": Scissors,
  "Embalagens": Package,
  "Crochê": Grip,
  "Rendas & Elásticos": Waves,
};

const categoryMessages: Record<string, string> = {
  "Tecidos": "Oii Andreza! 😊 Vi no site que vocês trabalham com *Tecidos* e gostaria de saber mais sobre opções, cores e preços disponíveis. Pode me ajudar?",
  "Linhas & Fios": "Oii Andreza! 😊 Estou procurando *Linhas e Fios* para um projeto. Quais tipos e cores vocês têm disponíveis? Vi pelo site!",
  "Aviamentos": "Oii Andreza! 😊 Preciso de *Aviamentos* e vi no site que vocês trabalham com isso. Poderia me mostrar o que tem disponível?",
  "Embalagens": "Oii Andreza! 😊 Encontrei vocês pelo site e tenho interesse em *Embalagens*. Quais opções vocês oferecem?",
  "Crochê": "Oii Andreza! 😊 Adoro crochê e vi pelo site que vocês trabalham com materiais para *Crochê*! Quais produtos vocês têm? 🧶",
  "Rendas & Elásticos": "Oii Andreza! 😊 Estou precisando de *Rendas e Elásticos*. Vi no site e gostaria de saber sobre os modelos e preços disponíveis!",
};

const CategoriesSection = () => {
  const { ref, visible } = useFadeIn();
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) => {
    const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayCategories = Object.keys(categoryIcons);

  return (
    <section id="catalogo" className="px-4 sm:px-6 py-16 sm:py-24 md:py-36 lg:py-44" ref={ref}>
      <div className={`max-w-6xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Catálogo</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">Explore por Categoria</h2>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {displayCategories.map((cat, i) => {
            const Icon = categoryIcons[cat];
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(activeCategory === cat ? "Todos" : cat);
                  setSearchTerm("");
                }}
                className={`group relative rounded-xl p-4 sm:p-5 md:p-8 text-center transition-all duration-500 overflow-hidden border-b-2 ${
                  activeCategory === cat
                    ? "bg-primary/10 border border-primary/50 border-b-primary shadow-lg shadow-primary/10"
                    : "bg-card border border-border hover:border-primary/50 border-b-transparent hover:border-b-primary/60 hover:shadow-xl hover:shadow-primary/10"
                }`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.00] to-primary/[0.00] group-hover:from-primary/[0.06] group-hover:to-primary/[0.02] transition-all duration-500" />
                <div className="relative">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-primary/25 border border-primary/40 scale-110"
                      : "bg-primary/15 border border-primary/20 group-hover:bg-primary/25 group-hover:border-primary/40 group-hover:scale-110"
                  }`}>
                    <Icon size={24} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className={`text-sm md:text-base font-medium tracking-wide transition-colors duration-300 ${
                    activeCategory === cat ? "text-primary" : "group-hover:text-primary"
                  }`}>{cat}</h3>
                  <span className={`block mt-3 text-primary text-xs font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                  }`}>
                    {activeCategory === cat ? "✓ Selecionado" : "Ver produtos →"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Search & Products */}
        <div className="border border-border/50 rounded-2xl p-4 sm:p-6 md:p-8 bg-card/30">
          {/* Search bar */}
          <div className="relative mb-6 sm:mb-8">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar produto..."
              className="w-full bg-background border border-border rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/40"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
            {categoryList.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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

          {/* Products grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-sm">Nenhum produto encontrado.</p>
              <button
                onClick={() => { setActiveCategory("Todos"); setSearchTerm(""); }}
                className="mt-3 text-primary text-sm hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground/50">
              {filteredProducts.length} {filteredProducts.length === 1 ? "produto" : "produtos"} encontrado{filteredProducts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
