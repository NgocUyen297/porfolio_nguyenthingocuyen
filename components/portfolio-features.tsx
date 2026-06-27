"use client";

import {
  ArrowUpRight,
  Sparkle,
  Figma,
  Framer,
  Palette,
  PenTool,
  Layers,
  Type,
  Aperture,
  Chrome,
  Camera,
  Brush,
  Box,
  Wand2,
} from "lucide-react";
import Link from "next/link";
import {
  Download,
  Instagram,
  Linkedin,
  Dribbble,
  BadgeCheck,
} from "lucide-react";
import Image from "next/image";
import { withBasePath } from "@/lib/site-path";
import { useLanguage } from "@/lib/language-context";
function SectionLabel({
  children,
  justify = "center",
}: {
  children: React.ReactNode;
  justify?: "center" | "start";
}) {
  return (
    <div
      className={`flex items-center gap-2 ${justify === "center" ? "justify-center" : "justify-start"}`}
    >
      <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
      <span className="uppercase tracking-[0.22em] text-[11px] text-white/70">
        {children}
      </span>
      <Sparkle className="h-3 w-3 text-white/70" strokeWidth={1.5} />
    </div>
  );
}

function TimelineItem({
  years,
  role,
  company,
}: {
  years: string;
  role: string;
  company: string;
}) {
  return (
    <div className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-2 text-[11px] sm:text-xs text-white/80">
      <span className="text-white/60">{years}</span>
      <Sparkle className="h-3 w-3 text-white/60" strokeWidth={1.5} />
      <span>{role}</span>
      <span className="text-white/60">{company}</span>
    </div>
  );
}

function IconTile({
  icon: Icon,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <div className="liquid-glass h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center flex-shrink-0">
      <Icon className="h-6 w-6 md:h-7 md:w-7 text-white/80" strokeWidth={1.5} />
    </div>
  );
}

const imageIconTool = [
  "android-studio-logo.png",
  "docker-logo.png",
  "git-logo.png",
  "postman-logo.png",
  "vscode-logo.png",
  "xcode-logo.png",
];

