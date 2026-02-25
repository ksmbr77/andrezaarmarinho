import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send } from "lucide-react";

const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
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
            className="flex-1 bg-secondary border border-border rounded-full px-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button type="submit" className="btn-cta flex items-center justify-center gap-2 !px-6">
            <Send size={16} />
            Quero Receber
          </button>
        </form>

        <p className="text-muted-foreground text-xs mt-4">Prometemos não enviar spam 💌</p>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
