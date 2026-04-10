"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";

type EventItem = {
  id: number;
  date: string;
  title: string;
  location: string;
  description: string;
};

const events: EventItem[] = [
  {
    id: 1,
    date: "",
    title: "",
    location: "",
    description:
      "",
  },
  {
    id: 2,
    date: "",
    title: "",
    location: "",
    description:
      "",
  },
  {
    id: 3,
    date: "",
    title: "",
    location: "",
    description:
      "",
  },
  {
    id: 4,
    date: "",
    title: "",
    location: "",
    description:
      "",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f8f4] py-24 md:py-32"
    >
      <Container>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xl font-semibold uppercase tracking-[0.24em] text-[#506c35]">
              Contact
            </p>
            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-6xl">
              Let’s get in touch
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#06131f]/70 md:text-lg">
              Contact us for project inquiries, partnerships, demos, media
              requests, or general questions.
            </p>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="mx-auto mt-16 max-w-5xl rounded-[32px] border border-[#06131f]/8 bg-white p-6 shadow-[0_24px_70px_rgba(6,19,31,0.06)] md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-sm font-medium text-[#06131f]"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full rounded-2xl border border-[#06131f]/10 bg-white px-4 py-3 text-[#06131f] outline-none transition focus:border-[#506c35]"
                  placeholder="Your first name"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-[#06131f]"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="w-full rounded-2xl border border-[#06131f]/10 bg-white px-4 py-3 text-[#06131f] outline-none transition focus:border-[#506c35]"
                  placeholder="Your last name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#06131f]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-2xl border border-[#06131f]/10 bg-white px-4 py-3 text-[#06131f] outline-none transition focus:border-[#506c35]"
                  placeholder="you@example.com"
                />
              </div>

            </div>

            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-[#06131f]">
                Cause of contact
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {[
                  "General inquiry",
                  "Project partnership",
                  "Product demo",
                  "Research collaboration",
                  "Press / media",
                  "Careers",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#06131f]/10 px-4 py-3 transition hover:border-[#506c35]/40"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#06131f]/20 text-[#506c35] focus:ring-[#506c35]"
                    />
                    <span className="text-sm text-[#06131f]/80 md:text-base">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#06131f]"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full rounded-[24px] border border-[#06131f]/10 bg-white px-4 py-4 text-[#06131f] outline-none transition focus:border-[#506c35]"
                placeholder="Tell us a bit more about your request..."
              />
            </div>

            <div className="mt-8 flex justify-start">
              <button className="inline-flex items-center justify-center rounded-full bg-[#506c35] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#435b2c]">
                Send message
              </button>
            </div>
          </motion.div>

          {/* Events timeline */}
          <div className="mx-auto mt-24 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#506c35]">
                Events
              </p>
              <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-5xl">
                Meet us at upcoming events
              </h3>

            </motion.div>

            <div className="relative mt-14">
              <div className="absolute bottom-0 left-[11px] top-0 w-px bg-[#506c35]/20 md:left-1/2 md:-translate-x-1/2" />

              <div className="space-y-10">
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative grid gap-6 md:grid-cols-2 md:gap-10"
                  >
                    <div
                      className={`md:flex ${
                        index % 2 === 0
                          ? "md:justify-end md:pr-10"
                          : "md:order-2 md:justify-start md:pl-10"
                      }`}
                    >
                      <div className="ml-8 rounded-[24px] border border-[#06131f]/8 bg-white p-6 shadow-[0_16px_45px_rgba(6,19,31,0.05)] md:ml-0 md:max-w-[460px]">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#506c35]">
                          {event.date}
                        </p>
                        <h4 className="mt-3 font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em] text-[#06131f]">
                          {event.title}
                        </h4>
                        <p className="mt-3 text-sm font-medium text-[#06131f]/55 md:text-base">
                          {event.location}
                        </p>
                        <p className="mt-4 text-base leading-7 text-[#06131f]/72">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className={`${index % 2 === 0 ? "md:order-2" : ""}`} />

                    <div className="absolute left-0 top-8 flex h-6 w-6 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                      <div className="h-3.5 w-3.5 rounded-full bg-[#506c35]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}