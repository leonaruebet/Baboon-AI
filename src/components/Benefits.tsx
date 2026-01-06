"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ListTodo, FileText, Bell, Brain, FolderOpen, Files, FileCheck, Sparkles, CheckCircle, Wallet, TrendingUp, TrendingDown, MessageCircle, Heart, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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
 * Benefits section component displaying benefit cards with visual elements.
 * Uses the same layout pattern as Steps component.
 *
 * @param props - Component props containing locale and dictionary
 * @returns JSX element for the benefits section
 */
export function Benefits({ locale, dict }: BenefitsProps) {
    console.log("[Benefits] Rendering benefits section", { locale, itemCount: dict.items?.length });

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    // Always show right fade for infinite scroll hint
    const showRightFade = true;
    const showLeftFade = false;

    // Auto-scroll effect with seamless infinite loop
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        const scrollSpeed = 0.5;

        const animate = () => {
            if (!isPaused && scrollContainer) {
                scrollContainer.scrollLeft += scrollSpeed;

                // Seamless reset: when halfway (duplicate set), jump back to start
                const halfWidth = scrollContainer.scrollWidth / 2;
                if (scrollContainer.scrollLeft >= halfWidth) {
                    scrollContainer.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    const benefits = [
        {
            title: dict.items[0]?.title,
            description: dict.items[0]?.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="flex flex-col gap-3">
                        {/* Task item */}
                        <div className="bg-background rounded-xl shadow-lg p-3 border border-primary/10 flex items-center gap-3">
                            <ListTodo className="w-5 h-5 text-primary" />
                            <div className="h-2 w-24 bg-primary/20 rounded-full" />
                            <CheckCircle className="w-4 h-4 text-primary/50" />
                        </div>
                        {/* Task item 2 */}
                        <div className="bg-primary/5 rounded-xl shadow-sm p-3 border border-primary/10 flex items-center gap-3">
                            <ListTodo className="w-5 h-5 text-primary/70" />
                            <div className="h-2 w-20 bg-primary/15 rounded-full" />
                        </div>
                        {/* Reminder item */}
                        <div className="bg-background rounded-xl shadow-lg p-3 border border-primary/10 flex items-center gap-3">
                            <Bell className="w-5 h-5 text-primary" />
                            <div className="h-2 w-16 bg-primary/20 rounded-full" />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: dict.items[1]?.title,
            description: dict.items[1]?.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="relative">
                        {/* Note document visualization */}
                        <div className="bg-background rounded-2xl shadow-xl p-5 border border-primary/10">
                            <div className="flex items-center gap-2 mb-3">
                                <FileText className="w-5 h-5 text-primary" />
                                <div className="h-2 w-16 bg-primary/20 rounded-full" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-primary/10 rounded-full" />
                                <div className="h-2 w-3/4 bg-primary/20 rounded-full" />
                                <div className="h-2 w-5/6 bg-primary/10 rounded-full" />
                            </div>
                            {/* Highlight indicator */}
                            <div className="mt-3 flex items-center gap-2">
                                <div className="w-1 h-8 bg-primary rounded-full" />
                                <div className="space-y-1">
                                    <div className="h-2 w-20 bg-primary/30 rounded-full" />
                                    <div className="h-2 w-16 bg-primary/20 rounded-full" />
                                </div>
                            </div>
                        </div>
                        {/* Sparkle decoration */}
                        <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-primary/60" />
                    </div>
                </div>
            ),
        },
        {
            title: dict.items[2]?.title,
            description: dict.items[2]?.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="relative">
                        {/* Document organization visualization */}
                        <div className="flex flex-col gap-2">
                            {/* Main folder */}
                            <div className="bg-background rounded-xl shadow-lg p-3 border border-primary/10 flex items-center gap-3">
                                <FolderOpen className="w-6 h-6 text-primary" />
                                <div className="h-2 w-20 bg-primary/20 rounded-full" />
                            </div>
                            {/* Separated documents */}
                            <div className="flex gap-2 ml-4">
                                <div className="bg-primary/5 rounded-lg shadow-sm p-2 border border-primary/10">
                                    <FileCheck className="w-4 h-4 text-primary/70" />
                                </div>
                                <div className="bg-primary/5 rounded-lg shadow-sm p-2 border border-primary/10">
                                    <Files className="w-4 h-4 text-primary/70" />
                                </div>
                                <div className="bg-primary/5 rounded-lg shadow-sm p-2 border border-primary/10">
                                    <FileText className="w-4 h-4 text-primary/70" />
                                </div>
                            </div>
                        </div>
                        {/* Sparkle decoration */}
                        <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-primary/60" />
                    </div>
                </div>
            ),
        },
        {
            title: dict.items[3]?.title,
            description: dict.items[3]?.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="relative">
                        {/* Brain with learning visualization */}
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-full p-8 border border-primary/20">
                            <Brain className="w-12 h-12 text-primary" />
                        </div>
                        {/* Progress indicators around brain */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary/30" />
                            <div className="w-2 h-2 rounded-full bg-primary/50" />
                            <div className="w-2 h-2 rounded-full bg-primary/70" />
                            <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        {/* Sparkles */}
                        <Sparkles className="absolute -top-1 -left-1 w-4 h-4 text-primary/50" />
                        <Sparkles className="absolute top-2 -right-2 w-5 h-5 text-primary/70" />
                    </div>
                </div>
            ),
        },
        {
            title: dict.items[4]?.title,
            description: dict.items[4]?.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="relative">
                        {/* Wallet with income/expense visualization */}
                        <div className="bg-background rounded-2xl shadow-xl p-5 border border-primary/10">
                            <div className="flex items-center gap-2 mb-3">
                                <Wallet className="w-6 h-6 text-primary" />
                                <div className="h-2 w-14 bg-primary/20 rounded-full" />
                            </div>
                            {/* Income row */}
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="w-4 h-4 text-green-500" />
                                <div className="h-2 w-20 bg-green-500/20 rounded-full" />
                            </div>
                            {/* Expense row */}
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingDown className="w-4 h-4 text-red-400" />
                                <div className="h-2 w-16 bg-red-400/20 rounded-full" />
                            </div>
                            {/* Balance */}
                            <div className="mt-3 pt-2 border-t border-primary/10 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                <div className="h-2 w-12 bg-primary/30 rounded-full" />
                            </div>
                        </div>
                        {/* Sparkle decoration */}
                        <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-primary/60" />
                    </div>
                </div>
            ),
        },
        {
            title: dict.items[5]?.title,
            description: dict.items[5]?.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="relative">
                        {/* Chat/advisor visualization */}
                        <div className="flex flex-col gap-2">
                            {/* User message */}
                            <div className="bg-primary/10 rounded-2xl rounded-br-sm p-3 border border-primary/10 ml-4">
                                <div className="h-2 w-16 bg-primary/20 rounded-full" />
                            </div>
                            {/* Advisor response */}
                            <div className="bg-background rounded-2xl rounded-bl-sm shadow-lg p-3 border border-primary/10 mr-4 flex items-start gap-2">
                                <Heart className="w-4 h-4 text-primary mt-0.5" />
                                <div className="space-y-1">
                                    <div className="h-2 w-20 bg-primary/20 rounded-full" />
                                    <div className="h-2 w-14 bg-primary/10 rounded-full" />
                                </div>
                            </div>
                            {/* Typing indicator */}
                            <div className="bg-primary/5 rounded-xl p-2 border border-primary/10 mr-8 flex items-center gap-1">
                                <MessageCircle className="w-4 h-4 text-primary/50" />
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                </div>
                            </div>
                        </div>
                        {/* Sparkle decoration */}
                        <Sparkles className="absolute -top-2 right-0 w-5 h-5 text-primary/60" />
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section
            id="benefits"
            className="py-32 px-6 bg-primary/[0.02]"
            style={{ cursor: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><text y='70' font-size='40'>🎨🐒</text></svg>") 50 50, auto` }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold tracking-tight text-foreground text-center mb-16">
                    {dict.title}
                </h2>
            </div>
            {/* Scroll container with fade overlays */}
            <div className="relative max-w-7xl mx-auto">
                {/* Left fade overlay */}
                <div
                    className={cn(
                        "absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none transition-opacity duration-300",
                        showLeftFade ? "opacity-100" : "opacity-0"
                    )}
                />

                {/* Scrollable content */}
                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className="overflow-x-auto pb-4 scrollbar-hide"
                >
                    <div className="flex gap-8 w-max px-4">
                        {/* Render benefits twice for seamless infinite loop */}
                        {[...benefits, ...benefits].map((item, i) => (
                            <Card key={i} className="group relative overflow-hidden border-none shadow-none bg-transparent w-[280px] flex-shrink-0">
                                <div className={cn("aspect-square rounded-[3.5rem] bg-white border border-primary/10 shadow-3xl shadow-primary/[0.05] flex flex-col mb-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-4xl group-hover:shadow-primary/10")}>
                                    {item.visual}
                                </div>
                                <div className="px-6">
                                    <h3 className="text-2xl font-bold leading-tight text-foreground mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-foreground/50 text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Right fade overlay with scroll hint */}
                <div
                    className={cn(
                        "absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none transition-opacity duration-300 flex items-center justify-end pr-2",
                        showRightFade ? "opacity-100" : "opacity-0"
                    )}
                >
                    <div className="animate-pulse">
                        <ChevronRight className="w-6 h-6 text-primary/50" />
                    </div>
                </div>
            </div>
        </section>
    );
}
