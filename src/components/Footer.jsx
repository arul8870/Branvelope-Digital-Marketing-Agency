import React from "react";
import { Hexagon, MessageCircle, Hash, Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark-bg pt-20 pb-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <Hexagon className="text-brand-500 w-8 h-8" />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Branvelope
              </span>
            </a>
            <p className="text-gray-400 font-light leading-relaxed max-w-md mb-8">
              A premium digital marketing agency engineering predictable revenue ecosystems for ambitious brands worldwide.
            </p>
            <div className="flex gap-4">
              {[MessageCircle, Hash, Globe].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Expertise</h4>
            <ul className="space-y-4">
              {["Search Engine Optimization", "Performance Marketing", "Content Strategy", "Digital Experiences", "Data Analytics"].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-white transition-colors text-sm">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                <span>branvelopeofficial@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                <span>+91 8189843529</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <span>
                  Bodinayakanur,<br />
                  Theni(dt), Tamilnadu - 625513
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Branvelope. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
