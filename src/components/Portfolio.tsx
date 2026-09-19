import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Translation } from "../translations";
import { UploadCloud, Image, Trash2, CheckCircle2, Sliders } from "lucide-react";
import weddingCoupleImg from "../assets/images/wedding_couple_1780462761778.png";
import haldiCeremonyImg from "../assets/images/haldi_ceremony_1780462779799.png";

interface PortfolioProps {
  t: Translation;
}

export default function Portfolio({ t }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState<"all" | "ceremonies" | "portraits">("all");
  const [simulatorImage, setSimulatorImage] = useState<string | null>(null);
  const [matWidth, setMatWidth] = useState<number>(3); // border margin in rem
  const [frameColor, setFrameColor] = useState<"gold" | "rose" | "dark">("gold");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // List of professional portfolio frames (referencing our generated photos)
  const portfolioItems = [
    {
      img: weddingCoupleImg,
      title: t.portfolioWeddingTitle,
      desc: t.portfolioWeddingDesc,
      category: "ceremonies",
    },
    {
      img: haldiCeremonyImg,
      title: t.portfolioCandidTitle,
      desc: t.portfolioCandidDesc,
      category: "ceremonies",
    },
    {
      img: "https://picsum.photos/seed/wed3/800/600",
      title: "मंडप और आशीर्वाद",
      desc: "traditional rituals and floral decorations perfectly preserved in clear monochrome styling.",
      category: "portraits",
    },
  ];

  const filteredItems = portfolioItems.filter(
    (item) => activeTab === "all" || item.category === activeTab
  );

  // Drag and Drop & Selection Handlers
  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setUploadError(t.portfolioUploadError);
      setUploadSuccess(false);
      return;
    }
    setUploadError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setSimulatorImage(e.target.result as string);
        setUploadSuccess(true);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const clearUploadedImage = () => {
    setSimulatorImage(null);
    setUploadSuccess(false);
    setUploadError(null);
  };

  const frameColors = {
    gold: "border-amber-500/80 bg-stone-900 shadow-amber-900/10",
    rose: "border-amber-700 bg-stone-900 shadow-rose-900/10",
    dark: "border-stone-700 bg-stone-900 shadow-black",
  };

  return (
    <section id="portfolio" className="bg-brand-bg py-24 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-brand-accent block mb-3">
            {t.portfolioLabel}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-stone-100 tracking-tight leading-tight">
            {t.portfolioTitle}
          </h2>
          <div className="w-12 h-[1px] bg-brand-accent my-6"></div>
          <p className="font-sans text-stone-400 text-sm md:text-base font-light leading-relaxed">
            {t.portfolioSubtitle}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex space-x-2 md:space-x-4 border-b border-stone-900 mb-12">
          {[
            { id: "all", label: t.portfolioTabsAll },
            { id: "ceremonies", label: t.portfolioTabsCeremonies },
            { id: "portraits", label: t.portfolioTabsPortraits },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`font-sans text-xs uppercase tracking-widest font-bold pb-4 px-4 border-b-2 transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-brand-accent text-white"
                  : "border-transparent text-stone-500 hover:text-stone-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Core Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-stone-900/60 bg-stone-950 rounded-lg overflow-hidden flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-stone-900">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-serif text-lg text-stone-100 group-hover:text-brand-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Premium Framing Simulator Bento Container */}
        <div className="border border-stone-900 rounded-2xl bg-brand-bg/40 p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Uploader interaction form (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-brand-accent block">
              Frictionless Client Tool
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-stone-100 font-medium">
              {t.portfolioUploadZoneTitle}
            </h3>
            <p className="font-sans text-stone-400 text-xs md:text-sm font-light leading-relaxed">
              {t.portfolioUploadZoneDesc}
            </p>

            {/* Direct selector dropzone */}
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={triggerFileInput}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center space-y-3 ${
                simulatorImage
                  ? "border-brand-accent/60 bg-brand-accent/5 hover:bg-brand-accent/10"
                  : "border-stone-800 bg-stone-900/20 hover:bg-stone-900/50 hover:border-stone-700"
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <UploadCloud className="h-8 w-8 text-stone-500" />
              <div className="space-y-1">
                <p className="font-sans text-xs font-semibold text-stone-300">
                  Click to Browse or Drag &amp; Drop
                </p>
                <p className="font-sans text-[10px] text-stone-500">
                  Supports High Range JPG, PNG, WEBP
                </p>
              </div>
            </div>

            {/* Success and error indicators */}
            {uploadError && (
              <p className="font-sans text-xs text-brand-accent font-medium bg-brand-accent/10 px-3.5 py-2 rounded-md border border-brand-accent/30">
                {uploadError}
              </p>
            )}

            {uploadSuccess && (
              <div className="flex items-center space-x-2 bg-stone-900/80 p-3 rounded-lg border border-stone-850">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <p className="font-sans text-xs text-stone-300">
                  {t.portfolioUploadSuccess}
                </p>
              </div>
            )}

            {/* Customizer Slider Controls (Mat Width and Frame Color) */}
            {simulatorImage && (
              <div className="space-y-4 pt-4 border-t border-stone-900">
                <div className="flex items-center space-x-2 text-stone-300 font-sans text-xs uppercase font-bold tracking-widest">
                  <Sliders className="h-3.5 w-3.5 text-brand-accent" />
                  <span>Customize Frame Matting</span>
                </div>
                
                {/* Mat Width Range */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-stone-400 font-sans">
                    <span>Mat Width Margin</span>
                    <span>{matWidth}rem</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="0.5"
                    value={matWidth}
                    onChange={(e) => setMatWidth(parseFloat(e.target.value))}
                    className="w-full h-1 bg-stone-900 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                    style={{ touchAction: "none" }}
                  />
                </div>

                {/* Frame Color Toggle */}
                <div className="space-y-2">
                  <span className="block text-xs text-stone-400 font-sans">Frame Style Accent</span>
                  <div className="flex space-x-2">
                    {[
                      { id: "gold", label: "Traditional Gold" },
                      { id: "rose", label: "Cinematic Redwood" },
                      { id: "dark", label: "Minimalist Slate" },
                    ].map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setFrameColor(style.id as any)}
                        className={`font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded border transition-all duration-300 ${
                          frameColor === style.id
                            ? "bg-brand-accent/20 border-brand-accent text-white"
                            : "bg-stone-900/40 border-stone-850 text-stone-500 hover:text-stone-300"
                        }`}
                      >
                        {style.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear uploaded image button */}
                <button
                  onClick={clearUploadedImage}
                  className="flex items-center space-x-2 text-brand-accent hover:text-brand-accent text-xs font-semibold pt-2"
                >
                  <Trash2 className="h-4 w-4" />
                  <span>{t.portfolioClearBtn}</span>
                </button>
              </div>
            )}
          </div>

          {/* Simulator Live Preview (7 cols) */}
          <div className="lg:col-span-7 flex items-center justify-center bg-brand-bg p-6 rounded-xl border border-stone-900/50 min-h-[350px]">
            <AnimatePresence mode="wait">
              {simulatorImage ? (
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className={`w-full max-w-[400px] border-[16px] rounded-sm transition-all duration-500 ${frameColors[frameColor]}`}
                  style={{
                    padding: `${matWidth}rem 3.5rem`,
                    backgroundImage: frameColor === "rose" ? "linear-gradient(135deg, #1c0505 0%, #0d0101 100%)" : undefined,
                  }}
                >
                  <div className="bg-white p-3 shadow-inner rounded-sm relative">
                    <img
                      src={simulatorImage}
                      alt="Framed customer preview photograph"
                      className="w-full h-auto aspect-[4/3] object-cover rounded-sm"
                      referrerPolicy="no-referrer"
                    />
                    {/* Tiny authentic watermark */}
                    <span className="absolute bottom-4 right-5 font-serif text-[10px] italic text-stone-900/70 select-none">
                      Raj Video Photography
                    </span>
                  </div>
                </motion.div>
			  ) : (
                <div className="text-center p-8 space-y-4 max-w-[320px]">
                  <div className="p-4 bg-stone-900 rounded-full w-fit mx-auto border border-stone-850">
                    <Image className="h-6 w-6 text-stone-500" />
                  </div>
                  <h4 className="font-sans font-bold text-sm text-stone-300 uppercase tracking-widest">
                    Awaiting Live Preview
                  </h4>
                  <p className="font-sans text-xs text-stone-500 leading-relaxed font-light">
                    Upload an image using our dry-run uploader to visualize exactly how beautiful our customized print and gold matting delivery looks.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
