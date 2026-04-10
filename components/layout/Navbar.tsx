"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";

type NavSubItem = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  subitems?: NavSubItem[];
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    subitems: [
      { label: "Product", href: "/#product" },
      { label: "Benefits", href: "/#benefits" },
      { label: "References", href: "/#references" },

    ],
  },


  {
    label: "About",
    href: "/about",
    subitems: [
      { label: "History", href: "/about#history" },
      { label: "Team", href: "/about#team" },
      { label: "Join Us", href: "/about#join-us" },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    subitems: [
      { label: "NUGA", href: "/nuga" },
      { label: "NeoBot", href: "/neobot" },
      { label: "Bekämpfung von Durchwuchskartoffeln", href: "/durchwuchskartoffeln" },
      { label: "BioBots", href: "/biobots" },
      { label: "Arbot", href: "/arbots" },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
    subitems: [
      // { label: "Tracking Challenges", href: "#motivation" },
      // { label: "System Limitations", href: "#motivation" },
    ],
  },

  {
    label: "Contact",
    href: "/contact",
    subitems: [
      { label: "Form", href: "/contact#form" },
      { label: "Join Us", href: "/contact#join" },

    ],
  },

];

export default function Navbar() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const currentOpen = navItems.find((item) => item.label === openItem);
  const hasOpenSubitems = !!currentOpen?.subitems?.length;

  return (
    <div
      className="sticky top-0 z-50"
      onMouseLeave={() => setOpenItem(null)}
    >
      <header className=" bg-[#506c35] py-4 text-xl text-white backdrop-blur-xl">
        <Container className="relative flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src="/images/logos/white_1.png"
              alt="Paltech Logo"
              className="h-16" 
            />
            <span className="font-[var(--font-heading)] text-sm font-semibold uppercase tracking-[0.22em] text-white/95">
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-lg font-bold text-white md:flex">
            {navItems.map((item) => {
              const isOpen = openItem === item.label;
              const hasSubitems = !!item.subitems?.length;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (hasSubitems) setOpenItem(item.label);
                    else setOpenItem(null);
                  }}
                >
                  <a
                    href={item.href}
                    className={`inline-flex items-center gap-2 transition ${
                      isOpen ? "text-white" : "hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>

                    {hasSubitems && (
                      <span
                        className={`text-[10px] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    )}
                  </a>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            DE/EN
          </div>


          <AnimatePresence>
            {openItem && hasOpenSubitems && (
              <div className="absolute left-1/2 top-full w-full max-w-xl -translate-x-1/2 pt-3 bg-white text-black">
                <motion.div
                  key={openItem}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden  backdrop-blur-xl"
                >
                  <div className="grid grid-cols-1 gap-2 p-4">
                    {currentOpen?.subitems?.map((subitem, index) => (
                      <motion.a
                        key={subitem.label}
                        href={subitem.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18, delay: index * 0.04 }}
                        className="group rounded-2xl  bg-white px-4 py-4 text-left transition hover:border-[#506c35]/20 hover:bg-[#506c35]"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-sm font-medium text-black/88 transition group-hover:text-white">
                            {subitem.label}
                          </span>
                        </div>
                      </motion.a>
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