const imageIconLanguage = [
  "kotlin-logo.png",
  "nextjs-logo.png",
  "sql-logo.png",
  "react-native-logo.png",
  "swift-logo.png",
  "js-logo.png",
];
const imageSocial = [
  // {
  //   image: "zalo-logo.png",
  //   href: "https://zalo.me/your-zalo",
  //   alt: "Zalo",
  // },
  // {
  //   image: "teams-logo.png",
  //   href: "https://teams.microsoft.com",
  //   alt: "Teams",
  // },
  {
    image: "linked-logo.png",
    href: "https://www.linkedin.com/in/uyen-nguyen-3a3865276/?locale=vi",
    alt: "LinkedIn",
  },
  {
    image: "fb-logo.png",
    href: "https://www.facebook.com/tranh.tranh.336/",
    alt: "Facebook",
  },
];
const row2Icons = [Camera, Brush, Box, Wand2, Figma, Framer, Type, Layers];
const homeCopy = {
  en: {
    greeting: "Hi, I'm Nguyen Thi Ngoc Uyen!",
    avatar: "Avatar",
    aboutLabel: "About me",
    aboutParagraphs: [
      "I am a Fullstack Developer with over 3 years of experience in building modern web and mobile applications, specializing in React Native, Flutter, ReactJS, Next.js, Kotlin for Android, and Swift for iOS. I have strong hands-on experience in crafting responsive UI/UX, designing scalable backend APIs, integrating databases, and developing features related to payment systems and cryptocurrency/token swap platforms.",
      "Throughout my professional experience, I have had the opportunity to participate in and develop a wide range of projects, including task management systems, cryptocurrency and digital economy platforms, hotel and restaurant management systems, customer loyalty applications, employee attendance and HR management software, supermarket sales management systems, and social networking applications focused on enhancing user engagement and experience.",
    ],
    timeline: "Timeline",
    certifications: "Certifications",
    dailySoftware: "Daily Software",
    reachMe: "Reach Me",
    phone01: "Phone 01",
    phone02: "Phone 02",
    downloadCvEngLish: "Download English CV",
    downloadCvVietNamese: "Download VietNamese CV",
    experiences: [
      {
        years: "2024-Now",
        role: "Full-Stack Developer",
        company: "Viet A Software Solutions Co., Ltd",
      },
      {
        years: "2023-2024",
        role: "Mobile Developer",
        company: "WEALLNET CREATIVE AGENCY",
      },
      {
        years: "2022-2023",
        role: "Web Developer",
        company: "BOOLFLY VIET NAM COMPANY",
      },
    ],
  },
  vi: {
    greeting: "Xin chào, tôi là Nguyễn Thị Ngọc Uyên!",
    avatar: "Ảnh đại diện",
    aboutLabel: "Giới thiệu",
    aboutParagraphs: [
      "Tôi là Fullstack Developer với hơn 3 năm kinh nghiệm xây dựng ứng dụng web và mobile hiện đại, chuyên sâu React Native, Flutter, ReactJS, Next.js, Kotlin cho Android và Swift cho iOS. Tôi có kinh nghiệm thực chiến trong xây dựng UI/UX responsive, thiết kế backend API có khả năng mở rộng, tích hợp database và phát triển các tính năng liên quan đến thanh toán, cryptocurrency/token swap.",
      "Trong quá trình làm việc, tôi đã tham gia và phát triển nhiều dự án như hệ thống quản lý công việc, nền tảng cryptocurrency và kinh tế số, hệ thống quản lý khách sạn - nhà hàng, ứng dụng tích điểm khách hàng, phần mềm chấm công và quản lý nhân sự, hệ thống bán hàng siêu thị, cùng các ứng dụng mạng xã hội tập trung nâng cao trải nghiệm và tương tác người dùng.",
    ],
    timeline: "Dòng thời gian",
    certifications: "Chứng chỉ",
    dailySoftware: "Công cụ hằng ngày",
    reachMe: "Liên hệ",
    phone01: "SĐT 01",
    phone02: "SĐT 02",
    downloadCvEngLish: "Tải CV tiếng anh",
    downloadCvVietNamese: "Tải CV tiếng việt",
    experiences: [
      {
        years: "2024-Hiện tại",
        role: "Full-Stack Developer",
        company: "Công ty TNHH Giải pháp phần mềm Việt Á",
      },
      {
        years: "2023-2024",
        role: "Mobile Developer",
        company: "WEALLNET CREATIVE AGENCY",
      },
      {
        years: "2022-2023",
        role: "Web Developer",
        company: "BOOLFLY VIET NAM COMPANY",
      },
    ],
  },
};

