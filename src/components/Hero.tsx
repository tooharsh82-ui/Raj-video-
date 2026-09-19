import React from "react";
import { motion } from "motion/react";
import { Translation } from "../translations";
import { ArrowRight, MessageSquareCode } from "lucide-react";

interface HeroProps {
  t: Translation;
  lang: "hi" | "en";
}

export default function Hero({ t, lang }: HeroProps) {
  // Clean transitions and cinematic entrance variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Pre-compiled WhatsApp connection message
  const whatsappUrl =
    lang === "hi"
      ? "https://wa.me/919334424964?text=नमस्ते%20राज%20वीडियो,%20मुझे%20शादी%20के%20लिए%20वीडियो%20शूट%20और%20तस्वीरों%20के%20बारे%20में%20पूछना%20है।"
      : "https://wa.me/919334424964?text=Hello%20Raj%20Video,%20I'd%20like%20to%20inquire%20about%20booking%20photography/videography%20services%20for%20a%20wedding.";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-brand-bg text-white overflow-hidden pt-24"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        {/* Soft Radial Deep-Red Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-accent/20 blur-[140px] pointer-events-none"></div>
        {/* Subtle geometric lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 z-10 text-center relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Subtle Label Indicator */}
          <motion.div variants={itemVariants} className="inline-block">
            <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-brand-text bg-brand-accent/30 border border-brand-accent/40 px-3.5 py-1.5 rounded-full">
              {t.heroLabel}
            </span>
          </motion.div>

          {/* Majestic Elegant Serif Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-stone-100 leading-[1.1] md:leading-[1.05]"
          >
            {t.heroHeading}
          </motion.h1>

          {/* Genuine Descriptive Subtitle - No timelines, just true service */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto font-sans text-stone-400 text-sm md:text-base lg:text-lg leading-relaxed font-light"
          >
            {t.heroSubtitle}
          </motion.p>

          {/* Minimal, elegant CTAs */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Phone contact trigger */}
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full sm:w-auto font-sans font-bold text-xs uppercase tracking-widest text-stone-900 bg-white hover:bg-stone-100 px-8 py-4.5 rounded-md flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-stone-950/40"
            >
              <span>{t.heroBtnContact}</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            {/* Direct WhatsApp connector with custom message */}
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto font-sans font-bold text-xs uppercase tracking-widest text-white border border-stone-800 hover:border-brand-accent/70 bg-stone-900/40 hover:bg-stone-900/80 px-8 py-4.5 rounded-md flex items-center justify-center space-x-2 transition-all duration-300"
            >
              <MessageSquareCode className="h-4 w-4 text-brand-accent" />
              <span>{t.heroBtnWhatsApp}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
