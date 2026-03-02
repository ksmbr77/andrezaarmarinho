const phrases = [
  "Exclusividade",
  "Qualidade",
  "Variedade",
  "Preço Bom",
];

const MarqueeRow = ({ direction, primary }: { direction: "left" | "right"; primary: boolean }) => {
  const items = [...phrases, ...phrases, ...phrases];

  const content = items.map((phrase, i) => (
    <span
      key={i}
      className={`${primary ? "text-primary/[0.65]" : "text-foreground/[0.65]"} text-2xl sm:text-3xl md:text-6xl font-heading font-bold tracking-wide select-none shrink-0 px-3 sm:px-4 md:px-6`}
    >
      {phrase}
      <span className={`${primary ? "text-foreground/[0.65]" : "text-primary/[0.65]"} mx-2 sm:mx-3 md:mx-5`}>·</span>
    </span>
  ));

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex whitespace-nowrap ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {content}
        {content}
      </div>
    </div>
  );
};

const MarqueeSection = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="mb-3 md:mb-4">
        <MarqueeRow direction="left" primary={false} />
      </div>
      <MarqueeRow direction="right" primary={true} />

      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default MarqueeSection;
