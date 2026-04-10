"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";

type Testimonial = {
  id: number;
  image: string;
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/references/1.jpg",
    name: "Manfred",
    role: "Organic farmer",
    quote:
    "The robots do a very good job. I am very satisfied and have already booked them again for the next season",
  },
  {
    id: 2,
    image: "/images/references/3.jpg",
    name: "Elmar",
    role: "Organic farmer, Spitalhof",
    quote:
      "The results speak for themselves. I’m pleased that the robots take over the tedious task of removing dock.",
  },
  

];

export default function References() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => setCurrent(index);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[current];

  return (
    <section
      id="references"
      className="bg-white py-24 text-[#06131f] md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              Trusted by our customers 
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#06131f]/70 md:text-lg">
              Feedback from users and partners who have worked with our
              technology in practical field environments.
            </p>
          </motion.div>

          {/* Part 1 - Slider */}
          <div className="mt-18 md:mt-20">
            <div className="overflow-hidden rounded-[32px] border border-[#06131f]/8 bg-[#f6f8fa] shadow-[0_25px_80px_rgba(6,19,31,0.08)]">
              <div className="grid min-h-[520px] md:grid-cols-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`image-${active.id}`}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.01 }}
                    transition={{ duration: 0.7 }}
                    className="relative h-[320px] md:h-full"
                  >
                    <img
                      src={active.image}
                      alt={active.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/30 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <div className="flex flex-col justify-between p-8 md:p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`text-${active.id}`}
                      initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                      transition={{ duration: 0.55 }}
                      className="flex h-full flex-col justify-center"
                    >
                      <p className="text-5xl leading-none text-[#506c35]/80 md:text-6xl">
                        “
                      </p>

                      <blockquote className="mt-4 max-w-xl font-[var(--font-heading)] text-2xl font-semibold leading-[1.35] tracking-[-0.02em] md:text-4xl">
                        {active.quote}
                      </blockquote>

                      <div className="mt-8">
                        <p className="text-lg font-semibold text-[#06131f]">
                          {active.name}
                        </p>
                        <p className="mt-1 text-sm uppercase tracking-[0.16em] text-[#06131f]/50">
                          {active.role}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {testimonials.map((item, index) => {
                        const isActive = index === current;

                        return (
                          <button
                            key={item.id}
                            onClick={() => goTo(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
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
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#06131f]/10 bg-white text-[#06131f] transition hover:border-[#506c35]/80 hover:bg-[#506c35] hover:text-amber-50"
                        aria-label="Previous testimonial"
                      >
                        ←
                      </button>
                      <button
                        onClick={next}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#06131f]/10 bg-white text-[#06131f] transition hover:border-[#506c35]/80 hover:bg-[#506c35] hover:text-amber-50"
                        aria-label="Next testimonial"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2 - YouTube video */}
          {/* <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="mt-20 rounded-[32px]  p-6 shadow-[0_30px_90px_rgba(6,19,31,0.18)] md:mt-24 md:p-8"
          >
            <div className="mb-8 max-w-3xl">
 


            </div>

            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/watch?v=7W4MY_1PFQo&t=5s"
                  title="YouTube video player"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}