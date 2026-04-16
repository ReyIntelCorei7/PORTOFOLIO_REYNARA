"use client";

import { useState, useEffect } from "react";
import { SiReact, SiTailwindcss } from "react-icons/si";

// Custom Components
import GooeyNav from "./komponen/GooeyNav/GooeyNav";
import ClickSpark from "./komponen/ClickSpark/ClickSpark";
import LogoLoop from "./komponen/LogoLoop/LogoLoop";

// Section Components
import { HeroSection, AboutSection, PortfolioSection, ContactSection } from "./sections";

// Navigation Items with section IDs
const navItems = [
  { label: "Home", href: "#hero-section" },
  { label: "Porto", href: "#Porto" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#Contact" },
];

// Section IDs mapped to nav index
const sectionIds = ["hero-section", "Porto", "about", "Contact"];

// Technology Logos for Logo Loop
const technologyLogos = [
  {
    src: "/logo/figma.png",
    alt: "Figma",
    href: "https://www.figma.com/",
  },
  { 
    node: <SiReact />, 
    title: "React", 
    href: "https://react.dev" 
  },
  {
    src: "/logo/laravel.png",
    alt: "Laravel",
    href: "https://laravel.com/",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

export default function Home() {
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  // Intersection Observer to detect active section
  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-20% 0px -60% 0px", // trigger when section is near center
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const index = sectionIds.indexOf(sectionId);
          if (index !== -1) {
            setActiveNavIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="body min-h-screen w-full bg-destructive overflow-x-hidden">
      {/* Scroll Progress Bars */}
      <div className="bar-right" />
      <div className="bar-left" />

      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={30}
        sparkCount={15}
        duration={400}
      >
        {/* Navigation */}
        <nav id="navbar" className="fixed top-0 left-0 right-0 z-30">
          <div className="flex justify-center w-full z-30">
            <GooeyNav
              items={navItems}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              activeIndex={activeNavIndex}
              onActiveChange={setActiveNavIndex}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>
        </nav>

        {/* Main Content Container with consistent margins */}
        <main className="px-6 md:px-12 lg:px-20 xl:px-28">
          {/* Hero Section */}
          <HeroSection />

          {/* Portfolio Section */}
          <PortfolioSection />
        </main>

        {/* Technology Logo Loop - Full Width */}
        <LogoLoop
          logos={technologyLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#030712"
          ariaLabel="Technology partners"
          className="w-full"
        />

        {/* About & Contact Section with margins */}
        <main className="px-6 md:px-12 lg:px-20 xl:px-28">
          <div id="about" className="min-h-screen py-16">
            <AboutSection />
          </div>
          <div id="Contact" className="py-16">
            <ContactSection />
          </div>
        </main>
      </ClickSpark>
    </div>
  );
}
