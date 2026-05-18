"use client";

import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/site-path";
import {
  Download,
  Instagram,
  Linkedin,
  Dribbble,
  BadgeCheck,
} from "lucide-react";

const stats = [
  {
    value: "3+",
    label: "Experiences",
  },
  {
    value: "10+",
    label: "Project Done",
  },
  {
    value: "8+",
    label: "Clients",
  },
];

export default function AboutMePage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Glow Background */}
      <div className="absolute left-[-120px] top-[120px] h-[420px] w-[420px] rounded-full bg-[#f6edd6]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-2">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          <h1 className=" mt-6text-3xl font-bold leading-tight tracking-tight text-[#f6edd6] md:text-7xl ">
            Fullstack Developer
          </h1>
          {/* Stats */}
          <div
            className="
              mt-8
              mb-10
              grid
              grid-cols-3
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-2xl
            "
          >
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`
                  p-4 md:p-6
                  ${
                    index !== stats.length - 1 ? "border-r border-white/10" : ""
                  }
                `}
              >
                <h3 className="text-4xl font-bold text-[#f6edd6]">
                  {item.value}
                </h3>
                <p className="mt-3 text-sm text-white/60">{item.label}</p>
              </div>
            ))}
          </div>
          {/* About me des */}
          <p className="text-justify">
            Fullstack Developer specializing in mobile application development
            with strong experience in React Native, Flutter, Nextjs, .NET and
            SQL server.
          </p>
          <br />
          <p className="text-justify">
            Focused on building scalable mobile applications with realtime
            systems, modular architecture, performance optimization, and native
            integrations. Experienced in developing real-world applications
            across cryptocurrency, loyalty systems, hotel booking, workforce
            management, retail, and social platforms.
          </p>
          <br />
          <p className="text-justify">
            Possess the ability to communicate in English in daily working
            environments and effectively read technical documentation. Achieved
            a TOEIC score of 690 and continuously working on improving
            communication skills for better collaboration in international
            teams.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative flex items-center justify-center">
          {/* Circle Background */}
          {/* <div className="absolute h-[620px]w-[620px] rounded-full bg-white/[0.04]" /> */}
          {/* Image */}
          <div className="relative h-[620px] w-[420px]">
            <Image
              src={withBasePath("/aboutme.png")}
              alt="portfolio"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
