import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";

import logoAsset from "@/assets/p-visiion-logo.png.asset.json";

export const PHONE = "+919185063003";
export const WHATSAPP = "https://wa.me/919185063003";
export const INSTAGRAM = "https://www.instagram.com/pvisiioninteriors";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt=""
      aria-hidden="true"
      className={`${className} shrink-0 object-contain`}
    />
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3" aria-label="P Visiion Interiors">
      <LogoMark className={compact ? "h-9 w-9" : "h-11 w-11"} />
      <span className="min-w-0">
        <span
          className={`block truncate font-display tracking-[0.28em] text-obsidian ${
            compact ? "text-base" : "text-lg sm:text-xl"
          }`}
        >
          PV Interiors
        </span>
        <span className="block text-[10px] tracking-[0.45em] text-greige">
          DISIGN · BUILD · BELONG
        </span>
      </span>
    </span>
  );
}

const HOME_SECTIONS = [
  { label: "The Gallery", hash: "gallery" },
  { label: "Design Philosophy", hash: "philosophy" },
  { label: "The Blueprint", hash: "blueprint" },
  { label: "Client Reviews", hash: "reviews" },
];

/** Header used on Design Journal pages. */
export function JournalHeader() {
  const [solid, setSolid] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-border/40 bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 lg:px-10">
          <Link to="/" className="min-w-0">
            <Wordmark />
          </Link>
          <div className="flex shrink-0 items-center gap-8">
            <nav className="hidden items-center gap-8 lg:flex">
              {HOME_SECTIONS.map((n) => (
                <a
                  key={n.hash}
                  href={`/#${n.hash}`}
                  className="text-xs uppercase tracking-[0.2em] text-greige transition-colors hover:text-primary"
                >
                  {n.label}
                </a>
              ))}
              <Link
                to="/journal"
                className="text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:text-accent"
              >
                Design Journal
              </Link>
            </nav>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="hidden shrink-0 border border-primary/60 bg-primary/10 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:block"
            >
              BOOK A CONSULTATION
            </a>
            <button
              onClick={() => setDrawer(true)}
              aria-label="Open menu"
              className="shrink-0 text-obsidian lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${drawer ? "" : "pointer-events-none"}`}
        aria-hidden={!drawer}
      >
        <div
          onClick={() => setDrawer(false)}
          className={`absolute inset-0 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-300 ${
            drawer ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-y-0 right-0 w-[82%] max-w-sm border-l border-border bg-card px-7 py-6 transition-transform duration-500 ${
            drawer ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Wordmark compact />
            <button
              onClick={() => setDrawer(false)}
              aria-label="Close menu"
              className="text-greige"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-7">
            {HOME_SECTIONS.map((n) => (
              <a
                key={n.hash}
                href={`/#${n.hash}`}
                onClick={() => setDrawer(false)}
                className="text-left font-display text-2xl text-obsidian"
              >
                {n.label}
              </a>
            ))}
            <Link
              to="/journal"
              onClick={() => setDrawer(false)}
              className="text-left font-display text-2xl text-primary"
            >
              Design Journal
            </Link>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-12 block w-full bg-primary py-4 text-center text-[11px] uppercase tracking-[0.25em] text-accent-foreground"
          >
            BOOK A CONSULTATION
          </a>
          <div className="mt-8 space-y-3 text-sm text-greige">
            <a href={`tel:${PHONE}`} className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" /> +91 9185063003
            </a>
            <a href="mailto:sucheta.pmpprojects@gmail.com" className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" /> sucheta.pmpprojects@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr_1fr] lg:px-10">
        <div>
          <Wordmark />
          <p className="mt-7 max-w-sm text-sm leading-relaxed text-greige">
            Customized design &amp; build, renovation and Vastu — a cost-effective design solution
            that reflects quality, harmony and pride.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-border bg-background px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-cream transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Instagram className="h-4 w-4" /> @pvisiioninteriors
            </a>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-primary transition-colors hover:border-primary/60"
            >
              Design Journal <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="border border-border bg-background p-7">
          <MapPin className="h-5 w-5 text-primary" />
          <p className="mt-5 font-display text-xl text-cream">Studio · Wakad, Pune</p>
          <p className="mt-3 text-sm leading-relaxed text-greige">
            310, Khinvasara Trade Center,
            <br />
            Datta Mandir Road, Wakad,
            <br />
            Pune 411033
          </p>
          <a
            href="https://maps.google.com/?q=Khinvasara+Trade+Center+Datta+Mandir+Road+Wakad+Pune+411033"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-primary"
          >
            Open in maps <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-greige/60">Direct line</p>
          <div className="mt-6 space-y-5 text-sm">
            <p className="font-display text-xl text-cream">Sucheta Alve</p>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-3 text-greige transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" /> +91 9185063003
            </a>
            <a
              href="mailto:sucheta.pmpprojects@gmail.com"
              className="flex items-center gap-3 text-greige transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" /> sucheta.pmpprojects@gmail.com
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-greige transition-colors hover:text-primary"
            >
              <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp consultation
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-[10px] uppercase tracking-[0.22em] text-greige/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} PV INTERIORS, PUNE</span>
          <span>Design Consultancy · Modular Furniture · Turnkey Projects</span>
        </div>
      </div>
    </footer>
  );
}

export function ConsultCta({
  title = "Reserve a private consultation",
  copy = "Tell us about your home and your vision. Sucheta and the studio team will walk you through scope, timelines and investment.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="border border-border bg-card p-8 lg:p-12">
      <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-accent">
        <span className="h-px w-8 bg-accent/60" /> Next step
      </p>
      <h2 className="mt-5 font-display text-3xl leading-tight text-cream lg:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-greige">{copy}</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-primary px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Sucheta
        </a>
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-3 border border-primary/60 bg-primary/10 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Phone className="h-4 w-4" /> BOOK A CONSULTATION
        </a>
      </div>
    </section>
  );
}
