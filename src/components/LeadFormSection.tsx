import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5579999999999";

const interests = [
  "Tecidos",
  "Linhas & Fios",
  "Aviamentos",
  "Embalagens",
  "Ferramentas de Costura",
  "Rendas & Elásticos",
  "Outro",
];

const LeadFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [details, setDetails] = useState("");

  const toggleInterest = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = () => {
    const interestsList = selected.join(", ");
    const message = `Olá Andreza Armarinho! Meu nome é ${name.trim()}. Tenho interesse em: ${interestsList}.${details.trim() ? ` Detalhes: ${details.trim()}` : ""} Vim pelo site e gostaria de mais informações!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_LINK}?text=${encodedMessage}`, "_blank");
  };

  const canProceed = step === 0 ? name.trim().length > 0 : step === 1 ? selected.length > 0 : true;

  return (
    <section id="orcamento" className="relative" ref={ref}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-14 md:mb-16"
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Orçamento Rápido</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              O que você precisa?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">Responda em segundos e fale direto com a Andreza no WhatsApp.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border border-border/30 rounded-3xl p-8 md:p-10"
          >
            {/* Progress */}
            <div className="flex gap-2 mb-10">
              {[0, 1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-[2px] flex-1 rounded-full transition-all duration-500 ${
                    s <= step ? "bg-primary" : "bg-border/30"
                  }`}
                />
              ))}
            </div>

            {/* Step 0: Name */}
            {step === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label className="text-sm text-muted-foreground mb-4 block">Qual é o seu nome?</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  maxLength={100}
                  className="w-full bg-transparent border-b border-border/40 pb-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/20"
                  autoFocus
                />
              </motion.div>
            )}

            {/* Step 1: Interests */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label className="text-sm text-muted-foreground mb-6 block">O que você procura?</label>
                <div className="flex flex-wrap gap-3">
                  {interests.map((item) => (
                    <button
                      key={item}
                      onClick={() => toggleInterest(item)}
                      className={`px-5 py-2.5 rounded-full text-sm border transition-all duration-300 ${
                        selected.includes(item)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label className="text-sm text-muted-foreground mb-4 block">Algum detalhe adicional? (opcional)</label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Ex.: Preciso de 50m de tecido liso..."
                  maxLength={500}
                  rows={3}
                  className="w-full bg-transparent border-b border-border/40 pb-3 text-base focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/20 resize-none"
                />
              </motion.div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between mt-10">
              {step > 0 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Voltar
                </button>
              ) : (
                <div />
              )}

              {step < 2 ? (
                <button
                  onClick={() => canProceed && setStep((s) => s + 1)}
                  disabled={!canProceed}
                  className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20"
                >
                  Próximo
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Enviar no WhatsApp
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
