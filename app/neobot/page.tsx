"use client";

import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "motion/react";
import { ImageSlide } from "@/components/layout/CoverProject";
import CoverProject from "@/components/layout/CoverProject";

const slides: ImageSlide[] = [
  {
    id: 1,
    src: "/images/cover/cow.JPG",
    title: "NeoBot",
    subtitle:
      "EIP-Agri",
  },
  {
    id: 2,
    src: "/images/cover/berg.jpg",
    title: "NeoBot",
    subtitle:
      "EIP-Agri",
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

function SectionTitleWhite({
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
      <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
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
          <p className="text-base leading-7 text-[#ffffff]/78 md:text-lg md:leading-8">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function BulletListBlack({ items }: { items: string[] }) {
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
export default function NeoBotPage() {
  return (
    <>

    <Navbar />
    <CoverProject slides={slides}/>

    <main className="bg-[#f7f8f4] text-[#102018]">
      {/* HERO */}

            <section className="relative overflow-hidden border-b border-[#102018]/8 bg-white py-24 md:py-32">
              <Container>
                  
                <div className="mx-auto max-w-7xl">
                  <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#102018] md:text-6xl xl:text-7xl">
                  NeoBot – (Teil)autonome Bekämpfung invasiver Pflanzen
                  </h1>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid items-center gap-12 lg:grid-cols-[0.5fr_0.5fr]"
                  >
                    <div>
                      <p className="mt-16 max-w-4xl text-lg leading-8 text-[#102018]/72 md:text-3xl text-justify">
                        Entwicklung eines geländegängigen Roboters zur mechanischen,
                        herbizidfreien Bekämpfung invasiver Pflanzenarten – sicher,
                        praxistauglich und umweltschonend.
                      </p>
                    </div>
      
      
      
                    <div className="mt-6  gap-4">
                        <img
                          src="/images/neobot/neobot.png"
                          alt="NUGA"
                          className="">
        
                        </img>
                        <div className="mt-6 flex justify-center gap-4 bg-[#506c35] p-4 rounded-2xl text-white text-center">
                          <a
                            href="/pdf/Druck_NeoBot.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download Projektbeschreibung (PDF)
                          </a>
                        </div>
                    </div>
      
      
                  </motion.div>
                </div>
              </Container>
            </section>
     
      {/* FOERDERHINWEIS */}
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
              Ein im Rahmen des GAP-Strategieplans Deutschland 2023–2027
              gefördertes Projekt im Freistaat Bayern. Gefördert durch die
              Europäische Innovationspartnerschaft (EIP-Agri).
            </p>
          </motion.div>
        </Container>
      </section>

      {/* PROJEKTZIEL */}
      <section className="py-20 md:py-12">
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
                Invasive Pflanzenarten wie der Riesen-Bärenklau stellen eine
                zunehmende Herausforderung für Landwirtschaft, Umwelt und
                öffentliche Sicherheit dar. Sie verdrängen heimische Arten,
                sind schwer zugänglich und können bei Kontakt gesundheitliche
                Schäden verursachen.
              </p>

              <p className="mt-6 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Ziel des Projekts NeoBot ist die Entwicklung eines
                geländegängigen Roboters, der diese Pflanzen mechanisch und
                ohne den Einsatz von Herbiziden entfernt. Dabei steht eine
                praxistaugliche, sichere und umweltschonende Lösung im Fokus.
              </p>

              {/* <div className="mt-8 rounded-[22px] border border-[#102018]/8 bg-white p-6 shadow-[0_16px_40px_rgba(16,32,24,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6e8d5a]">
                  Textfeld 1
                </p>
                <p className="mt-3 text-base leading-7 text-[#102018]/72">
                  Jakobskreuzkraut und Riesenbärenklau: Bestände "explodieren" -
                  Schuld ist die Hitze | STERN.de
                </p>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="rounded-[30px] border border-[#102018]/8 bg-white p-5 shadow-[0_20px_60px_rgba(16,32,24,0.06)]"
            >
              <div className="overflow-hidden rounded-[24px] bg-[#e9eee3]">
                <img
                  src="/images/neobot/flower.png"
                  alt="Invasive Pflanzenarten im Gelände"
                  className="h-full w-full object-cover"
                />
              </div>
            
              <p className="mt-5 text-sm leading-6 text-[#102018]/62">
                <span className="font-semibold">Abbildung :</span> 
                Riesenbärenklau kann zu schweren Verbrennungen führen
              </p>


              <a
                href="https://www.stern.de/gesundheit/jetzt-blueht-der-riesenbaerenklau--diese-pflanze-verbrennt-die-haut-7483900.html"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-medium text-[#6e8d5a] transition hover:opacity-80"
              >
              Quelle: Merkur
            </a>


              <div>

              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* AUSGANGSSITUATION */}
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

              <p className="text-lg leading-8 text-[#102018]/78 md:text-xl">
                Die Bekämpfung invasiver Neophyten erfolgt heute überwiegend:
              </p>

              <BulletListBlack
                items={[
                  "Manuell (arbeitsintensiv und risikobehaftet)",
                  "Chemisch (ökologisch kritisch)",
                  "Oder mit schwer einsetzbarer Technik",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Gerade in schwer zugänglichem Gelände – z. B. an Hängen,
                Waldrändern oder Gewässern – sind bestehende Lösungen nur
                eingeschränkt geeignet.
              </p>

              <p className="mt-5 text-base leading-7 font-medium text-[#102018] md:text-lg">
                Hier setzt das Projekt NeoBot an.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* LOESUNGSANSATZ */}
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
                Im Rahmen des Projekts wird ein innovatives System entwickelt,
                das folgende Eigenschaften kombiniert:
              </p>

              <BulletListBlack
                items={[
                  "Einsatz in unwegsamem Gelände",
                  "Mechanische, herbizidfreie Bekämpfung",
                  "Kombination aus manueller und teilautonomer Steuerung",
                  "intelligente Erkennung relevanter Pflanzen",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Das System ist modular aufgebaut und kann perspektivisch auch
                für weitere Anwendungen angepasst werden.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="rounded-[30px] border border-[#102018]/8 bg-white p-5 shadow-[0_20px_60px_rgba(16,32,24,0.06)]"
            >
              <div className="overflow-hidden rounded-[24px] bg-[#eef2ea]">
                <img
                  src="/images/neobot/image.png"
                  alt="Schutzkleidung zur Bekämpfung von Riesen-Bärenklau"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-5 text-sm leading-6 text-[#102018]/62">
                <span className="font-semibold">Abbildung 2:</span> Will man den
                Riesen-Bärenklau entfernen, ist das Tragen von Schutzkleidung
                Pflicht. Ansonsten drohen Verbrennungen der Haut.
              </p>


              <a
                href="https://www.merkur.de/lokales/wolfratshausen/wolfratshausen-ort29708/pflanze-ist-meldepflichtig-an-einigen-stellen-waechst-sie-schon-hartnaeckige-93913634.html"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-medium text-[#6e8d5a] transition hover:opacity-80"
              >
              Quelle: Merkur
            </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ERWARTETE ERGEBNISSE */}
      <section className="border-y border-[#102018]/6 bg-[#102018] py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitleWhite eyebrow="04" title="Erwartete Ergebnisse" />
              <SectionDivider />

              <p className="text-base leading-7 text-[#ffffff] md:text-lg md:leading-8">
                Das Projekt zielt auf die Entwicklung eines funktionsfähigen
                Demonstrators ab, der unter realen Bedingungen eingesetzt werden
                kann.
              </p>

              <p className="mt-6 text-base leading-7 text-[#fffff]/72 md:text-lg md:leading-8">
                Erwartet werden insbesondere:
              </p>

              <BulletList
                items={[
                  "Eine deutliche Reduktion des manuellen Arbeitsaufwands",
                  "Eine Verbesserung der Arbeitssicherheit",
                  "Eine umweltfreundliche Alternative zu chemischen Verfahren",
                  "Neue Ansätze für den Einsatz moderner Technologien in der Landschaftspflege",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#ffffff]/72 md:text-lg md:leading-8">
                Langfristig soll die Lösung zur Förderung der Biodiversität
                beitragen und neue Perspektiven für den praktischen Einsatz
                automatisierter Systeme eröffnen.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* PROJEKTAKTIVITAETEN */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle eyebrow="05" title="Projektaktivitäten" />
              <SectionDivider />

              <p className="text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Das Projekt umfasst mehrere aufeinander abgestimmte
                Arbeitsschritte:
              </p>

              <BulletListBlack
                items={[
                  "Entwicklung und Integration zentraler Systemkomponenten",
                  "Anpassung an unterschiedliche Einsatzbedingungen",
                  "Aufbau eines sicheren und zuverlässigen Betriebs",
                  "Durchführung von Labor- und Feldtests",
                  "begleitende Kommunikation und Wissenstransfer",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Ein besonderer Fokus liegt auf der praktischen Erprobung unter
                realen Bedingungen.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* MEILENSTEINE */}
      <section className="bg-[#102018] py-20 text-white md:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b8d2a8]">
                06
              </p>
              <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                Meilensteine
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                Diese Schritte bilden die Grundlage für eine mögliche spätere
                Anwendung in der Praxis.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8d2a8]">
                  2026
                </p>
                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em]">
                  Demonstrator unter kontrollierten Bedingungen
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8d2a8]">
                  2027
                </p>
                <h3 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em]">
                  Einsatzfähiges Gesamtsystem im realen Gelände
                </h3>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
    </>
  );
}