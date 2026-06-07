import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const UniqueAdvantages = () => {
  const points = [
    "Data-Driven Decision Making",
    "Agile Campaign Optimization",
    "Proprietary Analytics Models",
    "Elite Cross-Functional Teams",
    "Transparent ROI Tracking",
    "Omnichannel Synergy",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              The Elevate <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              In a crowded digital landscape, generic strategies fail. We provide a competitive edge through deep technical expertise, ruthless optimization, and a fundamental understanding of business economics.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                  <span className="text-gray-300 text-sm font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Abstract visual representation of advantages */}
            <div className="aspect-square rounded-full border border-white/10 relative flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-white/10 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                 <div className="w-4 h-4 bg-accent-cyan rounded-full absolute -top-2 filter blur-[2px]" />
              </div>
              <div className="absolute inset-12 rounded-full border border-white/10 flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
                <div className="w-6 h-6 bg-brand-500 rounded-full absolute -bottom-3 filter blur-[4px]" />
              </div>
              <div className="absolute inset-24 rounded-full glass flex items-center justify-center">
                 <div className="text-center">
                    <span className="block text-4xl font-display font-bold text-white mb-1">10x</span>
                    <span className="text-xs text-brand-300 font-medium tracking-widest uppercase">Growth Matrix</span>
                 </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/20 filter blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UniqueAdvantages;
