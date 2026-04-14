"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

type NavSubItem = {
  key: string;
  href: string;
};

type NavItem = {
  key: string;
  href: string;
  subitems?: NavSubItem[];
};

const navItems: NavItem[] = [
  {
    key: "home",
    href: "/",
    subitems: [
      { key: "product", href: "/#product" },
      { key: "benefits", href: "/#benefits" },
      { key: "references", href: "/#references" }
    ]
  },
  {
    key: "about",
    href: "/about",
    subitems: [
      { key: "history", href: "/about#history" },
      { key: "team", href: "/about#team" },
      // { key: "joinUs", href: "/about#join-us" }
    ]
  },
  {
    key: "projects",
    href: "/projects",
    subitems: [
      { key: "nuga", href: "/nuga" },
      { key: "neobot", href: "/neobot" },
      { key: "potatoControl", href: "/durchwuchskartoffeln" },
      { key: "biobots", href: "/biobots" },
      { key: "arbot", href: "/arbots" }
    ]
  },
  {
    key: "faq",
    href: "/faq"
  },
  {
    key: "contact",
    href: "/contact",
    subitems: [
      { key: "form", href: "/contact#form" },
      { key: "events", href: "/contact#events" }
    ]
  }
];

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [openItem, setOpenItem] = useState<string | null>(null);

  const currentOpen = navItems.find((item) => item.key === openItem);
  const hasOpenSubitems = !!currentOpen?.subitems?.length;

  const switchLocale = locale === "de" ? "en" : "de";

  const handleLocaleChange = () => {
    router.replace(pathname, { locale: switchLocale });
  };

  return (
    <div
      className="sticky top-0 z-50"
      onMouseLeave={() => setOpenItem(null)}
    >
      <header className="bg-[#506c35] py-4 text-xl text-white backdrop-blur-xl">
        <Container className="relative flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logos/white_1.png"
              alt="Paltech Logo"
              className="h-16"
            />
            <span className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.22em] text-white/95" />
          </Link>

          <nav className="hidden items-center gap-10 text-lg font-bold text-white md:flex">
            {navItems.map((item) => {
              const isOpen = openItem === item.key;
              const hasSubitems = !!item.subitems?.length;

              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasSubitems) setOpenItem(item.key);
                    else setOpenItem(null);
                  }}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-2 transition ${
                      isOpen ? "text-white" : "hover:text-white/80"
                    }`}
                  >
                    <span>{t(item.key)}</span>

                    {hasSubitems && (
                      <span
                        className={`text-[10px] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleLocaleChange}
              className="rounded-full border-2 border-white/20 px-6 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#506c35]"
            >
              {switchLocale}
            </button>
          </div>

          <AnimatePresence>
            {openItem && hasOpenSubitems && (
              <div className="absolute left-1/2 top-full w-full max-w-xl -translate-x-1/2 pt-3">
                <motion.div
                  key={openItem}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden bg-white backdrop-blur-xl"
                >
                  <div className="grid grid-cols-1 gap-2 p-4">
                    {currentOpen?.subitems?.map((subitem, index) => (
                      <motion.div
                        key={subitem.key}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18, delay: index * 0.04 }}
                      >
                        <Link
                          href={subitem.href}
                          className="group block rounded-2xl bg-white px-4 py-4 text-left transition hover:bg-[#506c35]"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-sm font-medium text-black/88 transition group-hover:text-white">
                              {t(subitem.key)}
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </Container>
      </header>
    </div>
  );
}