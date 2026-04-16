"use client";

import { Tabs } from "@/components/ui/tabs";

const portfolioTabs = [
  {
    title: "Tokped clone",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-[#1A953B] to-gray-950">
        <a href="https://github.com/ReyIntelCorei7/Clone_Toko_TokPed_ni_boss.git">
          <p className="pb-3">Lihat Selengkapnya</p>
        </a>
        <img src="./gambar/tokped.png" className="rounded-2xl" alt="Tokopedia Clone" />
      </div>
    ),
  },
  {
    title: "YAGATAW",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-[#666161] to-gray-950">
        <a href="https://www.figma.com/design/CapCOlulRkvjV6D1jfXfLO/Untitled?node-id=1-2&p=f&t=gn0RW0LQMy4xJAOu-0">
          <p className="pb-3">Lihat Selengkapnya</p>
        </a>
        <img src="./gambar/YAGATAW.png" className="rounded-2xl" alt="YAGATAW Project" />
      </div>
    ),
  },
  {
    title: "hayoo",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-[#1A953B] to-gray-950">
        <a href="https://github.com/ReyIntelCorei7/Clone_Toko_TokPed_ni_boss.git">
          <p className="pb-3">Lihat Selengkapnya</p>
        </a>
        <img src="./gambar/tokped.png" className="rounded-2xl" alt="Project" />
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-[#1A953B] to-gray-950">
        <a href="https://github.com/ReyIntelCorei7/Clone_Toko_TokPed_ni_boss.git">
          <p className="pb-3">Lihat Selengkapnya</p>
        </a>
        <img src="./gambar/tokped.png" className="rounded-2xl" alt="Content Project" />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-2xl font-bold text-white bg-gradient-to-br from-[#1A953B] to-gray-950">
        <a href="https://github.com/ReyIntelCorei7/Clone_Toko_TokPed_ni_boss.git">
          <p className="pb-3">Lihat Selengkapnya</p>
        </a>
        <img src="./gambar/tokped.png" className="rounded-2xl" alt="Random Project" />
      </div>
    ),
  },
];

export function TabsDemo() {
  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-52">
      <Tabs tabs={portfolioTabs} />
    </div>
  );
}
