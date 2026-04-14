"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import Cover from "@/components/layout/Cover";

type HistorySlide = {
  id: number;
  image: string;
  alt: string;
};

export default function History() {
  const t = useTranslations("History");
  const [current, setCurrent] = useState(0);

  const historySlides: HistorySlide[] = [
    {
      id: 1,
      image: "/images/about/1.jpg",
      alt: t("slides.1.alt")
    },
    {
      id: 2,
      image: "/images/about/2.jpg",
      alt: t("slides.2.alt")
    },
    {
      id: 3,
      image: "/images/about/1.jpg",
      alt: t("slides.3.alt")
    }
  ];

  useEffect(() => {
    if (historySlides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % historySlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [historySlides.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % historySlides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + historySlides.length) % historySlides.length);
  };

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const activeSlide = historySlides[current];

  return (
    <>
      <Cover />
      <section
        id="history"
        className="relative overflow-hidden bg-[#f7f8f6] py-24 md:py-32"
      >
        <Container>
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              className="max-w-2xl"
            >
              <p className="text-xl font-semibold uppercase tracking-[0.24em] text-[#506c35]">
                {t("eyebrow")}
              </p>

              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-6xl">
                {t("title")}
              </h2>

              <p className="mt-14 text-justify text-lg leading-8 text-[#06131f]/72 md:text-xl">
                {t("paragraph1")}
              </p>

              <p className="mt-6 text-justify text-base leading-7 text-[#06131f]/72 md:text-lg md:leading-8">
                {t("paragraph2.part1")}
                <br />
                <br />
                {t("paragraph2.part2")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[30px] border border-[#06131f]/8 bg-white shadow-[0_24px_70px_rgba(6,19,31,0.08)]">
                <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-[#e8ece8]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSlide.id}
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      className="absolute inset-0 h-full w-full object-cover"
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                </div>

                <div className="flex items-center justify-between px-6 py-5 md:px-8">
                  <div className="flex items-center gap-3">
                    {historySlides.map((slide, index) => {
                      const isActive = index === current;

                      return (
                        <button
                          key={slide.id}
                          onClick={() => goTo(index)}
                          aria-label={t("goToImage", { number: index + 1 })}
                          className={`h-2.5 rounded-full transition-all duration-300 ${
                            isActive
                              ? "w-10 bg-[#506c35]"
                              : "w-2.5 bg-[#06131f]/20 hover:bg-[#06131f]/35"
                          }`}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={prev}
                      aria-label={t("previousImage")}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#06131f]/10 bg-white text-[#06131f] transition hover:bg-[#06131f]/5"
                    >
                      ←
                    </button>
                    <button
                      onClick={next}
                      aria-label={t("nextImage")}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#06131f]/10 bg-white text-[#06131f] transition hover:bg-[#06131f]/5"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}