"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

type EventItem = {
  id: number;
  date: string;
  title: string;
  location: string;
  description: string;
};

export default function Events() {
  const t = useTranslations("Events");

  const events: EventItem[] = [
    {
      id: 1,
      date: t("items.0.date"),
      title: t("items.0.title"),
      location: t("items.0.location"),
      description: t("items.0.description"),
    },
    {
      id: 2,
      date: t("items.1.date"),
      title: t("items.1.title"),
      location: t("items.1.location"),
      description: t("items.1.description"),
    },
    {
      id: 3,
      date: t("items.2.date"),
      title: t("items.2.title"),
      location: t("items.2.location"),
      description: t("items.2.description"),
    },
  ];

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#f7f8f4] py-12 md:py-8"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mt-24 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-3xl font-semibold uppercase tracking-[0.24em] text-[#506c35]">
                {t("eyebrow")}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#06131f]/70 md:text-lg">
                {t("description")}
              </p>
            </motion.div>

            <div className="relative mt-14">
              <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[#506c35]/20 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-10">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative grid gap-6 md:grid-cols-2 md:gap-10"
                  >
                    <div
                      className={`md:flex ${
                        index % 2 === 0
                          ? "md:justify-end md:pr-10"
                          : "md:order-2 md:justify-start md:pl-10"
                      }`}
                    >
                      <div className="ml-8 rounded-[24px] border border-[#06131f]/8 bg-white p-6 shadow-[0_16px_45px_rgba(6,19,31,0.05)] md:ml-0 md:max-w-[460px]">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#506c35]">
                          {event.date}
                        </p>
                        <h4 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em] text-[#06131f]">
                          {event.title}
                        </h4>
                        <p className="mt-3 text-sm font-medium text-[#06131f]/55 md:text-base">
                          {event.location}
                        </p>
                        <p className="mt-4 text-base leading-7 text-[#06131f]/72">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className={`${index % 2 === 0 ? "md:order-2" : ""}`} />

                    <div className="absolute left-0 top-8 flex h-6 w-6 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                      <div className="h-3.5 w-3.5 rounded-full bg-[#506c35]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}