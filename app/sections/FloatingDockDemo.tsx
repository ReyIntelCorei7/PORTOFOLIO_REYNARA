"use client";

import { FloatingDock } from "@/components/ui/floating-dock";

const socialLinks = [
  {
    title: "WhatsApp",
    icon: (
      <img
        className="rounded"
        src="./gambar/wa.png"
        width={35}
        height={35}
        alt="WhatsApp"
      />
    ),
    href: "https://bit.ly/contactMeRey",
  },
  {
    title: "TikTok",
    icon: (
      <img
        src="./gambar/tiktok.png"
        width={45}
        height={45}
        alt="TikTok"
      />
    ),
    href: "https://www.tiktok.com/@g.reii.tama?_t=ZS-90q5XFlqm8q&_r=1",
  },
  {
    title: "Instagram",
    icon: (
      <img
        src="./gambar/ig.png"
        width={35}
        height={35}
        alt="Instagram"
      />
    ),
    href: "https://www.instagram.com/re3ynaraa_?igsh=Ymk5Z2trNWhhc3g4",
  },
  {
    title: "GitHub",
    icon: (
      <img
        src="./gambar/gt.png"
        width={35}
        height={35}
        alt="GitHub"
      />
    ),
    href: "https://github.com/ReyIntelCorei7",
  },
];

export function FloatingDockDemo() {
  return (
    <div className="flex items-center justify-center ms-16">
      <FloatingDock items={socialLinks} />
    </div>
  );
}
