"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

import type { NavigationDict } from "@/types/dictionary";

export function Header({ locale, dict }: { locale: string; dict: NavigationDict }) {
    const pathname = usePathname();
    const otherLocale = locale === "th" ? "en" : "th";

    // Get the path without the locale prefix for language switching
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

    const navigation = [
        { name: dict.pricing, href: "/pricing" },
        { name: dict.faqs, href: "/#faqs" },
        { name: dict.aboutUs, href: "/about" },
        { name: dict.contactUs, href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <nav className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full shadow-xl shadow-black/5">
                <Link href={`/${locale}`} className="px-3 py-1 font-bold text-xl tracking-tight text-primary">
                    🐵
                </Link>
                <div className="hidden md:flex items-center gap-1 mx-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={`/${locale}${item.href}`}
                            className={cn(
                                "px-4 py-1.5 text-sm font-medium transition-colors rounded-full hover:bg-primary/5",
                                pathname.includes(item.href) ? "bg-primary/5 text-primary" : "text-foreground/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* Language Toggle */}
                <Link
                    href={`/${otherLocale}${pathWithoutLocale}`}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-foreground/60 hover:text-primary hover:bg-primary/5 rounded-full transition-colors"
                    title={locale === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"}
                >
                    <Globe className="w-4 h-4" />
                    <span className="uppercase">{otherLocale}</span>
                </Link>
                <Button variant="default" size="sm" className="rounded-full px-6 font-semibold bg-primary text-white hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95">
                    {dict.viewPlans}
                </Button>
            </nav>
        </header>
    );
}
