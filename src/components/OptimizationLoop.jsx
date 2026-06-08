import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, BarChart2, Eye, GitMerge } from "lucide-react";

const spokes = [
  {
    icon: Eye,
    label: "Observe",
    color: "text-white/60",
    borderColor: "border-white/15",
    angle: 0,
    lineRotate: 0,
  },
  {
    icon: BarChart2,
    label: "Analyze",
    color: "text-gold",
    borderColor: "border-gold/30",
    angle: 90,
    lineRotate: 90,
  },
  {
    icon: GitMerge,
    label: "Hypothesize",
    color: "text-white/60",
    borderColor: "border-white/15",
    angle: 180,
    lineRotate: 180,
  },
  {
    icon: RefreshCw,
    label: "Test",
    color: "text-gold",
    borderColor: "border-gold/30",
    angle: 270,
    lineRotate: 270,
  },
];

const OptimizationLoop = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white border-2 border-gold flex items-center justify-center z-10 shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
              >
                <span className="font-display font-bold text-gold text-lg">CRO</span>
              </motion.div>

              {spokes.map((spoke, i) => {
                const Icon = spoke.icon;
                const rad = (spoke.angle * Math.PI) / 180;
                const radius = 130;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                const lineLen = radius - 48;

                return (
                  <React.Fragment key={i}>
                    <div
                      className="absolute top-1/2 left-1/2 origin-left bg-black/10"
                      style={{
                        width: `${lineLen}px`,
                        height: "1px",
                        transform: `rotate(${spoke.lineRotate}deg)`,
                      }}
                    />

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                      className="absolute top-1/2 left-1/2 z-10"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div
                        className={`w-14 h-14 rounded-full bg-white flex flex-col items-center justify-center border ${spoke.borderColor} hover:scale-110 transition-transform cursor-default shadow-[0_4px_15px_rgba(0,0,0,0.05)]`}
                      >
                        <Icon className={`w-5 h-5 ${spoke.color}`} />
                        <span className="text-[9px] text-black/40 font-semibold mt-0.5">
                          {spoke.label}
                        </span>
                      </div>
                    </motion.div>
                  </React.Fragment>
                );
              })}

              <div className="absolute inset-0 rounded-full border border-dashed border-black/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-display font-bold text-black mb-6">
              Continuous <br />
              <span className="text-gradient-gold">Optimization</span>
            </h2>
            <p className="text-black/40 text-lg font-light leading-relaxed mb-10">
              We never set it and forget it. Our CRO methodology ensures your
              digital assets are constantly evolving, leveraging statistical
              significance to incrementally increase yield.
            </p>

            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Behavioral Heatmapping",
                  desc: "Tracking user interaction patterns to eliminate friction and boost engagement.",
                },
                {
                  num: "02",
                  title: "Multivariate Testing",
                  desc: "Simultaneously testing headlines, layouts, and CTAs for maximum impact.",
                },
                {
                  num: "03",
                  title: "Velocity Adjustments",
                  desc: "Real-time budget shifts toward highest-performing variants instantly.",
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-5">
                  <span className="text-gold font-display font-bold text-2xl leading-none mt-1">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-black font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-black/40 text-sm font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationLoop;
