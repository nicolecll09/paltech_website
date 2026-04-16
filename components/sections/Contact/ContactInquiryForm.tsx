"use client";

import { FormEvent, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

type RequestType =
  | "purchase_inquiry"
  | "demo_registration"
  | "newsletter"
  | "other_request";

type WeedOption =
  | "Ampfer"
  | "Wasserkreuzkraut"
  | "Jakobskreuzkraut"
  | "Herbstzeitlose"
  | "Other";

type FormState = {
  requestTypes: RequestType[];
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  farmSize: string;
  anbauverband: string;
  weeds: WeedOption[];
  otherWeeds: string;
  message: string;
  newsletter: boolean;
  privacyAccepted: boolean;
};

type Errors = Partial<Record<keyof FormState | "requestTypes", string>>;

const ANBAUVERBAND_OPTIONS = [
  "Bioland",
  "Naturland",
  "Biokreis",
  "Demeter",
  "Sonstiger",
  "Keiner",
] as const;

const WEED_OPTIONS: WeedOption[] = [
  "Ampfer",
  "Wasserkreuzkraut",
  "Jakobskreuzkraut",
  "Herbstzeitlose",
  "Other",
];

const INITIAL_STATE: FormState = {
  requestTypes: [],
  name: "",
  email: "",
  phone: "",
  company: "",
  address: "",
  farmSize: "",
  anbauverband: "",
  weeds: [],
  otherWeeds: "",
  message: "",
  newsletter: false,
  privacyAccepted: false,
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactInquiryForm() {
  const t = useTranslations("ContactForm");

  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [submitError, setSubmitError] = useState("");

  const isPurchaseInquiry = form.requestTypes.includes("purchase_inquiry");
  const isOtherRequest = form.requestTypes.includes("other_request");
  const isNewsletterRequest = form.requestTypes.includes("newsletter");
  const showOtherWeeds = form.weeds.includes("Other");

  const pageName = useMemo(() => {
    if (typeof document !== "undefined" && document.title) {
      return document.title;
    }
    return t("pageNameFallback");
  }, [t]);

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setSubmitError("");
    setSubmitSuccess("");
  };

  const toggleRequestType = (type: RequestType) => {
    setForm((prev) => {
      const exists = prev.requestTypes.includes(type);

      const nextRequestTypes = exists
        ? prev.requestTypes.filter((item) => item !== type)
        : [...prev.requestTypes, type];

      return {
        ...prev,
        requestTypes: nextRequestTypes,
        newsletter: nextRequestTypes.includes("newsletter")
          ? true
          : prev.newsletter,
      };
    });

    setErrors((prev) => ({ ...prev, requestTypes: undefined }));
    setSubmitError("");
    setSubmitSuccess("");
  };

  const toggleWeed = (weed: WeedOption) => {
    setForm((prev) => {
      const exists = prev.weeds.includes(weed);

      const nextWeeds = exists
        ? prev.weeds.filter((item) => item !== weed)
        : [...prev.weeds, weed];

      return {
        ...prev,
        weeds: nextWeeds,
        otherWeeds: weed === "Other" && exists ? "" : prev.otherWeeds,
      };
    });

    setErrors((prev) => ({ ...prev, weeds: undefined, otherWeeds: undefined }));
    setSubmitError("");
    setSubmitSuccess("");
  };

  const getWeedLabel = (weed: WeedOption) => {
    return t(`weeds.${weed}`);
  };

  const getAnbauverbandLabel = (
    option: (typeof ANBAUVERBAND_OPTIONS)[number]
  ) => {
    return t(`anbauverbandOptions.${option}`);
  };

  const validate = (): Errors => {
    const nextErrors: Errors = {};

    if (!form.name.trim()) {
      nextErrors.name = t("errors.nameRequired");
    }

    if (!form.email.trim()) {
      nextErrors.email = t("errors.emailRequired");
    } else if (!isValidEmail(form.email)) {
      nextErrors.email = t("errors.emailInvalid");
    }

    if ((form.requestTypes ?? []).length === 0) {
            nextErrors.requestTypes = t("errors.requestTypeRequired");
    }

    if (isPurchaseInquiry) {
      if (!form.address.trim()) {
        nextErrors.address = t("errors.addressRequired");
      }

      if (!form.anbauverband.trim()) {
        nextErrors.anbauverband = t("errors.anbauverbandRequired");
      }

      if (showOtherWeeds && !form.otherWeeds.trim()) {
        nextErrors.otherWeeds = t("errors.otherWeedsRequired");
      }
    }

    if (isOtherRequest && !form.message.trim()) {
      nextErrors.message = t("errors.messageRequired");
    }

    if (!form.privacyAccepted) {
      nextErrors.privacyAccepted = t("errors.privacyRequired");
    }

    return nextErrors;
  };

  const resetForm = () => {
    setForm(INITIAL_STATE);
    setErrors({});
    setSubmitError("");
    setSubmitSuccess("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess("");

    try {
      const payload = {
        requestTypes: form.requestTypes,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        address: form.address.trim(),
        farmSize: form.farmSize.trim(),
        anbauverband: form.anbauverband.trim(),
        weeds: form.weeds,
        otherWeeds: form.otherWeeds.trim(),
        message: form.message.trim(),
        newsletter: isNewsletterRequest ? true : Boolean(form.newsletter),
        pageUri: typeof window !== "undefined" ? window.location.href : "",
        pageName,
      };

      const response = await fetch("/api/hubspot-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          result?.error ||
          result?.details?.message ||
          t("messages.submitErrorDefault");
        throw new Error(message);
      }

      setSubmitSuccess(t("messages.submitSuccess"));
      resetForm();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : t("messages.submitErrorUnexpected")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "w-full rounded-2xl border border-[#06131f]/10 bg-white px-4 py-3 text-[#06131f] outline-none transition placeholder:text-[#06131f]/35 focus:border-[#506c35] focus:ring-0";

  const cardClassName =
    "rounded-[24px] border border-[#06131f]/8 bg-white p-5 shadow-[0_12px_35px_rgba(6,19,31,0.04)]";

  return (
    <section className="bg-[#F5F7F8]/90 bg-cover bg-center bg-no-repeat py-24 md:py-32">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-5xl rounded-[32px] border border-[#06131f]/8 bg-white p-6 shadow-[0_24px_70px_rgba(6,19,31,0.06)] md:p-10"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#506c35]">
            {t("header.eyebrow")}
          </p>
          <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold tracking-[-0.03em] text-[#06131f] md:text-5xl">
            {t("header.title")}
          </h2>
          <p className="mt-5 text-base leading-7 text-[#06131f]/70 md:text-lg">
            {t("header.description")}
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <section className={cardClassName}>
            <div>
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em] text-[#06131f]">
                {t("requestType.title")}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#06131f]/60">
                {t("requestType.description")}
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  value: "purchase_inquiry" as RequestType,
                  label: t("requestType.options.purchase_inquiry"),
                },
                {
                  value: "demo_registration" as RequestType,
                  label: t("requestType.options.demo_registration"),
                },
                {
                  value: "newsletter" as RequestType,
                  label: t("requestType.options.newsletter"),
                },
                {
                  value: "other_request" as RequestType,
                  label: t("requestType.options.other_request"),
                },
              ].map((option) => {
                const isActive = form.requestTypes.includes(option.value);

                return (
                  <label
                    key={option.value}
                    className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 transition ${
                      isActive
                        ? "border-[#506c35]/35 bg-[#506c35]/8"
                        : "border-[#06131f]/10 bg-white hover:border-[#506c35]/25"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={() => toggleRequestType(option.value)}
                      className="h-4 w-4 accent-[#506c35]"
                    />
                    <span className="text-sm font-medium text-[#06131f] md:text-base">
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>

            {errors.requestTypes && (
              <p className="mt-3 text-sm text-red-600">{errors.requestTypes}</p>
            )}
          </section>

          <section className={cardClassName}>
            <div>
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em] text-[#06131f]">
                {t("contactDetails.title")}
              </h3>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#06131f]">
                  {t("fields.name.label")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={inputClassName}
                  placeholder={t("fields.name.placeholder")}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#06131f]">
                  {t("fields.email.label")} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={inputClassName}
                  placeholder={t("fields.email.placeholder")}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#06131f]">
                  {t("fields.phone.label")}
                </label>
                <input
                  type="text"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={inputClassName}
                  placeholder={t("fields.phone.placeholder")}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#06131f]">
                  {t("fields.company.label")}
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => updateField("company", e.target.value)}
                  className={inputClassName}
                  placeholder={t("fields.company.placeholder")}
                />
              </div>
            </div>
          </section>

          {isPurchaseInquiry && (
            <section className={cardClassName}>
              <div>
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em] text-[#06131f]">
                  {t("purchaseDetails.title")}
                </h3>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#06131f]">
                    {t("fields.address.label")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => updateField("address", e.target.value)}
                    className={inputClassName}
                    placeholder={t("fields.address.placeholder")}
                  />
                  {errors.address && (
                    <p className="mt-2 text-sm text-red-600">{errors.address}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#06131f]">
                    {t("fields.farmSize.label")}
                  </label>
                  <input
                    type="text"
                    value={form.farmSize}
                    onChange={(e) => updateField("farmSize", e.target.value)}
                    className={inputClassName}
                    placeholder={t("fields.farmSize.placeholder")}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#06131f]">
                    {t("fields.anbauverband.label")}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.anbauverband}
                    onChange={(e) => updateField("anbauverband", e.target.value)}
                    className={inputClassName}
                  >
                    <option value="">
                      {t("fields.anbauverband.placeholder")}
                    </option>
                    {ANBAUVERBAND_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {getAnbauverbandLabel(option)}
                      </option>
                    ))}
                  </select>
                  {errors.anbauverband && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.anbauverband}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-[#06131f]">
                  {t("fields.weeds.label")}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {WEED_OPTIONS.map((weed) => (
                    <label
                      key={weed}
                      className={`flex items-center gap-3 rounded-2xl border px-4 py-4 transition ${
                        form.weeds.includes(weed)
                          ? "border-[#506c35]/35 bg-[#506c35]/8"
                          : "border-[#06131f]/10 hover:border-[#506c35]/25"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={form.weeds.includes(weed)}
                        onChange={() => toggleWeed(weed)}
                        className="h-4 w-4 accent-[#506c35]"
                      />
                      <span className="text-sm text-[#06131f] md:text-base">
                        {getWeedLabel(weed)}
                      </span>
                    </label>
                  ))}
                </div>

                {showOtherWeeds && (
                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-[#06131f]">
                      {t("fields.otherWeeds.label")}
                    </label>
                    <input
                      type="text"
                      value={form.otherWeeds}
                      onChange={(e) => updateField("otherWeeds", e.target.value)}
                      className={inputClassName}
                      placeholder={t("fields.otherWeeds.placeholder")}
                    />
                    {errors.otherWeeds && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.otherWeeds}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </section>
          )}

          {isNewsletterRequest && (
            <section className={cardClassName}>
              <div>
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em] text-[#06131f]">
                  {t("newsletter.title")}
                </h3>
              </div>

              <label className="mt-6 flex items-start gap-3 rounded-2xl border border-[#06131f]/10 px-4 py-4">
                <input
                  type="checkbox"
                  checked={form.newsletter}
                  onChange={(e) => updateField("newsletter", e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#506c35]"
                />
                <span className="text-sm leading-6 text-[#06131f]/72 md:text-base">
                  {t("newsletter.checkbox")}
                </span>
              </label>
            </section>
          )}

          <section className={cardClassName}>
            <div>
              <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-[-0.02em] text-[#06131f]">
                {t("messageSection.title")}
              </h3>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-[#06131f]">
                {t("fields.message.label")}{" "}
                {isOtherRequest && <span className="text-red-500">*</span>}
              </label>
              <textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                rows={6}
                className={`${inputClassName} min-h-[160px] rounded-[24px]`}
                placeholder={t("fields.message.placeholder")}
              />
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
          </section>

          <section className={cardClassName}>
            <label className="flex items-start gap-3 rounded-2xl border border-[#06131f]/10 px-4 py-4">
              <input
                type="checkbox"
                checked={form.privacyAccepted}
                onChange={(e) =>
                  updateField("privacyAccepted", e.target.checked)
                }
                className="mt-1 h-4 w-4 accent-[#506c35]"
              />
              <span className="text-sm leading-6 text-[#06131f]/72 md:text-base">
                {t("privacy.text")} <span className="text-red-500">*</span>
              </span>
            </label>

            {errors.privacyAccepted && (
              <p className="mt-3 text-sm text-red-600">
                {errors.privacyAccepted}
              </p>
            )}
          </section>

          {submitSuccess && (
            <div className="rounded-[22px] border border-green-200 bg-green-50 px-5 py-4 text-sm text-green-800">
              {submitSuccess}
            </div>
          )}

          {submitError && (
            <div className="rounded-[22px] border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800">
              {submitError}
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-[#506c35] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#435b2c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? t("buttons.sending") : t("buttons.submit")}
            </button>

            <button
              type="button"
              onClick={resetForm}
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full border border-[#06131f]/12 bg-white px-7 py-3 text-sm font-semibold text-[#06131f] transition hover:bg-[#06131f]/3 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {t("buttons.reset")}
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}