import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server } from "lucide-react";

const compliance = [
  { label: "SOC 2 Type II" },
  { label: "GDPR Ready" },
  { label: "CCPA Compliant" },
];

const DataSecurity = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="absolute inset-0 mesh-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto glass-dark rounded-3xl p-10 md:p-16 relative overflow-hidden border border-gold/10"
        >
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-14 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-[0.25em]">
                  SECURITY
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Uncompromising <br />
                <span className="text-gradient-gold">Data Protection</span>
              </h2>

              <p className="text-white/40 text-lg font-light leading-relaxed mb-8">
                In an era of stringent privacy regulations, we treat your
                customer data with military-grade security. Our infrastructure
                is fully compliant with global data privacy standards.
              </p>

              <div className="flex flex-wrap gap-3">
                {compliance.map((c) => (
                  <div
                    key={c.label}
                    className="px-4 py-2 rounded-full glass-dark border border-gold/20 hover:border-gold/50 text-white text-sm font-medium transition-colors cursor-default"
                  >
                    {c.label}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-dark p-6 rounded-xl flex items-start gap-5 border border-gold/10 hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] hover:scale-[1.02] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0">
                  <Lock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    End-to-End Encryption
                  </h4>
                  <p className="text-white/35 text-sm font-light leading-relaxed">
                    All data in transit and at rest is secured using AES-256
                    encryption protocols, preventing unauthorized access.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="glass-dark p-6 rounded-xl flex items-start gap-5 border border-gold/10 hover:border-gold/40 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)] hover:scale-[1.02] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center shrink-0">
                  <Server className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Isolated Infrastructure
                  </h4>
                  <p className="text-white/35 text-sm font-light leading-relaxed">
                    Client data is siloed within dedicated server environments
                    to eliminate cross-contamination and ensure absolute data
                    integrity.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataSecurity;
