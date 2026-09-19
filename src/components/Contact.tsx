import React from "react";
import { Translation } from "../translations";
import { Phone, MessageSquareCode, HeartHandshake } from "lucide-react";

interface ContactProps {
  t: Translation;
  lang: "hi" | "en";
}

export default function Contact({ t, lang }: ContactProps) {
  // Pre-compiled WhatsApp connection link representing direct messaging
  const whatsappUrl =
    lang === "hi"
      ? "https://wa.me/919334424964?text=नमस्ते%20राज%20वीडियो,%20मुझे%20शादी%20के%20लिए%20वीडियो%20शूट%20और%20तस्वीरों%20के%20बारे%20में%20पूछना%20है।"
      : "https://wa.me/919334424964?text=Hello%20Raj%20Video,%20I'd%20like%20to%20inquire%20about%20booking%20photography/videography%20services%20for%20a%20wedding.";

  return (
    <section id="contact" className="bg-brand-bg py-32 border-t border-stone-900 relative overflow-hidden">
      {/* Abstract Design Ambient Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-accent/10 blur-[130px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 text-center z-10 relative space-y-10">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="mx-auto p-3.5 bg-stone-900 rounded-full w-fit border border-stone-850">
            <HeartHandshake className="h-6 w-6 text-brand-accent" />
          </div>
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-brand-accent block">
            {t.contactLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-stone-100 leading-tight">
            {t.contactTitle}
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent my-4 mx-auto"></div>
          <p className="font-sans text-stone-400 text-sm md:text-base font-light leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Minimal Actions - Call and WhatsApp with Touch Safe Areas */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-lg mx-auto">
          {/* Call Trigger */}
          <a
            href="tel:+919334424964"
            className="w-full sm:w-auto flex-1 font-sans font-bold text-xs uppercase tracking-widest text-stone-900 bg-white hover:bg-stone-100 active:bg-stone-200 px-8 py-5 rounded-md flex items-center justify-center space-x-2.5 transition-all duration-300 shadow-xl shadow-stone-950/40 min-h-[52px]"
          >
            <Phone className="h-4 w-4 text-brand-accent" />
            <span>{t.contactBtnCall}</span>
          </a>

          {/* WhatsApp Trigger */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 font-sans font-bold text-xs uppercase tracking-widest text-white border border-stone-800 hover:border-brand-accent/60 bg-stone-900/40 hover:bg-stone-900/80 px-8 py-5 rounded-md flex items-center justify-center space-x-2.5 transition-all duration-300 min-h-[52px]"
          >
            <MessageSquareCode className="h-4 w-4 text-brand-accent" />
            <span>{t.contactBtnWhatsApp}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
