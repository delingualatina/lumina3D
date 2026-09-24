"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-xl bg-neutral-800/40 border border-white/10 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Modo Claro" : "Modo Oscuro"}
      className={`relative p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center border ${
        isDark
          ? "bg-[#181820] text-amber-400 border-white/10 hover:bg-[#22222c] hover:border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.15)]"
          : "bg-white text-neutral-800 border-neutral-200/80 hover:bg-neutral-100 hover:text-amber-700 shadow-sm"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun
          className={`w-5 h-5 absolute transition-all duration-500 transform ${
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-600"
          }`}
        />
        <Moon
          className={`w-5 h-5 absolute transition-all duration-500 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-amber-400 fill-amber-400/20"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}
