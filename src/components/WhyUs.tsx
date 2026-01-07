import { Shield, Zap, Heart, Clock, Users, Award } from "lucide-react";

/**
 * WhyUs Section Component
 *
 * Displays the unique value propositions and differentiators
 * for choosing Baboon Secretary over competitors.
 *
 * @param locale - Current locale (en/th)
 * @param dict - Dictionary object containing translated content
 * @returns JSX element for the Why Us section
 */
import type { WhyUsDict } from "@/types/dictionary";

export function WhyUs({ dict }: { dict: WhyUsDict }) {
  console.log(`[WhyUs] Rendering component`);

  const icons = [
    <Zap key="zap" className="w-8 h-8" />,
    <Shield key="shield" className="w-8 h-8" />,
    <Heart key="heart" className="w-8 h-8" />,
    <Clock key="clock" className="w-8 h-8" />,
    <Users key="users" className="w-8 h-8" />,
    <Award key="award" className="w-8 h-8" />,
  ];

  return (
    <section id="why-us" className="py-24 px-6 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {dict.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            {dict.title}
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-foreground/5 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 text-center">
          <p className="text-foreground/50 text-sm">
            {dict.trustIndicator}
          </p>
        </div>
      </div>
    </section>
  );
}
