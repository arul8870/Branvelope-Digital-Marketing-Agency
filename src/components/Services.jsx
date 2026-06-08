import React from "react";
import { motion } from "framer-motion";
import { Search, Share2, BarChart, FileText, Code, Bot } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Advanced SEO",
    desc: "Algorithmic dominance to capture high-intent organic traffic.",
    metric: "340%",
    metricLabel: "Organic Growth",
    featured: true,
  },
  {
    icon: BarChart,
    title: "Performance Marketing",
    desc: "Data-driven media buying engineered for maximum ROI.",
    metric: "4.2x",
    metricLabel: "ROAS",
  },
  {
    icon: Share2,
    title: "Social Authority",
    desc: "Building fiercely loyal communities across core social channels.",
    metric: "2.8M+",
    metricLabel: "Engagements",
  },
  {
    icon: FileText,
    title: "Content Ecosystems",
    desc: "High-converting assets that educate, engage, and convert.",
    metric: "87%",
    metricLabel: "Conversion Rate",
  },
  {
    icon: Bot,
    title: "AI Marketing Automation",
    desc: "Machine learning workflows that personalize at scale.",
    badge: "AI-Powered",
    featured: true,
  },
  {
    icon: Code,
    title: "Digital Platforms",
    desc: "Enterprise-grade web experiences optimized for conversion.",
    metric: "99.9%",
    metricLabel: "Uptime",
  },
];

const MiniBarChart = () => (
  <div className="flex items-end gap-1 h-10 mt-4">
    {[30, 55, 40, 70, 50, 85, 65, 90].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        whileInView={{ height: `${h}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.05 }}
        className="w-2 rounded-t-sm bg-gradient-to-t from-gold/40 to-gold"
      />
    ))}
  </div>
);

const PulseRing = () => (
  <div className="absolute top-6 right-6 w-8 h-8">
    <div className="absolute inset-0 rounded-full border border-gold/30 animate-ping" />
    <div className="absolute inset-0 rounded-full border border-gold/20" style={{ transform: "scale(1.5)" }} />
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-black">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pattern-dots-dark pointer-events-none" />

      <div className="absolute top-40 left-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-gold/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-gold text-xs tracking-widest font-semibold uppercase block mb-4">
              Services
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white leading-[0.95]">
              Full-Funnel
              <br />
              <span className="text-gradient-gold">Capabilities</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 text-lg font-light max-w-md leading-relaxed lg:text-right"
          >
            We deploy full-funnel marketing strategies designed to systematically capture market share and drive revenue growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/[0.08] via-black to-black border border-gold/10 p-10 hover:border-gold/30 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-gold/[0.04] rounded-full blur-3xl group-hover:bg-gold/[0.08] transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/[0.03] rounded-full blur-3xl" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl border border-gold/30 flex items-center justify-center bg-gold/[0.06] group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500">
                  <Search className="w-6 h-6 text-gold" />
                </div>
                <PulseRing />
              </div>

              <div className="mb-auto">
                <span className="inline-block px-3 py-1 mb-5 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gold/20 text-gold/80 bg-gold/[0.06]">
                  Flagship
                </span>
                <h3 className="text-3xl font-bold text-white mb-4">Advanced SEO</h3>
                <p className="text-white/50 font-light text-base leading-relaxed max-w-md">
                  Algorithmic dominance to capture high-intent organic traffic through proprietary AI-driven optimization pipelines.
                </p>
              </div>

              <div className="flex items-end justify-between mt-10">
                <div>
                  <div className="text-4xl font-black text-white">340%</div>
                  <div className="text-white/40 text-sm mt-1">Organic Growth</div>
                </div>
                <MiniBarChart />
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 pointer-events-none" />
          </motion.div>

          {services.filter(s => !s.featured).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-gold/30 hover:bg-gold/[0.03] transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/[0.04] rounded-full blur-2xl group-hover:bg-gold/[0.08] transition-all duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mb-6 bg-white/[0.03] group-hover:border-gold/30 group-hover:bg-gold/[0.06] transition-all duration-300">
                    <Icon className="w-5 h-5 text-gold/70 group-hover:text-gold transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-white/40 font-light text-sm leading-relaxed mb-6">{service.desc}</p>

                  {service.metric && (
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold text-white">{service.metric}</div>
                      <div className="text-white/30 text-xs uppercase tracking-wider">{service.metricLabel}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {services.filter(s => s.featured && s.badge).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-r from-gold/[0.06] via-black to-black border border-gold/10 p-8 hover:border-gold/30 transition-all duration-500"
              >
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[
                    { x: '85%', y: '25%', size: 3 },
                    { x: '92%', y: '55%', size: 2 },
                    { x: '78%', y: '75%', size: 4 },
                    { x: '88%', y: '90%', size: 2 },
                    { x: '96%', y: '35%', size: 3 },
                  ].map((dot, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-gold/25"
                      style={{ left: dot.x, top: dot.y, width: dot.size, height: dot.size }}
                    />
                  ))}
                  <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="85" y1="25" x2="92" y2="55" stroke="#D4AF37" strokeWidth="0.15" />
                    <line x1="92" y1="55" x2="78" y2="75" stroke="#D4AF37" strokeWidth="0.15" />
                    <line x1="78" y1="75" x2="88" y2="90" stroke="#D4AF37" strokeWidth="0.15" />
                    <line x1="88" y1="90" x2="96" y2="35" stroke="#D4AF37" strokeWidth="0.15" />
                  </svg>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                  <div className="w-14 h-14 rounded-2xl border border-gold/30 flex items-center justify-center bg-gold/[0.06] shrink-0 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="mb-auto">
                    <span className="inline-block px-3 py-1 mb-4 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gold/30 text-gold bg-gold/10">
                      {service.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/50 font-light text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
