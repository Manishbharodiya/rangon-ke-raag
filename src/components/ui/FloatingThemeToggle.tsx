"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function FloatingThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg text-foreground hover:scale-110 transition-all duration-300"
            aria-label="Toggle Theme"
        >
            <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute top-3 left-3 h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
