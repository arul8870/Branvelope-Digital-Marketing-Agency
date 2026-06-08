import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  ShoppingBag,
  Stethoscope,
  Building2,
  Briefcase,
  Landmark,
  GraduationCap,
} from "lucide-react";

const industries = [
  { icon: Cpu, name: "Technology & SaaS", size: "px-10 py-5 text-lg" },
  { icon: ShoppingBag, name: "E-Commerce", size: "px-8 py-4 text-base" },
  { icon: Stethoscope, name: "Healthcare", size: "px-10 py-5 text-lg" },
  { icon: Building2, name: "Real Estate", size: "px-8 py-4 text-base" },
  { icon: Briefcase, name: "B2B Services", size: "px-8 py-4 text-base" },
  { icon: Landmark, name: "Finance", size: "px-6 py-3 text-sm" },
  { icon: GraduationCap, name: "Education", size: "px-6 py-3 text-sm" },
];

const Industries = () => {
  return (
    <section id="industries" className="py-32 bg-black relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 pattern-dots-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
            INDUSTRIES
          </span>
          <h2 className="text-5xl font-display font-bold text-white mb-6">
            Sector{" "}
            <span className="text-gradient-gold">Expertise</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto">
            Specialized marketing ecosystems tailored to sector-specific
            challenges across the most competitive verticals.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                animate={{
                  y: [0, -6, 0],
                }}
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "rgba(212,175,55,0.1)",
                }}
                className={`rounded-full ${ind.size} flex items-center gap-3 cursor-default transition-all duration-300 border-2 border-white/10 hover:border-gold/50 group bg-white/[0.03] hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]`}
              >
                <Icon className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors" />
                <span className="text-white/60 font-medium group-hover:text-gold transition-colors">
                  {ind.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
