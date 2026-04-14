"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

export default function Team() {
  const t = useTranslations("Team");

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[30px] border border-[#06131f]/8 bg-[#eef2f1] shadow-[0_24px_70px_rgba(6,19,31,0.08)]">
              <img
                src="/images/about/team.jpg"
                alt={t("imageAlt")}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="max-w-2xl"
          >
            <p className="text-xl font-semibold uppercase tracking-[0.24em] text-[#506c35]">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-6xl">
              {t("title")}
            </h2>

            <p className="mt-6 text-base leading-7 text-[#06131f]/72 md:text-lg md:leading-8">
              {t("description1")}
            </p>
            <p className="mt-6 text-base leading-7 text-[#06131f]/72 md:text-lg md:leading-8">
              {t("description2")}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}