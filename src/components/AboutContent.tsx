"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Heart, Sparkles, Trophy, MapPin, Users, Briefcase, Rocket, Target, Zap, Globe, ChevronRight, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, Suspense, lazy } from "react";

// Lazy load the 3D scene to avoid SSR issues
const Scene3D = lazy(() => import("@/components/three/Scene3D").then(mod => ({ default: mod.Scene3D })));

/**
 * AboutContent Client Component
 *
 * Renders the animated about us content with 3D effects and Three.js scene.
 * Features: Three.js 3D scene, scroll-triggered animations, interactive cards.
 *
 * @param locale - Current locale for links
 * @param aboutUs - Dictionary content for about us section
 * @returns JSX element for the animated about content
 */
export function AboutContent({
  locale,
  aboutUs,
}: {
  locale: string;
  aboutUs: {
    title: string;
    subtitle: string;
    mission: { title: string; description: string };
    story: { title: string; description: string; highlights: string[] };
    values: { title: string; items: { title: string; description: string }[] };
    cta: { title: string; button: string };
  };
}) {
  console.log("[AboutContent] Rendering animated content with Three.js");

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const valueIcons = [
    <Shield key="shield" className="w-8 h-8" />,
    <Heart key="heart" className="w-8 h-8" />,
    <Sparkles key="sparkles" className="w-8 h-8" />,
    <Trophy key="trophy" className="w-8 h-8" />,
  ];

  const highlightIcons = [
    <MapPin key="map" className="w-6 h-6" />,
    <Users key="users" className="w-6 h-6" />,
    <Briefcase key="briefcase" className="w-6 h-6" />,
    <Trophy key="trophy2" className="w-6 h-6" />,
  ];

  return (
    <div ref={containerRef}>
      {/* Three.js 3D Background Scene */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Suspense fallback={
          <div className="w-full h-full bg-gradient-to-b from-orange-50/50 to-white" />
        }>
          <Scene3D className="opacity-40" />
        </Suspense>
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-5 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(255,255,255,0.8) 70%)",
        }}
      />

      {/* 3D Hero Section */}
      <section ref={heroRef} className="pt-40 pb-20 px-6 relative">
        <div className="max-w-5xl mx-auto text-center relative">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20">
              <Rocket className="w-4 h-4" />
              Thai-First AI Assistant
            </span>
          </motion.div>

          {/* 3D Title with Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            animate={heroInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              {aboutUs.title}
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {aboutUs.subtitle}
          </motion.p>

          {/* 3D Floating Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="mt-12 relative inline-block"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 10, 0, -10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-8xl md:text-9xl cursor-pointer select-none"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.1, rotateZ: 5 }}
            >
              🐵
            </motion.div>
            {/* Shadow */}
            <motion.div
              animate={{ scaleX: [1, 0.8, 1], opacity: [0.3, 0.15, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/20 rounded-full"
            />
            {/* Sparkles */}
            <motion.span
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-4 -right-4 text-3xl"
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              className="absolute top-0 -left-6 text-2xl"
            >
              ⭐
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* 3D Mission Section */}
      <section ref={missionRef} className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={missionInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{
              scale: 1.02,
              rotateY: 2,
              boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)"
            }}
            className="relative p-10 rounded-3xl overflow-hidden cursor-default bg-white/95"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
              border: "1px solid rgba(251, 146, 60, 0.2)",
              boxShadow: "0 10px 40px -10px rgba(251, 146, 60, 0.15)"
            }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

            {/* 3D Icon */}
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/30"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Target className="w-8 h-8" />
            </motion.div>

            <h2 className="text-3xl font-bold text-foreground mb-4 relative">
              {aboutUs.mission.title}
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed relative">
              {aboutUs.mission.description}
            </p>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-40 h-40 border-2 border-primary/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-5 -left-5 w-24 h-24 border-2 border-primary/10 rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* 3D Story Section */}
      <section ref={storyRef} className="py-20 px-6 bg-gradient-to-b from-foreground/[0.02] to-transparent relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              {aboutUs.story.title}
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto">
              {aboutUs.story.description}
            </p>
          </motion.div>

          {/* 3D Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aboutUs.story.highlights.map((highlight: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                animate={storyInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-foreground/5 shadow-xl shadow-black/5 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:border-primary/20">
                  {/* 3D Icon Container */}
                  <motion.div
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-4"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {highlightIcons[index]}
                  </motion.div>
                  <p className="text-sm text-foreground/70 text-center font-medium">{highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Values Section */}
      <section ref={valuesRef} className="py-20 px-6 relative">
        {/* Background decoration */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full -z-10"
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
            >
              <Zap className="w-4 h-4" />
              Our Core Values
            </motion.span>
            <h2 className="text-4xl font-bold text-foreground">
              {aboutUs.values.title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aboutUs.values.items.map((value: { title: string; description: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -10 : 10 }}
                animate={valuesInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, type: "spring" }}
                whileHover={{
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 3 : -3,
                  z: 20,
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <div className="p-8 bg-white rounded-3xl border border-foreground/5 shadow-xl shadow-black/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/15 group-hover:border-primary/20 overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"
                  />

                  {/* 3D Rotating Icon */}
                  <motion.div
                    whileHover={{ rotateY: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-400 flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/30"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {valueIcons[index]}
                  </motion.div>

                  <h3 className="relative text-2xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="relative text-foreground/60 leading-relaxed text-lg">
                    {value.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center relative"
        >
          {/* 3D Globe Icon */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-orange-400 text-white mb-8 shadow-2xl shadow-primary/40"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Globe className="w-10 h-10" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {aboutUs.cta.title}
          </h2>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/${locale}`}>
              <Button
                size="lg"
                className="rounded-full px-10 py-6 font-semibold text-lg bg-gradient-to-r from-primary to-orange-400 hover:from-primary/90 hover:to-orange-400/90 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
              >
                {aboutUs.cta.button}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Floating elements around CTA */}
          <motion.span
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 left-1/4 text-4xl"
          >
            🚀
          </motion.span>
          <motion.span
            animate={{ y: [0, 10, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-0 right-1/4 text-3xl"
          >
            ⚡
          </motion.span>
        </motion.div>
      </section>

      {/* iReadCustomer Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-foreground/[0.02] to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 md:p-12 bg-white rounded-3xl border border-foreground/5 shadow-xl shadow-black/5 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {locale === "th" ? "พัฒนาโดย iReadCustomer" : "Powered by iReadCustomer"}
            </h3>
            <p className="text-foreground/60 text-lg mb-8 max-w-2xl mx-auto">
              {locale === "th"
                ? "เรียนรู้เพิ่มเติมเกี่ยวกับบริษัทแม่ของเราและบริการอื่นๆ ที่เราให้บริการ"
                : "Learn more about our parent company and other services we offer"}
            </p>

            <motion.a
              href="https://ireadcustomer.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white font-semibold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
            >
              {locale === "th" ? "เยี่ยมชม iReadCustomer" : "Visit iReadCustomer"}
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
