/**
 * Client-safe dictionary loader
 * Use this in client components instead of get-dictionary.ts
 *
 * @param locale - The locale to load (en or th)
 * @returns Promise resolving to the dictionary object
 */

const dictionaries = {
    en: () => import("../dictionaries/en.json").then((module) => module.default),
    th: () => import("../dictionaries/th.json").then((module) => module.default),
};

export const getDictionaryClient = async (locale: "en" | "th") =>
    dictionaries[locale]();
