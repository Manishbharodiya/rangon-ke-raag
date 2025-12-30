"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Placeholder data - In real app, this would come from a CMS or config
const categories = ["All", "Oil", "Acrylic", "Water Color", "Sketches"];

const works = [
    { id: 1, title: "Sunset Serenity", category: "Oil", src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Abstract Minds", category: "Acrylic", src: "https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Flowing River", category: "Water Color", src: "https://images.unsplash.com/photo-1578321272176-b7bbc06b9bdb?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Charcoal Dreams", category: "Sketches", src: "https://images.unsplash.com/photo-1633206260159-83921b6d17b5?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Golden Hour", category: "Oil", src: "https://images.unsplash.com/photo-1579783483458-83d02161294e?q=80&w=800&auto=format&fit=crop" },
    { id: 6, title: "Urban Chaos", category: "Acrylic", src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop" },
];

export function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredWorks = activeCategory === "All"
        ? works
        : works.filter(work => work.category === activeCategory);

    return (
        <section id="gallery" className="py-24 bg-background relative">
            <div className="container px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl font-bold mb-4"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        className="h-1 bg-accent mx-auto"
                    />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrapjustify-center gap-4 mb-12">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border border-transparent",
                                    activeCategory === category
                                        ? "bg-accent text-accent-foreground border-accent"
                                        : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border-border"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredWorks.map((work) => (
                            <motion.div
                                layout
                                key={work.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-muted cursor-pointer"
                            >
                                <Image
                                    src={work.src}
                                    alt={work.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                    <h3 className="font-serif text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {work.title}
                                    </h3>
                                    <p className="text-accent text-sm uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {work.category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
