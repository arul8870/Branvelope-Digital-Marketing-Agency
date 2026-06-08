import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 mesh-dark pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2 rounded-full glass-dark border border-gold/20 text-gold text-xs font-medium uppercase tracking-widest mb-10"
          >
            Ready to grow?
          </motion.span>

          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.95] tracking-tight mb-12">
            Let's Build
            <br />
            Something
            <br />
            <span className="text-gradient-gold">Extraordinary</span>
          </h1>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 rounded-full bg-gold text-black font-bold text-lg glow-gold-strong transition-shadow shadow-[0_4px_30px_rgba(212,175,55,0.25)]"
            >
              Schedule a Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-5 rounded-full glass-dark border border-gold/20 text-white font-bold text-lg hover:border-gold/50 hover:bg-gold/5 transition-colors"
            >
              View Case Studies
            </motion.button>
          </div>

          <p className="text-white/30 text-sm font-light">
            Free 30-minute strategy consultation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
