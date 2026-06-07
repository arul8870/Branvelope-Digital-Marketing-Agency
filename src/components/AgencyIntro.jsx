import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Globe } from "lucide-react";

const AgencyIntro = () => {
  const cards = [
    {
      icon: <Target className="w-8 h-8 text-brand-400" />,
      title: "Precision Targeting",
      desc: "Hyper-focused strategies that connect your brand with high-value audiences globally.",
    },
    {
      icon: <Zap className="w-8 h-8 text-accent-cyan" />,
      title: "Rapid Scaling",
      desc: "Performance marketing engineered for explosive growth and immediate market impact.",
    },
    {
      icon: <Globe className="w-8 h-8 text-accent-blue" />,
      title: "Digital Dominance",
      desc: "Comprehensive ecosystem development to secure long-term brand authority.",
    },
  ];

  return (
    <section id="process" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            We don't just market. <br />
            <span className="text-gradient">We multiply.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Branvelope is a premier growth partner for ambitious brands. We fuse deep analytical intelligence with cutting-edge creative to architect marketing solutions that fundamentally shift your business trajectory.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl hover:bg-white/[0.08] transition-colors group"
            >
              <div className="w-16 h-16 rounded-xl bg-dark-bg border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencyIntro;
