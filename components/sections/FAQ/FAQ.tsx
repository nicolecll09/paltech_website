"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

function FAQCard({
  item,
  isOpen,
  onToggle
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className="overflow-hidden rounded-[24px] border border-[#06131f]/8 bg-white shadow-[0_14px_40px_rgba(6,19,31,0.05)]"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8 md:py-7"
        aria-expanded={isOpen}
      >
        <h3 className="font-[var(--font-heading)] text-xl font-semibold tracking-[-0.02em] text-[#06131f] md:text-2xl">
          {item.question}
        </h3>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#06131f]/10 text-[#06131f]">
          <span className="text-xl leading-none">{isOpen ? "−" : "+"}</span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8">
              <p className="max-w-3xl text-base leading-7 text-[#06131f]/70 md:text-lg md:leading-8">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [openId, setOpenId] = useState<number | null>(1);

  const router = useRouter();
  const locale = useLocale();
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: t("items.1.question"),
      answer: t("items.1.answer")
    },
    {
      id: 2,
      question: t("items.2.question"),
      answer: t("items.2.answer")
    },
    {
      id: 3,
      question: t("items.3.question"),
      answer: t("items.3.answer")
    },
    {
      id: 4,
      question: t("items.4.question"),
      answer: t("items.4.answer")
    },
    {
      id: 5,
      question: t("items.5.question"),
      answer: t("items.5.answer")
    }
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#f7f8f6] py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-4xl font-semibold uppercase tracking-[0.24em] text-[#506c35]">
              {t("eyebrow")}
            </p>

            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-6xl">
              {t("title")}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#06131f]/70 md:text-lg">
              {t("description")}
            </p>
          </motion.div>

          <div className="mx-auto mt-16 max-w-4xl space-y-5 md:mt-20">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <FAQCard
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() =>
                    setOpenId((prev) => (prev === item.id ? null : item.id))
                  }
                />
              </motion.div>
            ))}
          </div>
          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center text-center">
            <p className="text-base leading-relaxed text-[#06131f]/70 md:text-lg">
              {t("more1")}
            </p>

            <Link
              href={`/${locale}/contact`}
              className="mt-6 rounded-full bg-[#506C35]/90 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#506C35] hover:shadow-lg md:text-base"
            >
              {t("more2")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}