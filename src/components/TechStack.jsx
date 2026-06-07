import React from "react";
import { motion } from "framer-motion";
import { Database, Activity, Layers, AppWindow, Cpu } from "lucide-react";

const TechStack = () => {
  const stackItems = [
    {
      category: "Data & Warehousing",
      icon: <Database className="w-6 h-6 text-brand-400" />,
      desc: "Centralized data lakes to unify customer touchpoints and power predictive models.",
    },
    {
      category: "Marketing Automation",
      icon: <Activity className="w-6 h-6 text-accent-cyan" />,
      desc: "Enterprise-grade orchestration for hyper-personalized, triggered behavioral campaigns.",
    },
    {
      category: "Programmatic Media",
      icon: <Layers className="w-6 h-6 text-accent-blue" />,
      desc: "Real-time bidding infrastructure connected directly to premium ad exchanges.",
    },
    {
      category: "CRM & Sales Alignment",
      icon: <AppWindow className="w-6 h-6 text-brand-400" />,
      desc: "Seamless bidirectional sync with major CRMs to track full-funnel closed-won revenue.",
    },
  ];

  return (
    <section className="py-24 bg-dark-bg border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-accent-cyan text-xs font-medium mb-6">
              <Cpu className="w-4 h-4" />
              <span>Enterprise Infrastructure</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              The Modern <br />
              <span className="text-gradient">Marketing Stack</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              We don't rely on basic tools. We deploy an enterprise-grade infrastructure designed to capture every data point, automate complex workflows, and provide absolute clarity on ROI.
            </p>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-colors">
              Explore Our Tech
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
          >
            {stackItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors border border-white/[0.05]"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {item.category}
                </h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
