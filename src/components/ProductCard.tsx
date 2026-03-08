import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

type ProductData = {
  id: string;
  name: string;
  category: string;
  image_url: string | null;
  whatsapp_msg: string | null;
};

const ProductCard = ({ product }: { product: ProductData }) => {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(product);
    toast.success(`${product.name} adicionado à sacola!`, { duration: 2000 });
  };

  return (
    <div className="group bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30">
      <div className="aspect-square bg-muted/30 flex items-center justify-center overflow-hidden relative">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <ShoppingBag size={32} strokeWidth={1} />
            <span className="text-[10px]">Sem foto</span>
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
        <h3 className="text-sm font-medium leading-tight line-clamp-2">{product.name}</h3>
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