export default function PortfolioFeatures() {
  const { language } = useLanguage();
  const copy = homeCopy[language];

  return (
    <section className="min-h-screen lg:h-screen bg-[#0a0a0a] text-white px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 flex flex-col">
      {/* Header */}
      <header className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6 sm:mb-8">
        <div className="max-w-3xl">
          <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight mb-3">
            {copy.greeting}
          </h1>
        </div>
      </header>
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1">
        {/* Column 1 - Background */}
        <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col min-h-[320px] md:min-h-0">
          <div className="absolute inset-0">
            <Image
              src={withBasePath("/avatar.jpg")}
              alt={"avatar"}
              fill
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* <div className="absolute inset-0 bg-black/40" /> */}
          <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
            <div className="pt-2">
              <SectionLabel>{copy.avatar}</SectionLabel>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        {/* <div className="flex flex-col gap-4 md:gap-5 md:grid md:grid-rows-[auto_1fr]"> */}
        <div className="flex flex-col gap-4 md:gap-5 flex-1 h-full">
          {/* About me */}
          <div
            // className="noise-overlay rounded-2xl bg-[#324444] p-5  flex-1 h-full flex flex-col gap-4"
            className="
      noise-overlay
      rounded-2xl
      bg-[#324444]
      p-5
      flex
      flex-col
      gap-4
      flex-1
      h-full
    "
          >
            <SectionLabel justify="start">{copy.aboutLabel}</SectionLabel>
            {copy.aboutParagraphs.map((paragraph) => (
              <blockquote
                key={paragraph}
                className="text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85"
              >
                {paragraph}
              </blockquote>
            ))}
          </div>
          {/* 10M+ */}
          <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col  justify-center h-[190px]   flex-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/30 " />
            <div className="relative  flex flex-col  gap-4  py-8 p-5 md:p-6">
              <SectionLabel justify="start">{copy.timeline}</SectionLabel>
              <div className="mt-auto space-y-2">
                {copy.experiences.map((experience) => (
                  <TimelineItem
                    key={`${experience.years}-${experience.company}`}
                    years={experience.years}
                    role={experience.role}
                    company={experience.company}
                  />
                ))}
              </div>
              <SectionLabel justify="start">{copy.certifications}</SectionLabel>
              <div className="mt-auto space-y-2">
                <span className="text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85">
                  Toeic: 690
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 md:gap-5 md:col-span-2 lg:col-span-1">
          {/* Daily Software */}
          <div className="relative rounded-2xl bg-black overflow-hidden flex flex-col min-h-[240px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
              <div className="pt-2">
                <SectionLabel>{copy.dailySoftware}</SectionLabel>
              </div>
              <div className="mt-auto space-y-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                {/* Marquee Row 1 - Left */}
                {/* <div className="flex animate-marquee-left">
                  {[...row1Icons, ...row1Icons].map((Icon, i) => (
                    <div key={i} className="mr-3">
                      <IconTile icon={Icon} />
                    </div>
                  ))}
                </div> */}
                <div className="flex animate-marquee-right">
                  {[...imageIconTool, ...imageIconTool].map((image, i) => (
                    <div key={i} className="mr-3 flex-shrink-0">
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          backdrop-blur-xl
                          "
                      >
                        <Image
                          src={withBasePath(`/${image}`)}
                          alt={image}
                          width={36}
                          height={36}
                          className="
                            object-contain
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
                    </div>
                  ))}
                </div>
                <div className="flex animate-marquee-right">
                  {[...imageIconLanguage, ...imageIconLanguage].map(
                    (image, i) => (
                      <div key={i} className="mr-3 flex-shrink-0">
                        <div
                          className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          backdrop-blur-xl
                          "
                        >
                          <Image
                            src={withBasePath(`/${image}`)}
                            alt={image}
                            width={36}
                            height={36}
                            className="
                            object-contain
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
                      </div>
                    ),
                  )}
                </div>
                {/* Marquee Row 2 - Right */}
                {/* <div className="flex animate-marquee-right">
                  {[...row2Icons, ...row2Icons].map((Icon, i) => (
                    <div key={i} className="mr-3">
                      <IconTile icon={Icon} />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
          {/* Reach Me */}
          <div className="noise-overlay rounded-2xl bg-[#324444] p-5 md:p-6 flex  justify-start flex-col gap-2 relative flex-1 ">
            <SectionLabel justify="start">{copy.reachMe}</SectionLabel>
            <div className=" space-y-1">
              <p className="text-sm text-white/90">
                Email: nguyenuyen352021@gmail.com
              </p>
              <p className="text-sm text-white/70">
                {copy.phone01}: 0399088051
              </p>
              <p className="text-sm text-white/70">
                {copy.phone02}: 0946961611
              </p>
            </div>
            {/* Social */}
            <div className="mt-8 flex items-center gap-4">
              {[...imageSocial].map((Icon, index) => (
                <Link
                  key={index}
                  href={Icon.href}
                  target="_blank"
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/70
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#f6edd6]/40
                  hover:bg-[#f6edd6]/10
                  hover:text-[#f6edd6]
                "
                >
                  <Image
                    src={withBasePath(`/${Icon.image}`)}
                    alt={Icon.alt}
                    width={36}
                    height={36}
                    className="
                            object-contain
                            brightness-0
                            invert
                            opacity-70
                            transition-all
                            duration-300
                            hover:opacity-100
                            hover:scale-110
                            "
                  />
                </Link>
              ))}
            </div>
            <a
              href={withBasePath("/NguyenThiNgocUyen_CV_English.pdf")}
              download
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10bg-white/[0.03] py-3 text-smtransition-all duration-300hover:bg-white/[0.06]"
            >
              <Download className="h-4 w-4" />
              {copy.downloadCvEngLish}
            </a>
            <a
              href={withBasePath("/NguyenThiNgocUyenCV_TiengViet.pdf")}
              download
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10bg-white/[0.03] py-3 text-smtransition-all duration-300hover:bg-white/[0.06]"
            >
              <Download className="h-4 w-4" />
              {copy.downloadCvVietNamese}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
