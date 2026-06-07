import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How is Branvelope different from other agencies?",
      a: "We don't sell 'services'—we sell revenue growth. Our approach combines enterprise-grade data analytics with elite creative execution, ensuring every dollar spent is tracked to a positive ROI. We act as an extension of your business, not just a vendor.",
    },
    {
      q: "What is your typical onboarding process?",
      a: "Our onboarding is highly structured. It begins with a deep-dive audit of your digital assets and historical data, followed by a strategic blueprint outlining our multi-channel approach. Typically, campaigns are live within 14-21 days of kickoff.",
    },
    {
      q: "How do you measure success and report on it?",
      a: "We build custom, real-time analytics dashboards for all our clients. We track leading indicators (CTR, CPA) but primarily focus on lagging indicators that matter to your business: Customer Acquisition Cost (CAC), Lifetime Value (LTV), and bottom-line revenue.",
    },
    {
      q: "Do you specialize in B2B or B2C?",
      a: "Both, but with distinctly different methodologies. For B2C/E-commerce, we focus heavily on immediate ROAS and performance creative. For B2B, we focus on lead quality, account-based marketing (ABM), and long-cycle content nurturing.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-dark-bg border-y border-white/[0.05]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white pr-8">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-400 transition-transform duration-300 shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
