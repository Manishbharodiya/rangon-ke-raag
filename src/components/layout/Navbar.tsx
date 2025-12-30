"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Youtube, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) return null;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo - Typographic */}
                <Link
                    href="/"
                    className="flex flex-col items-start leading-none group"
                >
                    <span className="font-logo text-2xl md:text-3xl font-bold tracking-wider text-foreground group-hover:text-accent transition-colors">
                        RANGON KE
                    </span>
                    <span className="font-logo text-3xl md:text-4xl font-bold text-accent group-hover:text-foreground transition-colors -mt-1">
                        RAAG
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Socials & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-white/10 text-foreground hover:text-[#E1306C] transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-white/10 text-foreground hover:text-[#FF0000] transition-colors"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Theme Toggle Moved to Floating Component */}

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
                        aria-label="Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
                    >
                        <nav className="flex flex-col items-center py-8 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-foreground hover:text-accent font-serif"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-6 mt-4">
                                <a href="#" className="text-foreground hover:text-[#E1306C]">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-foreground hover:text-[#FF0000]">
                                    <Youtube className="w-6 h-6" />
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
