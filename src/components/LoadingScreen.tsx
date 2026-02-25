import { motion } from "framer-motion";
import logoIcon from "@/assets/logo-icon.png";

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.img
          src={logoIcon}
          alt="Andreza Armarinho"
          className="w-16 h-16 mx-auto mb-6"
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: 600 }}
        />
        <motion.div
          className="w-16 h-[1px] bg-primary mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
