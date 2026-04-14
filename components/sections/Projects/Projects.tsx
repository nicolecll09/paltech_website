"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
// import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

type ProjectItem = {
  id: number;
  title: string;
  image: string;
  href: string;
};

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Nuga",
    image: "/images/nuga/nuga_3.jpg",
    href: "/nuga",
  },
  {
    id: 2,
    title: "NeoBot",
    image: "/images/neobot/image.png",
    href: "/neobot",
  },
  {
    id: 3,
    title: "Durchwuchskartoffeln Control",
    image: "/images/kartoffeln/kartoffeln.webp",
    href: "/durchwuchskartoffeln",
  },
  {
    id: 4,
    title: "BioBots",
    image: "/images/product/2.JPG",
    href: "/biobots",
  },
  // {
  //   id: 5,
  //   title: "Arbot",
  //   image: "/images/cover/berg.jpg",
  //   href: "/arbots",
  // },
];

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.8;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f7f8f4] px-36 py-24 md:py-32"
    >
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#506c35]"
            >
             Projects
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-4xl"
            >
              Robotics projects built for real-world impact
            </motion.h2>

         
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex items-center gap-3"
          >
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#06131f]/10 bg-white text-[#06131f] shadow-sm transition hover:border-[#506c35] hover:bg-[#506c35] hover:text-white"
              aria-label="Scroll left"
            >
              {/* <ChevronLeft className="h-5 w-5" /> */}
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#06131f]/10 bg-white text-[#06131f] shadow-sm transition hover:border-[#506c35] hover:bg-[#506c35] hover:text-white"
              aria-label="Scroll right"
            >
              {/* <ChevronRight className="h-5 w-5" /> */}
            </button>
          </motion.div>
        </div>

        <div
          ref={sliderRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="min-w-[85%] snap-start sm:min-w-[70%] lg:min-w-[42%]"
            >
              <Link
                href={project.href}
                className="group block overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(6,19,31,0.08)] transition hover:-translate-y-1"
              >
                <div className="relative h-[360px] overflow-hidden md:h-[460px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06131f]/75 via-[#06131f]/20 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                        Project
                      </p>
                      <h3 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur-md transition group-hover:bg-[#506c35]">
                      {/* <ArrowUpRight className="h-5 w-5" /> */}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}