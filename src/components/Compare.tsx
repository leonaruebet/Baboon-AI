"use client";

import { cn } from "@/lib/utils";
import { Check, X, Minus } from "lucide-react";
import { useEffect, useState, useRef } from "react";

/**
 * Props for the Compare component.
 * @property locale - Current locale (e.g., 'th', 'en')
 * @property dict - Dictionary object containing localized strings
 */
interface CompareProps {
    locale: string;
    dict: {
        title: string;
        subtitle: string;
        competitors: {
            baboon: string;
            chatgpt: string;
            calendar: string;
            notion: string;
        };
        features: {
            thai: string;
            memory: string;
            reminders: string;
            summarize: string;
            privacy: string;
            calendar: string;
            voice: string;
        };
    };
}

/**
 * Comparison matrix: [baboon, chatgpt, calendar, notion]
 * Values: true = yes, false = no, "partial" = partial support
 */
type CellValue = boolean | "partial";

const COMPARISON_DATA: { key: string; values: [CellValue, CellValue, CellValue, CellValue] }[] = [
    { key: "thai", values: [true, "partial", false, false] },
    { key: "memory", values: [true, false, false, false] },
    { key: "reminders", values: [true, false, true, true] },
    { key: "summarize", values: [true, true, false, "partial"] },
    { key: "privacy", values: [true, false, false, "partial"] },
    { key: "calendar", values: [true, false, true, true] },
    { key: "voice", values: [true, true, false, false] },
];

/**
 * Renders comparison cell icon based on value.
 */
function CellIcon({ value, isAnimated, delay }: { value: CellValue; isAnimated: boolean; delay: number }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isAnimated) {
            const timer = setTimeout(() => setShow(true), delay);
            return () => clearTimeout(timer);
        }
    }, [isAnimated, delay]);

    const baseClass = cn(
        "transition-all duration-300",
        show ? "opacity-100 scale-100" : "opacity-0 scale-75"
    );

    if (value === true) {
        return (
            <div className={cn(baseClass, "text-emerald-500")}>
                <Check className="w-5 h-5" strokeWidth={2.5} />
            </div>
        );
    }

    if (value === "partial") {
        return (
            <div className={cn(baseClass, "text-amber-400")}>
                <Minus className="w-5 h-5" strokeWidth={2.5} />
            </div>
        );
    }

    return (
        <div className={cn(baseClass, "text-foreground/20")}>
            <X className="w-5 h-5" strokeWidth={2} />
        </div>
    );
}

/**
 * Clean comparison table component.
 * Compares Baboon vs ChatGPT vs Calendar Apps vs Notion.
 */
export function Compare({ locale, dict }: CompareProps) {
    console.log(`[Compare] Rendering compare section for locale: ${locale}`);

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log("[Compare] Section visible, triggering animations");
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const competitors = [
        { key: "baboon", name: dict.competitors.baboon, highlight: true },
        { key: "chatgpt", name: dict.competitors.chatgpt, highlight: false },
        { key: "calendar", name: dict.competitors.calendar, highlight: false },
        { key: "notion", name: dict.competitors.notion, highlight: false },
    ];

    console.log(`[Compare] Generated ${COMPARISON_DATA.length} comparison rows`);

    return (
        <section ref={sectionRef} id="compare" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div
                    className={cn(
                        "text-center mb-12 transition-all duration-700",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    )}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
                        {dict.title}
                    </h2>
                    <p className="text-base text-foreground/50">
                        {dict.subtitle}
                    </p>
                </div>

                {/* Table */}
                <div
                    className={cn(
                        "overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-700 delay-200",
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-5 border-b border-border/50 bg-muted/30">
                        <div className="p-4 md:p-5" />
                        {competitors.map((comp) => (
                            <div
                                key={comp.key}
                                className={cn(
                                    "p-4 md:p-5 text-center",
                                    comp.highlight && "bg-primary/5"
                                )}
                            >
                                <span
                                    className={cn(
                                        "text-sm md:text-base font-semibold",
                                        comp.highlight ? "text-primary" : "text-foreground/70"
                                    )}
                                >
                                    {comp.highlight && <span className="mr-1">🐵</span>}
                                    {comp.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Table Body */}
                    {COMPARISON_DATA.map((row, rowIndex) => {
                        const featureKey = row.key as keyof typeof dict.features;
                        const rowDelay = 300 + rowIndex * 80;

                        return (
                            <div
                                key={row.key}
                                className={cn(
                                    "grid grid-cols-5 transition-all duration-300 hover:bg-muted/20",
                                    rowIndex !== COMPARISON_DATA.length - 1 && "border-b border-border/30",
                                    isVisible ? "opacity-100" : "opacity-0"
                                )}
                                style={{ transitionDelay: `${rowDelay}ms` }}
                            >
                                {/* Feature name */}
                                <div className="p-4 md:p-5 flex items-center">
                                    <span className="text-sm md:text-base text-foreground/80">
                                        {dict.features[featureKey]}
                                    </span>
                                </div>

                                {/* Values */}
                                {row.values.map((value, colIndex) => (
                                    <div
                                        key={`${row.key}-${colIndex}`}
                                        className={cn(
                                            "p-4 md:p-5 flex items-center justify-center",
                                            colIndex === 0 && "bg-primary/[0.03]"
                                        )}
                                    >
                                        <CellIcon
                                            value={value}
                                            isAnimated={isVisible}
                                            delay={rowDelay + colIndex * 50}
                                        />
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

                {/* Footer note */}
                <div
                    className={cn(
                        "mt-8 text-center transition-all duration-700 delay-700",
                        isVisible ? "opacity-100" : "opacity-0"
                    )}
                >
                    <p className="text-sm text-foreground/40 flex items-center justify-center gap-2">
                        <span>🐵</span>
                        <span>
                            {locale === "th"
                                ? "สร้างมาเพื่อคนไทยโดยเฉพาะ"
                                : "Built specifically for Thai users"
                            }
                        </span>
                        <span>✨</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
