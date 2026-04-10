"use client";

import Container from "@/components/ui/Container";
import { motion } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ImageSlide } from "@/components/layout/CoverProject";
import CoverProject from "@/components/layout/CoverProject";

const slides: ImageSlide[] = [
  {
    id: 1,
    src: "/images/cover/cow.JPG",
    title: "Bekämpfung von Durchwuchskartoffeln",
    subtitle:
      "EIP-Agri",
  },
  {
    id: 2,
    src: "/images/cover/berg.jpg",
    title: "Bekämpfung von Durchwuchskartoffeln",
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

export default function DurchwuchskartoffelnPage() {
  return (

    <>

    <Navbar />
    <CoverProject slides={slides}/>
    <main className="bg-[#f7f8f4] text-[#102018]">


    <section className="relative overflow-hidden border-b border-[#102018]/8 bg-white py-24 md:py-32">
              <Container>
                  
                <div className="mx-auto max-w-7xl">
                  <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#102018] md:text-6xl xl:text-7xl">
                    Bekämpfung von Durchwuchskartoffeln
                  </h1>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid items-center gap-12 lg:grid-cols-[0.5fr_0.5fr]"
                  >
                    <div>
                      <p className="mt-16 max-w-4xl text-lg leading-8 text-[#102018]/72 md:text-3xl text-justify">
                      Entwicklung eines Robotersystems zur gezielten Erkennung und
                      mechanischen Entfernung von Durchwuchskartoffeln – ohne den
                      Einsatz chemischer Pflanzenschutzmittel.
                      </p>
                    </div>
      
      
      
                    <div className="mt-6  gap-4">
                        <img
                          src="/images/kartoffeln/DWK.png"
                          alt="NUGA"
                          className="">
        
                        </img>
                        <div className="mt-6 flex justify-center gap-4 bg-[#506c35] p-4 rounded-2xl text-white text-center">
                          <a
                            href="/pdf/Druck_DWK.pdf"
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


















      
      {/* <section className="relative overflow-hidden border-b border-[#102018]/8 bg-white py-24 md:py-32">
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
                  Bekämpfung von Durchwuchskartoffeln
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-[#102018]/72 md:text-xl">
                  Entwicklung eines Robotersystems zur gezielten Erkennung und
                  mechanischen Entfernung von Durchwuchskartoffeln – ohne den
                  Einsatz chemischer Pflanzenschutzmittel.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#102018]/8 bg-[#f3f5ee] p-8 shadow-[0_20px_60px_rgba(16,32,24,0.06)]">
           
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-[#102018]/15 bg-white text-sm text-[#102018]/45">
                    Logo 1
                  </div>
                  <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-[#102018]/15 bg-white text-sm text-[#102018]/45">
                    Logo 2
                  </div>
                  <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-[#102018]/15 bg-white text-sm text-[#102018]/45">
                    Logo 3
                  </div>
                  <div className="flex h-24 items-center justify-center rounded-2xl border border-dashed border-[#102018]/15 bg-white text-sm text-[#102018]/45">
                    Logo 4
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section> */}

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
                Durchwuchskartoffeln treten in Folgekulturen als unerwünschte
                Beipflanzen auf und stellen eine zunehmende Herausforderung im
                Ackerbau dar. Sie konkurrieren mit Nutzpflanzen um Ressourcen
                und können die Ausbreitung von Krankheiten und Schädlingen
                fördern.
              </p>

              <p className="mt-6 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Ziel des Projekts ist die Entwicklung eines Robotersystems, das
                diese Pflanzen gezielt erkennt und mechanisch entfernt – ohne
                den Einsatz chemischer Pflanzenschutzmittel.
              </p>
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
                  src="/images/kartoffeln/kartoffeln.webp"
                  alt="Durchwuchskartoffeln im landwirtschaftlichen Kontext"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-5 text-sm leading-6 text-[#102018]/62">
                <span className="font-semibold">Abbildung 3:</span> Durchwuchskartoffeln in einem Maisbestand
              </p>


              <a
                href=" https://www.lwk-niedersachsen.de/lwk/news/30723_Durchwuchskartoffeln_mit_Konzept_vermeiden "
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
                Nach der Kartoffelernte verbleiben häufig Knollen im Boden, die
                in den Folgejahren erneut austreiben. Diese sogenannten
                Durchwuchskartoffeln:
              </p>

              <BulletList
                items={[
                  "Beeinträchtigen Erträge in Folgekulturen",
                  "Erschweren Fruchtfolgen",
                  "Erhöhen phytosanitäre Risiken",
                  "Sind nur schwer vollständig zu kontrollieren",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Bestehende Verfahren konzentrieren sich oft auf die
                oberirdischen Pflanzenteile und erreichen die im Boden
                liegenden Knollen nur unzureichend.
              </p>

            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle eyebrow="03" title="Lösungsansatz" />
              <SectionDivider />

              <p className="text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Im Projekt wird ein innovatives System entwickelt, das gezielt
                auf die nachhaltige Bekämpfung im Boden ausgerichtet ist:
              </p>

              <BulletList
                items={[
                  "KI-gestützte Erkennung einzelner Pflanzen",
                  "punktgenaue Positionierung eines mechanischen Werkzeugs",
                  "gezielter Eingriff in den Boden zur Schädigung der Knollen",
                  "Kombination aus automatisierter und überwachter Steuerung",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Der Fokus liegt auf einer möglichst vollständigen Unterbrechung
                des Wachstumszyklus durch die Behandlung der Mutterknollen im
                Boden.
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
              <SectionTitle eyebrow="04" title="Erwartete Ergebnisse" />
              <SectionDivider />

              <p className="text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Ziel ist die Entwicklung eines praxistauglichen Systems, das
                unter realen Bedingungen eingesetzt werden kann.
              </p>

              <p className="mt-6 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Erwartet werden insbesondere:
              </p>

              <BulletList
                items={[
                  "eine deutliche Reduktion des Einsatzes von Herbiziden",
                  "eine effektivere Bekämpfung durch Eingriff im Boden",
                  "eine Verbesserung der Feldhygiene und Pflanzengesundheit",
                  "eine Entlastung landwirtschaftlicher Betriebe",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Das System soll sowohl im konventionellen als auch im
                ökologischen Landbau einsetzbar sein und neue Möglichkeiten für
                nachhaltige Produktionssysteme eröffnen.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle eyebrow="05" title="Projektaktivitäten" />
              <SectionDivider />

              <p className="text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Das Projekt umfasst mehrere zentrale Entwicklungsschritte:
              </p>

              <BulletList
                items={[
                  "Aufbau eines KI-Systems zur Pflanzenerkennung",
                  "Entwicklung mechanischer Werkzeuge zur Knollenbehandlung",
                  "Konstruktion eines geländetauglichen Trägerfahrzeugs",
                  "Integration von Steuerung und Sicherheitsfunktionen",
                  "Durchführung umfangreicher Feldtests",
                ]}
              />

              <p className="mt-8 text-base leading-7 text-[#102018]/72 md:text-lg md:leading-8">
                Ein besonderer Fokus liegt auf der Kombination von
                Digitalisierung und mechanischer Bearbeitung.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

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
            </motion.div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em]">
                  Entwicklung und Integration der Kerntechnologie
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em]">
                  Erprobung unter Praxisbedingungen
                </h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em]">
                  Demonstration des Systems im landwirtschaftlichen Einsatz
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