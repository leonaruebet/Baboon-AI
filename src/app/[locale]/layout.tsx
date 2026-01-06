import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Thai } from "next/font/google";
import "@/app/globals.css";

const noto_sans = Noto_Sans({
    subsets: ["latin"],
    variable: "--font-noto-sans",
    display: "swap",
});

const noto_sans_thai = Noto_Sans_Thai({
    subsets: ["thai"],
    variable: "--font-noto-sans-thai",
    display: "swap",
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const isEn = locale === "en";

    return {
        title: isEn
            ? "Baboon Secretary — Your Thai AI Assistant for Planning & Notes"
            : "เลขาบาบูน — ผู้ช่วย AI ภาษาไทย สำหรับวางแผนงาน สรุปโน้ต และเตือนความจำ",
        description: isEn
            ? "Your personal AI assistant that understands Thai context. Helping you summarize, plan, and remind efficiently."
            : "ผู้ช่วยส่วนตัวที่เข้าใจคนไทย ช่วยสรุปข้อความ วางแผนงาน และแจ้งเตือนสิ่งสำคัญ ไม่พลาดทุกดีเทล",
        keywords: isEn
            ? ["Thai AI Assistant", "Personal Assistant", "Note Summarizer", "Task Planner", "Baboon Secretary"]
            : ["AI ภาษาไทย", "ผู้ช่วยส่วนตัว", "สรุปโน้ต", "วางแผนงาน", "เลขาบาบูน"],
        icons: {
            icon: "/icon.svg",
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    return (
        <html lang={locale || "th"} suppressHydrationWarning>
            <body
                className={`${noto_sans.variable} ${noto_sans_thai.variable} font-sans antialiased selection:bg-primary/10 selection:text-primary`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
