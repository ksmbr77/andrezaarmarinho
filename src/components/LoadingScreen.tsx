import logoIcon from "@/assets/logo-icon.png";

interface LoadingScreenProps {
  onExit?: boolean;
}

const LoadingScreen = ({ onExit }: LoadingScreenProps) => {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-500 ${onExit ? "opacity-0" : "opacity-100"}`}
      role="status"
      aria-label="Carregando site"
    >
      <div className="text-center animate-fade-in">
        <img
          src={logoIcon}
          alt="Andreza Armarinho"
          width={64}
          height={64}
          className="w-16 h-16 mx-auto mb-6 animate-fade-in"
        />
        <div
          className="w-16 h-[1px] bg-primary mx-auto origin-left animate-scale-x"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
