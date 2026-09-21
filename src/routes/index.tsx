import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  Compass,
  Download,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import kitchenImg from "@/assets/gallery-kitchen.jpg";
import bedroomImg from "@/assets/gallery-bedroom.jpg";
import officeImg from "@/assets/gallery-office.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import logoAsset from "@/assets/p-visiion-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "P Visiion Interiors | Ultra-Luxury Interiors in Pune" },
      {
        name: "description",
        content:
          "Bespoke turnkey interiors by P Visiion Interiors, Wakad Pune. Bright boho, French-inspired and Indian-fusion homes, renovation and Vastu.",
      },
      { property: "og:title", content: "P Visiion Interiors | Ultra-Luxury Interiors in Pune" },
      {
        property: "og:description",
        content:
          "Earthy boho, French-inspired and Indian-fusion design with turnkey execution for discerning homes across Pune and PCMC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const PHONE = "+918805028765";
const WHATSAPP = "https://wa.me/918805028765";
const INSTAGRAM = "https://www.instagram.com/pvisiioninteriors";

const NAV = [
  { label: "The Gallery", id: "gallery" },
  { label: "Design Philosophy", id: "philosophy" },
  { label: "The Blueprint", id: "blueprint" },
  { label: "Client Reviews", id: "reviews" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------------------------------- logo ---------------------------------- */

function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt=""
      aria-hidden="true"
      className={`${className} shrink-0 object-contain`}
    />
  );
}

function Wordmark({ compact = false }: { compact?: boolean }) {
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
        <span className="block text-[10px] tracking-[0.45em] text-greige">DISIGN · BUILD · BELONG</span>
      </span>
    </span>
  );
}


/* ---------------------------------- shell --------------------------------- */

function Landing() {
  const [drawer, setDrawer] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);

  const openLead = () => {
    setLeadOpen(true);
    scrollTo("architect");
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <Header onMenu={() => setDrawer(true)} onReserve={openLead} />
      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} onReserve={openLead} />
      <main>
        <Hero onUnlock={openLead} />
        <Marquee />
        <Gallery />
        <Philosophy />
        <Blueprint />
        <Proof />
        <LeadEngine open={leadOpen} onOpenChange={setLeadOpen} />
      </main>
      <Footer />
    </div>
  );
}

/* --------------------------------- header --------------------------------- */

function Header({ onMenu, onReserve }: { onMenu: () => void; onReserve: () => void }) {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-4 lg:px-10">
        <a href="#top" className="min-w-0">
          <Wordmark />
        </a>
        <div className="flex shrink-0 items-center gap-8">
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="relative text-xs uppercase tracking-[0.2em] text-greige transition-colors hover:text-primary"
              >
                {n.label}
              </button>
            ))}
            <Link
              to="/journal"
              className="text-xs uppercase tracking-[0.2em] text-greige transition-colors hover:text-primary"
            >
              Design Journal
            </Link>
          </nav>
          <button
            onClick={onReserve}
            className="hidden shrink-0 border border-primary/60 bg-primary/10 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:block"
          >
            Reserve a Consultation
          </button>
          <button
            onClick={onMenu}
            aria-label="Open menu"
            className="shrink-0 text-obsidian lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileDrawer({
  open,
  onClose,
  onReserve,
}: {
  open: boolean;
  onClose: () => void;
  onReserve: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-obsidian/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-[82%] max-w-sm border-l border-border bg-card px-7 py-6 transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Wordmark compact />
          <button onClick={onClose} aria-label="Close menu" className="text-greige">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-12 flex flex-col gap-7">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => {
                onClose();
                setTimeout(() => scrollTo(n.id), 320);
              }}
              className="text-left font-display text-2xl text-obsidian"
            >
              {n.label}
            </button>
          ))}
          <Link
            to="/journal"
            onClick={onClose}
            className="text-left font-display text-2xl text-obsidian"
          >
            Design Journal
          </Link>
        </nav>
        <button
          onClick={() => {
            onClose();
            setTimeout(onReserve, 320);
          }}
          className="mt-12 w-full bg-primary py-4 text-[11px] uppercase tracking-[0.25em] text-accent-foreground"
        >
          Reserve a Consultation
        </button>
        <div className="mt-8 space-y-3 text-sm text-greige">
          <a href={`tel:${PHONE}`} className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-primary" /> +91 8805 028 765
          </a>
          <a href="mailto:pvisiion@gmail.com" className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-primary" /> pvisiion@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- hero ---------------------------------- */

