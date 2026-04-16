"use client";

import ScrollFloat from "../komponen/ScrollFloat/ScrollFloat";
import FadeContent from "../komponen/FadeContent/FadeContent";
import { TabsDemo } from "./TabsDemo";

export function PortfolioSection() {
  return (
    <section id="Porto" className="py-16 lg:py-24">
      {/* Section Title */}
      <div className="flex justify-center font-bold mb-8 lg:mb-12">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          My Portofolio
        </ScrollFloat>
      </div>

      {/* Portfolio Tabs */}
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <div className="w-full max-w-5xl mx-auto">
          <TabsDemo />
        </div>
      </FadeContent>
    </section>
  );
}
