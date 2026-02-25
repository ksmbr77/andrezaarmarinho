import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-whatsapp/30 animate-whatsapp-pulse hover:scale-110 transition-transform group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={26} className="text-foreground" />
      <span className="absolute right-full mr-3 bg-card text-foreground text-sm px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
        Fale conosco agora!
      </span>
    </a>
  );
};

export default WhatsAppButton;
