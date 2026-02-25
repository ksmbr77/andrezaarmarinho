import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Flame } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999?text=Olá! Quero aproveitar as ofertas do mês!";

const getEndOfMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
};

const OffersBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const end = getEndOfMonth();
      const diff = end.getTime() - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { val: timeLeft.days, label: "Dias" },
    { val: timeLeft.hours, label: "Horas" },
    { val: timeLeft.minutes, label: "Min" },
    { val: timeLeft.seconds, label: "Seg" },
  ];

  return (
    <section id="ofertas" className="relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10 section-padding text-center text-primary-foreground"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Flame size={28} className="text-accent" />
          <span className="text-accent font-bold text-lg">OFERTAS DO MÊS</span>
          <Flame size={28} className="text-accent" />
        </div>

        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-3">
          Fevereiro Imbatível 🔥
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">Descontos imperdíveis que acabam em:</p>

        <div className="flex justify-center gap-3 md:gap-5 mb-10">
          {timeBlocks.map((b) => (
            <div key={b.label} className="bg-background/20 backdrop-blur-sm rounded-xl p-3 md:p-4 min-w-[70px]">
              <span className="text-3xl md:text-4xl font-bold font-heading block">{String(b.val).padStart(2, "0")}</span>
              <span className="text-xs text-primary-foreground/70 uppercase">{b.label}</span>
            </div>
          ))}
        </div>

        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-foreground text-primary font-bold rounded-full px-10 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
          Aproveitar Agora
        </a>
      </motion.div>
    </section>
  );
};

export default OffersBanner;
