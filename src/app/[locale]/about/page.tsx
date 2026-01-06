import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";
import { AboutContent } from "@/components/AboutContent";

/**
 * About Us Page Component
 *
 * Server component that fetches dictionary and renders the AboutContent client component.
 * Features: 3D animations, floating elements, scroll-triggered effects.
 *
 * @param params - Route parameters containing the locale
 * @returns JSX element for the about us page
 */
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  console.log("[AboutPage] Rendering About Us page with 3D animations");
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "th");

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500 overflow-hidden">
      <Header locale={locale} dict={dict.navigation} />
      <AboutContent locale={locale} aboutUs={dict.aboutUs} />
      <Footer locale={locale} dict={dict.footer} />
    </main>
  );
}
