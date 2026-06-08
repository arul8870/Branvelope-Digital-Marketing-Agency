import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-60"
      >
        <source src="/assets/video/video11.mp4" type="video/mp4" />
      </video>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 bg-black/[0.02] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-block/80 text-xs font-semibold tracking-wider uppercase">
              Digital Marketing & AI Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight mb-8"
          >
            <span className="text-block">We Engineer</span>
            <br />
            <span className="text-gradient-gold">Revenue</span>
            <br />
            <span className="text-block">Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-block/70 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-light"
          >
            Full-funnel marketing strategies powered by data science and AI to drive predictable, scalable revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap items-center gap-5 mb-14"
          >
            <button className="group flex items-center gap-3 px-10 py-4 bg-gold text-black font-bold text-base rounded-full hover:shadow-[0_0_35px_rgba(212,175,55,0.4)] transition-all duration-300">
              Start Your Growth
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-block/55 text-block hover:text-gold hover:border-gold/50 hover:bg-gold/5 font-medium text-base transition-all duration-300">
              <Play className="w-4 h-4 text-gold" />
              See Our Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex items-center gap-0 text-sm"
          >
            <div className="flex flex-col">
              <span className="text-block font-bold text-2xl">500+</span>
              <span className="text-block/50 text-xs uppercase tracking-wider mt-0.5">Brands</span>
            </div>
            <div className="w-px h-10 bg-gold/30 mx-6" />
            <div className="flex flex-col">
              <span className="text-block font-bold text-2xl">Global</span>
              <span className="text-block/50 text-xs uppercase tracking-wider mt-0.5">Reach</span>
            </div>
            <div className="w-px h-10 bg-gold/30 mx-6" />
            <div className="flex flex-col">
              <span className="text-block font-bold text-2xl">AI</span>
              <span className="text-block/50 text-xs uppercase tracking-wider mt-0.5">Powered</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
