import React from "react";
import { motion } from "framer-motion";
import { Database, Activity, Layers, AppWindow } from "lucide-react";

const stackItems = [
  {
    category: "Data & Warehousing",
    desc: "Centralized data lakes unifying every customer touchpoint to power predictive analytics.",
    icon: Database,
    span: "md:col-span-2",
    metric: "12B+",
    metricLabel: "Events Processed Daily",
    visual: "dots",
  },
  {
    category: "Marketing Automation",
    desc: "Enterprise-grade orchestration for hyper-personalized behavioral campaigns.",
    icon: Activity,
    span: "md:col-span-1",
    metric: "98.7%",
    metricLabel: "Delivery Rate",
    visual: "wave",
  },
  {
    category: "Programmatic Media",
    desc: "Real-time bidding infrastructure connected directly to premium ad exchanges.",
    icon: Layers,
    span: "md:col-span-1",
    metric: "<12ms",
    metricLabel: "Bid Latency",
    visual: "pulse",
  },
  {
    category: "CRM Integration",
    desc: "Seamless bidirectional sync tracking full-funnel from first click to closed-won revenue.",
    icon: AppWindow,
    span: "md:col-span-2",
    metric: "360\u00B0",
    metricLabel: "Customer View",
    visual: "grid",
  },
];

const DotsVisual = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-gold"
        style={{ left: `${10 + (i % 6) * 16}%`, top: `${15 + Math.floor(i / 6) * 20}%` }}
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
      />
    ))}
  </div>
);

const WaveVisual = () => (
  <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden pointer-events-none opacity-20">
    <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
      <motion.path
        d="M0,30 Q25,10 50,30 T100,30 T150,30 T200,30 V60 H0 Z"
        fill="currentColor"
        className="text-gold"
        animate={{ d: ["M0,30 Q25,10 50,30 T100,30 T150,30 T200,30 V60 H0 Z", "M0,25 Q25,45 50,25 T100,25 T150,25 T200,25 V60 H0 Z", "M0,30 Q25,10 50,30 T100,30 T150,30 T200,30 V60 H0 Z"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);

const PulseVisual = () => (
  <div className="absolute top-4 right-4 pointer-events-none">
    <motion.div
      className="w-3 h-3 rounded-full bg-gold"
      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.div
      className="absolute inset-0 w-3 h-3 rounded-full border border-gold"
      animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </div>
);

const GridVisual = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
    <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5">
      {Array.from({ length: 16 }).map((_, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-sm bg-gold"
          animate={{ opacity: [0.1, 0.5, 0.1] }}
          transition={{ duration: 2.5, delay: i * 0.1, repeat: Infinity }}
        />
      ))}
    </div>
  </div>
);

const visualMap = {
  dots: DotsVisual,
  wave: WaveVisual,
  pulse: PulseVisual,
  grid: GridVisual,
};

const TechStack = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 pattern-grid-light pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-px bg-gold/15 rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-4 block">
            Technology
          </span>
          <h2 className="text-5xl font-black text-black leading-tight">
            Enterprise
            <br />
            <span className="text-gradient-gold">Marketing Stack</span>
          </h2>
          <p className="text-black/40 text-lg font-light mt-6 leading-relaxed">
            We don't rely on basic tools. We deploy an enterprise-grade infrastructure
            designed to capture every data point and provide absolute clarity on ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stackItems.map((item, index) => {
            const Icon = item.icon;
            const Visual = visualMap[item.visual];
            return (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group rounded-2xl border-2 border-black/[0.06] bg-offwhite-100 p-8 overflow-hidden hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(212,175,55,0.1)] transition-all duration-500 ${item.span}`}
              >
                <Visual />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-full border-2 border-gold/25 flex items-center justify-center bg-gold/[0.05] group-hover:border-gold/50 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.12)] transition-all duration-300">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-black group-hover:text-gold transition-colors duration-300">
                        {item.metric}
                      </div>
                      <div className="text-black/30 text-[10px] uppercase tracking-wider">
                        {item.metricLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.category}
                  </h3>
                  <p className="text-black/40 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-black/[0.05]">
                    <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn more</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
