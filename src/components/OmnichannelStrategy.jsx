import React from "react";
import { motion } from "framer-motion";
import { MousePointerClick, Link2, Share2 } from "lucide-react";

const cards = [
  {
    title: "Paid Acquisition",
    desc: "Immediate traffic injection to test offers and capture high-intent bottom-of-funnel demand at scale.",
    icon: MousePointerClick,
    accent: "white",
    elevated: false,
  },
  {
    title: "Organic Search",
    desc: "Building long-term, compounding asset value through technical architecture and topical authority.",
    icon: Link2,
    accent: "gold",
    elevated: true,
  },
  {
    title: "Social Nurturing",
    desc: "Transforming cold traffic into loyal brand advocates through strategic retargeting and community.",
    icon: Share2,
    accent: "white",
    elevated: false,
  },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 40,
    scale: 0.95,
  }),
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const OmnichannelStrategy = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 mesh-dark pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-dashed border-gold/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-24"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-4 block">
            Omnichannel
          </span>
          <h2 className="text-5xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unified
            <br />
            <span className="text-gradient-gold">Ecosystem</span>
          </h2>
          <p className="text-white/40 text-base font-light leading-relaxed">
            Siloed marketing is dead. We engineer ecosystems where Paid Media,
            SEO, and Social work in perfect harmony, creating a compounding
            growth effect.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-px bg-gold/20 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {cards.map((card, i) => {
              const Icon = card.icon;
              const isGold = card.accent === "gold";
              return (
                <motion.div
                  key={card.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className={`relative z-10 p-8 rounded-2xl ${
                    card.elevated
                      ? "glass-gold glow-gold md:-mt-5 border border-gold/30"
                      : "glass-dark border border-white/[0.08]"
                  } border-t-2 ${
                    isGold ? "border-t-gold" : "border-t-white/20"
                  } transition-all duration-500 hover:-translate-y-2`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                      isGold
                        ? "bg-gold/15 border border-gold/30"
                        : "bg-white/10 border border-white/15"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isGold ? "text-gold" : "text-white/70"}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelStrategy;
