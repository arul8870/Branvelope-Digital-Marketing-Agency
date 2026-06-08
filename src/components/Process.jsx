import React from "react";
import { motion } from "framer-motion";

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

const Process = () => {
  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid-light pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-gold text-xs tracking-widest font-semibold uppercase block mb-4">
            Process
          </span>
          <h2 className="text-5xl font-black text-black leading-tight">
            The Growth<br />
            <span className="text-gradient-gold">Engine</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:-translate-x-px" />

          <div className="flex flex-col gap-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={step.num} className="relative">
                  <div
                    className={`
                      absolute top-0 w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center
                      ${isLeft ? 'left-0 md:left-1/2 md:-translate-x-1/2' : 'left-0 md:left-1/2 md:-translate-x-1/2'}
                      hover:shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-shadow duration-500
                      bg-white z-10
                    `}
                  >
                    <span className="text-lg font-bold text-gold">{step.num}</span>
                  </div>

                  <div
                    className={`
                      ml-24 md:ml-0 md:w-[calc(50%-60px)]
                      ${isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}
                    `}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="p-6 rounded-xl border-2 border-black/5 hover:border-gold/40 hover:shadow-[0_8px_35px_rgba(212,175,55,0.08)] transition-all duration-300 bg-white"
                    >
                      <h3 className="text-xl font-semibold text-black mb-3">
                        {step.title}
                      </h3>
                      <p className="text-black/40 font-light text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
