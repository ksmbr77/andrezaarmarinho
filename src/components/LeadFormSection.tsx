import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const WHATSAPP_LINK = "https://wa.me/5579996373312";

const interests = [
  "Tecidos", "Linhas & Fios", "Aviamentos", "Embalagens",
  "Crochê", "Rendas & Elásticos", "Outro",
];

const LeadFormSection = () => {
  const { ref, visible } = useFadeIn();
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
    const greeting = `Oii Andreza, tudo bem? 😊`;
    const intro = `Meu nome é *${name.trim()}* e encontrei vocês pelo site!`;
    const interest = `Estou interessado(a) em: *${interestsList}*.`;
    const detail = details.trim() ? `\n\n📝 *Mais detalhes:* ${details.trim()}` : "";
    const closing = `\n\nPoderia me ajudar com preços e disponibilidade? Obrigado(a)! 🙏`;
    const message = `${greeting}\n${intro}\n\n🛒 ${interest}${detail}${closing}`;
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const canProceed = step === 0 ? name.trim().length > 0 : step === 1 ? selected.length > 0 : true;

  return (
    <section id="orcamento" className="relative" ref={ref}>
      <div className="section-divider" />

      <div className="px-4 sm:px-6 py-16 sm:py-24 md:py-32 lg:py-40">
        <div className={`max-w-xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="text-center mb-14 md:mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Orçamento Rápido</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              O que você precisa?
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">Responda em segundos e fale direto com a Andreza no WhatsApp.</p>
          </div>

          <div className="border-2 border-primary/30 rounded-xl p-5 sm:p-6 md:p-10 shadow-sm">
            {/* Progress */}
            <div className="flex gap-2 mb-10">
              {[0, 1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-[2px] flex-1 rounded-full transition-all duration-500 ${s <= step ? "bg-primary" : "bg-primary/15"}`}
                />
              ))}
            </div>

            {/* Step 0 */}
            {step === 0 && (
              <div className="animate-fade-in">
                <label className="text-sm text-muted-foreground mb-4 block">Qual é o seu nome?</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  maxLength={100}
                  className="w-full bg-transparent border-b border-border pb-3 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                  autoFocus
                />
              </div>
            )}

            {/* Step 1 */}
            {step === 1 && (
              <div className="animate-fade-in">
                <label className="text-sm text-muted-foreground mb-6 block">O que você procura?</label>
                <div className="flex flex-wrap gap-3">
                  {interests.map((item) => (
                    <button
                      key={item}
                      onClick={() => toggleInterest(item)}
                      className={`px-5 py-2.5 rounded-lg text-sm border transition-all duration-300 ${
                        selected.includes(item)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="animate-fade-in">
                <label className="text-sm text-muted-foreground mb-4 block">Algum detalhe adicional? (opcional)</label>
                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Ex.: Preciso de 50m de tecido liso..."
                  maxLength={500}
                  rows={3}
                  className="w-full bg-transparent border-b border-border pb-3 text-base focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40 resize-none"
                />
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between mt-10">
              {step > 0 ? (
                <button onClick={() => setStep((s) => s - 1)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  ← Voltar
                </button>
              ) : <div />}

              {step < 2 ? (
                <button
                  onClick={() => canProceed && setStep((s) => s + 1)}
                  disabled={!canProceed}
                  className="flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 disabled:bg-primary/50 disabled:text-primary-foreground/70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/20"
                >
                  Próximo <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center gap-2 bg-primary text-primary-foreground rounded-lg px-7 py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  Enviar no WhatsApp <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
