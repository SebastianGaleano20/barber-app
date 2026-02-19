"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="fixed z-50 bottom-5 right-5 p-3 rounded-full shadow-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 hover:scale-110 active:scale-95"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-blue-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  );
}