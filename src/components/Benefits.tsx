"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ListTodo, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Icons mapped to benefit items by index.
 * Order: To-do + Reminders, Note Summarizer, Memory Profile
 */
const BENEFIT_ICONS = [ListTodo, CheckCircle, Brain] as const;

/**
 * Props for the Benefits component.
 * @param locale - Current locale string (e.g., "en", "th")
 * @param dict - Dictionary object containing title and items array
 */
interface BenefitsProps {
    locale: string;
    dict: {
        title: string;
        items: Array<{
            title: string;
            description: string;
        }>;
    };
}

/**
 * Benefits section component displaying three benefit cards.
 * Features glassmorphism design with orange primary accents.
 *
 * @param props - Component props containing locale and dictionary
 * @returns JSX element for the benefits section
 */
export function Benefits({ locale, dict }: BenefitsProps) {
    console.log("[Benefits] Rendering benefits section", { locale, itemCount: dict.items?.length });

    return (
        <section id="benefits" className="py-32 px-6 bg-primary/[0.02]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge
                        variant="outline"
                        className="mb-4 rounded-full px-4 border-primary/20 text-primary uppercase tracking-widest text-[10px] font-bold"
                    >
                        Benefits
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">
                        {dict.title}
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dict.items.map((item, index) => {
                        const IconComponent = BENEFIT_ICONS[index] || CheckCircle;

                        return (
                            <Card
                                key={index}
                                className={cn(
                                    "group relative overflow-hidden",
                                    "border border-primary/10 rounded-3xl",
                                    "bg-white/80 backdrop-blur-sm",
                                    "shadow-xl shadow-primary/[0.05]",
                                    "transition-all duration-500",
                                    "hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10",
                                    "hover:border-primary/20"
                                )}
                            >
                                <CardContent className="p-8">
                                    {/* Icon Container */}
                                    <div
                                        className={cn(
                                            "w-14 h-14 rounded-2xl mb-6",
                                            "bg-primary/10 flex items-center justify-center",
                                            "transition-all duration-300",
                                            "group-hover:bg-primary/20 group-hover:scale-110"
                                        )}
                                    >
                                        <IconComponent
                                            className="w-7 h-7 text-primary"
                                            strokeWidth={1.5}
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/50 text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
