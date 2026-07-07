"use client";

import { useEffect, useState } from "react";
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
      { key: "joinUs", href: "/about#join-us" }
    ]
  },
  {
    key: "projects",
    href: "/projects",
    subitems: [
      { key: "nuga", href: "/nuga" },
      { key: "neobot", href: "/neobot" },
      { key: "potatoControl", href: "/durchwuchskartoffeln" },
      { key: "biobots", href: "/biobots" }
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null);

  const switchLocale = locale === "de" ? "en" : "de";

  const handleLocaleChange = () => {
    router.replace(pathname, { locale: switchLocale });
    setMobileMenuOpen(false);
  };

  const handleMobileSubmenu = (itemKey: string) => {
    setMobileOpenItem((prev) => (prev === itemKey ? null : itemKey));
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOpenItem(null);
  };

  useEffect(() => {
    handleCloseMobileMenu();
  }, [pathname]);

  return (
    <div
      className="sticky top-0 z-50"
      onMouseLeave={() => setOpenItem(null)}
    >
      <header className="border-b border-white/10 bg-[#506c35]/95 text-white backdrop-blur-xl">
        <Container className="relative flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={handleCloseMobileMenu}>
            <img
              src="/images/logos/white_1.png"
              alt="Paltech Logo"
              className="h-12 w-auto md:h-16"
            />
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

                  <AnimatePresence>
                    {isOpen && hasSubitems && (
                      <div className="absolute left-0 top-full pt-3">
                        <motion.div
                          key={item.key}
                          initial={{ opacity: 0, y: -12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="min-w-[240px] overflow-hidden rounded-2xl bg-white shadow-xl"
                        >
                          <div className="grid grid-cols-1 gap-2 p-4">
                            {item.subitems?.map((subitem, index) => (
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
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <button
              type="button"
              onClick={handleLocaleChange}
              className="rounded-full border-2 border-white/20 px-6 py-1 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#506c35]"
            >
              {switchLocale}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={handleLocaleChange}
              className="rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-white hover:text-[#506c35]"
            >
              {switchLocale}
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-white transition ${
                    mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 bg-white transition ${
                    mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="border-t border-white/10 bg-[#506c35] md:hidden"
            >
              <Container className="py-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => {
                    const hasSubitems = !!item.subitems?.length;
                    const isMobileOpen = mobileOpenItem === item.key;

                    return (
                      <div
                        key={item.key}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <Link
                            href={item.href}
                            onClick={handleCloseMobileMenu}
                            className="flex-1 px-4 py-4 text-base font-semibold text-white"
                          >
                            {t(item.key)}
                          </Link>

                          {hasSubitems && (
                            <button
                              type="button"
                              onClick={() => handleMobileSubmenu(item.key)}
                              className="px-4 py-4 text-white/80"
                              aria-label={`Open ${t(item.key)} submenu`}
                            >
                              <span
                                className={`block text-xs transition-transform duration-200 ${
                                  isMobileOpen ? "rotate-180" : ""
                                }`}
                              >
                                ▼
                              </span>
                            </button>
                          )}
                        </div>

                        <AnimatePresence>
                          {hasSubitems && isMobileOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-white/10 px-2 pb-2">
                                {item.subitems?.map((subitem) => (
                                  <Link
                                    key={subitem.key}
                                    href={subitem.href}
                                    onClick={handleCloseMobileMenu}
                                    className="block rounded-xl px-3 py-3 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                                  >
                                    {t(subitem.key)}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}