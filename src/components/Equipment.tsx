import React from "react";
import { motion } from "motion/react";
import { Translation } from "../translations";
import { 
  Tv, 
  Layers, 
  Wind, 
  Mic 
} from "lucide-react";

interface EquipmentProps {
  t: Translation;
}

export default function Equipment({ t }: EquipmentProps) {
  // Map icons to the 4 items
  const icons = [
    <Tv className="h-5 w-5 text-stone-100" />,
    <Layers className="h-5 w-5 text-stone-100" />,
    <Wind className="h-5 w-5 text-stone-100" />,
    <Mic className="h-5 w-5 text-stone-100" />
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="equipment" className="bg-brand-bg py-24 border-t border-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Elegant Text Description */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-brand-accent block">
            {t.equipmentLabel}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-stone-100 tracking-tight leading-tight">
            {t.equipmentTitle}
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent my-4"></div>
          <p className="font-sans text-stone-400 text-sm font-light leading-relaxed">
            {t.equipmentSubtitle}
          </p>
        </div>

        {/* Right Side: Clean grid of capability points */}
        <div className="lg:col-span-7">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {t.equipmentList.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex space-x-4 p-4 border border-stone-900/50 hover:border-brand-accent/20 rounded-lg transition-colors"
              >
                {/* Minimal Dark Badge with Icon */}
                <div className="flex-shrink-0 p-3 bg-stone-900 rounded-lg h-fit border border-stone-850">
                  {icons[idx] || <Tv className="h-5 w-5 text-stone-100" />}
                </div>
                
                {/* Capability Text */}
                <div className="space-y-1.5">
                  <h3 className="font-sans font-semibold text-sm text-stone-100 uppercase tracking-widest">
                    {item.title}
                  </h3>
                  <p className="font-sans text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
