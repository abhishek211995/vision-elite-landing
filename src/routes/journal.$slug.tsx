import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, PenLine } from "lucide-react";

import { JournalHeader, SiteFooter, ConsultCta } from "@/components/site-chrome";
import { ARTICLES, getArticle } from "@/lib/journal-data";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found | P Visiion Interiors" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | P Visiion Interiors` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <JournalHeader />
      <main className="mx-auto max-w-3xl px-6 pt-40 pb-32 text-center lg:px-10">
        <h1 className="font-display text-4xl text-cream">This article isn't available</h1>
        <p className="mt-5 text-sm text-greige">
          It may have been moved or renamed. Browse the journal for the full collection.
        </p>
        <Link
          to="/journal"
          className="mt-9 inline-flex items-center gap-2 border border-primary/60 bg-primary/10 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to the Journal
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <JournalHeader />
      <main className="pt-32 pb-24 lg:pt-40">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-greige/70"
          >
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link to="/journal" className="transition-colors hover:text-primary">
              Design Journal
            </Link>
            <span>/</span>
            <span className="text-primary">{article.tag}</span>
          </nav>

          <h1 className="mt-8 font-display text-[2.1rem] leading-[1.12] text-cream sm:text-4xl lg:text-[3.1rem]">
            {article.title}
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.22em] text-greige/70">
            <span className="inline-flex items-center gap-2 text-primary">
              <PenLine className="h-3.5 w-3.5" /> {article.author}
            </span>
            <span>{article.dateLabel}</span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5" /> {article.readingTime}
            </span>
          </div>
        </div>

        <figure className="mx-auto mt-12 max-w-5xl px-6 lg:px-10">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[16/9] w-full border border-border object-cover"
          />
        </figure>

        <article className="mx-auto mt-14 max-w-3xl px-6 lg:px-10">
          <p className="border-l-2 border-primary/60 pl-6 font-display text-xl leading-relaxed text-cream lg:text-2xl">
            {article.excerpt}
          </p>

          {article.sections.map((s) => (
            <section key={s.heading} className="mt-14">
              <h2 className="font-display text-2xl leading-snug text-cream lg:text-3xl">
                {s.heading}
              </h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-5 text-[15px] leading-[1.85] text-greige">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <div className="mt-16">
            <ConsultCta
              title="Planning something similar in Pune?"
              copy="Share your home, its stage and your vision. We will map scope, Vastu considerations and an indicative investment band with you."
            />
          </div>

          <Link
            to="/journal"
            className="mt-12 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to the Design Journal
          </Link>
        </article>

        <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-2xl text-cream">Continue reading</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {related.map((a) => (
              <Link
                key={a.slug}
                to="/journal/$slug"
                params={{ slug: a.slug }}
                className="group border border-border bg-card p-7 transition-colors hover:border-primary/50"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary">{a.tag}</span>
                <h3 className="mt-4 font-display text-lg leading-snug text-cream">{a.title}</h3>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
