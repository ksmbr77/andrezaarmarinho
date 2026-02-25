import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, MessageCircle, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="localizacao" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Venha Nos Visitar</h2>
          <div className="red-line mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Endereço</h3>
                <p className="text-muted-foreground">Rua Exemplo, 123 — Centro<br/>Aracaju - SE, 49000-000</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Seg a Sex: 8h às 18h<br/>
                  Sábado: 8h às 13h<br/>
                  Domingo: Fechado
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp flex items-center gap-2 !text-sm">
                <MessageCircle size={16} />
                Enviar Mensagem
              </a>
              <a href="https://instagram.com/andrezaarmarinho" target="_blank" rel="noopener noreferrer" className="btn-cta-outline flex items-center gap-2 !text-sm !border-primary !text-primary hover:!bg-primary hover:!text-primary-foreground">
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-border h-[300px] md:h-full min-h-[300px]"
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
