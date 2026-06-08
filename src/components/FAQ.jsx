import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How is Branvelope different from other agencies?",
    a: "We don't sell services—we sell revenue growth. Our approach combines enterprise-grade data analytics with elite creative execution, ensuring every dollar spent is tracked to a positive ROI. We act as an extension of your business, not just a vendor.",
  },
  {
    q: "What's your onboarding process like?",
    a: "Our onboarding is highly structured. It begins with a deep-dive audit of your digital assets and historical data, followed by a strategic blueprint outlining our multi-channel approach. Typically, campaigns are live within 14-21 days of kickoff.",
  },
  {
    q: "How do you measure success?",
    a: "We build custom, real-time analytics dashboards for all our clients. We track leading indicators like CTR and CPA, but primarily focus on lagging indicators that matter to your business: CAC, LTV, and bottom-line revenue.",
  },
  {
    q: "Do you specialize in B2B or B2C?",
    a: "Both, but with distinctly different methodologies. For B2C/E-commerce, we focus heavily on immediate ROAS and performance creative. For B2B, we focus on lead quality, ABM, and long-cycle content nurturing.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-gold text-xs font-bold uppercase tracking-[0.25em] mb-4 block">
              FAQ
            </span>
            <h2 className="text-5xl font-display font-bold text-black mb-6">
              Common <br />
              <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-black/40 text-sm font-light">
              Click to expand
            </p>
          </motion.div>

          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, index) => {
              const isActive = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                    isActive
                      ? "border-l-gold border-t-black/5 border-r-black/5 border-b-black/5 bg-gold/[0.03] shadow-[0_4px_20px_rgba(212,175,55,0.06)]"
                      : "border-black/5 hover:border-gold/30 bg-white"
                  }`}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(isActive ? null : index)}
                  >
                    <span className="text-black font-semibold pr-8 text-[15px]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 border-l-2 border-l-gold/30 ml-6 mr-6 mb-4">
                          <p className="text-black/40 font-light leading-relaxed text-sm">
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
