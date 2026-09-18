import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

import { JournalHeader, SiteFooter, ConsultCta } from "@/components/site-chrome";
import { ARTICLES, JOURNAL_TAGS } from "@/lib/journal-data";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Design Journal | P Visiion Interiors, Pune" },
      {
        name: "description",
        content:
          "Curated writing on luxury interiors, turnkey renovation, Vastu principles and materials, from the studio of P Visiion Interiors in Wakad, Pune.",
      },
      { property: "og:title", content: "Design Journal | P Visiion Interiors" },
      {
        property: "og:description",
        content:
          "Essays on luxury interiors, renovation craft, Vastu planning and material selection by Sucheta Alve and the P Visiion studio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalIndex,
});

function JournalIndex() {
  const [tag, setTag] = useState<string>("All");
  const list = tag === "All" ? ARTICLES : ARTICLES.filter((a) => a.tag === tag);
  const [lead, ...rest] = list;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <JournalHeader />
      <main className="mx-auto max-w-7xl px-6 pt-32 pb-24 lg:px-10 lg:pt-44">
        <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-accent">
          <span className="h-px w-10 bg-accent/60" /> The Design Journal
        </p>
        <h1 className="mt-7 max-w-3xl font-display text-[2.4rem] leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
          Notes on considered homes, honest craft and quiet luxury.
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-greige">
          Writing from our Wakad studio on interior design, turnkey renovation, Vastu-aligned
          planning and the materials we trust — drawn from real Pune and PCMC projects.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {["All", ...JOURNAL_TAGS].map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`border px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] transition-colors ${
                tag === t
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-greige hover:border-primary/50 hover:text-primary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {lead ? (
          <Link
            to="/journal/$slug"
            params={{ slug: lead.slug }}
            className="group mt-14 grid gap-8 border border-border bg-card p-6 transition-colors hover:border-primary/50 lg:grid-cols-[1.1fr_1fr] lg:p-8"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={lead.image}
                alt={lead.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                {lead.tag}
              </span>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream lg:text-4xl">
                {lead.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-greige">{lead.excerpt}</p>
              <div className="mt-7 flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.22em] text-greige/70">
                <span>{lead.dateLabel}</span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" /> {lead.readingTime}
                </span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary">
                Read the essay <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ) : null}

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <Link
              key={a.slug}
              to="/journal/$slug"
              params={{ slug: a.slug }}
              className="group flex flex-col border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary">{a.tag}</span>
                <h3 className="mt-4 font-display text-xl leading-snug text-cream">{a.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-greige">{a.excerpt}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-greige/70">
                  <span>{a.dateLabel}</span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" /> {a.readingTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <ConsultCta />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
