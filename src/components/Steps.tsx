"use client";

import { cn } from "@/lib/utils";
import { Image, FileText, Receipt, Bell, Brain, Check, Send, Sparkles, Bot, Monitor, Smartphone, Play, MessageSquare, Clock, Calendar, CheckCircle } from "lucide-react";
import { useState } from "react";

/**
 * Steps section with vertical stepper on left and visualization on right.
 * Interactive: clicking a step shows its visualization.
 */
export function Steps({ locale, dict }: { locale: string; dict: any }) {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        {
            label: dict.step1.label,
            title: dict.step1.title,
            description: dict.step1.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-4">
                    <div className="relative scale-110">
                        {/* Desktop Monitor */}
                        <div className="relative">
                            {/* Monitor frame */}
                            <div className="bg-slate-800 rounded-3xl p-4 shadow-2xl">
                                {/* Screen */}
                                <div className="bg-gradient-to-b from-slate-100 to-white rounded-xl w-96 h-60 relative overflow-hidden">
                                    {/* Browser bar */}
                                    <div className="bg-slate-200 px-4 py-2 flex items-center gap-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400">
                                            baboon.ai
                                        </div>
                                    </div>

                                    {/* App content */}
                                    <div className="p-6 flex flex-col items-center justify-center h-[calc(100%-40px)]">
                                        {/* AI Avatar */}
                                        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                                            <Bot className="w-12 h-12 text-primary" />
                                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
                                        </div>

                                        {/* Welcome text */}
                                        <div className="text-base font-semibold text-slate-700 mb-4">Baboon AI</div>

                                        {/* Start button */}
                                        <div className="bg-primary rounded-xl py-3 px-8 flex items-center gap-2 shadow-lg relative">
                                            <Play className="w-5 h-5 text-white" />
                                            <span className="text-white font-semibold text-base">
                                                {dict.step1.getStarted}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Animated cursor */}
                                    <div className="absolute bottom-12 right-20 animate-bounce">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                                            <path d="M5 3L19 12L12 13L9 20L5 3Z" fill="white" stroke="black" strokeWidth="1.5"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Monitor stand */}
                            <div className="flex flex-col items-center">
                                <div className="w-8 h-8 bg-slate-700 rounded-b" />
                                <div className="w-24 h-3 bg-slate-800 rounded-full" />
                            </div>
                        </div>

                        {/* Sparkles around monitor */}
                        <Sparkles className="absolute -top-3 -left-3 w-6 h-6 text-primary/60 animate-pulse" />
                        <Sparkles className="absolute -top-2 -right-4 w-8 h-8 text-primary/80 animate-pulse" />
                        <Sparkles className="absolute bottom-12 -left-6 w-5 h-5 text-primary/50 animate-pulse" />
                    </div>
                </div>
            ),
        },
        {
            label: dict.step2.label,
            title: dict.step2.title,
            description: dict.step2.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="space-y-4 w-full max-w-md">
                        {/* User sends file - light blue color */}
                        <div className="flex items-start gap-3 justify-end">
                            <div className="bg-sky-400 rounded-2xl rounded-tr-sm p-3 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <Receipt className="w-5 h-5 text-white" />
                                    <span className="text-sm font-medium text-white">
                                        {dict.step2.userMessage}
                                    </span>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold text-white">
                                    {dict.common.you}
                                </span>
                            </div>
                        </div>

                        {/* AI asks follow-up questions - white/orange */}
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div className="bg-white/95 backdrop-blur rounded-2xl rounded-tl-sm p-4 shadow-lg border border-primary/20 space-y-3">
                                <div className="flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium text-primary">
                                        {dict.step2.clarifying}
                                    </span>
                                </div>
                                {/* Question 1 */}
                                <div className="bg-primary/10 rounded-lg p-2 text-sm text-primary">
                                    {dict.step2.question1}
                                </div>
                                {/* Question 2 */}
                                <div className="bg-primary/10 rounded-lg p-2 text-sm text-primary">
                                    {dict.step2.question2}
                                </div>
                                {/* Confirm button */}
                                <div className="flex gap-2">
                                    <div className="bg-primary rounded-lg py-1.5 px-3 flex items-center gap-1">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                        <span className="text-xs text-white font-medium">
                                            {dict.common.yes}
                                        </span>
                                    </div>
                                    <div className="bg-primary/20 rounded-lg py-1.5 px-3">
                                        <span className="text-xs text-primary font-medium">
                                            {dict.common.edit}
                                        </span>
                                    </div>
                                </div>
                            </div>
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
                <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="space-y-4 w-full max-w-md">
                        {/* User asks for reminder - light blue color */}
                        <div className="flex items-start gap-3 justify-end">
                            <div className="bg-sky-400 rounded-2xl rounded-tr-sm p-3 shadow-lg">
                                <span className="text-sm font-medium text-white">
                                    {dict.step3.userMessage}
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                                <span className="text-xs font-bold text-white">
                                    {dict.common.you}
                                </span>
                            </div>
                        </div>

                        {/* AI confirms reminder setup - white/orange */}
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <div className="bg-white/95 backdrop-blur rounded-2xl rounded-tl-sm p-4 shadow-lg border border-primary/20 space-y-3">
                                <div className="flex items-center gap-2">
                                    <Bell className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-bold text-primary">
                                        {dict.step3.reminderSet}
                                    </span>
                                </div>
                                {/* Reminder details */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <Calendar className="w-4 h-4 text-primary/70" />
                                        <span>{dict.step3.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <Clock className="w-4 h-4 text-primary/70" />
                                        <span>{dict.step3.time}</span>
                                    </div>
                                </div>
                                {/* Success indicator */}
                                <div className="bg-primary/10 rounded-lg p-2 flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-primary" />
                                    <span className="text-xs text-primary">
                                        {dict.step3.task}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            label: dict.step4.label,
            title: dict.step4.title,
            description: dict.step4.description,
            visual: (
                <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="space-y-5 w-full max-w-lg">
                        {/* Baboon processing */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg border border-primary/20">
                                    <Bot className="w-8 h-8 text-primary" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                    <Brain className="w-3 h-3 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Output cards - 3 columns */}
                        <div className="grid grid-cols-3 gap-4">
                            {/* Summary card */}
                            <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border border-primary/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <FileText className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-bold text-primary">
                                        {dict.common.summary}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-primary/10 rounded-lg px-2 py-1">
                                        <span className="text-xs text-primary">{dict.step4.summaryExample1}</span>
                                    </div>
                                    <div className="bg-primary/10 rounded-lg px-2 py-1">
                                        <span className="text-xs text-primary">{dict.step4.summaryExample2}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Categorized card */}
                            <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border border-primary/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <Receipt className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-bold text-primary">
                                        {dict.common.categorized}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                        <span className="text-xs text-primary">{dict.step4.categoryExample1}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                                        <span className="text-xs text-primary/70">{dict.step4.categoryExample2}</span>
                                    </div>
                                </div>
                            </div>
                            {/* Reminder card */}
                            <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border border-primary/20">
                                <div className="flex items-center gap-2 mb-3">
                                    <Bell className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-bold text-primary">
                                        {dict.common.remind}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-primary/70" />
                                        <span className="text-xs text-primary">{dict.step4.remindExample1}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-primary/50" />
                                        <span className="text-xs text-primary/70">{dict.step4.remindExample2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Auto badge */}
                        <div className="flex justify-center">
                            <span className="bg-primary px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                {dict.common.automatic}
                            </span>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="process" className="py-32 px-6 lg:px-12 bg-primary/[0.02]">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">
                        {dict.sectionTitle}
                    </h2>
                    <p className="text-foreground/50 mt-4">
                        {dict.sectionSubtitle}
                    </p>
                </div>

                {/* Main content: Stepper + Visualization */}
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
                    {/* Left: Vertical Stepper */}
                    <div className="p-4">
                        <div className="relative">
                            {/* Steps */}
                            <div className="space-y-0">
                                {steps.map((step, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveStep(i)}
                                        className={cn(
                                            "relative flex items-start gap-4 w-full text-left p-4 rounded-2xl transition-all duration-300",
                                            activeStep === i
                                                ? "bg-primary/10"
                                                : "hover:bg-primary/5"
                                        )}
                                    >
                                        {/* Step indicator with connecting line */}
                                        <div className="relative flex-shrink-0">
                                            {/* Connecting line to next step */}
                                            {i < steps.length - 1 && (
                                                <div className="absolute left-1/2 top-8 w-0.5 h-[calc(100%+1rem)] -translate-x-1/2 bg-primary/20" />
                                            )}
                                            {/* Circle indicator */}
                                            <div
                                                className={cn(
                                                    "relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300",
                                                    i < activeStep
                                                        ? "bg-primary text-white"
                                                        : i === activeStep
                                                        ? "bg-primary text-white ring-4 ring-primary/20"
                                                        : "bg-white border-2 border-primary/30 text-primary/50"
                                                )}
                                            >
                                                {i < activeStep ? (
                                                    <Check className="w-4 h-4" />
                                                ) : (
                                                    i + 1
                                                )}
                                            </div>
                                        </div>

                                        {/* Step content */}
                                        <div className="flex-1 min-w-0 pt-1">
                                            <h3
                                                className={cn(
                                                    "font-bold text-base leading-tight mb-1 transition-colors duration-300",
                                                    activeStep === i
                                                        ? "text-primary"
                                                        : "text-foreground"
                                                )}
                                            >
                                                {step.title}
                                            </h3>
                                            <p className="text-foreground/50 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Visualization Area with Light Orange Gradient */}
                    <div className="relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-orange-100 via-orange-200/80 to-primary/20">
                        {/* Active step visualization */}
                        <div className="w-full h-full">
                            {steps[activeStep].visual}
                        </div>

                        {/* Step label badge */}
                        <div className="absolute bottom-6 left-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full text-sm font-medium text-primary shadow-lg">
                                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    {activeStep + 1}
                                </span>
                                {steps[activeStep].label}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
