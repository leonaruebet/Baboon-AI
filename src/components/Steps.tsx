"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { User, ListTodo, FileText, Bell, Brain, Sparkles } from "lucide-react";

export function Steps({ locale, dict }: { locale: string; dict: any }) {
    const steps = [
        {
            label: dict.step1.label,
            title: dict.step1.title,
            description: dict.step1.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="relative">
                        {/* User profile card */}
                        <div className="bg-background rounded-2xl shadow-xl p-5 border border-primary/10 flex flex-col items-center gap-3">
                            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="w-8 h-8 text-primary" />
                            </div>
                            <div className="space-y-2 w-full">
                                <div className="h-2 w-full bg-primary/20 rounded-full" />
                                <div className="h-2 w-3/4 bg-primary/10 rounded-full mx-auto" />
                            </div>
                        </div>
                        {/* Sparkle decoration */}
                        <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-primary/60" />
                    </div>
                </div>
            ),
        },
        {
            label: dict.step2.label,
            title: dict.step2.title,
            description: dict.step2.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-6">
                    <div className="flex flex-col gap-3">
                        {/* Task item */}
                        <div className="bg-background rounded-xl shadow-lg p-3 border border-primary/10 flex items-center gap-3">
                            <ListTodo className="w-5 h-5 text-primary" />
                            <div className="h-2 w-24 bg-primary/20 rounded-full" />
                        </div>
                        {/* Note item */}
                        <div className="bg-primary/5 rounded-xl shadow-sm p-3 border border-primary/10 flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary/70" />
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
            label: dict.step3.label,
            title: dict.step3.title,
            description: dict.step3.description,
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
    ];

    return (
        <section id="process" className="py-32 px-6 bg-primary/[0.02]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {steps.map((item, i) => (
                    <Card key={i} className="group relative overflow-hidden border-none shadow-none bg-transparent">
                        <div className={cn("aspect-square rounded-[3.5rem] bg-white border border-primary/10 shadow-3xl shadow-primary/[0.05] flex flex-col mb-10 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-4xl group-hover:shadow-primary/10")}>
                            {item.visual}
                        </div>
                        <div className="px-6">
                            <span className="text-xs font-bold tracking-widest text-foreground/50 block mb-4 uppercase">
                                {item.label}
                            </span>
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
        </section>
    );
}
