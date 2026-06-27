"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/lib/language-context";

const navItems = [
  { label: { en: "Home", vi: "Trang chủ" }, href: "/" },
  { label: { en: "About", vi: "Giới thiệu" }, href: "/aboutme" },
  { label: { en: "Projects", vi: "Dự án" }, href: "/projects" },
  { label: { en: "Experience", vi: "Kinh nghiệm" }, href: "/experience" },
  { label: { en: "Skills", vi: "Kỹ năng" }, href: "/skills" },
  // { label: "Contact", href: "#" },
];

export default function PortfolioNavbar() {
  const pathname = usePathname();
  const { language, isVietnamese, setLanguage } = useLanguage();

  return (
    <header className="w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:py-5">
        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-2 sm:gap-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                // onClick={() => setActive(item.label)}
                className={cn(
                  "relative rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-3",
                  "border border-transparent",
                  "text-white/70 hover:text-white",
                  isActive &&
                    "liquid-glass rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-medium text-white whitespace-nowrap self-start",
                )}
              >
                {/* Active Glow */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                )}

                <span className="relative z-10">{item.label[language]}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/70">
            <Languages className="h-4 w-4 text-emerald-300" strokeWidth={1.7} />
            <span
              className={cn(
                "transition-colors",
                !isVietnamese ? "text-white" : "text-white/45",
              )}
            >
              EN
            </span>
            <Switch
              checked={isVietnamese}
              onCheckedChange={(checked) => setLanguage(checked ? "vi" : "en")}
              aria-label="Switch language between English and Vietnamese"
              className="data-[state=checked]:bg-emerald-400"
            />
            <span
              className={cn(
                "transition-colors",
                isVietnamese ? "text-white" : "text-white/45",
              )}
            >
              VI
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
