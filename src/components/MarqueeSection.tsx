import { motion } from "framer-motion";

const phrases = [
  "Qualidade",
  "Variedade",
  "Exclusividade",
  "Durabilidade",
  "Confiança",
  "Tradição",
  "Inovação",
  "Compromisso",
  "Excelência",
  "Criatividade",
];

const MarqueeSection = () => {
  const items = [...phrases, ...phrases];

  return (
    <section className="relative overflow-hidden py-10 md:py-14 border-y border-border/10">
      {/* Row 1 — left to right */}
      <div className="relative mb-3 md:mb-4">
        <motion.div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {items.map((phrase, i) => (
            <span
              key={`a-${i}`}
              className="text-foreground/[0.07] text-2xl md:text-4xl font-heading font-bold tracking-wide select-none"
            >
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative">
        <motion.div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {items.map((phrase, i) => (
            <span
              key={`b-${i}`}
              className="text-primary/[0.08] text-2xl md:text-4xl font-heading font-bold tracking-wide select-none"
            >
              {phrase}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default MarqueeSection;
