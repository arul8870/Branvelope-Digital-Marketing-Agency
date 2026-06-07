import React from "react";
import { motion } from "framer-motion";

const ContentFramework = () => {
  const stages = [
    {
      label: "Top of Funnel (TOFU)",
      title: "Awareness & Discovery",
      desc: "Capturing broad market attention through educational content, thought leadership, and high-level industry insights.",
      metrics: "Traffic, Reach, Brand Lift",
      color: "border-brand-500",
      bg: "bg-brand-500/10",
    },
    {
      label: "Middle of Funnel (MOFU)",
      title: "Evaluation & Consideration",
      desc: "Positioning your solution through in-depth whitepapers, webinars, and comparative analysis to build deep trust.",
      metrics: "Lead Volume, Engagement Time",
      color: "border-accent-cyan",
      bg: "bg-accent-cyan/10",
    },
    {
      label: "Bottom of Funnel (BOFU)",
      title: "Conversion & Action",
      desc: "Deploying high-intent assets like technical documentation, precise ROI calculators, and hyper-targeted sales enablement materials.",
      metrics: "Conversion Rate, CAC",
      color: "border-accent-blue",
      bg: "bg-accent-blue/10",
    },
  ];

  return (
    <section className="py-24 bg-dark-bg border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Full-Funnel <span className="text-gradient">Content Architecture</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Content is not art; it is an engineered pathway to revenue. We map highly specific assets to exact stages of the buyer psychology.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass p-8 md:p-10 rounded-2xl border-l-4 ${stage.color} relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-64 h-full ${stage.bg} blur-[80px] group-hover:opacity-100 opacity-50 transition-opacity`} />
              
              <div className="grid md:grid-cols-3 gap-8 relative z-10 items-center">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">
                    {stage.label}
                  </span>
                  <h3 className="text-2xl font-display font-semibold text-white">
                    {stage.title}
                  </h3>
                </div>
                
                <div className="md:col-span-2 flex flex-col justify-between h-full">
                  <p className="text-gray-400 font-light leading-relaxed mb-6">
                    {stage.desc}
                  </p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Primary Metrics:</span>
                    <span className="text-sm font-medium text-white">{stage.metrics}</span>
                  </div>
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
