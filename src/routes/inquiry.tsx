import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowRight, MessageCircle, Phone, User, Mail, PhoneCall, CheckCircle2 } from "lucide-react";

import { JournalHeader, SiteFooter, WHATSAPP, PHONE } from "@/components/site-chrome";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Inquiry Form | P Visiion Interiors, Pune" },
      {
        name: "description",
        content:
          "Tell us about your home. Share your name, email and phone number and the P Visiion Interiors studio in Wakad, Pune will get back to you.",
      },
      { property: "og:title", content: "Inquiry Form | P Visiion Interiors" },
      {
        property: "og:description",
        content:
          "Share your details and begin your journey with PV Interiors — customized design, renovation and turnkey interiors in Pune.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InquiryPage,
});

const inquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email must be under 255 characters."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[\d\s-]{7,15}$/, "Please enter a valid phone number.")
    .max(15, "Phone number must be under 15 digits."),
});

type InquiryValues = z.infer<typeof inquirySchema>;
type FieldErrors = Partial<Record<keyof InquiryValues, string>>;

function InquiryPage() {
  const [values, setValues] = useState<InquiryValues>({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof InquiryValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = inquirySchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof InquiryValues;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    const message = [
      "Hello Sucheta, I would like to inquire about a project.",
      "",
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      `Phone: ${parsed.data.phone}`,
    ].join("\n");
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    setSubmitted(true);
  };

  const inputClass = (hasError: boolean) =>
    `w-full border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-greige/50 outline-none transition-colors focus:border-primary ${
      hasError ? "border-destructive" : "border-border"
    }`;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <JournalHeader />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24 lg:px-10 lg:pt-44">
        <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-accent">
          <span className="h-px w-10 bg-accent/60" /> Begin Your Journey
        </p>
        <h1 className="mt-7 font-display text-[2.4rem] leading-[1.08] text-cream sm:text-5xl">
          Inquire about your home
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-greige">
          Share a few details below and Sucheta and the studio team will get back to you to discuss
          scope, timelines and investment.
        </p>

        {submitted ? (
          <div className="mt-12 border border-border bg-card p-8 lg:p-12">
            <CheckCircle2 className="h-8 w-8 text-primary" />
            <h2 className="mt-6 font-display text-2xl text-cream lg:text-3xl">
              Thank you — your details are on their way.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-greige">
              We've opened WhatsApp with your inquiry ready to send. If it didn't open, reach us
              directly and mention your name so we can pick up right where you left off.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Open WhatsApp
              </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-3 border border-primary/60 bg-primary/10 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4" /> +91 9185063003
                </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-12 border border-border bg-card p-8 lg:p-12">
            <div className="space-y-7">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-greige"
                >
                  <User className="h-3.5 w-3.5 text-primary" /> Name
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  placeholder="Your full name"
                  value={values.name}
                  onChange={(e) => setField("name", e.target.value)}
                  className={inputClass(Boolean(errors.name))}
                />
                {errors.name ? (
                  <p className="mt-2 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="inquiry-email"
                  className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-greige"
                >
                  <Mail className="h-3.5 w-3.5 text-primary" /> Email
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  autoComplete="email"
                  maxLength={255}
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={inputClass(Boolean(errors.email))}
                />
                {errors.email ? (
                  <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="inquiry-phone"
                  className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-greige"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-primary" /> Phone number
                </label>
                <input
                  id="inquiry-phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={15}
                  placeholder="+91 98765 43210"
                  value={values.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  className={inputClass(Boolean(errors.phone))}
                />
                {errors.phone ? (
                  <p className="mt-2 text-xs text-destructive">{errors.phone}</p>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-primary px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Send inquiry <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-5 text-xs leading-relaxed text-greige/70">
              Submitting opens WhatsApp with your details pre-filled, straight to Sucheta. Prefer to
              talk first? Call{" "}
              <a href={`tel:${PHONE}`} className="text-primary hover:underline">
                +91 9185063003
              </a>
              .
            </p>
          </form>
        )}

        <p className="mt-10 text-xs text-greige/70">
          Exploring first?{" "}
          <Link to="/" className="text-primary hover:underline">
            Return to the portfolio
          </Link>{" "}
          or read the{" "}
          <Link to="/journal" className="text-primary hover:underline">
            Design Journal
          </Link>
          .
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
