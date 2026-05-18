"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutme" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  // { label: "Contact", href: "#" },
];

export default function PortfolioNavbar() {
  const pathname = usePathname();
  return (
    <header className="w-full border-b border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Navigation */}
        <nav className="flex items-center gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                // onClick={() => setActive(item.label)}
                className={cn(
                  "relative rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
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

                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
