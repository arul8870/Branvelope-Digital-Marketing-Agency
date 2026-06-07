import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Network } from "lucide-react";

const AISolutions = () => {
  return (
    <section id="ai-solutions" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            {/* Dashboard Mockup Representation */}
            <div className="glass rounded-2xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-accent-cyan to-accent-blue" />
              
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="text-accent-cyan w-6 h-6" />
                  <span className="text-white font-display font-medium">AI Predictive Analytics</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              {/* Fake Chart Area */}
              <div className="h-48 flex items-end justify-between gap-2 mb-6">
                {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="w-full bg-gradient-to-t from-brand-600/50 to-brand-400/80 rounded-t-sm relative group-hover:from-accent-cyan/50 group-hover:to-accent-blue/80 transition-colors"
                  />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-bg/50 rounded-lg p-4 border border-white/5">
                  <span className="text-gray-400 text-xs block mb-1">Conversion Prediction</span>
                  <span className="text-2xl font-bold text-white">+34.8%</span>
                </div>
                <div className="bg-dark-bg/50 rounded-lg p-4 border border-white/5">
                  <span className="text-gray-400 text-xs block mb-1">CPA Optimization</span>
                  <span className="text-2xl font-bold text-accent-cyan">-18.2%</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-accent-cyan text-xs font-medium mb-6">
              <Network className="w-4 h-4" />
              <span>Next-Generation Intelligence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Powered by <span className="text-gradient">AI Models</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              We leverage proprietary machine learning algorithms to predict consumer behavior, automate real-time bidding optimizations, and generate hyper-personalized content at scale.
            </p>
            
            <ul className="space-y-4">
              {[
                "Predictive LTV Modeling",
                "Automated Media Buying Optimization",
                "Dynamic Creative Personalization",
                "Sentiment Analysis & Trend Forecasting"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISolutions;
