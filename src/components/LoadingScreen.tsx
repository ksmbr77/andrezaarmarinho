import logoFull from "@/assets/logo-full.png";

interface LoadingScreenProps {
  onExit?: boolean;
}

const LoadingScreen = ({ onExit }: LoadingScreenProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-primary flex items-center justify-center transition-all duration-700 ${onExit ? "opacity-0 scale-105" : "opacity-100 scale-100"}`}
    >
      <div className="flex flex-col items-center gap-8">
        <img
          src={logoFull}
          alt="Andreza Armarinho"
          className="h-16 sm:h-20 brightness-0 invert animate-loading-logo"
        />
        <div className="flex flex-col items-center gap-4">
          <div className="w-32 h-[1px] bg-primary-foreground/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary-foreground/80 origin-left animate-loading-bar" />
          </div>
          <p className="text-primary-foreground/40 text-[10px] tracking-[0.35em] uppercase animate-loading-text">
            Sua produção começa aqui
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
