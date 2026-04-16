"use client";

import FadeContent from "../komponen/FadeContent/FadeContent";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

export function ContactSection() {
  return (
    <FadeContent
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}
    >
      <div className="contact-me pt-36">
        <div id="Contact">
          <div style={{ height: "600px", position: "relative" }}>
            <ThreeDCardDemo />
          </div>
        </div>
      </div>
    </FadeContent>
  );
}
