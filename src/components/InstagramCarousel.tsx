import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  "https://www.instagram.com/p/DWg4xF9Gk0A/",
  "https://www.instagram.com/p/DWcLpEMGg4H/",
  "https://www.instagram.com/p/DWcGyhsGqMC/",
  "https://www.instagram.com/p/DS8XiPnkkKf/",
  "https://www.instagram.com/p/DWXWE20mtY5/",
  "https://www.instagram.com/p/DV3jvTsjdkU/",
];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const InstagramCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const loadEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement("script");
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };
    loadEmbed();
  }, []);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -360 : 360, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display font-light text-3xl md:text-4xl text-foreground mb-2">
            Veja o que está{" "}
            <span className="text-gradient-gold font-medium">chegando na loja</span>
          </h2>
          <p className="text-foreground/45 font-light">
            Publicações recentes do nosso Instagram
          </p>
        </motion.div>

        <div className="relative">
          {/* Botão esquerdo */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Botão direito */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-black/10 shadow-md flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Scroll container */}
          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {posts.map((url, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ scrollSnapAlign: "start", width: 328 }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "1px solid hsl(0 0% 88%)",
                    borderRadius: 12,
                    margin: 0,
                    maxWidth: 328,
                    minWidth: 326,
                    padding: 0,
                    width: "100%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Esconder scrollbar no webkit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default InstagramCarousel;
