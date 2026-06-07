import React from "react";
import { motion } from "framer-motion";
import { RefreshCw, BarChart2, Eye, GitMerge } from "lucide-react";

const OptimizationLoop = () => {
  return (
    <section className="py-24 relative bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Visual representation of a loop */}
            <div className="aspect-square max-w-md mx-auto relative flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />
              
              <div className="grid grid-cols-2 gap-4 relative z-10 w-full h-full p-8">
                <div className="glass rounded-full flex flex-col items-center justify-center gap-2 border border-white/10 hover:border-brand-500 transition-colors">
                  <Eye className="w-6 h-6 text-brand-400" />
                  <span className="text-xs text-white font-medium">Observe</span>
                </div>
                <div className="glass rounded-full flex flex-col items-center justify-center gap-2 border border-white/10 hover:border-accent-cyan transition-colors">
                  <BarChart2 className="w-6 h-6 text-accent-cyan" />
                  <span className="text-xs text-white font-medium">Analyze</span>
                </div>
                <div className="glass rounded-full flex flex-col items-center justify-center gap-2 border border-white/10 hover:border-accent-blue transition-colors">
                  <GitMerge className="w-6 h-6 text-accent-blue" />
                  <span className="text-xs text-white font-medium">Hypothesize</span>
                </div>
                <div className="glass rounded-full flex flex-col items-center justify-center gap-2 border border-white/10 hover:border-brand-400 transition-colors">
                  <RefreshCw className="w-6 h-6 text-brand-400" />
                  <span className="text-xs text-white font-medium">Test</span>
                </div>
              </div>

              {/* Central Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-brand-600/20 filter blur-[20px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-dark-bg border border-brand-500 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <span className="font-display font-bold text-white text-sm">CRO</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              The Continuous <br />
              <span className="text-gradient">Optimization Loop</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              We never "set it and forget it". Our Conversion Rate Optimization (CRO) methodology ensures your digital assets are constantly evolving, leveraging statistical significance to incrementally increase yield.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: "Behavioral Heatmapping", desc: "Tracking user interaction patterns to eliminate friction." },
                { title: "Multivariate Testing", desc: "Simultaneously testing headlines, layouts, and CTAs." },
                { title: "Velocity Adjustments", desc: "Real-time budget shifts toward highest-performing variants." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center shrink-0 mt-1 text-brand-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OptimizationLoop;
