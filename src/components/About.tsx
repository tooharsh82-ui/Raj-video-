import React from "react";
import { motion } from "motion/react";
import { Translation } from "../translations";
import { Check } from "lucide-react";
import weddingCoupleImg from "../assets/images/wedding_couple_1780462761778.png";

interface AboutProps {
  t: Translation;
}

export default function About({ t }: AboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="bg-brand-bg py-24 border-t border-stone-900 relative overflow-hidden">
      {/* Decorative Brand Text Backdrop */}
      <div className="absolute right-0 bottom-0 text-[10vw] font-serif font-bold text-stone-900/10 leading-none select-none pointer-events-none translate-y-1/4">
        RAJ VIDEO
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Premium Local Asset Display */}
          <div className="lg:col-span-5 relative group">
            <div className="relative z-10 overflow-hidden rounded-lg border border-stone-900 shadow-2xl">
              <img
                src={weddingCoupleImg}
                alt="Chunnu Ji's Professional Photography Frame"
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-40"></div>
            </div>
            
            {/* Elegant Background Border Accent */}
            <div className="absolute -inset-2 rounded-lg border border-brand-accent/20 pointer-events-none z-0"></div>
            <div className="absolute top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-brand-accent/30 rounded-tl-lg pointer-events-none z-0"></div>
            <div className="absolute bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-brand-accent/30 rounded-br-lg pointer-events-none z-0"></div>
          </div>

          {/* Right Side: Owner Story Details */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-brand-accent block">
                  {t.aboutLabel}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-medium text-stone-100 tracking-tight leading-tight">
                  {t.aboutHeading}
                </h2>
                {/* Minimalist divider */}
                <div className="w-12 h-[1px] bg-brand-accent my-4"></div>
              </div>

              {/* Genuine story-based copy - no exaggerated claims */}
              <div className="space-y-4 font-sans text-stone-400 text-sm font-light leading-relaxed">
                <p>{t.aboutText1}</p>
                <p>{t.aboutText2}</p>
              </div>

              {/* Minimalist Profile of Chunnu Ji */}
              <div className="pt-6 border-t border-stone-900 flex items-center space-x-4">
                <div className="h-12 w-12 rounded-full border border-stone-800 bg-stone-900 flex items-center justify-center font-serif text-sm font-bold text-brand-accent">
                  CJ
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-stone-100 uppercase tracking-widest leading-none">
                    {t.aboutTitle}
                  </h4>
                  <p className="font-sans text-xs text-stone-500 mt-1">
                    {t.aboutRole}
                  </p>
                </div>
              </div>

              {/* Honest quality guarantees - list with custom icons */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div variants={itemVariants} className="flex items-start space-x-3">
                  <div className="mt-1 p-0.5 bg-brand-accent/20 rounded border border-brand-accent/30">
                    <Check className="h-3 w-3 text-brand-accent" />
                  </div>
                  <span className="font-sans text-xs md:text-sm text-stone-300 font-light">
                    {t.aboutBullet1}
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start space-x-3">
                  <div className="mt-1 p-0.5 bg-brand-accent/20 rounded border border-brand-accent/30">
                    <Check className="h-3 w-3 text-brand-accent" />
                  </div>
                  <span className="font-sans text-xs md:text-sm text-stone-300 font-light">
                    {t.aboutBullet2}
                  </span>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start space-x-3 sm:col-span-2">
                  <div className="mt-1 p-0.5 bg-brand-accent/20 rounded border border-brand-accent/30">
                    <Check className="h-3 w-3 text-brand-accent" />
                  </div>
                  <span className="font-sans text-xs md:text-sm text-stone-300 font-light">
                    {t.aboutBullet3}
                  </span>
                </motion.div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
