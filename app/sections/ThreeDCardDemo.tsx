"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FloatingDockDemo } from "./FloatingDockDemo";
import { SparklesPreview } from "./SparklesPreview";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-600/[0.7] bg-gradient-to-l from-[#5C0505] to-[#021E5C] dark:border-black/[1] border-black/[1] w-auto sm:w-[30rem] h-auto rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Contact me
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4">
          <div className="isi-kontak flex justify-center content-center items-center place-items-center absolute mt-72 ms-10">
            <FloatingDockDemo />
            <SparklesPreview />
          </div>
          <div className="gambar">
            <img src="./gambar/gojo.png" height={550} width={550} alt="Profile" />
          </div>
        </CardItem>
        
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          © 2025 By Rey
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
