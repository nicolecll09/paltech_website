"use client";

import Container from "@/components/ui/Container";
import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoverProject from "@/components/layout/CoverProject";
import { ImageSlide } from "@/components/layout/CoverProject";
import { LogoItem } from "@/components/layout/Logos";
import Logos from "@/components/layout/Logos";
const slides: ImageSlide[] = [
    {
      id: 1,
      src: "/images/cover/cow.JPG",
      title: "BioBot",
      subtitle:
        "",
    },
    {
      id: 2,
      src: "/images/cover/berg.jpg",
      title: "BioBot",
      subtitle:
        "",
    },
  ];

const logos: LogoItem[] = [
  { id: 1, src: "/images/biobot/1.svg", alt: "Partner logo 1" },
  { id: 2, src: "/images/biobot/2.svg", alt: "Partner logo 2" },
  { id: 3, src: "/images/biobot/3.svg", alt: "Partner logo 3" },
  { id: 4, src: "/images/biobot/4.jpeg", alt: "Partner logo 4" },

];



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

export default function BioBotsPage() {
  return (
    <>
    <Navbar />
    <main className="bg-[#f7f8f4] text-[#102018]">
      <CoverProject slides={slides}/>
      <section className="relative overflow-hidden border-b border-[#102018]/8 bg-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]"
            >
              <div>


                <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#102018] md:text-6xl xl:text-7xl">
                  Autonome Robotik zur Förderung der Biodiversität im
                  Straßenbegleitgrün
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-[#102018]/72 md:text-xl">
                  Entwicklung eines autonomen Robotersystems zur ökologischen
                  Aufwertung und effizienten Pflege von Straßenbegleitflächen.
                </p>
              </div>

              <div className="">
 

                <div className="mt-6 ">
                <img
                  src="/images/biobot/BioBots_Dark.png"
                  alt="Straßenbegleitgrün und autonome Pflege"
                  className="h-full w-full object-cover"
                />
      
                </div>
              </div>
            </motion.div>

          </div>
          <Logos logos={logos} />

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
              Förderhinweis
            </p>
            <p className="mt-4 text-xl font-medium leading-8 md:text-2xl md:leading-9">
              Gefördert im Rahmen der Maßnahme Digital GreenTech – Umwelttechnik
              trifft Robotik durch das Bundesministerium für Forschung,
              Technologie und Raumfahrt (BMFTR).
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle eyebrow="01" title="Projektziel" />
              <SectionDivider />

              <p className="text-lg leading-8 text-[#102018]/78 md:text-xl">
                Straßenbegleitflächen bieten ein großes, bislang kaum genutztes
                Potenzial für Natur- und Klimaschutz. Ziel des Projekts ist die
                Entwicklung eines autonomen Robotersystems, das diese Flächen
                ökologisch aufwertet und gleichzeitig effizient pflegt.
              </p>

              <p className="mt-6 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Der Roboter soll:
              </p>

              <BulletList
                items={[
                  "Straßenränder selbstständig befahren",
                  "selektiv und insektenschonend mähen",
                  "invasive Pflanzen gezielt zurückdrängen",
                  "gezielt heimische Arten ausbringen",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Damit werden Straßenränder aktiv zu Biotopverbundachsen
                entwickelt.
              </p>
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
              <SectionTitle eyebrow="02" title="Ausgangssituation" />
              <SectionDivider />

              <p className="text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Straßenbegleitflächen werden heute meist konventionell gepflegt
                – oft durch Mulchen oder einfache Mahd. Das führt zu mehreren
                Problemen:
              </p>

              <BulletList
                items={[
                  "Förderung konkurrenzstarker Pflanzen durch Nährstoffanreicherung",
                  "Verdrängung heimischer Arten",
                  "starke Ausbreitung invasiver Pflanzen (z. B. Goldrute, Staudenknöterich)",
                  "hohe Schädigung von Insekten durch ungeeignete Mähtechnik",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Gleichzeitig bleiben große Flächen ökologisch ungenutzt, obwohl
                sie als Vernetzungskorridore eine wichtige Rolle für die
                Biodiversität spielen könnten.
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
              <SectionTitle eyebrow="03" title="Lösungsansatz" />
              <SectionDivider />

              <p className="text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Das Projekt verfolgt einen integrierten, technologiebasierten
                Ansatz:
              </p>

              <BulletList
                items={[
                  "Autonome Navigation entlang von Straßenrändern",
                  "KI-basierte Pflanzen- und Umfelderkennung",
                  "selektive, abschnittsweise Mahd statt flächiger Bearbeitung",
                  "gezielte Bekämpfung invasiver Arten",
                  "aktive Nachsaat heimischer Pflanzenarten",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Der Roboter kombiniert Pflege, Monitoring und ökologische
                Aufwertung in einem System.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="rounded-[30px] border border-[#102018]/8 bg-white p-5 shadow-[0_20px_60px_rgba(16,32,24,0.06)]"
            >
              <div className="flex h-full min-h-[320px] items-center justify-center rounded-[24px] border border-dashed border-[#102018]/12 bg-[#eef2ea] text-center text-sm text-[#102018]/45 md:min-h-[420px]">
              <div className="overflow-hidden rounded-[24px] bg-[#e9eee3]">
                <img
                  src="/images/biobot/biobot.png"
                  alt="Straßenbegleitgrün und autonome Pflege"
                  className="h-full w-full object-cover"
                />
              </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
    </>
  );
}