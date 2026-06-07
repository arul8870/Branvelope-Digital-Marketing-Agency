import React from "react";
import { motion } from "framer-motion";
import { Search, Share2, BarChart, FileText, Code, Bot } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Search className="w-6 h-6 text-brand-400" />,
      title: "Advanced SEO",
      desc: "Algorithmic dominance to capture high-intent organic traffic.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-accent-cyan" />,
      title: "Performance Marketing",
      desc: "Data-driven media buying engineered for maximum ROI.",
    },
    {
      icon: <Share2 className="w-6 h-6 text-accent-blue" />,
      title: "Social Authority",
      desc: "Building fiercely loyal communities across core social channels.",
    },
    {
      icon: <FileText className="w-6 h-6 text-brand-400" />,
      title: "Content Ecosystems",
      desc: "High-converting assets that educate, engage, and convert.",
    },
    {
      icon: <Code className="w-6 h-6 text-accent-cyan" />,
      title: "Digital Platforms",
      desc: "Enterprise-grade web experiences optimized for conversion.",
    },
    {
      icon: <Bot className="w-6 h-6 text-accent-blue" />,
      title: "AI Marketing Automation",
      desc: "Machine learning workflows that personalize experiences at scale.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white/[0.02] border-y border-white/[0.05]">
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
              Core <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We deploy full-funnel marketing strategies designed to systematically capture market share and drive revenue growth.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 text-white font-medium transition-colors">
              View All Services
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand-500/50 hover:to-accent-cyan/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-xl" />
              <div className="relative h-full glass p-8 rounded-2xl bg-dark-bg/90 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
