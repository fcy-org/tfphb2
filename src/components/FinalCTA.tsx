import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { trackLead } from "@/lib/pixel";
import { getWhatsappLink, getConsultoraDodia } from "@/lib/consultoras";

const FinalCTA = () => {
  const whatsappLink = getWhatsappLink();
  const consultora = getConsultoraDodia();

  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-black/[0.06]">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center rounded-3xl p-10 md:p-16 relative overflow-hidden border border-black/[0.08] bg-black/[0.02]"
      >
        {/* Brilho dourado sutil no topo */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[120px]"
          style={{ background: "hsl(42 95% 46% / 0.1)" }}
        />

        <div className="relative z-10">
          <p className="font-display font-medium text-sm tracking-widest mb-4 text-gradient-gold">
            ⚡ VAGAS LIMITADAS
          </p>

          <h2 className="font-display font-light text-3xl md:text-5xl mb-6 leading-tight text-foreground">
            Não fique de fora quando
            <br />
            <span className="text-gradient-gold font-medium">a próxima peça chegar</span>
          </h2>

          <p className="text-lg mb-10 max-w-lg mx-auto text-foreground/50 font-light">
            Fique atento.{" "}
            <strong className="text-foreground font-medium">Algumas peças esgotam no mesmo dia.</strong>
            {" "}Nossa consultora <strong className="text-foreground font-medium">{consultora.nome}</strong> te avisa primeiro.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLead}
            className="group inline-flex items-center gap-3 bg-gradient-cta text-white font-display font-medium text-lg md:text-xl px-10 md:px-14 py-5 md:py-6 rounded-full glow-whatsapp animate-pulse-glow transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            FALAR COM {consultora.nome.toUpperCase()}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-sm mt-6 text-foreground/40 font-light">
            ✅ Atendimento direto &nbsp;•&nbsp; ✅ Sem spam &nbsp;•&nbsp; ✅ Lançamentos em primeira mão
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
