"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Bot } from "lucide-react";

export function Hero({ locale, dict }: { locale: string; dict: any }) {
    return (
        <section id="start" className="relative pt-40 pb-20 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Badge - centered */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-xs font-medium border border-primary/10">
                        <Badge className="bg-primary text-white px-2 py-0 border-none rounded-full text-[10px]">{dict.badge}</Badge>
                        <span className="text-primary/80">{dict.badgeText}</span>
                        <span className="text-primary/60">›</span>
                    </div>
                </div>

                {/* Main content - Baboon on left, Text on right */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-12">
                    {/* Animated Baboon Mascot */}
                    <div className="relative flex-shrink-0">
                        {/* Main baboon with floating animation */}
                        <div
                            className="text-7xl md:text-8xl lg:text-9xl select-none cursor-pointer transition-transform hover:scale-110"
                            style={{
                                animation: "float 3s ease-in-out infinite",
                                transformStyle: "preserve-3d",
                                perspective: "1000px",
                            }}
                        >
                            🐵
                        </div>
                        {/* Shadow that animates with the baboon */}
                        <div
                            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/10 rounded-full blur-sm"
                            style={{
                                animation: "shadow-pulse 3s ease-in-out infinite",
                            }}
                        />
                        {/* Sparkle effects */}
                        <div
                            className="absolute -top-2 -right-2 text-2xl"
                            style={{ animation: "sparkle 2s ease-in-out infinite" }}
                        >
                            ✨
                        </div>
                        <div
                            className="absolute top-4 -left-4 text-xl"
                            style={{ animation: "sparkle 2s ease-in-out infinite 0.5s" }}
                        >
                            ⭐
                        </div>
                    </div>

                    {/* Title and subtitle */}
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground">
                            {dict.title.split("|").map((part: string, i: number) => (
                                <span key={i} className={i === 1 ? "text-primary block" : ""}>
                                    {part}
                                </span>
                            ))}
                        </h1>

                        <p className="max-w-xl text-lg text-foreground/60 leading-relaxed">
                            {dict.subtitle}
                        </p>
                    </div>
                </div>

                {/* CTA Buttons - centered */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="rounded-full px-8 bg-primary text-white hover:bg-primary/90 h-14 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/30 active:translate-y-0 gap-2">
                        <Bot className="w-5 h-5" />
                        {dict.ctaPrimary}
                    </Button>
                    <Button variant="ghost" size="lg" className="rounded-full px-8 h-14 text-base font-semibold gap-2 border border-primary/10 hover:bg-primary/5 text-primary/80">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Play size={10} fill="currentColor" className="text-primary" />
                        </div>
                        {dict.ctaSecondary}
                    </Button>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

            {/* CSS Keyframe Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotateY(0deg) rotateX(0deg);
                    }
                    25% {
                        transform: translateY(-15px) rotateY(5deg) rotateX(5deg);
                    }
                    50% {
                        transform: translateY(-20px) rotateY(0deg) rotateX(0deg);
                    }
                    75% {
                        transform: translateY(-15px) rotateY(-5deg) rotateX(-5deg);
                    }
                }
                @keyframes wiggle {
                    0%, 100% {
                        transform: rotate(0deg);
                    }
                    25% {
                        transform: rotate(3deg);
                    }
                    75% {
                        transform: rotate(-3deg);
                    }
                }
                @keyframes shadow-pulse {
                    0%, 100% {
                        transform: translateX(-50%) scaleX(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateX(-50%) scaleX(0.7);
                        opacity: 0.15;
                    }
                }
                @keyframes sparkle {
                    0%, 100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(0.8);
                    }
                }
            `}</style>
        </section>
    );
}
