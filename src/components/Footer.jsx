import React from "react";
import {
  Hexagon,
  MessageCircle,
  Hash,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const socialIcons = [MessageCircle, Hash, Globe];

const expertiseLinks = [
  "SEO",
  "Performance Marketing",
  "Content Strategy",
  "Digital Platforms",
  "Analytics",
];

const Footer = () => {
  return (
    <footer className="bg-black py-20 border-t border-gold/15 relative overflow-hidden">
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Hexagon className="w-8 h-8 text-gold" />
              <span className="font-display font-bold text-xl text-white">
                Branvelope
              </span>
            </div>
            <p className="text-white/40 font-light leading-relaxed text-sm mb-8 max-w-xs">
              A premium digital marketing agency engineering predictable
              revenue ecosystems for ambitious brands worldwide.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white/40 hover:text-gold hover:border-gold/30 border border-white/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-6 text-sm uppercase tracking-wider">
              Expertise
            </h4>
            <ul className="space-y-3">
              {expertiseLinks.map((item) => (
                <li key={item}>
                  <button className="text-white/40 hover:text-gold transition-colors text-sm font-light">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm font-light">
                  branvelopeofficial@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm font-light">
                  +91 8189843529
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm font-light">
                  Bodinayakanur,
                  <br />
                  Theni(dt), Tamilnadu - 625513
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold font-semibold mb-6 text-sm uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-white/40 text-sm font-light mb-5 leading-relaxed">
              Stay ahead with weekly insights on growth marketing.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-white/15 focus:border-gold text-white text-sm py-2.5 outline-none placeholder:text-white/25 transition-colors"
              />
              <button className="w-full py-2.5 rounded-lg bg-gold/10 border border-gold/25 text-gold text-sm font-medium hover:bg-gold/20 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-sm">
            &copy; {new Date().getFullYear()} Branvelope. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/30">
            <a href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
