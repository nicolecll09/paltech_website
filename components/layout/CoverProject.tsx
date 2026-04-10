"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export type ImageSlide = {
  id: number;
  src: string;
  title: string;
  subtitle: string;
};

export default function CoverProject({ slides }: { slides: ImageSlide[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [slides.length]);

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
    <section
      id="cover"
      className="relative h-screen w-full overflow-hidden bg-black text-left"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={activeSlide.id}
          src={activeSlide.src}
          alt={activeSlide.title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Banda horizontal oscura al centro */}
      <div className="absolute left-0 right-0 top-1/2 z-[1] -translate-y-1/2 bg-black/40 backdrop-blur-[2px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/45 to-black/70" />
        <div className="h-[260px] md:h-[320px] xl:h-[360px]" />
      </div>

      {/* Contenido sobre la banda */}
      <div className="relative z-10 flex h-full items-center px-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeSlide.id}`}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative z-10 max-w-6xl"
            >
              <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-7xl xl:text-8xl 2xl:text-9xl font-[var(--font-heading)]">
                {activeSlide.title}
              </h1>

              <p className="mt-6 max-w-5xl text-lg leading-8 text-white/85 md:text-2xl md:leading-10 xl:text-4xl">
                {activeSlide.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => {
          const isActive = index === current;

          return (
            <button
              key={slide.id}
              onClick={() => goTo(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>

      {/* Flechas */}
      <div className="absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-10">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Next image"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
        >
          →
        </button>
      </div>
    </section>
  );
}