import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  "Data-Driven Decisions",
  "Agile Optimization",
  "Proprietary Models",
  "Elite Teams",
  "Transparent ROI",
  "Omnichannel Synergy",
];

const UniqueAdvantages = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pattern-dots-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-4 block">
              The Edge
            </span>
            <h2 className="text-5xl font-bold text-black mb-6 leading-tight">
              Competitive
              <br />
              <span className="text-gradient-gold">Advantage</span>
            </h2>
            <p className="text-black/40 text-base font-light leading-relaxed mb-10">
              In a crowded digital landscape, generic strategies fail. We
              provide a decisive edge through deep technical expertise, ruthless
              optimization, and a fundamental understanding of business
              economics.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {advantages.map((adv, index) => (
                <motion.div
                  key={adv}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-black/60 text-sm font-medium">{adv}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute w-80 h-80 bg-gold/5 blur-3xl rounded-full pointer-events-none" />

            <div className="w-80 h-80 rounded-full border-2 border-black/8 relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-56 h-56 rounded-full border border-gold/20" />
              </motion.div>

              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center relative z-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-2 border-black/5">
                <div className="text-center">
                  <span className="block text-3xl font-bold text-gradient-gold">10x</span>
                  <span className="text-[10px] text-black/40 tracking-widest uppercase">Growth</span>
                </div>
              </div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
                <div className="absolute bottom-8 right-0 w-2.5 h-2.5 rounded-full bg-black/20" />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/40" />
              </motion.div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
                <line x1="160" y1="8" x2="280" y2="260" stroke="rgba(212,175,55,0.15)" strokeWidth="1" />
                <line x1="280" y1="260" x2="8" y2="160" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                <line x1="8" y1="160" x2="160" y2="8" stroke="rgba(212,175,55,0.1)" strokeWidth="1" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniqueAdvantages;
