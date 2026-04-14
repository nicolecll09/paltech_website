"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Container from "@/components/ui/Container";
import { useTranslations } from "next-intl";

type LogoItem = {
  id: number;
  src: string;
  alt: string;
};

const logos: LogoItem[] = [
  { id: 1, src: "/images/logos/projects/1.jpg", alt: "Partner logo 1" },
  { id: 2, src: "/images/logos/projects/2.png", alt: "Partner logo 2" },
  { id: 3, src: "/images/logos/projects/3.png", alt: "Partner logo 3" },
  { id: 4, src: "/images/logos/projects/4.png", alt: "Partner logo 4" },
  { id: 5, src: "/images/logos/projects/5.png", alt: "Partner logo 5" },
  { id: 6, src: "/images/logos/projects/6.png", alt: "Partner logo 6" },
  { id: 7, src: "/images/logos/projects/7.png", alt: "Partner logo 7" },
  { id: 8, src: "/images/logos/projects/8.jpg", alt: "Partner logo 8" },
];
export default function LogosFooter() {

  const t = useTranslations();

  const [index, setIndex] = useState(0);
  const extended = [...logos, ...logos];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-t border-[#06131f]/8 bg-white py-12 md:py-16">
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
                  className="flex min-w-[25%] items-center justify-center rounded-[22px] 8 bg-white p-6"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-[200px] w-auto object-contain opacity-80 hover:opacity-100 transition"
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