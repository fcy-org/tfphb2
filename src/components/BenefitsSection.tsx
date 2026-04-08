import { motion } from "framer-motion";
import { Sparkles, Package, Bell, Zap } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Novidades recém-chegadas",
    desc: "Saiba na hora em que as peças mais novas da coleção chegam na loja de Parnaíba, antes de qualquer pessoa.",
  },
  {
    icon: Package,
    title: "Peças selecionadas",
    desc: "Curadoria das peças mais desejadas da Track&Field. Só o que vale a pena chega aqui.",
  },
  {
    icon: Bell,
    title: "Avisos antecipados",
    desc: "Receba no WhatsApp os avisos de lançamento antes mesmo de as peças chegarem nas prateleiras.",
  },
  {
    icon: Zap,
    title: "Algumas esgotam no mesmo dia",
    desc: "Certos modelos chegam em unidades limitadas e somem rápido. Estar no grupo é a diferença entre garantir ou perder.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-white border-t border-black/[0.06]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-light text-3xl md:text-5xl mb-4 text-foreground">
            O que você vai{" "}
            <span className="text-gradient-gold font-medium">encontrar no grupo</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto text-foreground/50 font-light">
            Criado para quem quer estar sempre um passo à frente na Track&Field Parnaíba.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-8 border border-black/[0.07] bg-white transition-shadow group"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px hsl(0 0% 0% / 0.07)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-black/[0.04]">
                <b.icon className="w-6 h-6" style={{ color: "hsl(42 95% 46%)" }} />
              </div>
              <h3 className="font-display font-medium text-xl mb-2 text-foreground">{b.title}</h3>
              <p className="leading-relaxed text-foreground/50 font-light">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
