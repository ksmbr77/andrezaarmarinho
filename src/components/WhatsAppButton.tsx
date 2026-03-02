import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579996373312?text=Olá Andreza Armarinho! Vim pelo site e gostaria de saber mais sobre os produtos e promoções.";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/25 animate-whatsapp-pulse hover:scale-110 transition-transform duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      <span className="absolute right-full mr-4 bg-card text-foreground text-sm px-4 py-2.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-border/30">
        Fale com a Andreza
      </span>
    </a>
  );
};

export default WhatsAppButton;
