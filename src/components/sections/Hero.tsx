"use client";

import { motion } from "framer-motion";
import { ArrowDown, MoveRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.15),transparent_70%)]" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

            <div className="container relative z-10 flex flex-col items-center text-center px-4">
                {/* Subtitle */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-accent text-sm md:text-base tracking-[0.2em] uppercase font-medium mb-6"
                >
                    Fine Art Portfolio
                </motion.span>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50 mb-8"
                >
                    Rangon Ke<br />
                    <span className="italic font-light">Raag</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-xl text-muted-foreground text-lg md:text-xl leading-relaxed mb-10"
                >
                    Exploring the symphony of colors through the eyes of <br className="hidden md:block" />
                    <span className="text-foreground font-semibold">Monika Mahto</span>.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <Link
                        href="#gallery"
                        className="group flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                        View Gallery
                        <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-muted-foreground tracking-widest uppercase">Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-5 h-5 text-accent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