function Hero({ onUnlock }: { onUnlock: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-cognac/20 blur-[140px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-teal/10 blur-[140px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_1fr] lg:px-10">
        <div>
          <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-accent">
            <span className="h-px w-10 bg-accent/60" /> CUSTOMIZED DISIGN · RENOVATION . TURNKEY PROJECTS . MODULAR FURNITURE. PROJECT MGMT. 
          </p>
          <h1 className="mt-8 font-display text-[2.7rem] leading-[1.05] text-cream sm:text-6xl lg:text-[4.5rem]">
            A Design Studio, Crafting <em className="not-italic text-accent">Distingtive Homes</em>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-greige">
            Your home deserves more than a beautiful design—it deserves thoughtful expertise, uncompromising quality and seamless execution, guided by professionals who care about every detail.
            Your space looks 
            <div>Personalised Luxury Home Interiors in Pune—where distinctive design, refined craftsmanship and your unique vision comes together.</div>
          </p>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo("gallery")}
              className="border border-border px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-cream transition-colors hover:border-primary/70 hover:text-primary"
            >
              Explore Aesthetics
            </button>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["4.8/5", "Client rating"],
              ["120+", "Homes delivered"],
              ["90 days", "PROJECT DELIVERY"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl text-cream">{v}</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-[0.2em] text-greige/70">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative border border-border/70 bg-card/40 p-3 backdrop-blur-xl">
            <img
              src={heroImg}
              alt="Ultra-luxury living room designed by P Visiion Interiors in Pune"
              width={1600}
              height={1104}
              className="h-[380px] w-full object-cover sm:h-[520px]"
            />
            <div className="absolute inset-x-6 bottom-6 border border-border bg-background/90 p-5 backdrop-blur-2xl">
              <p className="font-display text-lg text-cream">The Wakad Bungalow</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-accent">
                TURNKEY · 3,200 SQ.FT · DESI- BOHO FUSION
              </p>
            </div>
          </div>
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 border-l border-t border-primary/50 lg:block" />
          <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-primary/50 lg:block" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "CUSTOMIZED DESIGN",
    "Renovation",
    "VASTU ALIGNED SPACES",
    "\n",
    "Modular Furniture",
    "PROJECT MANAGEMENT",
  ];
  return (
    <div className="border-y border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-6 lg:px-10">
        {items.map((i) => (
          <span key={i} className="text-[10px] uppercase tracking-[0.3em] text-greige/70">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- gallery -------------------------------- */

const PROJECTS = [
  {
    img: kitchenImg,
    title: "French Countryside Taste in Indian Kitchen",
    cat: "MODULAR KITCHEN",
    description: "Premium Residential Interior Design & Luxury Modular Kitchens in Pune—bringing bespoke design, refined craftsmanship and seamless in-house execution together to create truly distinctive homes.",
    span: "lg:col-span-2 lg:row-span-1",
    h: "h-[300px] lg:h-[340px]",
  },
  {
    img: bedroomImg,
    title: "The Desi-Bohemian Suite",
    cat: "Residential",
    description: "Luxury Interior Designer in Wakad - Bespoke Home Design, Luxury Modular Kitchens & Turnkey Interiors—crafted around your lifestyle.",
    span: "lg:col-span-1 lg:row-span-2",
    h: "h-[300px] lg:h-[712px]",
  },
  {
    img: officeImg,
    title: "Work space / Home office",
    cat: "Commercial",
    description: "Bespoke Home Office Interior Design in Baner - design Thoughtfully designed workspaces combining refined aesthetics, functionality and custom craftsmanship.\n",
    span: "lg:col-span-1",
    h: "h-[300px] lg:h-[340px]",
  },
  {
    img: afterImg,
    title: "Earthy Modern Residence",
    cat: "Turnkey",
    description: "Luxury Home Interiors Baner Pune - provides design consultancy, bespoke fabrication and site execution in-house.",
    span: "lg:col-span-1",
    h: "h-[300px] lg:h-[340px]",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionHead
        kicker="The Gallery"
        title="Finished concepts, unfinished obsession"
        copy="Light-filled rooms with French elegance and the soul of Indian craft — layered in warm, earthy materials."
      />
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <figure
            key={p.title}
            className={`group relative overflow-hidden border border-border ${p.span}`}
          >
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06] ${p.h}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <span className="inline-block border border-primary bg-primary/20 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-accent backdrop-blur">
                {p.cat}
              </span>
              <p className="mt-3 font-display text-2xl text-oncanvas">{p.title}</p>
              <p className="mt-1 max-h-0 overflow-hidden text-xs text-oncanvas/80 opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                {p.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Bare shell to bespoke</p>
          <h3 className="mt-5 font-display text-3xl text-cream lg:text-4xl">
            Drag to witness the transformation
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-greige">
            We take basic built bungalows structures, handover-condition apartments and deliver fully finished, Vastu-aligned homes —
            civil, false ceiling, carpentry, lighting, styling & garden designing under one accountable contract.
          </p>
        </div>
        <Compare />
      </div>
    </section>
  );
}

function Compare() {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={ref}
      className="relative h-[300px] select-none overflow-hidden border border-border sm:h-[420px]"
      onMouseDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => e.touches[0] && move(e.touches[0].clientX)}
      onTouchMove={(e) => e.touches[0] && move(e.touches[0].clientX)}
    >
      <img
        src={afterImg}
        alt="Living room after interior execution"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={beforeImg}
          alt="Bare shell apartment before interior work"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute inset-y-0 w-px bg-primary"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background shadow-lg">
          <ArrowRight className="h-4 w-4 text-primary" />
        </span>
      </div>
      <span className="absolute left-4 top-4 border border-border bg-background/90 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-greige backdrop-blur">
        Before
      </span>
      <span className="absolute right-4 top-4 border border-primary/60 bg-background/90 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-accent backdrop-blur">
        After
      </span>
    </div>
  );
}

/* ------------------------------- philosophy ------------------------------- */

function Philosophy() {
  const pillars = [
    {
      icon: Compass,
      t: "Customized Design & Build",
      d: "Bespoke design consultancy, Vastu-aligned planning and turnkey execution—seamlessly integrating civil works, fine carpentry, custom modular furniture and curated furnishings",
    },
    {
      icon: Ruler,
      t: "Renovation & Styling           ",
      d: "Transforming existing homes with emotion—creating up to 25% more usable space through civil & carpentry enhancements, elevated with soft furnishings, wall art & statement pieces.",
    },
    {
      icon: ShieldCheck,
      t: "Construction Project Management",
      d: "End-to-end coordination from planning to handover—managing agencies, timelines, costs, quality and client updates.",
    },
  ];
  return (
    <section id="philosophy" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          kicker="Design Philosophy"
          title="Why P Visiion Interiors"
          copy={"Practical approach, perfect planning and a personal touch — the identity of every project we sign. \n\n"}
        />
        <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="group bg-background p-9 transition-colors hover:bg-card">
              <p.icon className="h-7 w-7 text-primary transition-transform duration-500 group-hover:-translate-y-1" />
              <h3 className="mt-7 font-display text-2xl text-cream">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-greige">{p.d}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-16 border-l border-primary/60 pl-8">
          <p className="font-display text-2xl leading-snug text-cream lg:text-3xl">
            “Our aim is to transform your vision into a timeless home—thoughtfully designed, beautifully crafted and built to last uniquely for you..”
          </p>
          <footer className="mt-5 text-[10px] uppercase tracking-[0.3em] text-accent">
            SENIOR DESIGNE EXPERTISE . HIGHLY PERSONALISED DESIGN . EXECUTION ACCOUNTABILITY 
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

/* -------------------------------- blueprint ------------------------------- */

function Blueprint() {
  const steps = [
    {
      n: "01",
      t: "The Vision & Digital Twin",
      d: "We interpret your brief into layouts and photoreal 3D renders, so the home is signed off before a single panel is cut.",
      tag: "Vastu reviewed",
    },
    {
      n: "02",
      t: " Material Selection & Estimation",
      d: "Physical samples of tiles, stones, laminates, fabrics and hardware, presented with a clear, transparent line-item estimate.",
      tag: "PROJECT VALUE TRANSPARENCY",
    },
    {
      n: "03",
      t: "Rigorous Turnkey Execution",
      d: "Supervised site execution with weekly progress updates to the client -  handover in 90 days.",
      tag: "DELIVERY- 60 -90 DAYS",
    },
  ];
  return (
    <section id="blueprint" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <SectionHead
        kicker="The Blueprint"
        title="Three moves to a finished home"
        copy="A disciplined process refined across Pune and PCMC — no ambiguity, no drift, no surprises."
      />
      <ol className="mt-16 space-y-px border border-border bg-border">
        {steps.map((s) => (
          <li
            key={s.n}
            className="grid gap-6 bg-background p-9 transition-colors hover:bg-card lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-12"
          >
            <span className="font-display text-4xl text-primary/70 lg:text-5xl">{s.n}</span>
            <div>
              <h3 className="font-display text-2xl text-cream">{s.t}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-greige">{s.d}</p>
            </div>
            <span className="justify-self-start border border-primary/40 px-4 py-1.5 text-[9px] uppercase tracking-[0.25em] text-accent lg:justify-self-end">
              {s.tag}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------------------------- proof --------------------------------- */

function Proof() {
  const reviews = [
    {
      q: "They delivered our Wakad 3BHK to the drawing — the overall joinery from design to execution to handover was flawless and within estimated time & budget .",
      n: "Major Snigdha Nehru",
      p: "Pashan-Sus Rd., Pune",
    },
    {
      q: "Sucheta understood our Vastu requirements, her ability to balance aesthetics with functionality is impressive & her recommendations are always spot-on.",
      n: "Mrs. Sweta Shukla Sharma",
      p: "Baner, Pune",
    },
    {
      q: "We manage our office remotely; the weekly updates and photo reports made handover completely stress-free.",
      n: "Ganesh Nikam",
      p: "Wakad, PCMC",
    },
  ];
  return (
    <section id="reviews" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["4.8/5", "Average client rating"],
            ["18+Yrs.", "SENIOR DESIGN EXPERIENCE"],
            ["180 Days", "POST HANDOVER ASSISTANCE"],
            ["100%", "Line-item transparency"],
          ].map(([v, l]) => (
            <div key={l} className="bg-background p-8 text-center">
              <p className="font-display text-3xl text-primary">{v}</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-greige/70">{l}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className="border border-border bg-background p-8 backdrop-blur">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-xl leading-snug text-cream">
                “{r.q}”
              </blockquote>
              <figcaption className="mt-6 text-xs text-greige">
                <span className="text-cream">{r.n}</span> · {r.p}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- lead engine ------------------------------ */

const TYPOLOGY = ["2 BHK Residence", "3 / 4 BHK Residence", "Villa / Bungalow", "Commercial Space"];
const LANGUAGE = ["Boho-French Fusion", "Earthy Contemporary", "Indian Ethnic", "Art Deco Revival"];
const SCALE = ["Under 900 sq.ft", "900 – 1,600 sq.ft", "1,600 – 3,000 sq.ft", "3,000+ sq.ft"];
const LOCATIONS = ["Pune", "PCMC", "Global / NRI"];

const BUDGETS: Record<string, string> = {
  "Under 900 sq.ft": "₹ 8 – 14 L",
  "900 – 1,600 sq.ft": "₹ 14 – 28 L",
  "1,600 – 3,000 sq.ft": "₹ 28 – 55 L",
  "3,000+ sq.ft": "₹ 55 L +",
};

function LeadEngine({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [step, setStep] = useState(0);
  const [typology, setTypology] = useState("");
  const [language, setLanguage] = useState("");
  const [scale, setScale] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Pune");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) setStep(0);
  }, [open]);

  const message = encodeURIComponent(
    `Hello P Visiion Interiors, I'm ${name || "a prospective client"} from ${location}. ` +
      `I'm planning a ${typology || "space"} in ${language || "a bespoke"} style, ${scale || "TBD"}. ` +
      `Estimated range: ${BUDGETS[scale] ?? "to be discussed"}. Phone: ${phone}.`,
  );

  const stepValid = [!!typology, !!language, !!scale, name.trim().length > 1 && phone.trim().length >= 8][step];

  return (
    <section id="architect" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-cognac/10 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 lg:py-32">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent">Interactive</p>
          <h2 className="mt-6 font-display text-4xl text-cream lg:text-5xl">
            Begin Your Journey with PV interiors
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-greige">
            Every home is different. We listen, understand your lifestyle and create spaces that are personal, functional and timeless—not simply copied from a catalogue.


Four considered questions. Receive an indicative investment band, our private lookbook, and a direct line to Sucheta.
          </p>
        </div>

        <div className="mt-12 border border-border bg-card p-7 backdrop-blur-xl sm:p-10">
          {done ? (
            <div className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/60 bg-primary/10">
                <Check className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-7 font-display text-3xl text-cream">Your lookbook is ready</h3>
              <p className="mt-4 text-sm text-greige">
                Indicative investment for a {scale.toLowerCase()} {typology.toLowerCase()} in{" "}
                {language.toLowerCase()}:{" "}
                <span className="text-primary">{BUDGETS[scale] ?? "on request"}</span>
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={`${WHATSAPP}?text=${message}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 bg-primary px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
                >
                  <MessageCircle className="h-4 w-4" /> Launch WhatsApp Consultation
                </a>
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 border border-border px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-cream hover:border-primary/60 hover:text-primary"
                >
                  <Download className="h-4 w-4" /> View Private Lookbook
                </a>
              </div>
              <button
                onClick={() => {
                  setDone(false);
                  setStep(0);
                }}
                className="mt-8 text-[10px] uppercase tracking-[0.25em] text-greige/70 hover:text-primary"
              >
                Start over
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3">
                {["Typology", "Design Language", "Scale", "Reveal"].map((l, i) => (
                  <div key={l} className="flex-1">
                    <div
                      className={`h-px w-full ${i <= step ? "bg-primary" : "bg-border"}`}
                    />
                    <p
                      className={`mt-3 text-[9px] uppercase tracking-[0.2em] ${
                        i <= step ? "text-primary" : "text-greige/50"
                      }`}
                    >
                      {l}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 min-h-[230px]">
                {step === 0 && (
                  <StepGrid
                    title="What are we designing?"
                    options={TYPOLOGY}
                    value={typology}
                    onChange={setTypology}
                  />
                )}
                {step === 1 && (
                  <StepGrid
                    title="Choose your design language"
                    options={LANGUAGE}
                    value={language}
                    onChange={setLanguage}
                  />
                )}
                {step === 2 && (
                  <StepGrid
                    title="Scale & footprint"
                    options={SCALE}
                    value={scale}
                    onChange={setScale}
                  />
                )}
                {step === 3 && (
                  <div>
                    <h3 className="font-display text-2xl text-cream">Reveal your estimate</h3>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="border border-border bg-background px-4 py-3.5 text-sm text-cream placeholder:text-greige/50 focus:border-primary focus:outline-none"
                      />
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone / WhatsApp"
                        className="border border-border bg-background px-4 py-3.5 text-sm text-cream placeholder:text-greige/50 focus:border-primary focus:outline-none"
                      />
                    </div>
                    <p className="mt-7 text-[10px] uppercase tracking-[0.25em] text-greige/70">
                      Project location
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {LOCATIONS.map((l) => (
                        <button
                          key={l}
                          onClick={() => setLocation(l)}
                          className={`border px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors ${
                            location === l
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-greige hover:border-primary/50"
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-7">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="text-[10px] uppercase tracking-[0.25em] text-greige/70 disabled:opacity-30"
                >
                  Back
                </button>
                <button
                  onClick={() => (step === 3 ? setDone(true) : setStep((s) => s + 1))}
                  disabled={!stepValid}
                  className="flex items-center gap-3 bg-primary px-7 py-3.5 text-[11px] uppercase tracking-[0.22em] text-primary-foreground transition-opacity disabled:opacity-30"
                >
                  {step === 3 ? "Reveal Estimate" : "Continue"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          )}
        </div>
        {open && (
          <p className="mt-6 flex items-center justify-center gap-2 text-center text-[10px] uppercase tracking-[0.25em] text-accent">
            <Sparkles className="h-3.5 w-3.5" /> Complete the four steps to unlock the portfolio
          </p>
        )}
      </div>
    </section>
  );
}

function StepGrid({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="font-display text-2xl text-cream">{title}</h3>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`border px-5 py-4 text-left text-sm transition-all ${
              value === o
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-greige hover:border-primary/50 hover:text-cream"
            }`}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- footer --------------------------------- */

function SectionHead({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-accent">
        <span className="h-px w-8 bg-accent/60" /> {kicker}
      </p>
      <h2 className="mt-6 font-display text-4xl leading-tight text-cream lg:text-5xl">{title}</h2>
      <p className="mt-5 text-sm leading-relaxed text-greige">{copy}</p>
    </div>
  );
}

function Footer() {
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
          <p className="mt-5 font-display text-xl text-cream">PV Interiors · Wakad, Pune</p>
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
              <Phone className="h-4 w-4 text-primary" /> +91 8805 028 765
            </a>
            <a
              href="mailto:pvisiion@gmail.com"
              className="flex items-center gap-3 text-greige transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" /> pvisiion@gmail.com
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
          <span>© {new Date().getFullYear()} P Visiion Interiors, Pune</span>
          <span>Design Consultancy · Modular Furniture · Turnkey Projects</span>
        </div>
      </div>
    </footer>
  );
}
