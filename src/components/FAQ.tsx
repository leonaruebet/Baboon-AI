"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqs = [
    {
        q: "How does Baboon 'remember' my preferences?",
        qTh: "เลขาบาบูน 'จำความชอบ' ของฉันได้อย่างไร?",
        a: "Baboon uses advanced memory profiles to store your communication style, frequently mentioned projects, and goals, which you can control at any time.",
        aTh: "บาบูนใช้โปรไฟล์หน่วยความจำอัจฉริยะในการจัดเก็บสไตล์การสื่อสาร โปรเจกต์ที่พูดถึงบ่อย และเป้าหมายของคุณ ซึ่งคุณสามารถควบคุมหรือลบข้อมูลได้ตลอดเวลา",
    },
    {
        q: "Does it support both English and Thai?",
        qTh: "รองรับทั้งภาษาไทยและภาษาอังกฤษไหม?",
        a: "Yes, Baboon is specifically optimized for Thai context but handles English perfectly, making it ideal for bilingual environments.",
        aTh: "ใช่ครับ บาบูนถูกปรับแต่งให้เข้าใจบริบทภาษาไทยเป็นพิเศษ แต่ก็สามารถจัดการภาษาอังกฤษได้อย่างสมบูรณ์แบบ เหมาะมากสำหรับสภาพแวดล้อมที่ใช้สองภาษา",
    },
    {
        q: "Is there a free version available?",
        qTh: "มีเวอร์ชันฟรีให้ใช้งานไหม?",
        a: "We currently offer a free beta period for early subscribers to explore all premium features.",
        aTh: "ขณะนี้เรากำลังเปิดให้ใช้งานช่วง Beta ฟรีสำหรับสมาชิกกลุ่มแรก เพื่อทดลองใช้ฟีเจอร์พรีเมียมทั้งหมด",
    },
];

export function FAQ({ locale, dict }: { locale: string; dict: any }) {
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
                    {dict.items.map((item: any, i: number) => (
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
