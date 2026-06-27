"use client";

import Image from "next/image";
import {
  CalendarDays,
  Download,
  Sparkle,
  Smartphone,
  Server,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/site-path";

type Experience = {
  period: string;
  role: string;
  company: string;
  logo: string;
  summary: string;
  highlights: React.ReactNode[];
  stack: string[];
  projects: string[];
};

const experiences: Experience[] = [
  {
    period: "07/2024 - 04/2026",
    role: "Full-stack Developer (Backend + Mobile)",
    company: "Viet A Software Solutions Co., Ltd",
    logo: "/logo_company/gihotech_log.jpeg",
    summary:
      "Chịu trách nhiệm nghiên cứu, xây dựng và bảo trì hệ sinh thái ứng dụng di động đa nền tảng và hệ thống quản trị Web phục vụ các lĩnh vực Retail, Hospitality, và Loyalty Systems. Quản lý toàn bộ vòng đời sản phẩm từ thiết kế database, phát triển API đến tối ưu hóa ứng dụng trên các cửa hàng.",
    highlights: [
      <>
        Xây dựng và bảo trì ứng dụng di động đa nền tảng bằng{" "}
        <span className="text-white font-medium">React Native</span>; trực tiếp
        phát hành, quản lý chu kỳ release và tối ưu store trên{" "}
        <span className="text-white font-medium">App Store & Google Play</span>.
      </>,
      <>
        Phát triển các custom{" "}
        <span className="text-white font-medium">
          Native Modules (Swift / Kotlin)
        </span>{" "}
        để kết nối trực tiếp các tính năng đặc trưng của nền tảng; dựng mượt mà
        chuyển động UI/Animation từ bản thiết kế{" "}
        <span className="text-white font-medium">Figma</span> chỉn chu.
      </>,
      <>
        Thiết kế kiến trúc cơ sở dữ liệu{" "}
        <span className="text-white font-medium">SQL Server</span>; phát triển
        hệ thống Backend APIs vững chắc bằng{" "}
        <span className="text-white font-medium">.NET Framework</span> và các
        trang quản trị vận hành cao cấp bằng{" "}
        <span className="text-white font-medium">React.js / Next.js</span>.
      </>,
      <>
        Triển khai các giải pháp hạ tầng thực tế: Tích hợp cổng thanh toán{" "}
        <span className="text-white font-medium">VNPAY</span> bảo mật, hệ thống
        thông báo tự động{" "}
        <span className="text-white font-medium">OneSignal</span> và chấm công
        định vị thời gian thực{" "}
        <span className="text-white font-medium">
          GPS / Geofencing / Vision Camera
        </span>
        .
      </>,
    ],
    stack: [
      "React Native",
      "React.js",
      "Next.js",
      ".NET Framework",
      "Swift",
      "Kotlin",
      "SQL Server",
      "OneSignal",
      "VNPAY",
      "Geofencing",
    ],
    projects: [
      "GiHoTech Hotel & Loyalty Booking App",
      "Co.op Food Operational App",
      "Web Admin Management Portal",
    ],
  },
  {
    period: "07/2023 - 01/2024",
    role: "Mobile Developer",
    company: "WEALLNET Creative Agency",
    logo: "/logo_company/wealnet_logo.jpeg",
    summary:
      "Tham gia phát triển Siêu ứng dụng (Super App) đa tiện ích tích hợp mạng xã hội, giải trí số và luồng thương mại điện tử tại Việt Nam, tập trung giải quyết bài toán truyền tải nội dung đa phương tiện dung lượng lớn và xử lý dữ liệu thời gian thực mượt mà.",
    highlights: [
      <>
        Phát triển, bảo trì và nâng cấp các tính năng cốt lõi của siêu ứng dụng
        mạng xã hội <span className="text-white font-medium">WEALLNET</span> sử
        dụng nền tảng <span className="text-white font-medium">Flutter</span>.
      </>,
      <>
        Thiết kế & quản lý cơ sở dữ liệu{" "}
        <span className="text-white font-medium">SQL Server</span>, phát triển
        hệ thống dịch vụ backend và API bằng cấu trúc kết hợp giữa{" "}
        <span className="text-white font-medium">.NET Framework</span> và{" "}
        <span className="text-white font-medium">Golang</span>.
      </>,
      <>
        Tối ưu hóa kiến trúc ứng dụng cao cấp thông qua nghiên cứu và áp dụng
        giải pháp quản lý trạng thái{" "}
        <span className="text-white font-medium">MobX</span> và bộ nhớ đệm{" "}
        <span className="text-white font-medium">Redis</span> giúp tăng tốc độ
        phản hồi hệ thống.
      </>,
      <>
        Triển khai luồng tính năng nhắn tin thời gian thực (Real-time Chat) và
        thông báo đẩy tự động tích hợp thông qua hạ tầng mạng lưới của{" "}
        <span className="text-white font-medium">
          Firebase Cloud Messaging (FCM)
        </span>
        .
      </>,
    ],
    stack: [
      "Flutter",
      ".NET Framework",
      "Golang",
      "SQL Server",
      "Redis",
      "MobX",
      "Firebase FCM",
      "REST API",
    ],
    projects: ["WEALLNET Multi-service Super App"],
  },
  {
    period: "09/2022 - 02/2023",
    role: "Web Developer",
    company: "Boolfly Vietnam Company",
    logo: "/logo_company/boolfly.jpg",
    summary:
      "Tập trung phát triển và tùy biến các tính năng cho các nền tảng thương mại điện tử quy mô lớn, làm quen sâu sắc với luồng xử lý dữ liệu Big Data của doanh nghiệp và thiết kế giao diện responsive tối ưu chuyển đổi.",
    highlights: [
      <>
        Xây dựng, tùy biến và bảo trì các hệ thống giao diện Website E-commerce
        sử dụng{" "}
        <span className="text-white font-medium">
          HTML5, CSS3, JavaScript (ES6+)
        </span>{" "}
        kết hợp cấu trúc{" "}
        <span className="text-white font-medium">Magento Theme</span>.
      </>,
      <>
        Thực hiện tối ưu hóa hiệu năng cơ sở dữ liệu, import và xử lý đồng bộ
        hóa an toàn hơn{" "}
        <span className="text-white font-medium">500.000 bản ghi dữ liệu</span>{" "}
        (khách hàng, đơn hàng), bảo toàn tính toàn vẹn dữ liệu tuyệt đối.
      </>,
      <>
        Sử dụng thành thạo quy trình làm việc chuẩn Agile/Scrum với hệ thống
        quản lý mã nguồn Git-based workflow, Postman API testing và điều phối dự
        án liên chức năng.
      </>,
    ],
    stack: [
      "PHP",
      "Magento Framework",
      "JavaScript",
      "HTML5/CSS3",
      "MySQL",
      "Git",
      "Postman",
    ],
    projects: ["Enterprise E-commerce Systems", "Operational Dashboards"],
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
      <span className="text-[11px] uppercase tracking-[0.22em] text-white/60">
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
  // Xác định icon điều hướng trực quan tương ứng với vai trò của từng thẻ
  const getCardIcon = (role: string) => {
    if (role.includes("Mobile"))
      return <Smartphone className="w-4 h-4 text-emerald-300/80" />;
    if (role.includes("Backend") || role.includes("Full-stack"))
      return <Server className="w-4 h-4 text-emerald-300/80" />;
    return <Zap className="w-4 h-4 text-emerald-300/80" />;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="relative grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-5 sm:p-6 lg:grid-cols-[220px_1fr]"
    >
      {/* Cột trái của Card: Doanh nghiệp, Logo và Thời gian */}
      <div className="flex flex-col justify-between space-y-4 lg:space-y-0">
        <div className="space-y-4">
          <div className="relative flex h-16 w-36 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-3 shadow-inner">
            <Image
              src={withBasePath(experience.logo)}
              alt={`${experience.company} logo`}
              fill
              sizes="144px"
              className="object-contain p-2"
            />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-white/40">
              {experience.company}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-300/80 mt-1.5 font-medium bg-emerald-500/10 border border-emerald-500/20 w-fit px-2.5 py-1 rounded-full">
              <CalendarDays className="h-3.5 w-3.5" strokeWidth={2} />
              {experience.period}
            </div>
          </div>
        </div>
        <div className="hidden h-[40%] w-px bg-gradient-to-b from-white/10 to-transparent lg:block ml-4" />
      </div>

      {/* Cột phải của Card: Chi tiết công việc nội dung CV */}
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-300/90 font-mono text-xs uppercase tracking-widest">
            {getCardIcon(experience.role)}
            <span>
              {experience.role.includes("Full-stack")
                ? "Full-Stack Core"
                : "Core Speciality"}
            </span>
          </div>
          <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl tracking-tight">
            {experience.role}
          </h2>
          <p className="max-w-4xl text-sm leading-6 text-white/60 text-justify">
            {experience.summary}
          </p>
        </div>

        {/* Khối Highlights gạch đầu dòng gọn gàng, bắt mắt */}
        <div className="grid gap-3.5 grid-cols-1">
          <div className="space-y-2.5">
            {experience.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl border border-white/[0.04] bg-black/30 p-4 text-xs sm:text-sm leading-6 text-white/70 shadow-sm"
              >
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <p className="flex-1 text-justify">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tags Công nghệ */}
        <div className="space-y-2">
          <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
            Technologies Deployed
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-emerald-400/15 bg-emerald-400/5 px-2.5 py-1 text-xs font-medium text-emerald-200/90 tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Tags Sản phẩm thực tế bàn giao */}
        <div className="space-y-2 pt-1">
          <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
            Key Deliverables & Products
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.projects.map((project) => (
              <span
                key={project}
                className="rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1 text-xs text-white/50 italic font-mono"
              >
                {project}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden antialiased">
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        {/* Khối Header Giới thiệu Trên cùng của trang Experience */}
        <div className="grid gap-8 py-8 lg:grid-cols-[1fr_1fr] lg:items-end border-b border-white/5 pb-12">
          <div className="space-y-4">
            {/* <SectionLabel>Professional Journey</SectionLabel> */}
            <h1 className="max-w-xl text-[32px] font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-5xl font-inter">
              Architecting high-performance mobile products for fintech, retail,
              and loyalty systems.
            </h1>
          </div>

          <div className="space-y-6">
            <p className="text-sm sm:text-[15px] leading-7 text-white/60 text-justify">
              Kỹ sư phát triển phần mềm chuyên sâu vào mảng tối ưu đa nền tảng
              kết hợp thành thạo năng lực xử lý hệ thống{" "}
              <span className="text-white font-medium">
                Fullstack Engineering
              </span>
              . Sở hữu nền tảng công nghệ đa dạng bao gồm{" "}
              <span className="text-white font-medium">
                React Native, Flutter, Swift, Kotlin, .NET
              </span>
              , cùng khả năng tích hợp giải pháp nâng cao từ các cổng thanh toán
              quốc tế và thiết kế bảo mật ứng dụng toàn diện.
            </p>

            {/* Khối Grid số liệu thống kê */}
            <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-xl">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-4 sm:p-5 ${
                    index !== stats.length - 1 ? "border-r border-white/10" : ""
                  }`}
                >
                  <p className="text-2xl sm:text-3xl font-bold tracking-tight text-emerald-300">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs tracking-wider font-medium uppercase text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Các nút hành động */}
            <div className="flex flex-wrap gap-3">
              <a
                href={withBasePath("/NGUYEN-THI-NGOC-UYEN-CV.pdf")}
                download
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2.5 text-xs sm:text-sm font-medium text-emerald-200 transition-all duration-200 hover:bg-emerald-400/20 shadow-md shadow-emerald-500/5"
              >
                <Download className="h-4 w-4" strokeWidth={2} />
                Download Complete CV
              </a>
            </div>
          </div>
        </div>

        {/* Khối Danh sách các Thẻ Kinh nghiệm làm việc chi tiết */}
        <div className="mt-10 space-y-6">
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
