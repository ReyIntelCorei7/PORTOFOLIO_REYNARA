"use client";

import { CometCard } from "@/components/ui/comet-card";
import LightRays from "../komponen/LightRays/LightRays";
import AnimatedContent from "../komponen/AnimatedContent/AnimatedContent";
import Shuffle from "../komponen/Shuffle/Shuffle";
import RotatingText from "../komponen/RotatingText/RotatingText";
import ScrambledText from "../komponen/ScrambledText/ScrambledText";
import FadeContent from "../komponen/FadeContent/FadeContent";

export function HeroSection() {
  return (
    <div id="hero-section" className="h-screen w-full relative pt-16">
      {/* Light Rays Background */}
      <div className="h-full w-full absolute inset-0 z-40 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#B1B1B1"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Main Content Grid */}
      <div className="h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 relative z-10">
        {/* Card Section */}
        <div className="col-span-1 lg:col-span-6 flex items-center justify-center">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <CometCard>
              <button
                type="button"
                className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000792] object-cover contrast-75"
                      alt="Invite background"
                      src="./gambar/card.png"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                  <div className="text-xs text-gray-300 opacity-50">
                    The Shade
                  </div>
                </div>
                <audio autoPlay>
                  <source src={"./lagu/mantap1.mp3"} type="audio/mp3" />
                </audio>
              </button>
            </CometCard>
          </AnimatedContent>
        </div>

        {/* Text Section */}
        <div
          id="tulisan"
          className="col-span-1 lg:col-span-6 flex flex-col items-center lg:items-start justify-center text-white gap-4 px-4 lg:px-0"
        >
          {/* Shuffle Text */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.1}
          >
            <Shuffle
              text="My name is Rey"
              shuffleDirection="left"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={3}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="text-1xl font-bold mr-auto"
            />
          </AnimatedContent>

          {/* Rotating Text */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={0.7}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <RotatingText
              texts={[
                "Web programming",
                "Web Designer",
                "Web Development",
                "Mobile Progamming,",
              ]}
              mainClassName="px-3 sm:px-3 md:px-3 bg-gray-600 text-5x1 font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-l inline-flex"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </AnimatedContent>

          {/* Scrambled Text */}
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
          >
            <ScrambledText
              className="scrambled-text-demo"
              radius={100}
              duration={5}
              speed={5}
              scrambleChars="?!#@$"
            >
              Nice to meet you here! I'm Rey, and this is my little corner
              of the internet where I keep all my work
            </ScrambledText>
          </FadeContent>
        </div>
      </div>
    </div>
  );
}
