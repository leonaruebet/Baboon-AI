import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Slogan } from "@/components/Slogan";
import { Steps } from "@/components/Steps";
import { Compare } from "@/components/Compare";
import { WhyUs } from "@/components/WhyUs";
import { Trust } from "@/components/Trust";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "th");

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
      <Header locale={locale} dict={dict.navigation} />
      <Hero dict={dict.hero} />
      <Benefits locale={locale} dict={dict.benefits} />
      <Slogan dict={dict.slogan} />
      <Steps dict={dict.steps} />
      <Compare locale={locale} dict={dict.compare} />
      <WhyUs dict={dict.whyUs} />
      <Trust dict={dict.trust} />
      <FAQ dict={dict.faq} />
      <Footer locale={locale} dict={dict.footer} />
    </main>
  );
}
