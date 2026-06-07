import React from "react";
import { motion } from "framer-motion";
import { Network, Link2, Share2, MousePointerClick } from "lucide-react";

const OmnichannelStrategy = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-dark-bg">
      <div className="absolute inset-0 bg-dark-bg/95 mix-blend-multiply" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Unified <span className="text-gradient">Omnichannel</span> Synergy
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Siloed marketing is dead. We engineer ecosystems where Paid Media, SEO, and Content work in perfect harmony, creating a compounding growth effect that dramatically lowers overall acquisition costs.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Abstract connecting lines background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] border border-white/5 rounded-full animate-[spin_40s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[300px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass p-8 rounded-2xl text-center relative z-10 bg-dark-bg/80 backdrop-blur-md"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-500/20 flex items-center justify-center mb-6 border border-brand-500/30">
                <MousePointerClick className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">Paid Acquisition</h3>
              <p className="text-gray-400 text-sm font-light">Immediate traffic injection to test offers and capture high-intent bottom-of-funnel demand.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass p-8 rounded-2xl text-center relative z-10 bg-dark-bg/80 backdrop-blur-md mt-0 md:mt-12"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-accent-cyan/20 flex items-center justify-center mb-6 border border-accent-cyan/30">
                <Link2 className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">Organic Search</h3>
              <p className="text-gray-400 text-sm font-light">Building long-term, compounding asset value through technical architecture and authority.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass p-8 rounded-2xl text-center relative z-10 bg-dark-bg/80 backdrop-blur-md"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-accent-blue/20 flex items-center justify-center mb-6 border border-accent-blue/30">
                <Share2 className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">Social Nurturing</h3>
              <p className="text-gray-400 text-sm font-light">Transforming cold traffic into loyal brand advocates through strategic retargeting and community.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelStrategy;
