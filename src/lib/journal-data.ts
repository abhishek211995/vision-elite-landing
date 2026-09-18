import heroImg from "@/assets/hero.jpg";
import kitchenImg from "@/assets/gallery-kitchen.jpg";
import bedroomImg from "@/assets/gallery-bedroom.jpg";
import officeImg from "@/assets/gallery-office.jpg";
import afterImg from "@/assets/after.jpg";

export const JOURNAL_TAGS = [
  "Luxury Interiors",
  "Turnkey Renovation",
  "Vastu Shastra",
  "Materials & Finishes",
] as const;

export type JournalTag = (typeof JOURNAL_TAGS)[number];

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  tag: JournalTag;
  excerpt: string;
  image: string;
  date: string; // ISO
  dateLabel: string;
  readingTime: string;
  author: string;
  sections: ArticleSection[];
};

export const ARTICLES: Article[] = [
  {
    slug: "geometry-of-serenity-vastu-modern-pune-estates",
    title: "The Geometry of Serenity: Integrating Vastu Principles in Modern Pune Estates",
    tag: "Vastu Shastra",
    excerpt:
      "How directional logic, daylight and proportion can be woven into a contemporary Pune home without a single compromise on design language.",
    image: heroImg,
    date: "2026-08-24",
    dateLabel: "24 August 2026",
    readingTime: "7 min read",
    author: "Sucheta Alve · P Visiion Interiors",
    sections: [
      {
        heading: "Vastu is planning, not decoration",
        paragraphs: [
          "Vastu Shastra is often reduced to a checklist of objects and colours. In practice it is a planning discipline — a way of reading a plot, its light, its air movement and its thresholds, and then arranging life around them. In a Pune apartment where the developer has already fixed the shell, the opportunity lies in how we distribute function inside that shell.",
          "We begin every project with a directional overlay on the builder drawing. Where does the first light land? Which walls carry plumbing and cannot move? Which corner will hold the family's quietest hour? Those answers set the layout long before a single finish is selected.",
        ],
      },
      {
        heading: "The four anchors we protect",
        paragraphs: [
          "The kitchen's fire zone in the south-east, the primary bedroom weighted to the south-west, a clear and uncluttered north-east for prayer or reading, and an unobstructed entry threshold — these four anchors resolve the majority of Vastu concerns families bring to us.",
          "When a shell makes one of them impossible, we correct with proportion and light rather than superstition: repositioning the hob within the platform, shifting a wardrobe mass to weight a room correctly, or opening a passage so the entry reads generous instead of pinched.",
        ],
      },
      {
        heading: "Serenity as a measurable outcome",
        paragraphs: [
          "A serene home has fewer visual interruptions per wall, consistent ceiling heights, and a lighting scheme that lets the evening feel different from the afternoon. In apartments with a 9'6\" ceiling, we keep false ceilings shallow and reserve depth only where services demand it.",
          "The result is a home that satisfies a Vastu consultant and an architect equally — because both are asking, in different vocabularies, for the same thing: order.",
        ],
      },
    ],
  },
  {
    slug: "turnkey-mastery-raw-shell-to-bespoke-handover",
    title: "Turnkey Mastery: Navigating Raw Shell to Bespoke Penthouse Handover",
    tag: "Turnkey Renovation",
    excerpt:
      "A transparent look at the sequence, decisions and accountability that take a bare structure to a fully styled, warranty-backed home.",
    image: afterImg,
    date: "2026-07-30",
    dateLabel: "30 July 2026",
    readingTime: "9 min read",
    author: "P Visiion Interiors",
    sections: [
      {
        heading: "Why sequence decides cost",
        paragraphs: [
          "On a turnkey project, money is rarely lost on material rates. It is lost on rework — a socket moved after tiling, a wardrobe redesigned after false ceiling, a marble slab cut before the final layout freeze. Our contract therefore front-loads decisions that are expensive to reverse.",
          "Civil and plumbing changes, electrical point marking, and joinery carcass dimensions are locked in a single freeze meeting. Finishes, hardware and furnishings stay open longer, because they can change without touching the structure.",
        ],
      },
      {
        heading: "The three phases on site",
        paragraphs: [
          "Phase one is shell correction: levelling, waterproofing, masonry edits, conduiting and plumbing shifts. Phase two is the built envelope: false ceiling, flooring, wall finishes and fine carpentry. Phase three is the reveal: lighting, soft furnishings, art, styling and a documented snag close-out.",
          "Each phase ends with a signed checklist and a photographic record. Clients travelling or based outside Pune receive a weekly update with images, spends against budget, and the next week's plan.",
        ],
      },
      {
        heading: "Handover that keeps its promises",
        paragraphs: [
          "Handover includes hardware warranty cards, a materials register, paint and laminate codes for future touch-ups, and our own workmanship warranty on carpentry and installation.",
          "A turnkey project should end with fewer open questions than it began with. That is the standard we hold ourselves to.",
        ],
      },
    ],
  },
  {
    slug: "smart-luxury-automation-and-acoustic-design",
    title: "Smart Luxury: Seamless Automation & Acoustic Design for Contemporary Living",
    tag: "Luxury Interiors",
    excerpt:
      "Technology should be felt, not seen. A practical guide to lighting scenes, invisible control and rooms that sound as considered as they look.",
    image: officeImg,
    date: "2026-07-08",
    dateLabel: "8 July 2026",
    readingTime: "6 min read",
    author: "P Visiion Interiors",
    sections: [
      {
        heading: "Scenes before switches",
        paragraphs: [
          "Automation begins with a question that has nothing to do with wiring: how does this family use the room across a day? We design four or five scenes per space — morning, work, host, dine, wind-down — and only then decide how they are triggered.",
          "Layered circuits make scenes possible: a cove wash for ambience, profile lights for architecture, focused spots for art and task, and a low-level night circuit. Dimmable warm-white sources keep the palette consistent with earthy materials.",
        ],
      },
      {
        heading: "Control that disappears",
        paragraphs: [
          "Wall real estate is precious in a luxury interior. We consolidate plates, place them at consistent heights, and keep finishes matched to the adjacent surface so controls recede. Guest-facing rooms always retain a simple manual override — no visitor should need an app to switch on a light.",
        ],
      },
      {
        heading: "Acoustics: the unseen luxury",
        paragraphs: [
          "Hard floors, large glazing and open plans create echo. We soften with full-height curtains in heavier weaves, hand-knotted rugs with felt underlay, upholstered headboard walls, and bookcase depth that scatters sound.",
          "Door seals and a solid-core primary bedroom door do more for sleep quality than any gadget. In apartment projects, these details are the difference between a beautiful home and a calm one.",
        ],
      },
    ],
  },
  {
    slug: "material-narrative-italian-marble-walnut-millwork",
    title: "Material Narrative: Sourcing Exotic Italian Marbles and Warm Walnut Millwork",
    tag: "Materials & Finishes",
    excerpt:
      "Selecting stone and timber that age gracefully — slab reading, vein matching, finish choices and the maintenance conversation nobody starts early enough.",
    image: kitchenImg,
    date: "2026-06-19",
    dateLabel: "19 June 2026",
    readingTime: "8 min read",
    author: "Sucheta Alve · P Visiion Interiors",
    sections: [
      {
        heading: "Choose the slab, not the sample",
        paragraphs: [
          "Natural stone is never uniform. A 4-inch sample tells you the colour family and nothing about the movement you will live with. We select from full slabs at the yard, photograph them at scale, and lay out cuts digitally so veins run continuously across an island, a backsplash and a return.",
          "Statuario and Calacatta bring graphic veining suited to a single hero surface. Travertine and warm beige limestones suit larger areas where the stone should recede and let craft details lead.",
        ],
      },
      {
        heading: "Finish is a lifestyle decision",
        paragraphs: [
          "High-polish marble reflects light beautifully and shows etching from lemon and turmeric just as clearly. For Indian kitchens in daily use, we often recommend honed or satin finishes on working surfaces and reserve polish for vertical feature panels.",
          "Sealing is not a one-time event. We hand over a maintenance sheet with the sealant used, the reapplication interval, and the cleaners to avoid.",
        ],
      },
      {
        heading: "Walnut, and why grain direction matters",
        paragraphs: [
          "Warm walnut millwork gives a room depth that paint cannot. The craft lies in veneer layout — book-matched panels on wardrobe shutters, grain running vertically on tall elements and horizontally on low runs, with edge banding cut from the same flitch.",
          "Paired with brass inlay, cane infill and hand-carved Indian detailing, walnut is what lets a contemporary apartment still feel rooted and personal.",
        ],
      },
    ],
  },
  {
    slug: "renovation-architecture-punes-established-estates",
    title: "Renovation Architecture: Breathing New Life into Pune's Established Estates",
    tag: "Turnkey Renovation",
    excerpt:
      "Older Pune homes carry generous proportions and solid construction. Here is how we recover up to 25% more usable space without the chaos.",
    image: bedroomImg,
    date: "2026-05-27",
    dateLabel: "27 May 2026",
    readingTime: "7 min read",
    author: "P Visiion Interiors",
    sections: [
      {
        heading: "Survey before design",
        paragraphs: [
          "Established homes hide their history. Before proposing anything, we measure every wall, trace plumbing lines, open a test patch of flooring, and check the electrical load against how the family actually lives today.",
          "That survey usually reveals the real opportunity: a redundant passage, an oversized bathroom, a dry balcony, or a store room that can become a study.",
        ],
      },
      {
        heading: "Finding the extra 25%",
        paragraphs: [
          "Usable space is recovered by removing circulation that serves nothing, taking storage full height, replacing swing doors with sliders where clearance is tight, and combining two shallow rooms into one usable one.",
          "Structural walls stay. Everything else is negotiable, subject to society permissions and a structural consultant's sign-off — both of which we obtain before demolition, never after.",
        ],
      },
      {
        heading: "Living through it, or not",
        paragraphs: [
          "Renovation chaos is a scheduling problem. Where families must stay in residence, we phase by zone, seal work areas with dust barriers, and restrict noisy activity to society-permitted hours.",
          "The finishing layer — soft furnishings, wall art, statement lighting, a few well-chosen pieces — is what makes an old home feel new. It is also the part most renovations under-budget.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
