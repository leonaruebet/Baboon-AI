/**
 * Type definitions for i18n dictionaries
 * These types provide type safety for dictionary props across components
 */

/** FAQ item structure */
export interface FAQItem {
  question: string;
  answer: string;
}

/** FAQ dictionary section */
export interface FAQDict {
  badge: string;
  title: string;
  items: FAQItem[];
}

/** Navigation dictionary */
export interface NavigationDict {
  start: string;
  benefits: string;
  process: string;
  compare: string;
  whyUs: string;
  pricing: string;
  faqs: string;
  aboutUs: string;
  contactUs: string;
  viewPlans: string;
}

/** Hero dictionary */
export interface HeroDict {
  badge: string;
  badgeText: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

/** Slogan dictionary */
export interface SloganDict {
  staticText: string;
  rotatingWords: string[];
}

/** Steps dictionary */
export interface StepsDict {
  sectionTitle: string;
  sectionSubtitle: string;
  common: {
    you: string;
    yes: string;
    edit: string;
    automatic: string;
    summary: string;
    categorized: string;
    remind: string;
  };
  step1: {
    label: string;
    title: string;
    description: string;
    getStarted: string;
  };
  step2: {
    label: string;
    title: string;
    description: string;
    userMessage: string;
    clarifying: string;
    question1: string;
    question2: string;
  };
  step3: {
    label: string;
    title: string;
    description: string;
    userMessage: string;
    reminderSet: string;
    date: string;
    time: string;
    task: string;
  };
  step4: {
    label: string;
    title: string;
    description: string;
    summaryExample1: string;
    summaryExample2: string;
    categoryExample1: string;
    categoryExample2: string;
    remindExample1: string;
    remindExample2: string;
  };
}

/** Trust dictionary */
export interface TrustDict {
  quote: string;
  author: string;
  role: string;
  trustedBy: string;
}

/** Footer dictionary */
export interface FooterDict {
  description: string;
  rights: string;
}

/** WhyUs reason item */
export interface WhyUsReason {
  title: string;
  description: string;
}

/** WhyUs dictionary */
export interface WhyUsDict {
  badge: string;
  title: string;
  subtitle: string;
  reasons: WhyUsReason[];
  trustIndicator: string;
}

/** Contact form dictionary */
export interface ContactUsDict {
  title: string;
  subtitle: string;
  form: {
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    businessName: string;
    businessNamePlaceholder: string;
    businessType: string;
    businessTypePlaceholder: string;
    budget: string;
    budgetPlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  info: {
    title: string;
    email: { label: string; value: string };
    support: { label: string; value: string };
    line: { label: string; value: string };
    address: { label: string; value: string };
    hours: { label: string; value: string };
  };
  faq: {
    title: string;
    description: string;
    link: string;
  };
}

/** Full dictionary type */
export interface Dictionary {
  navigation: NavigationDict;
  hero: HeroDict;
  slogan: SloganDict;
  steps: StepsDict;
  faq: FAQDict;
  trust: TrustDict;
  footer: FooterDict;
  whyUs: WhyUsDict;
  contactUs: ContactUsDict;
  [key: string]: unknown;
}
