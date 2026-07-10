"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

type Job = {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  href: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: " Mechanik Entwickler (m/w/d)",
    location: "Deutschland",
    type: "Vollzeit",
    description:
      "See more",
    href: "/jobs/Ausschreibung_Maschbau_2026.pdf",
  },

  {
    id: 2,
    title: "Technischer Vertriebsingenieur (m/w/d)",
    location: "Deutschland",
    type: "Vollzeit",
    description:
      "See more",
    href: "/jobs/Technischer_Vertriebsingenieur.pdf",
  },


  {
    id: 3,
    title: "Servicetechniker (m/w/d)",
    location: "Deutschland",
    type: "Vollzeit/ Teilzeit",
    description:
      "See more",
    href: "/jobs/Servicetechniker.pdf",
  },
];

export default function JoinUs() {


  const t = useTranslations("JoinUs");
  
  return (
    <section
      id="join-us"
      className="relative overflow-hidden bg-[#f7f8f6] py-24 md:py-32"
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
            <p className="text-5xl font-semibold uppercase tracking-[0.24em] text-[#506c35]">
              {t("subtitle")}
            </p>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-6xl">
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#06131f]/70 md:text-lg">
              {t("description")}
            </p>
          </motion.div>

          {/* Jobs grid */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {jobs.map((job, index) => (
              <motion.a
                key={job.id}
                href={job.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative block overflow-hidden rounded-[28px] border border-[#06131f]/8 bg-white p-8 shadow-[#506c35]/60 transition hover:shadow-[0_25px_80px_rgba(6,19,31,0.12)] hover:-translate-y-1"
              >
                {/* subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#506c35]/10 to-transparent" />
                </div>

                {/* content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#506c35]">
                      {job.type}
                    </span>
                    <span className="text-xs text-[#06131f]/50">
                      {job.location}
                    </span>
                  </div>

                  <h3 className="mt-5 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em] text-[#06131f] md:text-3xl">
                    {job.title}
                  </h3>

                  <div className="mt-8">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#06131f] transition group-hover:gap-3">
                    Stelle ansehen
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="text-lg text-[#06131f]/70">
              Don’t see a role that fits?
              Send us an open application →

            </p>

            <a
              href="mailto:careers@paltech.com"
              className="mt-4 inline-block font-semibold text-black transition"
            >
              Send us an open application →
            </a>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
}