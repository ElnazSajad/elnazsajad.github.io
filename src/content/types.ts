/**
 * A single piece of media in a case study.
 *
 * Leave `src` / `video` empty and the slot renders as a hatched placeholder
 * ("+ media to be added"), so the layout holds until the real file is ready.
 */
export type MediaSlot = {
  /** Unique within the project. Layouts look slots up by this id. */
  id: string;
  /** Short name — shown on placeholders and used as fallback alt text. */
  label: string;
  /** CSS aspect-ratio, e.g. "4/5" or "16/9". Reserves space before load. */
  aspect?: string;
  /** "image" (default) or "video" — only affects the placeholder text. */
  type?: "image" | "video";

  /** Image path, relative to /public — e.g. "/media/nutopia/fish.webp". */
  src?: string;
  /** Video path, relative to /public. */
  video?: string;
  /** Still frame shown before a video plays. */
  poster?: string;

  /** Describes the image for screen readers. Falls back to `label`. */
  alt?: string;
  /** Optional caption shown under the image and in the lightbox. */
  caption?: string;
  /** "cover" crops to fill (default); "contain" shows the whole image. */
  fit?: "cover" | "contain";
  /** object-position for cropped images, e.g. "50% 20%". */
  focus?: string;
};

/** Each project picks one of the five art-directed layouts. */
export type ProjectLayout = "campaign" | "storybook" | "playground" | "product" | "swatch";

export type Project = {
  /** Used as the section's anchor: #cleany, #nutopia … */
  id: string;
  number: string;
  title: string;
  categories: string[];
  role: string;
  period: string;
  location?: string;
  intro: string;
  process: string[];
  outcome?: string;
  /** External profiles, e.g. social channels. Empty `href` shows "link to be added". */
  links?: { name: string; href: string; handle?: string }[];
  layout: ProjectLayout;
  media: MediaSlot[];
};
