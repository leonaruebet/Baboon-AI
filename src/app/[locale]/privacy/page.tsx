import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";

/**
 * Privacy Policy Page Component
 *
 * Renders the privacy policy page with localized content.
 * Follows the Next.js App Router pattern with locale parameter.
 *
 * @param params - Route parameters containing the locale
 * @returns JSX element for the privacy policy page
 */
export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "th");
  const privacy = dict.privacy;

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
      <Header locale={locale} dict={dict.navigation} />

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {privacy.title}
          </h1>
          <p className="text-foreground/60 text-lg">
            {privacy.lastUpdated}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg prose-neutral max-w-none">

            {/* Introduction */}
            <div className="mb-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-foreground/80 leading-relaxed m-0">
                {privacy.introduction}
              </p>
            </div>

            {/* Data Collection Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">1</span>
                {privacy.dataCollection.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {privacy.dataCollection.description}
              </p>
              <ul className="space-y-2 text-foreground/70">
                {privacy.dataCollection.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* How We Use Your Data Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">2</span>
                {privacy.dataUsage.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {privacy.dataUsage.description}
              </p>
              <ul className="space-y-2 text-foreground/70">
                {privacy.dataUsage.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Data Security Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">3</span>
                {privacy.dataSecurity.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {privacy.dataSecurity.description}
              </p>
              <ul className="space-y-2 text-foreground/70">
                {privacy.dataSecurity.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Your Rights Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">4</span>
                {privacy.yourRights.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {privacy.yourRights.description}
              </p>
              <ul className="space-y-2 text-foreground/70">
                {privacy.yourRights.items.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact Us Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">5</span>
                {privacy.contact.title}
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                {privacy.contact.description}
              </p>
              <div className="p-6 bg-foreground/5 rounded-2xl border border-foreground/10">
                <p className="text-foreground/80 font-medium mb-2">{privacy.contact.email}</p>
                <p className="text-foreground/60 text-sm">{privacy.contact.address}</p>
              </div>
            </section>

          </article>
        </div>
      </section>

      <Footer locale={locale} dict={dict.footer} />
    </main>
  );
}
