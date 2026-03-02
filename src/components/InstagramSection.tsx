import { useRef, useState, useEffect } from "react";
import { Instagram } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const videos = [
  { url: "https://www.instagram.com/p/DUqJXZ3kc9Y/embed", title: "Andreza Armarinho - Vídeo 1" },
  { url: "https://www.instagram.com/p/DVJDyR8jo-T/embed", title: "Andreza Armarinho - Vídeo 2" },
];

const LazyIframe = ({ url, title }: { url: string; title: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-full relative">
      {show && (
        <iframe
          src={url}
          title={title}
          className={`w-full h-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          frameBorder="0"
          scrolling="no"
          allowFullScreen
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      )}
      {(!show || !loaded) && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-primary/[0.04]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center animate-pulse">
              <Instagram size={22} className="text-primary-foreground" />
            </div>
            <span className="text-muted-foreground text-xs tracking-wide">Carregando...</span>
          </div>
        </div>
      )}
    </div>
  );
};

const InstagramSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="relative" ref={ref}>
      <div className="section-divider" />

      <div className="px-6 py-24 md:py-32 lg:py-40">
        <div className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="text-center mb-14 md:mb-18">
            <p className="text-[11px] tracking-[0.3em] uppercase text-primary/70 mb-5">Acompanhe</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Veja Nosso <span className="text-primary">Dia a Dia</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              @andrezaarmarinho no Instagram
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {videos.map((video) => (
              <div
                key={video.url}
                className="rounded-2xl overflow-hidden border border-primary/30 bg-card shadow-xl shadow-primary/10 aspect-[4/5] md:aspect-[3/4] min-h-[400px] md:min-h-[500px]"
              >
                <LazyIframe url={video.url} title={video.title} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://instagram.com/andrezaarmarinho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-primary/30 text-primary rounded-full px-7 py-3.5 text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram size={16} strokeWidth={1.5} />
              Seguir @andrezaarmarinho
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
