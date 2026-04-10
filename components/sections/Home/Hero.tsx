"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/components/ui/Container";

type Slide = {
  id: number;
  videoSrc: string;
  title: string;
  subtitle: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
};

const slides: Slide[] = [
  {
    id: 1,
    videoSrc: "/videos/hero.mp4",
    title: "Going organic has never been easier",
    subtitle:
      "Robots for automated, herbicide-free dock weed control in grassland",
    primaryButton: {
      label: "Our robot",
      href: "#robot",
    },
    secondaryButton: {
      label: "Contact us",
      href: "#footer",
    },
  }
  // {
  //   id: 2,
  //   videoSrc: "/videos/hero.mp4",
  //   title: "Scalable technology for persistent monitoring",
  //   subtitle:
  //     "A modern sensing approach that enables lower deployment cost, resilient architectures, and reliable performance across complex maritime scenarios.",
  //   primaryButton: {
  //     label: "See applications",
  //     href: "#applications",
  //   },
  //   secondaryButton: {
  //     label: "Learn more",
  //     href: "#about",
  //   },
  // },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const activeSlide = slides[current];

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="relative min-h-screen w-full">
        {/* Background videos */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.video
              key={activeSlide.id}
              className="absolute inset-0 h-full w-full object-cover"
              src={activeSlide.videoSrc}
              autoPlay
              muted
              loop
              playsInline
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-[1] bg-black/45" />

        {/* Extra gradient for better readability */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-black/25 to-black/55" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center text-center">
          <Container>
            <div className="mx-auto max-w-5xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mb-6 text-sm font-medium uppercase tracking-[0.25em] text-white/70 md:text-base"
                  >
                    {/* Advanced Maritime Monitoring */}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, delay: 0.12 }}
                    className="font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px]"
                  >
                    {activeSlide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.22 }}
                    className="mx-auto mt-8 max-w-3xl text-base leading-7 text-white/80 sm:text-lg md:text-xl md:leading-8"
                  >
                    {activeSlide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.32 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                  >
                    <a
                      href={activeSlide.primaryButton.href}
                      className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06131f] transition hover:scale-[1.02] hover:bg-white/90"
                    >
                      {activeSlide.primaryButton.label}
                    </a>

                    <a
                      href={activeSlide.secondaryButton.href}
                      className="inline-flex min-w-[180px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-black backdrop-blur-sm transition hover:scale-[1.02] hover:bg-white/15"
                    >
                      {activeSlide.secondaryButton.label}
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Container>
        </div>

        {/* Arrows */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 -translate-y-1/2">
          <Container>
            <div className="flex items-center justify-between">
              <button
                onClick={goPrev}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
                aria-label="Previous slide"
              >
                ←
              </button>

              <button
                onClick={goNext}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
                aria-label="Next slide"
              >
                →
              </button>
            </div>
          </Container>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="flex items-center justify-center gap-3">
            {slides.map((slide, index) => {
              const isActive = index === current;

              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}