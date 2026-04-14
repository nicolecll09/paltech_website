"use client";

import Container from "@/components/ui/Container";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoverProject, { ImageSlide } from "@/components/layout/CoverProject";
import Logos, { LogoItem } from "@/components/layout/Logos";

function SectionDivider() {
  return (
    <div className="my-8 h-px w-24 bg-[#7ea36a]/40 md:my-10 md:w-32" />
  );
}

function SectionTitle({
  title,
}: {
  title: string;
}) {
  return (
    <div>
      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-[#102018] md:text-5xl">
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
          <p className="text-base leading-7 text-[#102018]/78 md:text-lg md:leading-8">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function NugaPage() {
  const t = useTranslations("Nuga");

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

  const logos: LogoItem[] = [
    { id: 1, src: "/images/logos/projects/1.jpg", alt: t("logos.0.alt") },
    { id: 2, src: "/images/logos/projects/2.png", alt: t("logos.1.alt") },
    { id: 3, src: "/images/logos/projects/3.png", alt: t("logos.2.alt") },
    { id: 4, src: "/images/logos/projects/4.png", alt: t("logos.3.alt") },
    { id: 5, src: "/images/logos/projects/5.png", alt: t("logos.4.alt") },
    { id: 6, src: "/images/logos/projects/6.png", alt: t("logos.5.alt") },
    { id: 7, src: "/images/logos/projects/7.png", alt: t("logos.6.alt") },
    { id: 8, src: "/images/logos/projects/8.jpg", alt: t("logos.7.alt") },
  ];

  const resultItems = [
    t("results.items.0"),
    t("results.items.1"),
    t("results.items.2"),
    t("results.items.3"),
  ];

  return (
    <>
      <Navbar />
      <main className="bg-[#f7f8f4] text-[#102018]">
        <CoverProject slides={slides} />

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[#102018]/8 bg-white py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-7xl">
              <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#102018] md:text-6xl xl:text-7xl">
                {t("title")}
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="grid items-center gap-12 lg:grid-cols-[0.5fr_0.5fr]"
              >
                <div>
                  <p className="mt-16 max-w-3xl text-lg leading-8 text-[#102018]/72 md:text-2xl text-justify">
                    {t("description1")}
                  </p>
                  <p className="mt-16 max-w-3xl text-lg leading-8 text-[#102018]/72 md:text-2xl text-justify">
                    {t("description2")}
                  </p>
                </div>

                <div className="mt-6 gap-4">
                  <img
                    src="/images/nuga/nuga.jpg"
                    alt={t("hero.imageAlt")}
                  />

                  <div className="mt-6 flex justify-center gap-4 rounded-2xl bg-[#506c35] p-4 text-center text-white">
                    <a
                      href="/pdf/Nuga.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold"
                    >
                      {t("hero.downloadButton")}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* EIP-AGRI */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-7xl rounded-[28px] border border-[#6e8d5a]/18 bg-[#506c35] px-8 py-10 text-white shadow-[0_20px_60px_rgba(110,141,90,0.18)] md:px-12"
            >
              <p className="text-center text-4xl font-semibold uppercase tracking-[0.22em] text-white">
                {t("ziel.title")}
              </p>

              <p className="mt-16 text-center text-xl font-medium leading-8 md:text-2xl md:leading-9">
                {t("ziel.description")}
              </p>
            </motion.div>

            <Logos logos={logos} />
          </Container>
        </section>

        {/* PROBLEM */}
        <section className="border-y border-[#102018]/6 py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-7xl">
              <div className="grid items-start gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-xl"
                >
                  <SectionTitle title={t("problem.title")} />
                  <SectionDivider />

                  <p className="text-base leading-7 text-black md:text-lg md:leading-8">
                    {t("problem.description")}
                  </p>

                  <p className="mt-6 text-base leading-7 text-black md:text-lg md:leading-8">
                    {t("problem.description2")}
                  </p>

                  <p className="mt-6 text-base leading-7 text-black md:text-lg md:leading-8">
                    {t("problem.description3")}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65 }}
                  className="relative"
                >
                  <div className="overflow-hidden rounded-[30px] border border-[#102018]/8 bg-white shadow-[0_25px_70px_rgba(16,32,24,0.08)]">
                    <img
                      src="/images/nuga/nuga_3.jpg"
                      alt={t("problem.imageAlt")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* RESULTS */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-7xl">
              <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6 }}
                >
                  <SectionTitle title={t("results.title")} />
                  <SectionDivider />

                  <BulletList items={resultItems} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65 }}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-1"
                >
                  <div className="overflow-hidden rounded-[5px] bg-white">
                    <img
                      src="/images/nuga/nuga_1.png"
                      alt={t("results.images.0.alt")}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="overflow-hidden rounded-[5px] bg-white">
                    <img
                      src="/images/nuga/nuga_2.png"
                      alt={t("results.images.1.alt")}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA PDF */}
        {/* <section className="bg-[#102018] py-20 text-white md:py-28">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b8d2a8]">
                  {t("cta.eyebrow")}
                </p>

                <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                  {t("cta.title")}
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                  {t("cta.description")}
                </p>

                <a
                  href="/pdfs/erlaeuterungstafel.pdf"
                  className="mt-8 inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#102018] transition hover:bg-white/90"
                >
                  <p className="text-black">{t("cta.button")}</p>
                </a>
              </motion.div>
            </div>
          </Container>
        </section> */}

        <Footer />
      </main>
    </>
  );
}