"use client";

import Container from "@/components/ui/Container";
import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CoverProject from "@/components/layout/CoverProject";
import { ImageSlide } from "@/components/layout/CoverProject";


const slides: ImageSlide[] = [
    {
      id: 1,
      src: "/images/cover/cow.JPG",
      title: "Arbot",
      subtitle:
        "Arbot",
    },
    {
      id: 2,
      src: "/images/cover/berg.jpg",
      title: "Arbot",
      subtitle:
        "Arbot",
    },
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
                Autonome Robotik für die Wiederaufforstung der Wälder 
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-[#102018]/72 md:text-xl">
                  Entwicklung eines autonomen Robotersystems zur ökologischen
                  Aufwertung und effizienten Pflege von Straßenbegleitflächen.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#102018]/8 bg-[#f3f5ee] p-8 shadow-[0_20px_60px_rgba(16,32,24,0.06)]">
 

                <div className="mt-6 ">
      
                </div>
              </div>
            </motion.div>
          </div>
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
            Gefördert im Rahmen der Initiative KMU-innovativ – Bioökonomie 
            durch das Bundesministerium für Forschung, Technologie und Raumfahrt. 
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
                  "Setzlinge automatisiert pflanzen",
                  "Selbstständig im Wald navigieren",
                  "Unter realen Bedingungen eingesetzt werden",
                  "Den Arbeitsaufwand in der Forstwirtschaft drastisch reduzieren",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
              Damit wird ein zentraler Engpass der Wiederaufforstung adressiert: der akute Arbeitskräftemangel.  
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
              Die Wälder stehen vor großen Herausforderungen: 
              </p>

              <BulletList
                items={[
                  "Klimawandelbedingte Schäden (Trockenheit, Borkenkäfer)",
                  "Steigender Bedarf an Wiederaufforstung  ",
                  "Großer Flächenbedarf (hunderttausende Hektar)  ",
                  "Gleichzeitig sinkende verfügbare Arbeitskräfte  ",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
              Die manuelle Pflanzung ist zeitaufwendig, körperlich belastend und schwer skalierbar. 
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
              Arbot entwickelt einen hoch- bis vollautomatisierten Forstroboter, der folgende Fähigkeiten kombiniert: 
              </p>

              <BulletList
                items={[
                  "Autonome Navigation im Wald (auch ohne GPS)  ",
                  "Erkennung geeigneter Pflanzpositionen",
                  "Präzises Setzen von Setzlingen  ",
                  "Robuste Mobilität in unstrukturiertem Gelände  ",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
              Technologisch basiert das System u. a. auf: 
              </p>

              <BulletList
                items={[
                  "SLAM-Verfahren zur Lokalisierung",
                  "KI-gestützter Wahrnehmung",
                  "Modularer Robotikplattform",
                ]}
              />
              <p className="mt-8 text-base leading-7 text-[#102018]/50 md:text-lg md:leading-8">
              Ziel ist ein funktionsfähiger Prototyp (TRL 4–5), der im realen Wald getestet wird. 
              </p>
              
            </motion.div>


          </div>
        </Container>
      </section>
      <Footer />
    </main>
    </>
  );
}