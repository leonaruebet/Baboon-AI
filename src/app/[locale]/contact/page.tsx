"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Headphones, MapPin, Clock, ArrowRight, MessageCircle, Send } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import type { Dictionary } from "@/types/dictionary";

/** Google Form configuration */
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSflywmYig852Q-YZOeC7QOnobo6CDQzBBEB6yTvK7l0B_Ro1Q/formResponse";
const FORM_ENTRIES = {
  fullName: "entry.99221962",
  phone: "entry.176265763",
  email: "entry.559688691",
  businessName: "entry.1434993549",
  businessType: "entry.768310529",
  budget: "entry.1347493617",
  serviceInterest: "entry.899412047",
};

/**
 * Contact Us Page Component
 *
 * Renders the contact us page with custom styled form submitting to Google Forms.
 * Uses client-side rendering for dictionary loading.
 *
 * @param params - Route parameters containing the locale
 * @returns JSX element for the contact us page
 */
export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const [locale, setLocale] = useState<string>("en");
  const [dict, setDict] = useState<Dictionary | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    console.log("[ContactPage] Initializing Contact Us page");
    const loadData = async () => {
      const { locale: loc } = await params;
      setLocale(loc);
      const { getDictionaryClient } = await import("@/lib/get-dictionary-client");
      const dictionary = await getDictionaryClient(loc as "en" | "th");
      setDict(dictionary);
    };
    loadData();
  }, [params]);

  /**
   * Handles form submission to Google Forms
   * Uses fetch to submit via POST, shows success message on completion
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[ContactPage] Submitting form to Google Forms");
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      console.log("[ContactPage] Form submission successful");
      setSubmitStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("[ContactPage] Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!dict) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-foreground/60">Loading...</div>
      </main>
    );
  }

  const contactUs = dict.contactUs;

  const contactInfoItems = [
    { icon: <Mail className="w-5 h-5" />, label: contactUs.info.email.label, value: contactUs.info.email.value, href: `mailto:${contactUs.info.email.value}` },
    { icon: <Headphones className="w-5 h-5" />, label: contactUs.info.support.label, value: contactUs.info.support.value, href: `mailto:${contactUs.info.support.value}` },
    { icon: <MessageCircle className="w-5 h-5" />, label: contactUs.info.line.label, value: contactUs.info.line.value, href: "https://line.me/R/ti/p/@ireadcustomer", isExternal: true },
    { icon: <MapPin className="w-5 h-5" />, label: contactUs.info.address.label, value: contactUs.info.address.value },
    { icon: <Clock className="w-5 h-5" />, label: contactUs.info.hours.label, value: contactUs.info.hours.value },
  ];

  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 transition-colors duration-500">
      <Header locale={locale} dict={dict.navigation} />

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {contactUs.title}
          </h1>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto">
            {contactUs.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form - Custom styled form submitting to Google Forms */}
            <div className="lg:col-span-3">
              <div className="p-8 bg-white rounded-3xl border border-foreground/5 shadow-xl shadow-black/5">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {/* Hidden field for Service Interest (auto-filled with baboon_ai) */}
                  <input type="hidden" name={FORM_ENTRIES.serviceInterest} value="baboon_ai" />

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                      {contactUs.form.fullName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name={FORM_ENTRIES.fullName}
                      required
                      placeholder={contactUs.form.fullNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    />
                  </div>

                  {/* Phone and Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {contactUs.form.phone} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name={FORM_ENTRIES.phone}
                        required
                        placeholder={contactUs.form.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {contactUs.form.email} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name={FORM_ENTRIES.email}
                        required
                        placeholder={contactUs.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-foreground mb-2">
                      {contactUs.form.businessName}
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name={FORM_ENTRIES.businessName}
                      placeholder={contactUs.form.businessNamePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                    />
                  </div>

                  {/* Business Type and Budget row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Business Type */}
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium text-foreground mb-2">
                        {contactUs.form.businessType}
                      </label>
                      <input
                        type="text"
                        id="businessType"
                        name={FORM_ENTRIES.businessType}
                        placeholder={contactUs.form.businessTypePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      />
                    </div>

                    {/* Budget */}
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        {contactUs.form.budget}
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name={FORM_ENTRIES.budget}
                        placeholder={contactUs.form.budgetPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-foreground/[0.02] text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl py-6 font-semibold text-base gap-2"
                  >
                    {isSubmitting ? (
                      contactUs.form.sending
                    ) : (
                      <>
                        {contactUs.form.submit}
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <p className="text-green-600 text-sm text-center bg-green-50 p-3 rounded-xl">
                      {contactUs.form.success}
                    </p>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-xl">
                      {contactUs.form.error}
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Info Card */}
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {contactUs.info.title}
                </h3>
                <div className="space-y-4">
                  {contactInfoItems.map((item, index) => {
                    const content = (
                      <>
                        <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/10 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm text-foreground/50">{item.label}</p>
                          <p className="text-foreground font-medium group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                      </>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={index}
                          href={item.href}
                          target={item.isExternal ? "_blank" : undefined}
                          rel={item.isExternal ? "noopener noreferrer" : undefined}
                          className="flex items-start gap-3 group cursor-pointer"
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div key={index} className="flex items-start gap-3 group">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add LINE Button Card */}
              <div className="p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg shadow-green-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {locale === "th" ? "เพิ่มเพื่อนทาง LINE" : "Add us on LINE"}
                    </h3>
                    <p className="text-white/80 text-sm">@ireadcustomer</p>
                  </div>
                </div>
                <a
                  href="https://line.me/R/ti/p/@ireadcustomer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-green-600 font-semibold hover:bg-green-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {locale === "th" ? "เพิ่มเพื่อน LINE" : "Add LINE Friend"}
                </a>
              </div>

              {/* FAQ Link Card */}
              <div className="p-6 bg-white rounded-2xl border border-foreground/5 shadow-lg shadow-black/5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {contactUs.faq.title}
                </h3>
                <p className="text-foreground/60 text-sm mb-4">
                  {contactUs.faq.description}
                </p>
                <Link
                  href={`/${locale}/#faqs`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  {contactUs.faq.link}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} dict={dict.footer} />
    </main>
  );
}
