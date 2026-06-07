import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CaseStudies = () => {
  const cases = [
    {
      client: "FinTech Innovators",
      metric: "320% Increase",
      desc: "in qualified enterprise leads through a restructured B2B content ecosystem and Account-Based Marketing.",
      tags: ["ABM", "Content Strategy", "SEO"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      client: "Global E-Commerce Brand",
      metric: "5x ROAS",
      desc: "achieved across paid social channels by implementing proprietary predictive bidding models.",
      tags: ["Performance Media", "Data Science"],
      color: "from-brand-500/20 to-purple-500/20",
    },
    {
      client: "SaaS Unicorn",
      metric: "68% Decrease",
      desc: "in Customer Acquisition Cost (CAC) within 6 months of launching our omnichannel conversion loops.",
      tags: ["CRO", "Paid Search", "Automation"],
      color: "from-emerald-500/20 to-teal-500/20",
    },
  ];

  return (
    <section className="py-24 bg-dark-bg border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Proven <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We don't just formulate theories; we execute and win. Explore how we've fundamentally transformed the growth trajectory for category leaders.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-colors flex items-center gap-2 group">
              View All Studies
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`h-48 rounded-t-2xl bg-gradient-to-br ${study.color} border-t border-l border-r border-white/10 relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-dark-bg/40 group-hover:bg-transparent transition-colors duration-500" />
                <span className="relative z-10 text-white font-display font-bold text-3xl tracking-tight drop-shadow-lg scale-95 group-hover:scale-100 transition-transform duration-500">
                  {study.metric}
                </span>
              </div>
              <div className="glass p-8 rounded-b-2xl border border-white/10 border-t-0">
                <h3 className="text-xl font-semibold text-white mb-3 flex justify-between items-center">
                  {study.client}
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  {study.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
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
