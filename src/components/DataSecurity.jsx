import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server } from "lucide-react";

const DataSecurity = () => {
  return (
    <section className="py-24 bg-dark-bg border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass p-10 md:p-16 rounded-[2.5rem] relative overflow-hidden bg-white/[0.02]">
          {/* Subtle background glow */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-brand-400 text-xs font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise Grade Security</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Uncompromising <span className="text-gradient">Data Protection</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                In an era of stringent privacy regulations, we treat your customer data with military-grade security. Our infrastructure is fully compliant with global data privacy standards, ensuring zero risk to your brand equity.
              </p>
              
              <div className="flex gap-4">
                <div className="px-4 py-2 rounded-lg bg-dark-bg border border-white/10 text-white text-sm font-medium">SOC 2 Type II</div>
                <div className="px-4 py-2 rounded-lg bg-dark-bg border border-white/10 text-white text-sm font-medium">GDPR Ready</div>
                <div className="px-4 py-2 rounded-lg bg-dark-bg border border-white/10 text-white text-sm font-medium">CCPA Compliant</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-6"
            >
              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">End-to-End Encryption</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">All data in transit and at rest is secured using AES-256 encryption protocols, preventing unauthorized access.</p>
                </div>
              </div>
              
              <div className="glass p-6 rounded-2xl flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Isolated Cloud Infrastructure</h4>
                  <p className="text-gray-400 text-sm font-light leading-relaxed">Client data is siloed within dedicated server environments to eliminate cross-contamination and ensure absolute data integrity.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSecurity;
