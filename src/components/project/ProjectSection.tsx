import type { ComponentType } from "react";
import type { Project, ProjectLayout } from "@/content/types";
import { Gallery } from "@/components/Lightbox";
import { CampaignLayout } from "./layouts/CampaignLayout";
import { PlaygroundLayout } from "./layouts/PlaygroundLayout";
import { ProductLayout } from "./layouts/ProductLayout";
import { StorybookLayout } from "./layouts/StorybookLayout";
import { SwatchLayout } from "./layouts/SwatchLayout";

const layouts: Record<ProjectLayout, ComponentType<{ p: Project }>> = {
  campaign: CampaignLayout,
  storybook: StorybookLayout,
  playground: PlaygroundLayout,
  product: ProductLayout,
  swatch: SwatchLayout,
};

/** Full-bleed layouts bring their own background and vertical padding. */
const fullBleed: ProjectLayout[] = ["storybook", "playground"];

export function ProjectSection({ project }: { project: Project }) {
  const Layout = layouts[project.layout];

  return (
    <section
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      className={fullBleed.includes(project.layout) ? "" : "py-24 md:py-36"}
    >
      <span id={`${project.id}-title`} className="sr-only">
        {project.number} {project.title}
      </span>
      <Gallery media={project.media}>
        <Layout p={project} />
      </Gallery>
    </section>
  );
}
