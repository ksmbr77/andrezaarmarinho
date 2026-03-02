import { useRef, useState, useEffect } from "react";
import { MapPin, Clock, MessageCircle } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const WHATSAPP_LINK = "https://wa.me/5579996373312?text=Olá Andreza Armarinho! Gostaria de saber mais informações sobre a loja.";
const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.5!2d-38.0001055!3d-11.1881728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x711b318661a587b%3A0x556c5e3d5cfd4c!2sAndreza%20Armarinho!5e0!3m2!1spt-BR!2sbr!4v1700000000000";

const LazyMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin: "400px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={mapRef} className="rounded-xl overflow-hidden border border-border/30 h-[250px] sm:h-[280px] md:h-full min-h-[250px] sm:min-h-[280px]">
      {show ? (
        <iframe
          src={MAP_SRC}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Andreza Armarinho"
        />
      ) : (
        <div className="w-full h-full bg-card flex items-center justify-center">
          <MapPin size={24} className="text-muted-foreground/30 animate-pulse" />
        </div>
      )}
    </div>
  );
};

const LocationSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="contato" className="relative" ref={ref}>
      <div className="section-divider" />

      <div className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Localização</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold">Venha Nos Visitar</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] border border-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1.5">Endereço</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Av. Luís Alves de Oliveira Filho, 404-484<br/>Tobias Barreto - SE, 49300-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/[0.06] border border-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={18} className="text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-1.5">Horário</h3>
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
                className="group inline-flex items-center gap-2.5 bg-primary text-primary-foreground rounded-lg px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <MessageCircle size={16} strokeWidth={1.5} />
                Enviar Mensagem
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            <LazyMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
