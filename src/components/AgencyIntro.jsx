import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    number: "500+",
    label: "Projects Delivered",
    desc: "Campaigns launched across 30+ verticals worldwide",
    icon: Briefcase,
  },
  {
    number: "50+",
    label: "Team Experts",
    desc: "Strategists, analysts, and creatives under one roof",
    icon: Users,
  },
  {
    number: "98%",
    label: "Client Retention",
    desc: "Long-term partnerships built on measurable results",
    icon: TrendingUp,
  },
];

const marqueeWords = "STRATEGY \u2022 CREATIVITY \u2022 DATA \u2022 AI \u2022 GROWTH \u2022 INNOVATION \u2022 ";

const AgencyIntro = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pattern-dots-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-xs font-bold tracking-[0.25em] uppercase mb-6 text-center"
        >
          About Us
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-center mb-8 leading-tight text-white"
        >
          We don't just market.
          <br />
          <span className="text-gradient-gold">We multiply.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/50 text-lg text-center max-w-2xl mx-auto leading-relaxed font-light mb-20"
        >
          Branvelope is a premier growth partner for ambitious brands. We fuse
          deep analytical intelligence with cutting-edge creative to architect
          marketing solutions that fundamentally shift your business trajectory.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group glass-dark rounded-2xl p-8 text-center border border-gold/10 hover:border-gold/30 transition-all duration-500 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div className="text-5xl font-black text-gradient-gold mb-3">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <p className="text-white/30 text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-white/10 py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, idx) => (
            <span
              key={idx}
              className="text-6xl md:text-7xl font-black text-gold/30 mx-0 select-none shrink-0"
            >
              {marqueeWords}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyIntro;
