"use client";

import GlareHover from "../komponen/GlareHover/GlareHover";

export function AboutSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-12">
      {/* Left Content - Text */}
      <div className="flex flex-col justify-center order-2 lg:order-1">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">About me</h2>
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200">
          Let's be real—'About Me' pages can get way too serious. I'm
          keeping this one chill. So here's the deal: most of what I know
          wasn't just learned in a classroom. I picked up skills the long
          way around—through competitions, personal experiments, and
          plenty of trial and error. When I'm not at my desk, you'll
          probably find me binge-watching anime or laughing along with
          Windah Basudara's wild gameplay streams. Oh, and fun fact: I
          collect fragrances and can talk about perfume notes way longer
          than anyone probably should.
        </p>
      </div>

      {/* Right Content - Images */}
      <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[400px] lg:min-h-[500px]">
        <div className="relative z-50">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
          >
            <img
              src="./gambar/about.png"
              alt="About Rey"
              className="h-auto w-auto max-h-[400px] lg:max-h-[500px] object-contain"
            />
          </GlareHover>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
          <img 
            src="./gambar/hand.png" 
            alt="Hand decoration" 
            className="w-auto h-auto max-w-[600px] opacity-80"
          />
        </div>
      </div>
    </div>
  );
}
