import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";

/**
 * Pricing page component for Baboon Secretary landing page.
 * Displays three pricing tiers: Free, Pro, and Enterprise.
 *
 * @param params - Route parameters containing the locale
 * @returns The rendered pricing page
 */
export default async function PricingPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    console.log("[PricingPage] Starting render");

    const { locale } = await params;
    const dict = await getDictionary(locale as "en" | "th");

    console.log("[PricingPage] Dictionary loaded for locale:", locale);

    const pricing_dict = dict.pricing;

    return (
        <main className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
            <Header locale={locale} dict={dict.navigation} />

            {/* Pricing Hero Section */}
            <section className="relative pt-40 pb-16 px-6 overflow-hidden">
                <div className="max-w-5xl mx-auto text-center">
                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
                        {pricing_dict.badge}
                    </Badge>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
                        {pricing_dict.title}
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg text-foreground/60 mb-12">
                        {pricing_dict.subtitle}
                    </p>
                </div>

                {/* Background decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
            </section>

            {/* Pricing Cards Grid */}
            <section className="pb-24 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Free Tier */}
                    <Card className="relative bg-white/80 backdrop-blur-xl border-black/5 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-xl font-bold text-foreground">
                                {pricing_dict.tiers.free.name}
                            </CardTitle>
                            <CardDescription className="text-foreground/60">
                                {pricing_dict.tiers.free.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-foreground">
                                    {pricing_dict.tiers.free.price}
                                </span>
                                <span className="text-foreground/60 ml-2">
                                    {pricing_dict.perMonth}
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {pricing_dict.tiers.free.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                className="w-full rounded-full h-12 font-semibold border-primary/20 text-primary hover:bg-primary/5 transition-all"
                            >
                                {pricing_dict.tiers.free.cta}
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Tier - Highlighted */}
                    <Card className="relative bg-white/80 backdrop-blur-xl border-primary/20 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 ring-2 ring-primary/20">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                            <Badge className="bg-primary text-white border-none px-4 py-1 text-xs font-semibold shadow-lg shadow-primary/30">
                                {pricing_dict.popular}
                            </Badge>
                        </div>
                        <CardHeader className="pb-4 pt-8">
                            <CardTitle className="text-xl font-bold text-foreground">
                                {pricing_dict.tiers.pro.name}
                            </CardTitle>
                            <CardDescription className="text-foreground/60">
                                {pricing_dict.tiers.pro.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-primary">
                                    {pricing_dict.tiers.pro.price}
                                </span>
                                <span className="text-foreground/60 ml-2">
                                    {pricing_dict.perMonth}
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {pricing_dict.tiers.pro.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full rounded-full h-12 font-semibold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                            >
                                {pricing_dict.tiers.pro.cta}
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Enterprise Tier */}
                    <Card className="relative bg-white/80 backdrop-blur-xl border-black/5 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="pb-4">
                            <CardTitle className="text-xl font-bold text-foreground">
                                {pricing_dict.tiers.enterprise.name}
                            </CardTitle>
                            <CardDescription className="text-foreground/60">
                                {pricing_dict.tiers.enterprise.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pb-6">
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-foreground">
                                    {pricing_dict.tiers.enterprise.price}
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {pricing_dict.tiers.enterprise.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} className="text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground/70">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="outline"
                                className="w-full rounded-full h-12 font-semibold border-primary/20 text-primary hover:bg-primary/5 transition-all"
                            >
                                {pricing_dict.tiers.enterprise.cta}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>

            {/* FAQ Note */}
            <section className="pb-24 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-foreground/60">
                        {pricing_dict.questionsNote}{" "}
                        <a href={`/${locale}/#faqs`} className="text-primary hover:underline font-medium">
                            {pricing_dict.faqLink}
                        </a>
                    </p>
                </div>
            </section>

            <Footer locale={locale} dict={dict.footer} />
        </main>
    );
}
