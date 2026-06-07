import React from "react";
import { motion } from "framer-motion";
import { Building2, ShoppingBag, Stethoscope, Briefcase, Cpu } from "lucide-react";

const Industries = () => {
  const industries = [
    { icon: <Cpu className="w-8 h-8" />, name: "Technology & SaaS" },
    { icon: <ShoppingBag className="w-8 h-8" />, name: "E-Commerce" },
    { icon: <Stethoscope className="w-8 h-8" />, name: "Healthcare" },
    { icon: <Building2 className="w-8 h-8" />, name: "Real Estate" },
    { icon: <Briefcase className="w-8 h-8" />, name: "B2B Services" },
  ];

  return (
    <section id="industries" className="py-24 border-y border-white/[0.05] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Transforming <span className="text-gradient">Industries</span>
          </h2>
          <p className="text-gray-400 font-light">
            Specialized marketing ecosystems tailored to sector-specific challenges.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 px-8 py-4 rounded-full glass hover:bg-white/[0.08] transition-all cursor-pointer group"
            >
              <div className="text-gray-500 group-hover:text-brand-400 transition-colors">
                {ind.icon}
              </div>
              <span className="text-white font-medium">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
