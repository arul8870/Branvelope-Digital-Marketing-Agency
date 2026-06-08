import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    client: "FinTech Innovators",
    metric: "320%",
    desc: "Increase in qualified enterprise leads through a restructured B2B content ecosystem and Account-Based Marketing strategy.",
    tags: ["ABM", "Content Strategy", "SEO"],
    height: "h-56",
  },
  {
    client: "Global E-Commerce",
    metric: "5x ROAS",
    desc: "Achieved across paid social channels by implementing proprietary predictive bidding models.",
    tags: ["Performance Media", "Data Science"],
    height: "h-40",
  },
  {
    client: "SaaS Unicorn",
    metric: "68%",
    metricIcon: "\u2193",
    desc: "Decrease in Customer Acquisition Cost within 6 months of launching our omnichannel conversion loops.",
    tags: ["CRO", "Paid Search", "Automation"],
    height: "h-48",
  },
];

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pattern-dots-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold mb-4 block">
            Case Studies
          </span>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Proven
            <br />
            <span className="text-gradient-gold">Impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group cursor-pointer ${
                index === 1 ? "lg:mt-16" : index === 2 ? "lg:mt-8" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="rounded-2xl overflow-hidden glass-dark border border-gold/10 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2">
                <div
                  className={`${study.height} bg-gradient-to-br from-gold/20 via-gold/10 to-black relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/0 transition-colors duration-500" />
                  <div className="relative z-10 flex items-baseline gap-2">
                    <span className="text-white font-bold text-4xl tracking-tight drop-shadow-lg">
                      {study.metric}
                    </span>
                    {study.metricIcon && (
                      <span className="text-gold font-bold text-3xl drop-shadow-lg">
                        {study.metricIcon}
                      </span>
                    )}
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{
                        opacity: hoveredCard === index ? 1 : 0,
                        x: hoveredCard === index ? 0 : -8,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-white/70" />
                    </motion.span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {study.client}
                  </h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed mb-6">
                    {study.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full border border-gold/20 text-gold/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
