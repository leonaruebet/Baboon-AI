import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://baboon-secretary.com"; // Placeholder
    const locales = ["th", "en"];
    const paths = ["", "/pricing", "/privacy", "/terms"];

    const sitemap: MetadataRoute.Sitemap = [];

    locales.forEach((locale) => {
        paths.forEach((path) => {
            sitemap.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: "weekly",
                priority: path === "" ? 1 : 0.8,
            });
        });
    });

    return sitemap;
}
