import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="px-6 py-24 md:py-32 lg:py-40 border-t border-border/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground text-center mb-16 md:mb-20"
        >
          Localização & Contato
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-medium mb-1">Endereço</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Rua Exemplo, 123 — Centro<br/>Aracaju - SE, 49000-000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={18} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-medium mb-1">Horário</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Seg a Sex: 8h às 18h<br/>
                  Sábado: 8h às 13h
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              Enviar Mensagem
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-border/50 h-[280px] md:h-full min-h-[280px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.073!2d-37.0719!3d-10.9111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU0JzQwLjAiUyAzN8KwMDQnMTguOCJX!5e0!3m2!1spt-BR!2sbr!4v1600000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) brightness(1.2) contrast(1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Andreza Armarinho"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
