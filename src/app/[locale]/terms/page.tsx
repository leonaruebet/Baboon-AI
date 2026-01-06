import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";

/**
 * Terms of Service page component.
 * Renders the Terms of Service content with Header and Footer.
 *
 * @param params - Route parameters containing the locale
 * @returns JSX element for the terms page
 */
export default async function TermsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    console.log("[TermsPage] Entering component render");

    const { locale } = await params;
    const dict = await getDictionary(locale as "en" | "th");
    const terms = dict.terms;

    console.log("[TermsPage] Loaded dictionary for locale:", locale);

    return (
        <main className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
            <Header locale={locale} dict={dict.navigation} />

            {/* Hero section for terms page */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        {terms.title}
                    </h1>
                    <p className="text-foreground/60 text-lg">
                        {terms.lastUpdated}
                    </p>
                </div>
            </section>

            {/* Terms content */}
            <section className="pb-24 px-6">
                <article className="max-w-3xl mx-auto prose prose-lg prose-neutral">
                    {/* Terms of Use */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
                            {terms.sections.termsOfUse.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed">
                            {terms.sections.termsOfUse.content}
                        </p>
                    </div>

                    {/* User Responsibilities */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
                            {terms.sections.userResponsibilities.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed">
                            {terms.sections.userResponsibilities.content}
                        </p>
                    </div>

                    {/* Service Limitations */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
                            {terms.sections.serviceLimitations.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed">
                            {terms.sections.serviceLimitations.content}
                        </p>
                    </div>

                    {/* Intellectual Property */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
                            {terms.sections.intellectualProperty.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed">
                            {terms.sections.intellectualProperty.content}
                        </p>
                    </div>

                    {/* Termination */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
                            {terms.sections.termination.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed">
                            {terms.sections.termination.content}
                        </p>
                    </div>

                    {/* Changes to Terms */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-foreground mb-4 border-l-4 border-primary pl-4">
                            {terms.sections.changesToTerms.title}
                        </h2>
                        <p className="text-foreground/70 leading-relaxed">
                            {terms.sections.changesToTerms.content}
                        </p>
                    </div>

                    {/* Contact section */}
                    <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            {terms.contact.title}
                        </h3>
                        <p className="text-foreground/70">
                            {terms.contact.content}
                        </p>
                    </div>
                </article>
            </section>

            <Footer locale={locale} dict={dict.footer} />
        </main>
    );
}
