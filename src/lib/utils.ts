import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge class names, letting later Tailwind classes override earlier ones. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 1 → "01" */
export const pad2 = (n: number) => String(n).padStart(2, "0");

/**
 * Resolve a /public path (e.g. "/media/x.webp") against the site's base URL,
 * so the site works both at a domain root and under a sub-path.
 */
export function asset(path: string | undefined) {
  if (!path || /^(https?:)?\/\//.test(path)) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
