"use client";

import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "motion/react";
import CoverProject, { ImageSlide } from "@/components/layout/CoverProject";
import { useTranslations } from "next-intl";

function SectionDivider() {
  return (
    <div className="my-8 h-px w-24 bg-[#7ea36a]/40 md:my-10 md:w-32" />
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6e8d5a]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-[#102018] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function SectionTitleWhite({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#6e8d5a]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className="mt-6 space-y-4">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-4">
          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#6e8d5a]" />
          <p className="text-base leading-7 text-[#ffffff]/78 md:text-lg md:leading-8">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function BulletListBlack({ items }: { items: string[] }) {
  return (
    <div className="mt-6 space-y-4">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-4">
          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-[#6e8d5a]" />
          <p className="text-base leading-7 text-[#102018]/78 md:text-lg md:leading-8">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function NeoBotPage() {
  const t = useTranslations("NeoBot");

  const slides: ImageSlide[] = [
    {
      id: 1,
      src: "/images/cover/cow.JPG",
      title: t("cover.slides.0.title"),
      subtitle: t("cover.slides.0.subtitle"),
    },
    {
      id: 2,
      src: "/images/cover/berg.jpg",
      title: t("cover.slides.1.title"),
      subtitle: t("cover.slides.1.subtitle"),
    },
  ];

  return (
    <>
      <Navbar />
      <CoverProject slides={slides} />

      <main className="bg-[#f7f8f4] text-[#102018]">
        <section className="relative overflow-hidden border-b border-[#102018]/8 bg-white py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-7xl">
              <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#102018] md:text-6xl xl:text-7xl">
                {t("hero.title")}
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="grid items-center gap-12 lg:grid-cols-[0.5fr_0.5fr]"
              >
                <div>
                  <p className="mt-16 max-w-4xl text-lg text-justify leading-8 text-[#102018]/72 md:text-3xl">
                    {t("hero.description")}
                  </p>
                </div>

                <div className="mt-6 gap-4">
                  <img
                    src="/images/neobot/neobot.png"
                    alt={t("hero.imageAlt")}
                    className=""
                  />

                  <div className="mt-6 flex justify-center gap-4 rounded-2xl bg-[#506c35] p-4 text-center text-white">
                    <a
                      href="/pdf/Druck_NeoBot.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("hero.downloadButton")}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-5xl rounded-[28px] border border-[#6e8d5a]/18 bg-[#506c35] px-8 py-10 text-white shadow-[0_20px_60px_rgba(110,141,90,0.18)] md:px-12"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75">
                {t("funding.eyebrow")}
              </p>
              <p className="mt-4 text-xl font-medium leading-8 md:text-2xl md:leading-9">
                {t("funding.description")}
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="py-20 md:py-12">
          <Container>
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  eyebrow={t("projectGoal.eyebrow")}
                  title={t("projectGoal.title")}
                />
                <SectionDivider />

                <p className="text-lg leading-8 text-[#102018]/78 md:text-xl">
                  {t("projectGoal.description")}
                </p>

                <p className="mt-6 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                  {t("projectGoal.description2")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
                className="rounded-[30px] border border-[#102018]/8 bg-white p-5 shadow-[0_20px_60px_rgba(16,32,24,0.06)]"
              >
                <div className="overflow-hidden rounded-[24px] bg-[#e9eee3]">
                  <img
                    src="/images/neobot/flower.png"
                    alt={t("projectGoal.imageAlt")}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-5 text-sm leading-6 text-[#102018]/62">
                  <span className="font-semibold">
                    {t("projectGoal.captionLabel")}
                  </span>{" "}
                  {t("projectGoal.caption")}
                </p>

                <a
                  href="https://www.stern.de/gesundheit/jetzt-blueht-der-riesenbaerenklau--diese-pflanze-verbrennt-die-haut-7483900.html"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-[#6e8d5a] transition hover:opacity-80"
                >
                  {t("projectGoal.source")}
                </a>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="border-y border-[#102018]/6 bg-white py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  eyebrow={t("situation.eyebrow")}
                  title={t("situation.title")}
                />
                <SectionDivider />

                <p className="text-lg leading-8 text-[#102018]/78 md:text-xl">
                  {t("situation.description")}
                </p>

                <BulletListBlack
                  items={[
                    t("situation.items.0"),
                    t("situation.items.1"),
                    t("situation.items.2"),
                  ]}
                />

                <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                  {t("situation.description2")}
                </p>

                <p className="mt-5 text-base font-medium leading-7 text-[#102018] md:text-lg">
                  {t("situation.highlight")}
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-28">
          <Container>
            <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  eyebrow={t("solution.eyebrow")}
                  title={t("solution.title")}
                />
                <SectionDivider />

                <p className="text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                  {t("solution.description")}
                </p>

                <BulletListBlack
                  items={[
                    t("solution.items.0"),
                    t("solution.items.1"),
                    t("solution.items.2"),
                    t("solution.items.3"),
                  ]}
                />

                <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                  {t("solution.description2")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65 }}
                className="rounded-[30px] border border-[#102018]/8 bg-white p-5 shadow-[0_20px_60px_rgba(16,32,24,0.06)]"
              >
                <div className="overflow-hidden rounded-[24px] bg-[#eef2ea]">
                  <img
                    src="/images/neobot/image.png"
                    alt={t("solution.imageAlt")}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-5 text-sm leading-6 text-[#102018]/62">
                  <span className="font-semibold">
                    {t("solution.captionLabel")}
                  </span>{" "}
                  {t("solution.caption")}
                </p>

                <a
                  href="https://www.merkur.de/lokales/wolfratshausen/wolfratshausen-ort29708/pflanze-ist-meldepflichtig-an-einigen-stellen-waechst-sie-schon-hartnaeckige-93913634.html"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-[#6e8d5a] transition hover:opacity-80"
                >
                  {t("solution.source")}
                </a>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="border-y border-[#102018]/6 bg-[#102018] py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitleWhite
                  eyebrow={t("results.eyebrow")}
                  title={t("results.title")}
                />
                <SectionDivider />

                <p className="text-base leading-7 text-[#ffffff] md:text-lg md:leading-8">
                  {t("results.description")}
                </p>

                <p className="mt-6 text-base leading-7 text-[#ffffff]/72 md:text-lg md:leading-8">
                  {t("results.description2")}
                </p>

                <BulletList
                  items={[
                    t("results.items.0"),
                    t("results.items.1"),
                    t("results.items.2"),
                    t("results.items.3"),
                  ]}
                />

                <p className="mt-8 text-base leading-7 text-[#ffffff]/72 md:text-lg md:leading-8">
                  {t("results.description3")}
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <SectionTitle
                  eyebrow={t("activities.eyebrow")}
                  title={t("activities.title")}
                />
                <SectionDivider />

                <p className="text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                  {t("activities.description")}
                </p>

                <BulletListBlack
                  items={[
                    t("activities.items.0"),
                    t("activities.items.1"),
                    t("activities.items.2"),
                    t("activities.items.3"),
                    t("activities.items.4"),
                  ]}
                />

                <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                  {t("activities.description2")}
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        <section className="bg-[#102018] py-20 text-white md:py-28">
          <Container>
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b8d2a8]">
                  {t("milestones.eyebrow")}
                </p>
                <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                  {t("milestones.title")}
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                  {t("milestones.description")}
                </p>
              </motion.div>

              <div className="mt-14 grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8d2a8]">
                    {t("milestones.cards.0.year")}
                  </p>
                  <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em]">
                    {t("milestones.cards.0.title")}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8d2a8]">
                    {t("milestones.cards.1.year")}
                  </p>
                  <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em]">
                    {t("milestones.cards.1.title")}
                  </h3>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
    </>
  );
}