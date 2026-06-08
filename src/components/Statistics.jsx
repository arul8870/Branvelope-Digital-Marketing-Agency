import React from "react";

const stats = [
  { value: "450% Average ROI" },
  { value: "12M+ Leads Acquired" },
  { value: "98% Client Retention" },
];

const MarqueeContent = () => (
  <div className="flex items-center shrink-0">
    {stats.map((stat, i) => (
      <React.Fragment key={i}>
        <span className="text-4xl md:text-6xl font-black whitespace-nowrap px-8 text-black">
          {stat.value}
        </span>
        <span className="text-gold text-2xl md:text-4xl mx-2 opacity-50">◆</span>
      </React.Fragment>
    ))}
  </div>
);

const Statistics = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="py-12 overflow-hidden">
        <div className="flex animate-marquee w-max mb-4">
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
        <div className="flex animate-marquee w-max mb-4" style={{ animationDirection: 'reverse' }}>
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};

export default Statistics;
