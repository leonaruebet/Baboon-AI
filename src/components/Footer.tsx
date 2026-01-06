"use client";

import Link from "next/link";

export function Footer({ locale, dict }: { locale: string; dict: any }) {
    return (
        <footer className="py-20 px-6 border-t border-primary/5 bg-background">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 font-medium">
                <div className="col-span-1 md:col-span-1">
                    <Link href={`/${locale}`} className="font-bold text-2xl tracking-tighter mb-4 block text-primary">
                        🐵
                    </Link>
                    <p className="text-sm text-foreground/60 leading-relaxed">
                        {dict.description}
                    </p>
                    <a
                        href="https://ireadcustomer.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-foreground/50 hover:text-primary mt-4 block transition-colors"
                    >
                        Created by iReadCustomer
                    </a>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-6">{locale === "th" ? "ผลิตภัณฑ์" : "Product"}</h3>
                    <ul className="space-y-4 text-sm text-foreground/70 transition-colors">
                        <li><Link href={`/${locale}/#features`} className="hover:text-primary">Features</Link></li>
                        <li><Link href={`/${locale}/pricing`} className="hover:text-primary">Pricing</Link></li>
                        <li><Link href={`/${locale}/#process`} className="hover:text-primary">Process</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-6">{locale === "th" ? "บริษัท" : "Company"}</h3>
                    <ul className="space-y-4 text-sm text-foreground/70 transition-colors">
                        <li><Link href={`/${locale}/privacy`} className="hover:text-primary">Privacy</Link></li>
                        <li><Link href={`/${locale}/terms`} className="hover:text-primary">Terms</Link></li>
                        <li><Link href={`/${locale}/blog`} className="hover:text-primary">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-6">{locale === "th" ? "ภาษา" : "Language"}</h3>
                    <div className="flex gap-4 text-sm">
                        <Link href="/th" className={cn(locale === "th" ? "text-primary font-bold" : "text-foreground/60 hover:text-primary")}>ภาษาไทย</Link>
                        <Link href="/en" className={cn(locale === "en" ? "text-primary font-bold" : "text-foreground/60 hover:text-primary")}>English</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-foreground/50">
                <span>{dict.rights}</span>
                <a
                    href="https://ireadcustomer.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                >
                    Powered by iReadCustomer
                </a>
                <span>BANGKOK, THAILAND</span>
            </div>
        </footer>
    );
}

import { cn } from "@/lib/utils";
