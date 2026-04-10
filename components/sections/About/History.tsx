"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import Cover from "@/components/layout/Cover";
type HistorySlide = {
  id: number;
  image: string;
  alt: string;
};

const historySlides: HistorySlide[] = [
  {
    id: 1,
    image: "/images/about/1.jpg",
    alt: "Paltech early field development",
  },
  {
    id: 2,
    image: "/images/about/2.jpg",
    alt: "Paltech prototype in grassland",
  },
  {
    id: 3,
    image: "/images/about/1.jpg",
    alt: "Paltech testing in real conditions",
  },
];

export default function History() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % historySlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
    <Cover/>
        <section id="history" className="relative overflow-hidden bg-[#f7f8f6] py-24 md:py-32">
      <Container>
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          {/* Left side text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="max-w-2xl"
          >
            <p className="text-xl font-semibold uppercase tracking-[0.24em] text-[#506c35]">
              History
            </p>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-6xl">
              Built from real agricultural practice
            </h2>

            <p className="mt-14 text-lg leading-8 text-[#06131f]/72 md:text-xl text-justify">
            The origin of Paltech lies in a family-run dairy farm. In 2016, the grandparents converted the farm to organic agriculture—an important step toward greater sustainability and responsibility toward nature and animals.
            However, the transition also brought new challenges: problematic weeds such as dock and ragwort began to spread increasingly. Controlling them is particularly demanding in organic farming and requires a great deal of manual labor.
            </p>

            <p className="mt-6 text-base leading-7 text-[#06131f]/72 md:text-lg md:leading-8 text-justify">
            Despite all the advances in agriculture, this specific task is still largely done by hand. Dock and ragwort are removed manually—labor-intensive, time-consuming, and physically demanding.
            It quickly became clear: a better solution was needed.<br/><br/>
            Since 2021, Felix, Florian, and their stepfather Jorge have been working together on this vision:
            the full automation of weed control in organic grassland.
            What began as a family problem is now the driving force behind Paltech—with the goal of sustainably relieving farmers and making agriculture more efficient.
            </p>

   
          </motion.div>

          {/* Right side slider */}
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
                        aria-label={`Go to history image ${index + 1}`}
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
                    aria-label="Previous image"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#06131f]/10 bg-white text-[#06131f] transition hover:bg-[#06131f]/5"
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
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