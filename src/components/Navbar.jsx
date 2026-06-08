import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Hexagon } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Industries", href: "#industries" },
    { name: "AI Solutions", href: "#ai-solutions" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "top-3 py-2 px-2 max-w-4xl"
            : "top-5 py-3 px-3 max-w-5xl"
        } bg-black/95 backdrop-blur-2xl border border-gold/20 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 group shrink-0 pl-3">
            <div className="relative">
              <Hexagon
                className="text-gold w-7 h-7 group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.6)] transition-all duration-300"
                strokeWidth={1.8}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              </div>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              Branvelope
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1 mx-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-white/60 hover:text-gold transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </div>

          <button className="hidden lg:flex items-center px-6 py-2.5 bg-gold text-black font-bold text-sm rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all duration-300 shrink-0">
            Get Started
          </button>

          <button
            className="lg:hidden text-white/60 hover:text-gold transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-20 left-4 right-4 z-50 bg-black/95 backdrop-blur-2xl rounded-3xl border border-gold/15 p-6 lg:hidden origin-top shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-white/60 hover:text-gold text-lg font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="h-px bg-white/10 my-3" />
              <button className="w-full py-3.5 bg-gold text-black font-bold rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
