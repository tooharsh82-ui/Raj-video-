import React, { useState } from "react";
import { translations } from "./translations";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Location from "./components/Location";
import Contact from "./components/Contact";
import { Camera, Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<"hi" | "en">("hi");
  const t = translations[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === "hi" ? "en" : "hi"));
  };

  return (
    <div className="bg-brand-bg text-brand-text min-h-screen selection:bg-brand-accent selection:text-white">
      {/* Navbar Section */}
      <Navbar t={t} lang={lang} onToggleLang={handleToggleLang} />

      {/* Hero Section */}
      <Hero t={t} lang={lang} />

      {/* Services Section */}
      <Services t={t} />

      {/* Equipment Section */}
      <Equipment t={t} />

      {/* About Section */}
      <About t={t} />

      {/* Portfolio Section */}
      <Portfolio t={t} />

      {/* Location Section */}
      <Location t={t} />

      {/* Contact Section */}
      <Contact t={t} lang={lang} />

      {/* Premium Minimal Footer */}
      <footer className="bg-brand-bg border-t border-stone-900 py-16 text-stone-500 font-sans">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-serif font-medium tracking-[0.25em] text-white">
                RAJ VIDEO
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent"></span>
            </div>
            <p className="text-xs font-light leading-relaxed max-w-sm text-stone-400">
              {lang === "hi"
                ? "राज वीडियो, अर्रा बिंदटोली में स्थित एक फोटोग्राफी और वीडियोग्राफी सेवा है। हमारा उद्देश्य बिना किसी तड़क-भड़क के आपके खास पलों और असली मुस्कानों को संजोना है।"
                : "Raj Video, located in Ara Bindtoli, is a professional photography and videography service. Our single mission is to preserve your real emotions and candid milestones with absolute dignity and care."}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent block">
              {lang === "hi" ? "त्वरित लिंक्स" : "Quick Links"}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-light">
              <a href="#home" className="hover:text-stone-300 transition-colors">{lang === "hi" ? "गृह" : "Home"}</a>
              <a href="#services" className="hover:text-stone-300 transition-colors">{t.navServices}</a>
              <a href="#equipment" className="hover:text-stone-300 transition-colors">{t.navEquipment}</a>
              <a href="#about" className="hover:text-stone-300 transition-colors">{t.navAbout}</a>
              <a href="#portfolio" className="hover:text-stone-300 transition-colors">{t.navPortfolio}</a>
              <a href="#location" className="hover:text-stone-300 transition-colors">{t.navLocation}</a>
            </div>
          </div>

          {/* Digital contact lines */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent block">
              {lang === "hi" ? "कार्यालय संपर्क" : "Direct Contacts"}
            </span>
            <div className="space-y-2 text-xs font-light">
              <div className="flex items-center space-x-2">
                <Phone className="h-3.5 w-3.5 text-stone-600" />
                <a href="tel:+919334424964" className="hover:text-stone-300 transition-colors">
                  +91 93344 24964
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-3.5 w-3.5 text-stone-600" />
                <a href="mailto:rkmalakar9334@gmail.com" className="hover:text-stone-300 transition-colors">
                  rkmalakar9334@gmail.com
                </a>
              </div>
              <p className="text-stone-600">
                Ara Bindtoli, Ara, Bihar - 802301
              </p>
            </div>
          </div>

        </div>

        {/* Copyright and Social Anchors */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-900/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-stone-600 text-xs">
          <p>© 2026 Raj Video. {lang === "hi" ? "सर्वाधिकार सुरक्षित।" : "All Rights Reserved."}</p>
          
          {/* Subtle Social connectors */}
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-stone-300 transition-colors" title="Facebook">
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a href="#" className="hover:text-stone-300 transition-colors" title="Instagram">
              <Instagram className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
