"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import type { FAQDict, FAQItem } from "@/types/dictionary";

export function FAQ({ dict }: { dict: FAQDict }) {
    return (
        <section id="faqs" className="py-24 px-6 bg-background">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 rounded-full px-4 border-primary/20 text-primary uppercase tracking-widest text-[10px] font-bold">
                        {dict.badge}
                    </Badge>
                    <h2 className="text-4xl font-bold tracking-tight text-foreground">
                        {dict.title}
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {dict.items.map((item: FAQItem, i: number) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border border-primary/5 rounded-3xl px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <AccordionTrigger className="text-left py-6 hover:no-underline font-semibold text-foreground/80 hover:text-primary transition-colors">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 text-foreground/50 leading-relaxed">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
