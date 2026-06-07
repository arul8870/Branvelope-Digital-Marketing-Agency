import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-brand-600 via-accent-cyan to-accent-blue opacity-20 filter blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-12 md:p-16 rounded-[2.5rem] border border-white/20 shadow-2xl backdrop-blur-2xl bg-white/5 relative overflow-hidden"
        >
          {/* Subtle inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-white/10 filter blur-[50px] rounded-full pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 relative z-10 tracking-tight">
            Ready to Dominate <br /> Your Market?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto relative z-10">
            Stop settling for incremental growth. Partner with Branvelope and architect a predictable revenue engine that scales.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-dark-bg font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] group">
              Schedule Growth Strategy
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-gray-400 text-sm font-medium px-4">
              Free 30-min consultation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
