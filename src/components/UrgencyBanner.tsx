import { motion } from "framer-motion";

const UrgencyBanner = () => {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="py-3 px-4 bg-black"
    >
      <div className="flex items-center justify-center gap-2 font-display font-light text-sm md:text-base tracking-wider">
        <span className="animate-pulse" style={{ color: "hsl(42 95% 50%)" }}>●</span>
        <span className="text-white">LANÇAMENTOS COM POUCAS UNIDADES — ENTRE ANTES QUE ESGOTEM</span>
        <span className="animate-pulse" style={{ color: "hsl(42 95% 50%)" }}>●</span>
      </div>
    </motion.div>
  );
};

export default UrgencyBanner;
