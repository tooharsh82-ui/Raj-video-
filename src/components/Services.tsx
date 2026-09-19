import React from "react";
import { motion } from "motion/react";
import { Translation } from "../translations";
import { 
  Camera, 
  Video, 
  Heart, 
  Plane, 
  Cake, 
  CalendarDays, 
  Users 
} from "lucide-react";

interface ServicesProps {
  t: Translation;
}

export default function Services({ t }: ServicesProps) {
  // Map icons to the 7 services in order
  const icons = [
    <Camera className="h-6 w-6 text-brand-accent" />,         // शादी फोटोग्राफी
    <Video className="h-6 w-6 text-brand-accent" />,          // शादी वीडियोग्राफी
    <Heart className="h-6 w-6 text-brand-accent" />,          // प्री-वेडिंग शूट
    <Plane className="h-6 w-6 text-brand-accent" />,          // ड्रोन शूट
    <Cake className="h-6 w-6 text-brand-accent" />,           // जन्मदिन समारोह
    <CalendarDays className="h-6 w-6 text-brand-accent" />,   // कार्यक्रम कवरेज
    <Users className="h-6 w-6 text-brand-accent" />            // पारिवारिक समारोह
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="bg-brand-bg py-24 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-brand-accent block mb-3">
            {t.servicesLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-stone-100 tracking-tight leading-tight">
            {t.servicesTitle}
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent my-6"></div>
          <p className="font-sans text-stone-400 text-sm md:text-base font-light leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Services Bento-like Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.servicesList.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "rgba(139, 0, 0, 0.4)" }}
              className="group p-8 rounded-lg border border-stone-900 bg-stone-900/20 hover:bg-stone-900/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon wrapper */}
                <div className="p-3 bg-stone-900/80 rounded-lg w-fit mb-6 border border-stone-850 group-hover:border-brand-accent/40 transition-colors">
                  {icons[idx] || <Camera className="h-6 w-6 text-brand-accent" />}
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-stone-100 mb-3 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Minimal reservation indicator */}
              <div className="mt-8 flex items-center space-x-2 text-stone-500 group-hover:text-stone-300 transition-colors">
                <span className="h-1 w-1 rounded-full bg-brand-accent"></span>
                <span className="font-sans uppercase text-[10px] tracking-widest font-bold">
                  Available for Booking
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
