"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

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

export default function Hero() {
  const t = useTranslations("Hero");
  const [current, setCurrent] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      videoSrc: "/videos/hero.mp4",
      title: t("slide1.title"),
      subtitle: t("slide1.subtitle"),
      primaryButton: {
        label: t("slide1.primaryButton"),
        href: "#product"
      },
      secondaryButton: {
        label: t("slide1.secondaryButton"),
        href: "#footer"
      }
    },
    {
      id: 2,
      videoSrc: "/videos/video_2.mp4",
      title: t("slide1.title"),
      subtitle: t("slide1.subtitle"),
      primaryButton: {
        label: t("slide1.primaryButton"),
        href: "#product"
      },
      secondaryButton: {
        label: t("slide1.secondaryButton"),
        href: "#footer"
      }
    }
  ];

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

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

        <div className="absolute inset-0 z-[1] bg-black/45" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/40 via-black/25 to-black/55" />

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
                    className="mt-10 flex flex-col items-center  justify-center gap-4 sm:flex-row"
                  >
                    <a
                      href={activeSlide.primaryButton.href}
                      className="inline-flex min-w-[180px] items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#06131f] transition hover:scale-[1.02] hover:bg-white/90"
                    >
                      <div className="text-black">
                        {activeSlide.primaryButton.label}
                      </div>
                    </a>

                    <a
                      href={activeSlide.secondaryButton.href}
                      className="inline-flex min-w-[180px]  items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:scale-[1.02] hover:bg-white/15"
                    >
                      {activeSlide.secondaryButton.label}
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Container>
        </div>

        {slides.length > 1 && (
          <>
            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 -translate-y-1/2">
              <Container>
                <div className="flex items-center justify-between">
                  <button
                    onClick={goPrev}
                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
                    aria-label={t("previousSlide")}
                  >
                    ←
                  </button>

                  <button
                    onClick={goNext}
                    className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white backdrop-blur-md transition hover:bg-black/40"
                    aria-label={t("nextSlide")}
                  >
                    →
                  </button>
                </div>
              </Container>
            </div>

            <div className="absolute bottom-8 left-0 right-0 z-20">
              <div className="flex items-center justify-center gap-3">
                {slides.map((slide, index) => {
                  const isActive = index === current;

                  return (
                    <button
                      key={slide.id}
                      onClick={() => goToSlide(index)}
                      aria-label={t("goToSlide", {number: index + 1})}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        isActive ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}