"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Blocks,
  Code2,
  Database,
  Layers3,
  ServerCog,
  Smartphone,
  Sparkle,
  Wrench,
} from "lucide-react";
import { withBasePath } from "@/lib/site-path";

type SkillGroup = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Mobile Development",
    description:
      "Production mobile apps for loyalty, booking, retail attendance, social networking, and digital services.",
    icon: Smartphone,
    skills: ["React Native", "Flutter", "Kotlin", "Swift", "Java"],
  },
  {
    title: "Frontend",
    description:
      "Responsive web interfaces, admin dashboards, customer support portals, and product-facing screens.",
    icon: Code2,
    skills: ["ReactJS", "Next.js", "HTML5", "CSS3", "JavaScript ES6+"],
  },
  {
    title: "Backend & API",
    description:
      "REST API integration, backend participation, server-side workflows, and business logic support.",
    icon: ServerCog,
    skills: ["C#", ".NET Framework", ".NET Core", ".NET MVC", "RESTful API"],
  },
  {
    title: "Database",
    description:
      "Database-driven product features, reporting data, booking records, attendance history, and loyalty data.",
    icon: Database,
    skills: ["SQL Server", "MySQL", "Database Design", "Reporting Data"],
  },
  {
    title: "Tools & Workflow",
    description:
      "Daily delivery tools for source control, API testing, mobile builds, debugging, and local environments.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "SVN",
      "Postman",
      "Jira",
      "Docker",
      "VS Code",
      "Xcode",
      "Android Studio",
    ],
  },
  {
    title: "Product Domains",
    description:
      "Hands-on project domains from your portfolio and professional work.",
    icon: Blocks,
    skills: [
      "Loyalty Systems",
      "Hotel Booking",
      "Attendance Management",
      "Retail Operations",
      "Social Networking",
      "E-commerce",
      "Push Notifications",
      "GPS Services",
    ],
  },
];

const techLogos = [
  { name: "React Native", src: "/react-native-logo.png" },
  { name: "Next.js", src: "/nextjs-logo.png" },
  { name: "Kotlin", src: "/kotlin-logo.png" },
  { name: "Swift", src: "/swift-logo.png" },
  { name: "JavaScript", src: "/js-logo.png" },
  { name: ".NET", src: "/net-logo.png" },
  { name: "SQL", src: "/sql-logo.png" },
  { name: "Docker", src: "/docker-logo.png" },
  { name: "Git", src: "/git-logo.png" },
  { name: "Postman", src: "/postman-logo.png" },
  { name: "VS Code", src: "/vscode-logo.png" },
  { name: "Android Studio", src: "/android-studio-logo.png" },
  { name: "Xcode", src: "/xcode-logo.png" },
];

const strengths = [
  "Mobile UI implementation",
  "REST API integration",
  "Backend collaboration",
  "Database-aware feature design",
  "Admin portal workflows",
  "Performance optimization",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <Sparkle className="h-3.5 w-3.5 text-emerald-300" strokeWidth={1.5} />
      <span className="text-[11px] uppercase tracking-[0.22em] text-white/62">
        {children}
      </span>
    </div>
  );
}

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const Icon = group.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h2 className="text-xl font-normal text-white">{group.title}</h2>
          <p className="text-sm leading-6 text-white/60">{group.description}</p>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-300/18 bg-emerald-300/10">
          <Icon className="h-5 w-5 text-emerald-200" strokeWidth={1.6} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-xs text-white/70 transition hover:border-emerald-300/30 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-10 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-5">
            <SectionLabel>Technical Skills</SectionLabel>
            <h1 className="max-w-4xl text-[38px] font-normal leading-tight tracking-tight text-white sm:text-6xl">
              A mobile-focused fullstack toolkit for real product delivery.
            </h1>
          </div>

          <div className="space-y-5">
            <p className="text-[15px] leading-7 text-white/66">
              My core strength is connecting polished mobile interfaces with
              reliable APIs, databases, push notifications, GPS services, and
              admin workflows used by internal teams.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-white/70"
                >
                  <Layers3
                    className="h-4 w-4 text-emerald-300"
                    strokeWidth={1.5}
                  />
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] py-5">
          <div className="flex animate-marquee-left items-center">
            {[...techLogos, ...techLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mr-4 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25"
              >
                <Image
                  src={withBasePath(logo.src)}
                  alt={logo.name}
                  width={42}
                  height={42}
                  className="object-contain  object-contain
                            brightness-0
                            invert
                            opacity-70
                            transition-all
                            duration-300
                            hover:opacity-100
                            hover:scale-110
                            "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
