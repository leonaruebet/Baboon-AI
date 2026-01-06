"use client";

import { Sparkles, Zap, Star } from "lucide-react";

export function Slogan({ locale, dict }: { locale: string; dict: any }) {
    return (
        <section
            className="py-24 px-6 relative overflow-hidden bg-primary cursor-monkey"
            style={{ cursor: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><text y='70' font-size='50'>🐵❤️</text></svg>") 50 50, auto` }}
        >
            {/* Floating decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top left */}
                <div
                    className="absolute top-8 left-[10%] text-white/20"
                    style={{ animation: "float-slow 6s ease-in-out infinite" }}
                >
                    <Star className="w-6 h-6" fill="currentColor" />
                </div>
                {/* Top right */}
                <div
                    className="absolute top-12 right-[15%] text-white/30"
                    style={{ animation: "float-slow 5s ease-in-out infinite 1s" }}
                >
                    <Zap className="w-8 h-8" />
                </div>
                {/* Bottom left */}
                <div
                    className="absolute bottom-10 left-[20%] text-white/25"
                    style={{ animation: "float-slow 7s ease-in-out infinite 0.5s" }}
                >
                    <Sparkles className="w-7 h-7" />
                </div>
                {/* Bottom right */}
                <div
                    className="absolute bottom-8 right-[10%] text-white/20"
                    style={{ animation: "float-slow 6s ease-in-out infinite 2s" }}
                >
                    <Star className="w-5 h-5" fill="currentColor" />
                </div>
                {/* Center decorations */}
                <div
                    className="absolute top-1/2 left-[5%] -translate-y-1/2"
                    style={{ animation: "pulse-glow 3s ease-in-out infinite" }}
                >
                    <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
                <div
                    className="absolute top-1/2 right-[5%] -translate-y-1/2"
                    style={{ animation: "pulse-glow 3s ease-in-out infinite 1.5s" }}
                >
                    <div className="w-4 h-4 rounded-full bg-white/30" />
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex flex-col items-center gap-6">
                    {/* Animated sparkle icons */}
                    <div className="flex items-center gap-4">
                        <Zap
                            className="w-8 h-8 md:w-10 md:h-10 text-white"
                            style={{ animation: "bounce-rotate 2s ease-in-out infinite" }}
                        />
                        <Sparkles
                            className="w-6 h-6 md:w-8 md:h-8 text-white/70"
                            style={{ animation: "sparkle-pulse 1.5s ease-in-out infinite 0.3s" }}
                        />
                    </div>

                    {/* Main slogan text with slot machine effect */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-normal">
                        <span>{dict.staticText} </span>
                        <span className="relative inline-block overflow-hidden h-[1.5em] align-middle bg-white/20 rounded-lg px-3">
                            <span
                                className="flex flex-col items-center"
                                style={{ animation: "slot-machine 10s ease-in-out infinite" }}
                            >
                                {dict.rotatingWords?.map((word: string, i: number) => (
                                    <span key={i} className="h-[1.5em] leading-[1.5em] text-white font-extrabold italic flex items-center justify-center whitespace-nowrap">
                                        {word}
                                    </span>
                                ))}
                            </span>
                        </span>
                    </h2>

                    {/* Animated underline */}
                    <div className="relative w-48 h-1 rounded-full overflow-hidden bg-white/20">
                        <div
                            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
                            style={{ animation: "slide-right 2s ease-in-out infinite" }}
                        />
                    </div>

                    {/* Bottom sparkles */}
                    <div className="flex items-center gap-4">
                        <Sparkles
                            className="w-6 h-6 md:w-8 md:h-8 text-white/70"
                            style={{ animation: "sparkle-pulse 1.5s ease-in-out infinite 0.6s" }}
                        />
                        <Zap
                            className="w-8 h-8 md:w-10 md:h-10 text-white"
                            style={{ animation: "bounce-rotate 2s ease-in-out infinite 1s" }}
                        />
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
                @keyframes float-slow {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(10deg);
                    }
                }
                @keyframes bounce-rotate {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-8px) rotate(-10deg);
                    }
                    75% {
                        transform: translateY(-4px) rotate(10deg);
                    }
                }
                @keyframes sparkle-pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.7;
                    }
                    50% {
                        transform: scale(1.2);
                        opacity: 1;
                    }
                }
                @keyframes pulse-glow {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 0.3;
                    }
                    50% {
                        transform: scale(1.5);
                        opacity: 0.6;
                    }
                }
                @keyframes slot-machine {
                    0%, 16% {
                        transform: translateY(0);
                    }
                    20%, 36% {
                        transform: translateY(-1.5em);
                    }
                    40%, 56% {
                        transform: translateY(-3em);
                    }
                    60%, 76% {
                        transform: translateY(-4.5em);
                    }
                    80%, 96% {
                        transform: translateY(-6em);
                    }
                    100% {
                        transform: translateY(0);
                    }
                }
                @keyframes slide-right {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(300%);
                    }
                }
            `}</style>
        </section>
    );
}
