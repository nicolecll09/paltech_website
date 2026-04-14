"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type VideoSlide = {
  id: number;
  src: string;
};

const slides: VideoSlide[] = [
  { id: 1, src: "/videos/hero.gif" },

];

export default function Cover() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const activeSlide = slides[current];

  return (
    <section id="cover" className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.video
          key={activeSlide.id}
          className="absolute inset-0 h-full w-full object-cover"
          src={activeSlide.src}
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => {
          const isActive = index === current;

          return (
            <button
              key={slide.id}
              onClick={() => goTo(index)}
              aria-label={`Go to video ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>

      <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-10">
        <button
          onClick={prev}
          aria-label="Previous video"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next video"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
        >
          →
        </button>
      </div>
    </section>
  );
}