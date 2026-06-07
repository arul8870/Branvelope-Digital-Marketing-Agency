import React from "react";
import { motion } from "framer-motion";

const Statistics = () => {
  const stats = [
    { value: "$2.4B+", label: "Revenue Generated" },
    { value: "450%", label: "Average ROI Increase" },
    { value: "12M+", label: "Leads Acquired" },
    { value: "98%", label: "Client Retention" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-900/20 border-y border-brand-500/20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-600/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            By The <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">
            We let our performance metrics speak for themselves. This is the scale of growth we engineer for our partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 glass rounded-2xl border border-white/10 hover:border-brand-500/50 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-2">
                {stat.value}
              </div>
              <div className="text-brand-300 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
