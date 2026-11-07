import type { Project } from "./types";

/**
 * All case studies, in the order they appear on the page.
 *
 * Adding media to an empty slot:
 *   1. Put the original file in  source-media/<project>/
 *   2. Run                       npm run media
 *   3. Set `src` (or `video` + `poster`) on the slot below, e.g.
 *        src: "/media/nutopia/fish-character.webp"
 */
export const projects: Project[] = [
  {
    id: "cleany",
    number: "01",
    title: "Cleany",
    categories: ["Creative Strategy", "Digital Marketing", "Brand Communication", "Visual Design"],
    role: "Creative Strategy, Digital Marketing, Brand Communication & Visual Design",
    period: "May – Sep 2026",
    location: "Berlin",
    intro:
      "A service business has to make its value immediately understandable across a shop window, a social feed, a flyer and a search result. The work connected consistent visual communication with practical service explanations and targeted local promotions.",
    process: [
      "Creative strategy",
      "Digital marketing",
      "Social content",
      "Visual design",
      "Promotional communication",
      "Storefront",
      "Website content",
      "SEO / GEO & local marketing",
    ],
    layout: "campaign",
    media: [
      {
        id: "storefront",
        label: "Storefront",
        aspect: "1360/961",
        src: "/media/cleany/storefront.webp",
        alt: "Cleany Textilreinigung storefront: glass façade with service list decals, logo signage and window graphics",
        caption: "Storefront · CLEANY Textilreinigung, Berlin",
      },
      {
        id: "flyer",
        label: "Flyer",
        aspect: "724/1020",
        src: "/media/cleany/flyer.webp",
        alt: "Cleany promotional flyer: full service list with descriptions, address, phone number and website",
        caption: "Flyer · service list & contact",
      },
      {
        id: "card",
        label: "Business card",
        aspect: "1360/1020",
        src: "/media/cleany/card.webp",
        alt: "Cleany business card held in hand: navy and royal blue wave pattern with the logo",
        caption: "Card · identity in hand",
      },
      ...[1, 2, 3, 4, 5, 6].map((n) => ({
        id: `stain_guide_${n}`,
        label: `Stain guide · frame ${n}`,
        aspect: "4/5",
        src: `/media/cleany/stain-guide-0${n}.webp`,
        alt: `Cleany stain guide post ${n}`,
        caption: n === 1 ? "Der wichtigste Fehler: Bloß kein Salz!" : undefined,
      })),
      {
        id: "promo_wework",
        label: "WeWork member offer",
        aspect: "1357/1920",
        src: "/media/cleany/promo-wework.webp",
        alt: "Cleany offer poster for WeWork members: 10 percent discount, service checklist and both Berlin locations",
      },
      {
        id: "promo_leather",
        label: "Leather-cleaning offer",
        aspect: "434/742",
        src: "/media/cleany/promo-leather.webp",
        alt: "Cleany promotional visual for leather cleaning",
      },
      {
        id: "promo_cleany24",
        label: "Cleany24 collection & delivery",
        aspect: "1448/1086",
        src: "/media/cleany/promo-cleany24.webp",
        alt: "Cleany24 app booking in Berlin",
      },
      {
        id: "website_ratgeber",
        label: "Ratgeber blog",
        aspect: "1280/660",
        src: "/media/cleany/ratgeber-blog.webp",
        alt: "Cleany Ratgeber blog guide on textile care",
        caption: "Website · Ratgeber blog on textile care",
      },
      {
        id: "analytics",
        label: "Google Analytics 4 report",
        aspect: "1920/1004",
        src: "/media/cleany/analytics-ga4.webp",
        alt: "Google Analytics 4 traffic acquisition report for the Cleany website over a fixed reporting window",
        caption: "Google Analytics 4 · traffic acquisition, shown as captured",
      },
      {
        id: "motion_app",
        label: "App promotion",
        aspect: "9/16",
        type: "video",
        video: "/media/cleany/cleany24-app-promo.mp4",
        poster: "/media/cleany/cleany24-app-promo-poster.webp",
        alt: "Cleany24 app promotion",
      },
      {
        id: "motion_cashmere",
        label: "Speaking fabrics · cashmere care",
        aspect: "9/16",
        type: "video",
        video: "/media/cleany/speaking-cashmere.mp4",
        poster: "/media/cleany/speaking-cashmere-poster.webp",
        alt: "Speaking fabrics: cashmere care social video",
      },
      {
        id: "motion_fabric",
        label: "Speaking fabrics · fabric care",
        aspect: "9/16",
        type: "video",
        video: "/media/cleany/speaking-fabric.mp4",
        poster: "/media/cleany/speaking-fabric-poster.webp",
        alt: "Speaking fabrics: fabric care social video",
      },
    ],
  },

  {
    id: "nutopia",
    number: "02",
    title: "Nutopia",
    categories: ["Head of Design", "Character Design", "Visual Storytelling"],
    role: "Head of Design",
    period: "Dec 2024 – Dec 2025",
    intro:
      "Leading the visual world of an animated project — shaping its characters, the places they live and the opening moments that introduce them.",
    process: [
      "Character design",
      "Background & environment design",
      "Scenario development (collaborative)",
      "Intro concept planning",
      "Visual storytelling",
      "Creative development",
    ],
    layout: "storybook",
    media: [
      { id: "char_top", label: "5 characters", aspect: "1.90/1", fit: "contain" },
      { id: "char_fish", label: "Fish character", aspect: "2/3", fit: "contain" },
      { id: "char_female", label: "3 female characters", aspect: "5/7", fit: "contain" },
      { id: "char_four", label: "4 characters", aspect: "7/5", fit: "contain" },
      { id: "char_seven", label: "7 characters", aspect: "4/1", fit: "contain" },
      { id: "char_children", label: "5 children", aspect: "7/5", fit: "contain" },
      { id: "char_colorful", label: "3 colorful characters", aspect: "3/2", fit: "contain" },
      { id: "room_1", label: "Room · view 01", aspect: "16/9", fit: "contain" },
      { id: "room_2", label: "Room · view 02", aspect: "16/9", fit: "contain" },
      { id: "room_3", label: "Room · view 03", aspect: "16/9", fit: "contain" },
      { id: "background_1", label: "Background 01", aspect: "16/9", fit: "contain" },
      { id: "background_2", label: "Background 02", aspect: "16/9", fit: "contain" },
      { id: "background_3", label: "Background 03", aspect: "16/9", fit: "contain" },
      { id: "background_4", label: "Background 04", aspect: "16/9", fit: "contain" },
    ],
  },

  {
    id: "pissfool",
    number: "03",
    title: "Pissfool",
    categories: ["Freelance Creative Design", "Motion Graphics", "Content Strategy"],
    role: "Independent creative practice",
    period: "Ongoing",
    intro:
      "A self-directed studio of one: ideas, illustration and motion built for the feed — and an audience that grew around them.",
    process: [
      "Creative concepts & strategy",
      "Motion graphics",
      "Digital illustration",
      "Social media content",
      "Visual storytelling",
    ],
    outcome: "Millions of views and a combined audience of over 160,000 across social platforms.",
    layout: "playground",
    media: [
      { id: "clip_vertical", label: "Motion clip · vertical", aspect: "9/16", type: "video", alt: "Pissfool vertical motion clip" },
      { id: "clip_square", label: "Motion clip · square", aspect: "1/1", type: "video", alt: "Pissfool square motion clip" },
      { id: "collage_1", label: "Illustration", aspect: "4/5" },
      { id: "collage_2", label: "Motion / video", aspect: "9/16", type: "video" },
      { id: "collage_3", label: "Concept", aspect: "1/1" },
      { id: "collage_4", label: "Social sample", aspect: "4/5" },
      { id: "collage_5", label: "Illustration", aspect: "1/1" },
    ],
  },

  {
    id: "droplinked",
    number: "04",
    title: "Droplinked",
    categories: ["Commercial Illustration", "Merchandise Design"],
    role: "Illustrator & Merch Designer",
    period: "May 2023",
    intro:
      "Illustration made to be worn and carried — print-ready artwork translated into a branded merchandise range.",
    process: [
      "Print-ready illustration",
      "Branded merchandise designs",
      "Tote bag & T-shirt graphics",
      "Promotional product adaptations",
    ],
    layout: "product",
    media: [
      { id: "artwork", label: "Original artwork", aspect: "1/1" },
      { id: "tshirt", label: "T-shirt graphic", aspect: "4/5" },
      { id: "tote", label: "Tote bag graphic", aspect: "4/5" },
      { id: "print_files", label: "Final print files", aspect: "4/5" },
      { id: "applications", label: "Applications", aspect: "16/9" },
    ],
  },

  {
    id: "tabassom",
    number: "05",
    title: "Tabassom Printing",
    categories: ["Textile Printing", "Print Preparation"],
    role: "Print & Textile Designer",
    period: "2022",
    intro:
      "Where design meets fabric: preparing and adapting visuals so they hold up through textile production.",
    process: ["Textile printing", "Print preparation", "Adapting designs for fabric production"],
    layout: "swatch",
    media: [
      { id: "pattern", label: "Pattern", aspect: "1/1" },
      { id: "sample", label: "Sample", aspect: "1/1" },
      { id: "process", label: "Printing process", aspect: "1/1" },
      { id: "finished", label: "Finished textile", aspect: "1/1" },
    ],
  },
];
