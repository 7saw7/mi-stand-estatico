import { MetadataRoute } from "next";
import { NAV } from "./config/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codevastudio.com";

  const paths = new Set<string>();

  for (const item of NAV) {
    // ruta principal del item
    paths.add(item.href);

    // sub-items de grupos (si existen)
    if ("groups" in item && item.groups) {
      for (const group of item.groups) {
        for (const leaf of group.items) {
          paths.add(leaf.href);
        }
      }
    }
  }

  const now = new Date();

  // construimos las URLs completas
  return Array.from(paths).map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
