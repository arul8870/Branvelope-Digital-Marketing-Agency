import React from "react";
import { motion } from "framer-motion";

const stages = [
  {
    label: "TOFU",
    title: "Awareness & Discovery",
    desc: "Capturing broad market attention through educational content, thought leadership, and high-level industry insights that position your brand as the go-to authority.",
    metrics: ["Traffic", "Reach", "Brand Lift"],
    border: "border-l-gold",
    bg: "bg-gold/5",
    maxW: "max-w-3xl",
  },
  {
    label: "MOFU",
    title: "Evaluation & Consideration",
    desc: "Positioning your solution through in-depth whitepapers, webinars, and comparative analysis to build deep trust and shortlist preference.",
    metrics: ["Lead Volume", "Engagement Time", "MQLs"],
    border: "border-l-black/20",
    bg: "bg-black/[0.02]",
    maxW: "max-w-4xl",
  },
  {
    label: "BOFU",
    title: "Conversion & Action",
    desc: "Deploying high-intent assets like technical documentation, ROI calculators, and hyper-targeted sales enablement materials that close deals.",
    metrics: ["Conversion Rate", "CAC", "Revenue"],
    border: "border-l-gold",
    bg: "bg-gold/5",
    maxW: "max-w-5xl",
  },
];

const ContentFramework = () => {
  return (
    <section className="py-32 bg-black">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pattern-dots-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
            CONTENT
          </span>
          <h2 className="text-5xl font-black text-white mb-6">
            Full-Funnel{" "}
            <span className="text-gradient-gold">Architecture</span>
          </h2>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            Content is not art; it is an engineered pathway to revenue. We map
            highly specific assets to exact stages of the buyer psychology.
          </p>
        </motion.div>

        <div className="flex flex-col items-center space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`w-full ${stage.maxW} glass-dark p-8 rounded-xl border-l-4 ${stage.border} ${stage.bg} relative overflow-hidden group hover:shadow-[0_8px_35px_rgba(212,175,55,0.06)] hover:scale-[1.01] transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className="text-gold text-[11px] font-bold uppercase tracking-[0.3em] mb-2 block">
                    {stage.label}
                  </span>
                  <h3 className="text-2xl font-black text-white mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-white/40 font-light leading-relaxed text-sm">
                    {stage.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:shrink-0">
                  {stage.metrics.map((m) => (
                    <span
                      key={m}
                      className="px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-gold/15 text-gold/70"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentFramework;
