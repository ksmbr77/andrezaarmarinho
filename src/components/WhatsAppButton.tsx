import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 animate-whatsapp-pulse hover:scale-110 transition-transform duration-300 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} className="text-foreground" />
      <span className="absolute right-full mr-3 bg-card text-foreground text-xs px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-border/50">
        Fale conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
