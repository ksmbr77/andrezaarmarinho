import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const NewsletterSection = () => {
  const { ref, visible } = useFadeIn();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert("Obrigado por se inscrever! Em breve você receberá nossas ofertas.");
      setEmail("");
    }
  };

  return (
    <section className="section-padding" ref={ref}>
      <div
        className={`max-w-2xl mx-auto text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
          <Mail size={32} className="text-primary" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Receba Nossas Ofertas em Primeira Mão
        </h2>
        <p className="text-muted-foreground mb-8">Cadastre seu e-mail e fique por dentro das melhores promoções</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-secondary border border-border rounded-lg px-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="btn-cta flex items-center justify-center gap-2 !px-6">
            <Send size={16} />
            Quero Receber
          </button>
        </form>

        <p className="text-muted-foreground text-xs mt-4">Prometemos não enviar spam 💌</p>
      </div>
    </section>
  );
};

export default NewsletterSection;
