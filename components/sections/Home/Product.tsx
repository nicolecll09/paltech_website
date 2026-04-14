"use client";

import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

type Feature = {
  key: string;
  position: string;
};

const features: Feature[] = [
  { key: "multiStageAiDetection", position: "left-top" },
  { key: "obstacleDetectionStatusDisplay", position: "left-middle" },
  { key: "oscillatingAxleUnevenTerrain", position: "left-bottom" },
  { key: "rtkPositioning", position: "right-top" },
  { key: "swapBatteryLongMissions", position: "right-middle" },
  { key: "rearWheelSteering", position: "right-bottom" }
];

function FeatureLabel({
  title,
  text
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="w-full max-w-[380px] min-w-0">
      <p className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#06131f] md:text-3xl">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 min-w-0 text-[#06131f]/70 md:text-sm break-words">
        {text}
      </p>
    </div>
  );
}

export default function Product() {
  const t = useTranslations("Product");

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
              {t("subtitle")}
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#06131f]/72 md:text-lg">
              {t("description")}
            </p>
          </motion.div>

          <div className="mt-20 grid gap-10 lg:grid-cols-[1.15fr_minmax(360px,520px)_1.15fr] lg:items-center">
            <div className="min-w-0 space-y-14">
              {features
                .filter((item) => item.position.startsWith("left"))
                .map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative min-w-0"
                  >
                    <div className="mb-4 h-px w-24 bg-[#0B7ED6]/35" />
                    <FeatureLabel
                      title={t(`features.${item.key}.title`)}
                      text={t(`features.${item.key}.text`)}
                    />
                  </motion.div>
                ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto w-full max-w-[400px]"
            >
              <div className="relative overflow-visible">
                <img
                  src="/images/product/robot_3.PNG"
                  alt={t("robotImageAlt")}
                  className="w-full scale-[1.25] object-contain md:scale-[1.35]"
                />
              </div>
            </motion.div>

            <div className="min-w-0 space-y-14 lg:ml-16">
              {features
                .filter((item) => item.position.startsWith("right"))
                .map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="relative min-w-0"
                  >
                    <div className="mb-4 h-px w-24 bg-[#0B7ED6]/35" />
                    <FeatureLabel
                      title={t(`features.${item.key}.title`)}
                      text={t(`features.${item.key}.text`)}
                    />
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
              {t("supportBanner")}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}