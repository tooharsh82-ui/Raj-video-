import React from "react";
import { Translation } from "../translations";
import { MapPin, Clock, CalendarDays, ExternalLink, Phone } from "lucide-react";

interface LocationProps {
  t: Translation;
}

export default function Location({ t }: LocationProps) {
  // Ara Bindtoli Google Maps embed query
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14397.747966952762!2d84.66487910000001!3d25.557112000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d5efeaf12245b%3A0x673a5aef0627ffcf!2sArrah%2C%20Bihar!5e0!3m2!1sen!2sin!4v1717462800000!5m2!1sen!2sin";

  return (
    <section id="location" className="bg-brand-bg py-24 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-brand-accent block mb-3">
            {t.locationLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-stone-100 tracking-tight leading-tight">
            {t.locationTitle}
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent my-6"></div>
          <p className="font-sans text-stone-400 text-sm md:text-base font-light leading-relaxed">
            {t.locationSubtitle}
          </p>
        </div>

        {/* Bento Map and Information Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Card (5 cols) */}
          <div className="lg:col-span-4 bg-stone-900/10 border border-stone-900 rounded-2xl p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-8">
              {/* Address card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-stone-900 rounded-lg border border-stone-850 h-fit">
                  <MapPin className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-stone-100">
                    {t.locationAddressHeader}
                  </h4>
                  <p className="font-sans text-stone-450 text-sm font-light leading-relaxed">
                    {t.locationAddressDesc}
                  </p>
                </div>
              </div>

              {/* Timing details */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-stone-900 rounded-lg border border-stone-850 h-fit">
                  <Clock className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-stone-100">
                    {t.locationTimingHeader}
                  </h4>
                  <p className="font-sans text-stone-450 text-sm font-light leading-relaxed">
                    {t.locationTimingDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact & Navigation Controls */}
            <div className="pt-6 border-t border-stone-900 flex flex-col sm:flex-row lg:flex-col gap-4">
              <a
                href="https://maps.google.com/?q=Ara+Bindtoli+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full font-sans font-bold text-xs uppercase tracking-widest text-white border border-stone-800 hover:border-brand-accent/60 bg-stone-900/40 hover:bg-stone-900/80 px-6 py-4 rounded flex items-center justify-center space-x-2 transition-all duration-300"
              >
                <span>{t.locationButtonMaps}</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href="tel:+919334424964"
                className="w-full font-sans font-bold text-xs uppercase tracking-widest text-stone-900 bg-white hover:bg-stone-100 px-6 py-4 rounded flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-white/5"
              >
                <Phone className="h-4 w-4 text-brand-accent" />
                <span>{t.contactBtnCall}</span>
              </a>
            </div>
          </div>

          {/* Interactive Responsive Map (8 cols) */}
          <div className="lg:col-span-8 h-[400px] lg:h-auto overflow-hidden rounded-2xl border border-stone-900 bg-stone-900/20 relative group">
            <iframe
              title="Google Map showing base region Ara India"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Ambient vignette border */}
            <div className="absolute inset-0 pointer-events-none border border-stone-950/20 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
