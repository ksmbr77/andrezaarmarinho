import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const WHATSAPP_LINK = "https://wa.me/5579996373312";

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, isOpen, setIsOpen } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;

    const greeting = `Oii Andreza! 😊 Vim pelo site e gostaria de fazer um pedido!`;
    const itemsList = items
      .map((item, i) => `${i + 1}. *${item.product.name}* — Qtd: ${item.quantity}`)
      .join("\n");
    const closing = `\n\nPoderia me informar os valores e disponibilidade? Obrigado(a)! 🙏`;
    const message = `${greeting}\n\n🛒 *Meu Pedido:*\n${itemsList}${closing}`;

    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background border-l border-border z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-heading text-lg font-bold">
            Sacola <span className="text-primary text-sm font-normal">({totalItems})</span>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4" style={{ maxHeight: "calc(100vh - 200px)" }}>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-sm">Sua sacola está vazia</p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 text-primary text-sm hover:underline"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex gap-4 p-3 bg-card rounded-xl border border-border">
                <div className="w-16 h-16 bg-muted/30 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-primary/60">{item.product.category}</p>
                  <h4 className="text-sm font-medium truncate">{item.product.name}</h4>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-md border border-border hover:bg-muted transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-medium min-w-[20px] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center rounded-md border border-border hover:bg-muted transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="ml-auto w-7 h-7 flex items-center justify-center rounded-md text-destructive/60 hover:text-destructive hover:bg-destructive/10 transition-colors"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border bg-background">
            <button
              onClick={handleCheckout}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl py-4 text-sm font-medium hover:bg-[#20bd5a] transition-colors shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle size={18} />
              Finalizar no WhatsApp ({totalItems} {totalItems === 1 ? "item" : "itens"})
            </button>
            <button
              onClick={clearCart}
              className="w-full mt-2 text-xs text-muted-foreground hover:text-destructive transition-colors py-2"
            >
              Limpar sacola
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
