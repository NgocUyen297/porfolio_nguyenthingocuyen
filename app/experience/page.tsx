"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Download, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

type Experience = {
  period: string;
  role: string;
  company: string;
  logo: string;
  summary: string;
  highlights: string[];
  stack: string[];
  projects: string[];
};

const experiences: Experience[] = [
  {
    period: "2024 - Now",
    role: "Full-Stack Developer",
    company: "Viet A Software Solutions",
    logo: "/logo_company/gihotech_log.jpeg",
    summary:
      "Building production mobile and web systems for retail, hospitality, loyalty, booking, and internal operations. The work spans UI implementation, REST API integration, backend participation, database design, and business-flow discussion.",
    highlights: [
      "Developed full mobile UI for customer loyalty, hotel booking, and employee attendance apps.",
      "Implemented GPS-based check-in/check-out flows, push notifications, campaign management, and loyalty features.",
      "Contributed to backend APIs, database structure, web admin portals, and customer support operations.",
    ],
    stack: [
      "React Native",
      "React",
      ".NET Framework",
      "OneSignal",
      "SQL Server",
      "REST API",
    ],
    projects: ["Co.op Food", "Loyalty Booking App", "Web Admin Portal"],
  },
  {
    period: "2023 - 2024",
    role: "Mobile Developer",
    company: "WEALLNET Creative Agency",
    logo: "/logo_company/wealnet_logo.jpeg",
    summary:
      "Worked on a social networking and entertainment super app in Vietnam, focused on mobile experience, multimedia content, social interaction, e-commerce flows, and performance optimization.",
    highlights: [
      "Improved mobile app experience for a multi-service platform with news, video, music, shopping, and community features.",
      "Integrated REST APIs and optimized loading flows for content-heavy screens.",
      "Collaborated on scalable mobile architecture for social and entertainment product modules.",
    ],
    stack: ["Flutter", ".NET Web API", "Redis", "REST API", "E-commerce"],
    projects: ["WEALLNET Application"],
  },
  {
    period: "2022 - 2023",
    role: "Web Developer",
    company: "Boolfly Vietnam Company",
    logo: "/logo_company/boolfly.jpg",
    summary:
      "Developed web features and strengthened foundations in frontend implementation, backend integration, databases, and team delivery workflows.",
    highlights: [
      "Built and maintained responsive web interfaces for business applications.",
      "Worked with backend APIs, database-driven screens, and operational dashboards.",
      "Used Git-based workflows and daily development tools to support product delivery.",
    ],
    stack: ["ReactJS", "JavaScript", ".NET", "SQL Server", "Git", "Postman"],
    projects: ["Business Web Systems", "Admin Dashboards"],
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Real Projects" },
  { value: "8+", label: "Clients & Partners" },
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

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="relative grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 lg:grid-cols-[220px_1fr]"
    >
      <div className="space-y-5">
        <div className="relative flex h-20 w-40 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-4">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            fill
            sizes="160px"
            className="object-contain p-3"
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-emerald-100/80">
          <CalendarDays className="h-4 w-4 text-emerald-300" strokeWidth={1.5} />
          {experience.period}
        </div>

        <div className="hidden h-full w-px bg-white/10 lg:block" />
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <p className="text-sm text-white/55">{experience.company}</p>
          <h2 className="text-2xl font-normal leading-tight text-white sm:text-3xl">
            {experience.role}
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-white/66">
            {experience.summary}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {experience.highlights.map((highlight) => (
            <p
              key={highlight}
              className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/66"
            >
              {highlight}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {experience.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-emerald-300/18 bg-emerald-300/8 px-4 py-2 text-xs font-medium text-emerald-100/88"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.projects.map((project) => (
            <span
              key={project}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-white/62"
            >
              {project}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-10 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-5">
            <SectionLabel>Work Experience</SectionLabel>
            <h1 className="max-w-4xl text-[38px] font-normal leading-tight tracking-tight text-white sm:text-6xl">
              Building mobile-first products across retail, hospitality,
              loyalty, and social platforms.
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-[15px] leading-7 text-white/66">
              My experience is centered around fullstack product delivery:
              turning business requirements into mobile interfaces, backend
              integrations, admin tools, and stable operational workflows.
            </p>

            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-4 sm:p-5 ${
                    index !== stats.length - 1 ? "border-r border-white/10" : ""
                  }`}
                >
                  <p className="text-3xl font-semibold text-emerald-200">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-white/80 transition hover:border-emerald-300/35 hover:text-white"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href="/NGUYEN-THI-NGOC-UYEN-TopCV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-5 py-3 text-sm text-emerald-50 transition hover:bg-emerald-300/15"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-5">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
