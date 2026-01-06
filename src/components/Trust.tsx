"use client";

import { Quote, User } from "lucide-react";

export function Trust({ locale, dict }: { locale: string; dict: any }) {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="bg-primary/5 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden border border-primary/10">
                    <Quote className="absolute top-10 left-10 text-primary/20 w-20 h-20 -rotate-12" />
                    <div className="relative z-10">
                        <p className="text-2xl md:text-4xl font-medium tracking-tight text-foreground leading-tight mb-10 italic">
                            &quot;{dict.quote}&quot;
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-primary/10 mb-4 border-2 border-white shadow-xl flex items-center justify-center">
                                <User className="w-8 h-8 text-primary" />
                            </div>
                            <div className="font-bold text-foreground">{dict.author}</div>
                            <div className="text-sm text-foreground/50 font-bold uppercase tracking-widest">{dict.role}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
