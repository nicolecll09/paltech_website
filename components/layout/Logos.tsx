"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export type LogoItem = {
  id: number;
  src: string;
  alt: string;
};

export default function Logos({ logos }: { logos: LogoItem[] }) {
  const [index, setIndex] = useState(0);
  const t = useTranslations("");

  const extended = [...logos, ...logos];

  useEffect(() => {
    if (!logos.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="bg-white py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-4xl font-semibold uppercase tracking-[0.22em] text-[#506c35]">
              {t("Supported")}
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#06131f]/8 bg-[#f7f8f4] px-6 py-8 md:px-10">
            <div
              className="flex gap-6 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * 25}%)`,
              }}
            >
              {extended.map((logo, i) => (
                <div
                  key={`${logo.id}-${i}`}
                  className="flex min-w-[25%] items-center justify-center rounded-[22px] bg-white p-6"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-[200px] w-auto object-contain opacity-80 transition hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}