"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";



const highlights = [
  {
    title: "Built from real field practice",
    description:
      "Developed from practical experience in organic grassland operations and shaped by real agricultural needs.",
    image: "/images/product/1.jpg",
  },
  {
    title: "Made for organic farming",
    description:
      "Mechanical weed control without chemicals, focused on precision, sustainability, and soil-friendly operation.",
    image: "/images/product/2.JPG",
  },
  {
    title: "Autonomous & efficient",
    description:
      "Detects, plans, and operates autonomously to reduce manual workload and improve productivity.",
    image: "/images/product/3.jpg",
  },
  {
    title: "Integrated reseeding",
    description:
      "After weed removal, grass seed can be applied to help restore and close the grass cover.",
    image: "/images/product/4.JPG",
  },
];


export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#f5f7f8] py-12 md:py-"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          
        <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
            className="mx-auto max-w-4xl text-center"
          >


            <h2 className=" font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-6xl">
              BENEFITS
            </h2>
          </motion.div>


          <div className="mt-24 grid gap-6 md:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[28px] border border-[#06131f]/8 bg-white shadow-[0_18px_50px_rgba(6,19,31,0.08)]"
              >
                <div className="grid md:grid-cols-[300px_1fr]">
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-7 md:p-8">
                    <h3 className="font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.02em] text-[#06131f]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#06131f]/72">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}