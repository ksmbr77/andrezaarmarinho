import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

import imgLinhas from "@/assets/products/linhas-fios.jpg";
import imgCroche from "@/assets/products/croche.jpg";
import imgAviamentos from "@/assets/products/aviamentos.jpg";
import imgRendas from "@/assets/products/rendas.jpg";
import imgTecidos from "@/assets/products/tecidos.jpg";
import imgEmbalagens from "@/assets/products/embalagens.jpg";

const categoryFallback: Record<string, string> = {
  "Linhas & Fios": imgLinhas,
  "Crochê": imgCroche,
  "Aviamentos": imgAviamentos,
  "Rendas & Elásticos": imgRendas,
  "Tecidos": imgTecidos,
  "Embalagens": imgEmbalagens,
};

type ProductData = {
  id: string;
  name: string;
  category: string;
  image_url: string | null;
  whatsapp_msg: string | null;
};

const ProductCard = ({ product }: { product: ProductData }) => {
  const { addItem } = useCart();
  const imageSrc = product.image_url || categoryFallback[product.category] || "/placeholder.svg";

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} adicionado à sacola!`, { duration: 2000 });
  };

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30">
      <div className="aspect-square bg-muted/30 flex items-center justify-center overflow-hidden relative">
        <img
          src={imageSrc}
          alt={product.name}
          className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
            product.image_url ? "object-contain p-4" : "object-cover opacity-60"
          }`}
          loading="lazy"
        />
        {!product.image_url && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
            <span className="text-white text-[10px] font-medium">{product.category}</span>
          </div>
        )}
        <button
          onClick={handleAdd}
          className="absolute bottom-3 right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/20"
          aria-label={`Adicionar ${product.name} à sacola`}
        >
          <ShoppingBag size={16} />
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <p className="text-[10px] uppercase tracking-[0.15em] text-primary/60 mb-1">{product.category}</p>
        <h3 className="text-sm font-medium leading-tight line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
        <button
          onClick={handleAdd}
          className="mt-3 w-full text-xs text-primary font-medium py-2 border border-primary/20 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Adicionar à sacola
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
