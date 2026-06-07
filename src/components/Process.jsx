import React from "react";
import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Audit",
      desc: "Deep-dive analysis of your current digital footprint, market positioning, and untapped opportunities.",
    },
    {
      num: "02",
      title: "Strategic Blueprint",
      desc: "Architecting a customized, multi-channel growth plan aligned with your specific revenue targets.",
    },
    {
      num: "03",
      title: "Precision Execution",
      desc: "Deploying campaigns across optimal channels with rapid, agile implementation cycles.",
    },
    {
      num: "04",
      title: "Scale & Optimize",
      desc: "Continuous data analysis, A/B testing, and budget reallocation to maximize ROAS and scale winners.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            The Growth <span className="text-gradient">Engine</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
            A systematic, predictable approach to scaling your brand. No guesswork. Just engineered success.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-6 mx-auto md:mx-0 relative z-10 bg-dark-bg group-hover:border-brand-500 transition-colors duration-300">
                  <span className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-accent-cyan">
                    {step.num}
                  </span>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
