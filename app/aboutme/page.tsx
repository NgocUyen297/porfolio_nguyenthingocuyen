"use client";

import React from "react";
import {
  Crown,
  Phone,
  Mail,
  Globe,
  Award,
  Milestone,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { withBasePath } from "@/lib/site-path";

const aboutCopy = {
  en: {
    roleLine1: "FullStack",
    roleLine2: "Developer",
    slogan: '"Build in silence, let success make the noise."',
    stats: ["Experiences", "Project Done", "Clients"],
    connect: "Connect",
    toeicLabel: "TOEIC SCORE",
    toeicValue: "690 Certificate",
    university: "HO CHI MINH CITY OPEN UNIVERSITY",
    major: "Information technology",
    paragraphs: [
      <>
        Hi there! I'm a{" "}
        <span className="text-white font-semibold">Fullstack Developer</span>{" "}
        specializing in{" "}
        <span className="text-white font-semibold">
          mobile application development
        </span>
        , driven by the passion to turn complex backend logic into seamless,
        high-performance mobile experiences. With strong expertise in{" "}
        <span className="text-white font-medium underline decoration-white/30 underline-offset-4">
          React Native, Flutter, Next.js, .NET
        </span>
        , and <span className="text-white font-semibold">SQL Server</span>, I
        focus on building scalable applications powered by real-time systems,
        modular architecture, and custom native integrations (Swift/Kotlin).
      </>,
      <>
        Over the past <span className="text-white font-semibold">3+ years</span>
        , I’ve had the privilege of engineering real-world solutions across{" "}
        <span className="text-white font-semibold">
          FinTech (cryptocurrency), loyalty systems, hospitality, workforce
          management, retail
        </span>
        , and <span className="text-white font-semibold">social platforms</span>
        . I don't just write code; I build tools that solve actual business
        challenges and elevate user engagement.
      </>,
      <>
        Communication is just as important to me as clean code. With a{" "}
        <span className="text-white font-semibold">TOEIC score of 690</span>, I
        comfortably navigate daily English-working environments, dissect complex
        technical documentation, and collaborate smoothly in cross-functional or
        international teams. When I'm not coding, you'll probably find me
        exploring the latest mobile UI/UX trends, optimizing my dev setup, or
        deep-diving into new tech stacks.
      </>,
    ],
  },
  vi: {
    roleLine1: "FullStack",
    roleLine2: "Developer",
    slogan: '"Lặng lẽ xây dựng, để thành công tự lên tiếng."',
    stats: ["Kinh nghiệm", "Dự án", "Khách hàng"],
    connect: "Liên hệ",
    toeicLabel: "ĐIỂM TOEIC",
    toeicValue: "Chứng chỉ 690",
    university: "ĐẠI HỌC MỞ TP. HỒ CHÍ MINH",
    major: "Công nghệ thông tin",
    paragraphs: [
      <>
        Xin chào! Tôi là{" "}
        <span className="text-white font-semibold">Fullstack Developer</span>{" "}
        chuyên về{" "}
        <span className="text-white font-semibold">
          phát triển ứng dụng mobile
        </span>
        , với niềm yêu thích biến các xử lý backend phức tạp thành trải nghiệm
        mobile mượt mà, hiệu năng cao. Với kinh nghiệm ở{" "}
        <span className="text-white font-medium underline decoration-white/30 underline-offset-4">
          React Native, Flutter, Next.js, .NET
        </span>{" "}
        và <span className="text-white font-semibold">SQL Server</span>, tôi tập
        trung xây dựng ứng dụng có khả năng mở rộng, dựa trên hệ thống thời gian
        thực, kiến trúc module và tích hợp native tùy chỉnh (Swift/Kotlin).
      </>,
      <>
        Trong hơn <span className="text-white font-semibold">3 năm</span>, tôi
        đã tham gia xây dựng các giải pháp thực tế trong{" "}
        <span className="text-white font-semibold">
          FinTech (cryptocurrency), loyalty systems, hospitality, quản lý nhân
          sự, retail
        </span>{" "}
        và <span className="text-white font-semibold">social platforms</span>.
        Tôi không chỉ viết code; tôi xây dựng công cụ giải quyết bài toán kinh
        doanh thật và nâng cao tương tác người dùng.
      </>,
      <>
        Giao tiếp quan trọng với tôi không kém gì code sạch. Với{" "}
        <span className="text-white font-semibold">TOEIC 690</span>, tôi có thể
        làm việc trong môi trường sử dụng tiếng Anh hằng ngày, đọc hiểu tài liệu
        kỹ thuật phức tạp và phối hợp tốt với team đa chức năng hoặc quốc tế.
        Ngoài thời gian coding, tôi thường tìm hiểu xu hướng UI/UX mobile, tối
        ưu môi trường dev và khám phá các tech stack mới.
      </>,
    ],
  },
};

export default function AboutMe() {
  const { language } = useLanguage();
  const copy = aboutCopy[language];

  return (
    <>
      {/* Tích hợp trực tiếp Fonts & CSS Animations theo đúng yêu cầu */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
        @import url("https://db.onlinewebfonts.com/c/8b75d9dcff6a48c35a46656192adf019?family=FSP+DEMO+-+PODIUM+Sharp+4.11");

        /* Đăng ký các biến font và class tiện ích */
        .font-podium {
          font-family: "FSP DEMO - PODIUM Sharp 4.11", sans-serif !important;
        }
        .font-inter {
          font-family: "Inter", sans-serif !important;
        }

        /* Keyframes định nghĩa từ yêu cầu */
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Các class hiệu ứng đồng bộ hóa */
        .animate-fade-up {
          opacity: 0;
          animation: fade-up 0.8s ease-out forwards;
        }
        .animate-fade-up-delay-1 {
          opacity: 0;
          animation: fade-up 0.8s ease-out 0.2s forwards;
        }
        .animate-fade-up-delay-2 {
          opacity: 0;
          animation: fade-up 0.8s ease-out 0.4s forwards;
        }
        .animate-fade-up-delay-3 {
          opacity: 0;
          animation: fade-up 0.8s ease-out 0.6s forwards;
        }
        .animate-fade-up-delay-4 {
          opacity: 0;
          animation: fade-up 0.8s ease-out 0.8s forwards;
        }

        /* Khóa viewport cố định tràn màn hình */
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100vh;
          overflow: hidden;
          background-color: #000;
        }

        /* Thanh cuộn tùy chỉnh siêu mỏng cho khối nội dung phải */
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 2px;
        }
      `}</style>

      <div className="relative h-screen w-screen overflow-hidden bg-black text-white font-inter select-none">
        {/* Background Looping Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-40"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              type="video/mp4"
            />
          </video>
          {/* Lớp phủ Gradient tối ưu hiển thị chữ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
        </div>

        {/* Cấu trúc nội dung chính Overlay phía trên Video */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          <main className="flex-1 flex flex-col lg:flex-row justify-between items-start pt-12 md:pt-20 px-6 sm:px-10 lg:px-16 max-w-7xl w-full gap-10 lg:gap-8 mx-auto h-[calc(100vh-60px)] overflow-hidden">
            {/* ================= CỘT TRÁI: BRANDING & HEADING ================= */}
            <div className="flex flex-col justify-start max-w-xl w-full shrink-0">
              {/* Tên hiển thị phía trên tiêu đề chính */}
              <div className="animate-fade-up flex items-center gap-2 mb-3">
                <Crown className="w-4 h-4 text-white/70" />
                <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-semibold">
                  NGUYEN THI NGOC UYEN
                </span>
              </div>

              {/* Tiêu đề chính lớn */}
              <h1 className="animate-fade-up-delay-1 font-podium text-white uppercase leading-[0.92] tracking-tight text-[clamp(2.5rem,7vw,6.5rem)] flex flex-col">
                <span>{copy.roleLine1}</span>
                <span>{copy.roleLine2}</span>
              </h1>

              {/* Câu Slogan in nghiêng đặt gọn gàng */}
              <p className="animate-fade-up-delay-2 mt-4 text-white/60 text-sm sm:text-base italic">
                {copy.slogan}
              </p>

              {/* Chỉ số Thống kê */}
              <div className="animate-fade-up-delay-3 mt-8 sm:mt-12 flex flex-wrap gap-8 sm:gap-12">
                <div>
                  <div className="font-inter text-white text-3xl sm:text-4xl font-bold tracking-tight">
                    3+
                  </div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mt-1 font-semibold">
                    {copy.stats[0]}
                  </div>
                </div>
                <div>
                  <div className="font-inter text-white text-3xl sm:text-4xl font-bold tracking-tight">
                    10+
                  </div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mt-1 font-semibold">
                    {copy.stats[1]}
                  </div>
                </div>
                <div>
                  <div className="font-inter text-white text-3xl sm:text-4xl font-bold tracking-tight">
                    8+
                  </div>
                  <div className="text-white/40 text-[10px] tracking-widest uppercase mt-1 font-semibold">
                    {copy.stats[2]}
                  </div>
                </div>
              </div>
            </div>

            {/* ================= CỘT PHẢI: AVATAR, CERTIFICATES & DESCRIPTIONS ================= */}
            <div className="animate-fade-up-delay-4 w-full lg:max-w-xl bg-white/[0.01] backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-6 max-h-[75vh] lg:max-h-[78vh] overflow-y-auto custom-scrollbar shadow-2xl">
              {/* 1. Khu vực Avatar trên cùng & Liên hệ nhanh */}
              <div className="flex flex-col sm:flex-row items-center gap-5 pb-2">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-sm opacity-40" />
                  <img
                    src={withBasePath("/cv_avatar.jpg")}
                    alt="Avatar"
                    className="relative w-20 h-20 rounded-full object-cover border border-white/30"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1.5">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-white/40">
                    {copy.connect}
                  </h3>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-white/70">
                    <a
                      href="tel:0399088051"
                      className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 opacity-60" /> 0399 088 051
                    </a>
                    <a
                      href="mailto:nguyenuyen352021@gmail.com"
                      className="flex items-center gap-1.5 hover:text-white transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 opacity-60" />{" "}
                      nguyenuyen352021@gmail.com
                    </a>
                    {/* <a
                      href="https://ngocuyen297.github.io/porfolio_nguyenthingocuyen/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 hover:text-white transition-colors w-full sm:w-auto mt-0.5 text-white/90"
                    >
                      <Globe className="w-3.5 h-3.5 opacity-60 mr-0.5" /> Visit
                      Portfolio <ArrowUpRight className="w-3 h-3 opacity-60" />
                    </a> */}
                  </div>
                </div>
              </div>

              {/* 2. Giao diện Chứng chỉ nằm ngay dưới Avatar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <Award className="w-5 h-5 text-white/60 shrink-0" />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">
                      {copy.toeicLabel}
                    </div>
                    <div className="text-sm font-bold text-white tracking-wide">
                      {copy.toeicValue}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-white/[0.02] border border-white/5 rounded-xl">
                  <Milestone className="w-5 h-5 text-white/60 shrink-0" />
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">
                      {copy.university}
                    </div>
                    <div className="text-sm font-bold text-white tracking-wide">
                      {copy.major}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Toàn bộ các đoạn Text Mô tả với các Keyword được làm nổi bật */}
              <div className="space-y-4 text-xs sm:text-sm text-white/70 leading-relaxed text-justify pr-1">
                {copy.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </main>

          {/* Khoảng trống đệm chân trang */}
          <div className="h-6 sm:h-10 lg:h-14" />
        </div>
      </div>
    </>
  );
}
