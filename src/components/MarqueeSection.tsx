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
  const items = [...phrases, ...phrases, ...phrases];

  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      {/* Row 1 */}
      <div className="relative mb-3 md:mb-4">
        <motion.div
          className="flex gap-6 md:gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 14, ease: "linear", repeat: Infinity }}
        >
          {items.map((phrase, i) => (
            <span
              key={`a-${i}`}
              className="text-foreground/[0.65] text-4xl md:text-6xl font-heading font-bold tracking-wide select-none"
            >
              {phrase}
              <span className="text-primary/[0.65] mx-4 md:mx-6">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Row 2 */}
      <div className="relative">
        <motion.div
          className="flex gap-6 md:gap-10 whitespace-nowrap"
          animate={{ x: ["-33.33%", "0%"] }}
          transition={{ duration: 16, ease: "linear", repeat: Infinity }}
        >
          {items.map((phrase, i) => (
            <span
              key={`b-${i}`}
              className="text-primary/[0.65] text-4xl md:text-6xl font-heading font-bold tracking-wide select-none"
            >
              {phrase}
              <span className="text-foreground/[0.65] mx-4 md:mx-6">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default MarqueeSection;
