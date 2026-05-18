"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  MonitorCog,
  Sparkle,
} from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  role: string[];
  technologies: string[];
  features: string[];
  images: string[];
  customers?: {
    name: string;
    logo: string;
  }[];
  webAdmin?: {
    title: string;
    description: string;
    features: string[];
    technologies: string[];
    images: string[];
  };
  highlight?: string;
};

const projects: Project[] = [
  {
    title: "Co.op Food App",
    category: "Employee Attendance Management",
    description:
      "An internal attendance management system for retail stores. Staff can check in and check out at store locations, while administrators monitor attendance history, GPS validation, and detailed reports by store or employee.",
    role: [
      "Developed the full mobile UI with React Native.",
      "Implemented GPS-based attendance validation and real-time check-in/check-out workflows.",
      "Participated in business analysis and proposed improvements for store attendance operations.",
    ],
    technologies: [
      "React Native",
      ".NET Web API",
      "OneSignal",
      "GPS Services",
      "RESTful API",
    ],
    features: [
      "Location-based check-in/check-out",
      "Attendance history and timestamps",
      "Store and employee reporting",
      "Real-time notification updates",
    ],
    images: [
      "/projects/coo_food/8a0c0b72-d43e-46bc-8c18-7c1fd589e2d5.jpeg",
      "/projects/coo_food/c225e947-dcf6-41c8-af24-f39598ed5920.jpeg",
      "/projects/coo_food/20a5ba28-efca-4865-bd0a-6a5e347d973a.jpeg",
      "/projects/coo_food/fcbffe9a-0a61-477d-9938-821ad2f9f68a.jpeg",
      "/projects/coo_food/9a06b7dc-9df0-439c-a441-e58a3e63603a.jpeg",
      "/projects/coo_food/058af49d-6bda-4293-8da3-21eea6085f8d.jpeg",
    ],
    customers: [
      {
        name: "Co.op Food",
        logo: "/projects/Logo_customer/coop_food_logo.jpg",
      },
      {
        name: "Co.op Smile",
        logo: "/projects/Logo_customer/coop_smile_logo.jpg",
      },
    ],
    highlight: "5K+ downloads on Google Play",
  },
  {
    title: "Loyalty Booking App",
    category: "Customer Engagement & Hotel Booking",
    description:
      "A customer engagement and hotel booking platform that lets users track loyalty points, redeem rewards, view campaigns, book hotel rooms, and shop in-app. The project also includes a web administration and customer support portal.",
    role: [
      "Developed the full mobile UI.",
      "Participated in backend API development and database design.",
      "Built flows for loyalty, booking, campaigns, rewards, and customer benefits.",
    ],
    technologies: [
      "React Native",
      "React",
      ".NET Web API",
      "OneSignal",
      "GPS Services",
    ],
    features: [
      "Reward and loyalty point management",
      "Hotel search and booking",
      "Membership tiers and privileges",
      "Admin portal for campaigns, banners, gifts, and support tools",
    ],
    images: [
      "/projects/loyaty/Screenshot_1778043113.png",
      "/projects/loyaty/Screenshot_1778049867.png",
      "/projects/loyaty/Screenshot_1778052977.png",
      "/projects/loyaty/Screenshot_1778121814.png",
      "/projects/loyaty/Screenshot_1778121824.png",
      "/projects/loyaty/Screenshot_1778121828.png",
      "/projects/loyaty/Screenshot_1778121831.png",
      "/projects/loyaty/Screenshot_1778121840.png",
      "/projects/loyaty/Screenshot_1778121850.png",
      "/projects/loyaty/Screenshot_1778121866.png",
      "/projects/loyaty/Screenshot_1778121868.png",
      "/projects/loyaty/Screenshot_1778121874.png",
      "/projects/loyaty/Screenshot_1778121875.png",
      "/projects/loyaty/Screenshot_1778121883.png",
      "/projects/loyaty/Screenshot_1778121893.png",
      "/projects/loyaty/Screenshot_1778121901.png",
      "/projects/loyaty/Screenshot_1778121909.png",
      "/projects/loyaty/Screenshot_1778121935.png",
      "/projects/loyaty/Screenshot_1778121939.png",
      "/projects/loyaty/Screenshot_1778121980.png",
    ],
    webAdmin: {
      title: "Web Admin & Customer Support Portal",
      description:
        "A web-based administration and customer support portal that enables internal teams to manage application content, monitor engagement activities, and operate loyalty campaigns from one workspace.",
      features: [
        "Manage push notifications and promotional campaigns",
        "Configure news, banners, images, and in-app content",
        "Manage loyalty rewards, gifts, and redemption programs",
        "Configure membership tiers and customer benefits",
        "Customer support and operational monitoring tools",
        "Track user activities and engagement statistics",
      ],
      technologies: ["React", ".NET Framework", "RESTful API"],
      images: [
        "/projects/loyaty/web/Screenshot%202026-05-18%20at%2011.54.13.png",
        "/projects/loyaty/web/Screenshot%202026-05-18%20at%2011.54.19.png",
        "/projects/loyaty/web/Screenshot%202026-05-18%20at%2011.54.38.png",
        "/projects/loyaty/web/Screenshot%202026-05-18%20at%2011.54.47.png",
        "/projects/loyaty/web/Screenshot%202026-05-18%20at%2011.54.51.png",
        "/projects/loyaty/web/Screenshot%202026-05-18%20at%2011.54.59.png",
      ],
    },
    customers: [
      {
        name: "TTC Hospitality",
        logo: "/projects/Logo_customer/TTC_logo.jpg",
      },
      {
        name: "Hinode Mall",
        logo: "/projects/Logo_customer/hinode_logo.png",
      },
      {
        name: "Terracotta Resort",
        logo: "/projects/Logo_customer/terracotta_logo.png",
      },
    ],
  },
  {
    title: "WEALLNET Application",
    category: "Social Network & Entertainment Super App",
    description:
      "An all-in-one social networking and entertainment platform in Vietnam, combining social interaction, digital content, e-commerce, news, music, videos, and digital services in one ecosystem.",
    role: [
      "Participated in mobile app development and user experience improvements.",
      "Contributed to scalable application architecture and performance optimization.",
      "Improved loading performance for multimedia and high-traffic content flows.",
    ],
    technologies: [
      "Flutter",
      ".NET Web API",
      "Redis",
      "RESTful API",
      "E-commerce",
    ],
    features: [
      "Social networking and user interaction",
      "Messaging and communication features",
      "News, music, video, and content discovery",
      "Online shopping and promotional campaigns",
    ],
    images: [
      "/projects/wealnet/15002831-4829-48e0-8b43-3c829665e473.jpeg",
      "/projects/wealnet/c037cdc3-e19f-4e28-8b58-108c867e61df.jpeg",
      "/projects/wealnet/77eb4a7e-85a9-462d-aa2b-ac27d0c86470.jpeg",
      "/projects/wealnet/18f1a491-2e04-4916-a83a-de3538f72424.jpeg",
    ],
  },
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

function ProjectSlider({
  images,
  title,
  intervalDelay,
}: {
  images: string[];
  title: string;
  intervalDelay: number;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalDelay);

    return () => clearInterval(interval);
  }, [images.length, intervalDelay]);

  const visibleSlides = [-1, 0, 1].map((offset) => {
    const index = (activeIndex + offset + images.length) % images.length;
    return {
      index,
      offset,
      src: images[index],
    };
  });

  return (
    <div className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#101416] px-4 py-10 sm:min-h-[620px] lg:min-h-[720px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.24),transparent_34%),linear-gradient(135deg,rgba(20,184,166,0.18),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_38%)]" />
      <div className="absolute bottom-16 h-8 w-64 rounded-full bg-black/45 blur-2xl" />

      <div className="relative h-[470px] w-full max-w-[620px] sm:h-[560px] lg:h-[640px]">
        {visibleSlides.map((slide) => {
          const isActive = slide.offset === 0;

          return (
            <motion.button
              type="button"
              key={`${slide.index}-${activeIndex}-${slide.offset}`}
              onClick={() => setActiveIndex(slide.index)}
              aria-label={`View ${title} screenshot ${slide.index + 1}`}
              className="absolute left-1/2 top-1/2 overflow-hidden rounded-[28px] border border-white/12 bg-black shadow-2xl outline-none transition-colors hover:border-emerald-300/40"
              initial={false}
              animate={{
                x: `calc(-50% + ${slide.offset * 185}px)`,
                y: "-50%",
                width: isActive ? 250 : 190,
                height: isActive ? 540 : 410,
                opacity: isActive ? 1 : 0.54,
                scale: isActive ? 1 : 0.92,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={slide.src}
                alt={`${title} screen ${slide.index + 1}`}
                fill
                sizes="(min-width: 1024px) 250px, 45vw"
                className="object-cover"
                priority={isActive}
              />
              {!isActive && <div className="absolute inset-0 bg-black/20" />}
            </motion.button>
          );
        })}
      </div>

      <div className="absolute bottom-7 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-8 bg-emerald-300"
                : "w-2 bg-white/35 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function WebAdminSlider({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3600);

    return () => clearInterval(interval);
  }, [images.length]);

  const visibleSlides = [-1, 0, 1].map((offset) => {
    const index = (activeIndex + offset + images.length) % images.length;
    return {
      index,
      offset,
      src: images[index],
    };
  });

  return (
    <div className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#101416] px-3 py-8 sm:min-h-[460px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(16,185,129,0.22),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.1),transparent_48%)]" />
      <div className="absolute bottom-14 h-8 w-72 rounded-full bg-black/45 blur-2xl" />

      <div className="relative h-[270px] w-full max-w-[760px] sm:h-[360px]">
        {visibleSlides.map((slide) => {
          const isActive = slide.offset === 0;

          return (
            <motion.button
              type="button"
              key={`${slide.index}-${activeIndex}-${slide.offset}`}
              onClick={() => setActiveIndex(slide.index)}
              aria-label={`View ${title} web screen ${slide.index + 1}`}
              className="absolute left-1/2 top-1/2 overflow-hidden rounded-2xl border border-white/12 bg-black shadow-2xl outline-none transition-colors hover:border-emerald-300/40"
              initial={false}
              animate={{
                x: `calc(-50% + ${slide.offset * 235}px)`,
                y: "-50%",
                width: isActive ? 560 : 390,
                height: isActive ? 280 : 220,
                opacity: isActive ? 1 : 0.5,
                scale: isActive ? 1 : 0.9,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={slide.src}
                alt={`${title} web screen ${slide.index + 1}`}
                fill
                sizes="(min-width: 1024px) 560px, 86vw"
                className="object-cover"
              />
              {!isActive && <div className="absolute inset-0 bg-black/20" />}
            </motion.button>
          );
        })}
      </div>

      <div className="absolute bottom-6 flex items-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to web slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-8 bg-emerald-300"
                : "w-2 bg-white/35 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function WebAdminShowcase({
  webAdmin,
}: {
  webAdmin: NonNullable<Project["webAdmin"]>;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="space-y-5">
        <div className="flex items-center gap-2 text-sm text-white">
          <MonitorCog className="h-4 w-4 text-emerald-300" strokeWidth={1.6} />
          Web Admin
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-normal leading-tight text-white sm:text-3xl">
            {webAdmin.title}
          </h3>
          <p className="text-sm leading-7 text-white/66">
            {webAdmin.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {webAdmin.features.map((feature) => (
            <p
              key={feature}
              className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm leading-6 text-white/66"
            >
              {feature}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {webAdmin.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-emerald-300/18 bg-emerald-300/8 px-4 py-2 text-xs font-medium text-emerald-100/88"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <WebAdminSlider images={webAdmin.images} title={webAdmin.title} />
    </motion.section>
  );
}

function CustomerLogos({
  customers,
  highlight,
}: {
  customers?: Project["customers"];
  highlight?: string;
}) {
  if (!customers && !highlight) {
    return null;
  }

  return (
    <div className="space-y-4">
      {highlight && (
        <p className="text-sm font-medium text-white/78">{highlight}</p>
      )}

      {customers && (
        <div className="flex flex-wrap items-center gap-3">
          {customers.map((customer) => (
            <div
              key={customer.name}
              className="relative flex h-14 w-28 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-3"
            >
              <Image
                src={customer.logo}
                alt={`${customer.name} logo`}
                fill
                sizes="112px"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectShowcase({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid min-h-screen items-center gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-x-14 lg:gap-y-10 lg:py-18"
    >
      <div className="space-y-7">
        <SectionLabel>Featured Project 0{index + 1}</SectionLabel>

        <div className="space-y-4">
          <p className="text-sm font-medium text-emerald-200/80">
            {project.category}
          </p>
          <h2 className="max-w-xl text-[34px] font-normal leading-tight tracking-tight text-white sm:text-5xl">
            {project.title}
          </h2>
          <p className="max-w-2xl text-[15px] leading-7 text-white/68">
            {project.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 flex items-center gap-2 text-sm text-white">
              <BriefcaseBusiness
                className="h-4 w-4 text-emerald-300"
                strokeWidth={1.6}
              />
              My Role
            </div>
            <div className="space-y-3">
              {project.role.map((item) => (
                <p key={item} className="text-sm leading-6 text-white/65">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 flex items-center gap-2 text-sm text-white">
              <BadgeCheck
                className="h-4 w-4 text-emerald-300"
                strokeWidth={1.6}
              />
              Main Features
            </div>
            <div className="space-y-3">
              {project.features.map((item) => (
                <p key={item} className="text-sm leading-6 text-white/65">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-emerald-300/18 bg-emerald-300/8 px-4 py-2 text-xs font-medium text-emerald-100/88"
            >
              {tech}
            </span>
          ))}
        </div>

        {!project.webAdmin && (
          <CustomerLogos
            customers={project.customers}
            highlight={project.highlight}
          />
        )}
      </div>

      <ProjectSlider
        images={project.images}
        title={project.title}
        intervalDelay={3400 + index * 350}
      />

      {project.webAdmin && (
        <div className="space-y-7 lg:col-span-2">
          <WebAdminShowcase webAdmin={project.webAdmin} />
          <CustomerLogos
            customers={project.customers}
            highlight={project.highlight}
          />
        </div>
      )}
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="mb-3 pt-6">
          <SectionLabel>Portfolio Projects</SectionLabel>
        </div>
        <h1 className="max-w-4xl text-[38px] font-normal leading-tight tracking-tight text-white sm:text-6xl">
          Mobile and web products built across retail, hospitality, loyalty, and
          social platforms.
        </h1>

        <div className="mt-4 h-px w-full bg-white/10" />

        {projects.map((project, index) => (
          <ProjectShowcase key={project.title} project={project} index={index} />
        ))}
      </section>
    </main>
  );
}
