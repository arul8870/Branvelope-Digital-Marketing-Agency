import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

const chartBars = [40, 70, 45, 90, 60, 80];

const AISolutions = () => {
  return (
    <section id="ai-solutions" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid-light pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
              AI SOLUTIONS
            </span>
            <h2 className="text-5xl font-display font-bold text-black mb-6">
              Powered by <br />
              <span className="text-gradient-gold">AI Models</span>
            </h2>
            <p className="text-black/40 text-lg font-light leading-relaxed mb-10">
              We leverage proprietary machine learning algorithms to predict
              consumer behavior, automate real-time bidding optimizations, and
              generate hyper-personalized content at scale.
            </p>

            <ul className="space-y-4">
              {[
                "Predictive LTV Modeling",
                "Automated Media Buying Optimization",
                "Dynamic Creative Personalization",
                "Sentiment Analysis & Trend Forecasting",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span className="text-black/50 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl border-2 border-black/8 overflow-hidden bg-white premium-shadow relative group">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-gold/10 via-transparent to-gold/5 opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none" />

              <div className="h-1 bg-gradient-to-r from-gold/40 via-gold to-gold/40" />

              <div className="flex justify-between items-center px-6 py-4 border-b border-black/5">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="w-5 h-5 text-gold" />
                  <span className="text-black font-display font-medium text-sm">
                    AI Analytics
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>
              </div>

              <div className="px-6 pt-6 pb-4">
                <div className="h-44 flex items-end justify-between gap-3">
                  {chartBars.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-gold/80 to-gold/30"
                    />
                  ))}
                </div>
              </div>

              <div className="px-6 pb-6 grid grid-cols-2 gap-4">
                <div className="bg-black/[0.03] rounded-lg p-4 border border-black/5">
                  <span className="text-black/40 text-xs block mb-1">
                    Conversion Prediction
                  </span>
                  <span className="text-2xl font-bold text-gold">+34.8%</span>
                </div>
                <div className="bg-black/[0.03] rounded-lg p-4 border border-black/5">
                  <span className="text-black/40 text-xs block mb-1">
                    CPA Optimization
                  </span>
                  <span className="text-2xl font-bold text-black">-18.2%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
