import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Translation } from "../translations";
import { Camera, Languages, Phone, Menu, X } from "lucide-react";

interface NavbarProps {
  t: Translation;
  lang: "hi" | "en";
  onToggleLang: () => void;
}

export default function Navbar({ t, lang, onToggleLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.navHome, href: "#home" },
    { label: t.navServices, href: "#services" },
    { label: t.navEquipment, href: "#equipment" },
    { label: t.navAbout, href: "#about" },
    { label: t.navPortfolio, href: "#portfolio" },
    { label: t.navLocation, href: "#location" },
    { label: t.navContact, href: "#contact" },
  ];

  const brandLetterVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // cinematic smooth ease
      },
    }),
  };

  const brandName = "RAJ VIDEO";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-bg/90 backdrop-blur-xl border-b border-brand-accent/20 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Animated Text Brand Iconography */}
        <a href="#home" className="flex items-center space-x-2.5 group">
          <div className="text-xl font-medium tracking-[0.25em] text-white flex select-none">
            {brandName.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={brandLetterVariants}
                initial="hidden"
                animate="visible"
                className={`inline-block ${
                  char === " " ? "mr-2" : ""
                } transition-colors duration-300 group-hover:text-brand-accent`}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent self-end mb-1.5 animate-pulse"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-xs font-semibold uppercase tracking-widest text-stone-300 hover:text-white transition-colors relative py-2 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </nav>

        {/* Top Control Bar with Language Switcher */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onToggleLang}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-md border border-stone-800 bg-stone-900/60 hover:bg-stone-900 hover:border-brand-accent/40 text-xs font-medium tracking-wide text-stone-300 hover:text-white transition-all duration-300"
          >
            <Languages className="h-3.5 w-3.5 text-brand-accent" />
            <span className="font-sans font-semibold">
              {lang === "hi" ? "English" : "हिन्दी"}
            </span>
          </motion.button>

          {/* Call Action Button */}
          <a
            href="tel:+919334424964"
            className="hidden sm:flex items-center space-x-1.5 bg-brand-accent hover:bg-brand-hover active:bg-brand-hover text-white text-xs uppercase font-bold tracking-widest px-4 py-2 rounded transition-all duration-300 shadow-lg shadow-brand-accent/20"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{t.contactBtnCall}</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-brand-bg/95 border-b border-stone-900 backdrop-blur-xl flex flex-col p-6 space-y-4 lg:hidden shadow-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-sm font-semibold uppercase tracking-widest text-stone-300 hover:text-white transition-colors py-2 border-b border-stone-900/50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+919334424964"
            className="flex items-center justify-center space-x-2 bg-brand-accent text-white font-bold text-xs uppercase tracking-widest py-3 rounded mt-2"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{t.contactBtnCall}</span>
          </a>
        </motion.div>
      )}
    </header>
  );
}
