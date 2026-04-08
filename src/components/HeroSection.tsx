import { motion } from "framer-motion";
import { MessageCircle, Package, Bell, Users } from "lucide-react";
import { trackLead } from "@/lib/pixel";
import { getWhatsappLink, getConsultoraDodia } from "@/lib/consultoras";

const HeroSection = () => {
  const whatsappLink = getWhatsappLink();
  const consultora = getConsultoraDodia();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Linha divisória sutil no fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(42 95% 46% / 0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-10 flex justify-center"
        >
          <img src="/logo-tf.png" alt="Track & Field" className="h-32 md:h-44 object-contain" />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8 border border-black/10 bg-black/[0.03]"
        >
          <span className="text-sm font-medium tracking-wide text-foreground/60">
            ATENDIMENTO EXCLUSIVO • PARNAÍBA
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display font-light text-4xl md:text-6xl leading-tight mb-6 text-foreground"
        >
          Fale com nossa{" "}
          <span className="text-gradient-gold font-medium">consultora</span>
          <br />e garanta os lançamentos{" "}
          <span className="text-gradient-gold font-medium">Track&Field</span>
          <br />em Parnaíba
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed text-foreground/55 font-light"
        >
          Alguns lançamentos chegam em{" "}
          <strong className="text-foreground font-medium">poucas unidades</strong> e não voltam para o estoque.
          Nossa consultora{" "}
          <strong className="text-foreground font-medium">{consultora.nome}</strong>{" "}
          te avisa em primeira mão.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="group inline-flex items-center gap-3 bg-gradient-cta text-white font-display font-medium text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-full glow-whatsapp animate-pulse-glow transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />
            FALAR COM {consultora.nome.toUpperCase()}
          </a>
        </motion.div>

        {/* Social proof stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          <Stat icon={<Users className="w-5 h-5 text-foreground/40" />} value="Exclusivo" label="atendimento personalizado" />
          <Stat icon={<Package className="w-5 h-5" style={{ color: "hsl(42 95% 46%)" }} />} value="Pré-acesso" label="antes da loja" />
          <Stat icon={<Bell className="w-5 h-5 text-foreground/40" />} value="Avisos" label="antecipados de lançamento" />
        </motion.div>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <div className="text-left">
      <p className="font-display font-medium text-foreground text-base">{value}</p>
      <p className="text-xs text-foreground/45 font-light">{label}</p>
    </div>
  </div>
);

export default HeroSection;
