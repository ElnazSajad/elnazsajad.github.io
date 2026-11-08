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
      {
        id: "char_top",
        label: "5 characters",
        aspect: "1520/860",
        fit: "contain",
        src: "/media/nutopia/characters-five.webp",
        alt: "One boy shown in five roles: janitor with a mop, wizard, himself in a smiley T-shirt, cowboy and rapper",
        caption: "One boy, five roles",
      },
      {
        id: "char_fish",
        label: "Fish character",
        aspect: "732/1104",
        fit: "contain",
        src: "/media/nutopia/character-fish.webp",
        alt: "Fish-headed character in a navy suit and red tie with flippers, plus a separate head study",
        caption: "Fish in a suit",
      },
      {
        id: "char_female",
        label: "3 female characters",
        aspect: "464/664",
        fit: "contain",
        src: "/media/nutopia/characters-three-women.webp",
        alt: "Woman in a purple gown flanked by two women in black and mustard colour-block dresses",
        caption: "Three women",
      },
      {
        id: "char_four",
        label: "4 characters",
        aspect: "742/524",
        fit: "contain",
        src: "/media/nutopia/characters-four.webp",
        alt: "Four adult characters in blazers and coats: a curly-haired woman, a young man, a bald man with glasses, a man in a hat",
        caption: "Four adults",
      },
      {
        id: "char_seven",
        label: "7 characters",
        aspect: "2000/494",
        fit: "contain",
        src: "/media/nutopia/characters-seven.webp",
        alt: "Seven creature characters: a goblin, a mustached strongman, a snail-eyed figure, and people with elf ears, a giant grin, snake hair and a beak",
        caption: "Seven creatures",
      },
      {
        id: "char_children",
        label: "5 children",
        aspect: "748/534",
        fit: "contain",
        src: "/media/nutopia/characters-children.webp",
        alt: "Five barefoot or sandalled children in worn, patched clothing",
        caption: "Five children",
      },
      {
        id: "char_colorful",
        label: "3 colorful characters",
        aspect: "828/568",
        fit: "contain",
        src: "/media/nutopia/characters-colorful.webp",
        alt: "Three flamboyant characters: a pale man in a purple uniform, a woman in an orange gown, a woman in a purple ruffled dress",
        caption: "Three colorful characters",
      },
      // One room, four camera set-ups — room_1 is the establishing shot.
      {
        id: "room_1",
        label: "Room · view 01",
        aspect: "16/9",
        src: "/media/nutopia/room-wide.webp",
        alt: "Wood-panelled study: gilded empty frame, tall windows, built-in bookshelves, a desk and a green tufted chair",
        caption: "View 01 · establishing shot",
      },
      {
        id: "room_2",
        label: "Room · view 02",
        aspect: "16/9",
        src: "/media/nutopia/room-door.webp",
        alt: "The same study facing the door, with wall sconces and a rack of rifles on the side wall",
        caption: "View 02 · the door wall",
      },
      {
        id: "room_3",
        label: "Room · view 03",
        aspect: "16/9",
        src: "/media/nutopia/room-desk.webp",
        alt: "Close view of the desk and green tufted chair between two bookshelves",
        caption: "View 03 · behind the desk",
      },
      {
        id: "room_4",
        label: "Room · view 04",
        aspect: "16/9",
        src: "/media/nutopia/room-ceiling.webp",
        alt: "Low angle looking up at the study's ochre ceiling and layered cornice",
        caption: "View 04 · looking up",
      },
      {
        id: "background_1",
        label: "Background 01",
        aspect: "16/9",
        src: "/media/nutopia/background-street-stage.webp",
        alt: "A theatre stage with red curtains and a podium set into a city street between buildings",
        caption: "Street stage",
      },
      {
        id: "background_2",
        label: "Background 02",
        aspect: "16/9",
        src: "/media/nutopia/background-living-room.webp",
        alt: "Living room with a fireplace, crossed swords, framed paintings, two green sofas and a red armchair",
        caption: "Living room",
      },
      {
        id: "background_3",
        label: "Background 03",
        aspect: "16/9",
        src: "/media/nutopia/background-ruined-street.webp",
        alt: "Overgrown, crumbling city street with flooded gutter, glass towers behind, and three characters standing in it",
        caption: "Ruined street · with characters",
      },
      {
        id: "background_4",
        label: "Background 04",
        aspect: "16/9",
        src: "/media/nutopia/background-island-city.webp",
        alt: "A walled, burning ruined city on an island at sunset, surrounded by dead trees",
        caption: "Island city",
      },
    ],
  },

  {
    id: "pissfool",
    number: "03",
    title: "Pissfool",
    categories: ["Illustration", "Animation", "Storytelling", "Social Media Content"],
    role: "Independent creative practice",
    period: "Ongoing",
    intro:
      "An independent creative project combining illustration, animation, storytelling and social media content — a self-directed studio of one, and an audience that grew around it.",
    process: [
      "Creative concepts & strategy",
      "Character design",
      "Frame-by-frame animation (Photoshop)",
      "Motion graphics (After Effects)",
      "AI-assisted animation",
      "Digital illustration",
      "Social media content",
      "Visual storytelling",
    ],
    outcome:
      "165.5K followers and 1.3M likes on TikTok, with individual videos reaching 10.6M, 6.2M and 4.3M views.",
    // Figures as shown in the TikTok screenshots in Part 01 — update them here when they change.
    milestone: {
      eyebrow: "Audience milestone · TikTok",
      value: "165.5K",
      caption: "followers on TikTok",
      stats: [
        { value: "1.3M", label: "Likes" },
        { value: "10.6M", label: "Views · top video" },
      ],
    },
    /** Add the profile URLs (and optionally a handle like "@pissfool") to make these live. */
    links: [
      { name: "Instagram", href: "https://www.instagram.com/pissfool__/", handle: "@pissfool__" },
      { name: "TikTok", href: "https://www.tiktok.com/@pissfool", handle: "@pissfool" },
      { name: "YouTube", href: "https://www.youtube.com/results?search_query=pissfool", handle: "Pissfool" },
    ],
    layout: "playground",
    // Each slot is independent: add `src` (images) or `video` + `poster` (videos)
    // and change `aspect` to match your file, e.g. "1080/1920" for a vertical clip.
    media: [
      // Part 01 — Social media growth & reach
      { id: "growth_1", label: "Growth screenshot 01", aspect: "990/286", src: "/media/pissfool/growth-tiktok-profile.webp", alt: "Pissfool TikTok profile: 165.5K followers and 1.3M likes", caption: "TikTok · profile, followers & likes" },
      { id: "growth_2", label: "Reach screenshot 02", aspect: "748/380", src: "/media/pissfool/growth-tiktok-top-videos.webp", alt: "Three pinned Pissfool TikTok videos with 6.2M, 10.6M and 4.3M views", caption: "TikTok · most-viewed videos" },

      // Part 02 — The beginning: green character (hand-animated, no AI)
      { id: "green_1", label: "Green character · clip 01", aspect: "9/16", type: "video", video: "/media/pissfool/green-01.mp4", poster: "/media/pissfool/green-01-poster.webp", alt: "Pissfool green character animation, clip 1" },
      { id: "green_2", label: "Green character · clip 02", aspect: "9/16", type: "video", video: "/media/pissfool/green-02.mp4", poster: "/media/pissfool/green-02-poster.webp", alt: "Pissfool green character animation, clip 2" },

      // Part 03 — Creative exploration: the full cast (hand-made, no AI)
      { id: "cast_all", label: "All Pissfool characters", aspect: "2000/1600", src: "/media/pissfool/cast-all-characters.webp", alt: "Crowded illustration of the whole Pissfool cast hanging out in one big room under a banner reading \"life is Graet!\"", caption: "The cast · every character created for Pissfool" },
      { id: "cast_video_1", label: "Character clip 01", aspect: "9/16", type: "video", video: "/media/pissfool/cast-01.mp4", poster: "/media/pissfool/cast-01-poster.webp", alt: "Pissfool character animation, clip 1" },
      { id: "cast_video_2", label: "Character clip 02", aspect: "9/16", type: "video", video: "/media/pissfool/cast-02.mp4", poster: "/media/pissfool/cast-02-poster.webp", alt: "Pissfool character animation, clip 2" },

      // Part 04 — Signature character: traditional animation
      { id: "signature_manual_1", label: "Traditional · clip 01", aspect: "9/16", type: "video", video: "/media/pissfool/signature-traditional-01.mp4", poster: "/media/pissfool/signature-traditional-01-poster.webp", alt: "Signature character, traditional hand-made animation, clip 1" },
      { id: "signature_manual_2", label: "Traditional · clip 02", aspect: "9/16", type: "video", video: "/media/pissfool/signature-traditional-02.mp4", poster: "/media/pissfool/signature-traditional-02-poster.webp", alt: "Signature character, traditional hand-made animation, clip 2" },

      // Part 04 — Signature character: AI-assisted animation
      { id: "signature_ai_1", label: "AI-assisted · clip 01", aspect: "9/16", type: "video", video: "/media/pissfool/signature-ai-01.mp4", poster: "/media/pissfool/signature-ai-01-poster.webp", alt: "Signature character, AI-assisted animation, clip 1" },
      { id: "signature_ai_2", label: "AI-assisted · clip 02", aspect: "9/16", type: "video", video: "/media/pissfool/signature-ai-02.mp4", poster: "/media/pissfool/signature-ai-02-poster.webp", alt: "Signature character, AI-assisted animation, clip 2" },
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
      {
        id: "main_design",
        label: "Main design · sticker collage",
        aspect: "1414/2000",
        src: "/media/droplinked/main-design-sticker-collage.webp",
        alt: "Droplinked sticker-collage illustration: the droplinked logo surrounded by crypto symbols, money, rockets, a bull, a piggy bank and cartoon characters",
        caption: "Main design · sticker collage",
      },
      {
        id: "printed",
        label: "Printed · on a T-shirt",
        // Cropped to 4:5 on the page so the hero fits on screen; the lightbox shows the full photo.
        aspect: "4/5",
        focus: "50% 62%",
        src: "/media/droplinked/printed-tshirt.webp",
        alt: "The Droplinked sticker-collage design printed on a black T-shirt, worn outdoors",
        caption: "Printed · the design on a T-shirt",
      },
      {
        id: "logo_sticker",
        label: "Small design · logo sticker",
        aspect: "2000/798",
        src: "/media/droplinked/logo-sticker.webp",
        alt: "Droplinked wordmark as a die-cut sticker with a balloon, rocket, cloud and gem",
        caption: "Small design · logo sticker",
      },
    ],
  },
];
