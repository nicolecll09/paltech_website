"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";

const features = [
  {
    title: "Multi-stage AI detection",
    text: "Advanced perception for precise weed identification in grassland environments.",
    position: "left-top",
  },
  {
    title: "Obstacle detection & status display",
    text: "Integrated sensing and visual feedback for safer autonomous operation.",
    position: "left-middle",
  },
  {
    title: "Oscillating axle for uneven terrain",
    text: "Stable performance across irregular ground and demanding field conditions.",
    position: "left-bottom",
  },
  {
    title: "RTK positioning",
    text: "Centimeter-level positioning accuracy for repeatable field operations.",
    position: "right-top",
  },
  {
    title: "Swap battery for long missions",
    text: "Designed for extended deployments with up to 10–12 hours of operation.",
    position: "right-middle",
  },
  {
    title: "Rear-wheel steering",
    text: "High maneuverability for tighter turns and efficient navigation.",
    position: "right-bottom",
  },
];

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

function FeatureLabel({
  title,
  text,
  align = "left",
}: {
  title: string;
  text: string;
  align?: "left" | "right";
}) {
  return (
    <div className={`max-w-[320px]`}>
      <p className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#06131f] leading-tight">
        {title}
      </p>
      <p className="mt-3 text-base md:text-lg leading-7 text-[#06131f]/70">
        {text}
      </p>
    </div>
  );
}

export default function Product() {
  return (
    <section
      id="product"
      className="relative overflow-hidden bg-[#ffffff] py-24 md:py-32"
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


            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-6xl">
              PRATUM
            </h2>

            <p className="mt-5 text-xl font-medium leading-8 text-[#06131f] md:text-2xl">
              The autonomous grassland robot
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#06131f]/72 md:text-lg">
              Precision weed control without chemicals, designed for organic
              grassland and autonomous field operation.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_minmax(420px,560px)_1fr] lg:items-center">
            <div className="space-y-14">
              {features
                .filter((item) => item.position.startsWith("left"))
                .map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative"
                  >
                    <div className="mb-4 h-px w-24 bg-[#0B7ED6]/35" />
                    <FeatureLabel title={item.title} text={item.text} />
                  </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="relative mx-auto w-full max-w-[900px]"
              >
                <div className="relative overflow-visible">
                  <img
                    src="/images/product/robot_3.PNG"
                    alt="PRATUM autonomous grassland robot"
                    className="w-full scale-[1.25] md:scale-[1.35] object-contain"
                  />
                </div>
              </motion.div>

            <div className="space-y-14 ml-16">
              {features
                .filter((item) => item.position.startsWith("right"))
                .map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative"
                  >
                    <div className="mb-4 h-px w-24 bg-[#0B7ED6]/35" />
                    <FeatureLabel title={item.title} text={item.text} align="right" />
                  </motion.div>
                ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6 }}
            className="mt-24 rounded-[24px] border border-[#506c35]/15 bg-[#506c35] px-6 py-7 text-center md:px-10"
          >
            <p className="text-2xl font-semibold tracking-[-0.02em] text-[#ffffff] md:text-3xl">
              Eligible for BaySL Digital support: up to 40% subsidy on purchase price.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}