"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-24 bg-muted/20 relative overflow-hidden">
            <div className="container px-4 grid md:grid-cols-2 gap-12 items-center">

                {/* Image / Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl"
                >
                    {/* Placeholder for Artist Image */}
                    <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                    <Image
                        src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop"
                        alt="Monika Mahto Painting"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                        <p className="text-white/80 font-serif italic text-lg">"Art is not what you see, but what you make others see."</p>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Behind the Canvas</h2>
                    <div className="h-1 w-20 bg-accent mb-8" />

                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            I am <span className="text-foreground font-semibold">Monika Mahto</span>, an artist driven by the rhythm of colors. My journey explores the delicate balance between chaos and order, using <strong>Oil</strong>, <strong>Acrylics</strong>, and <strong>Watercolors</strong> to capture fleeting moments of emotion.
                        </p>
                        <p>
                            Under the brand <strong>"Rangon Ke Raag"</strong>, I aim to create visual symphonies—where every stroke plays a note, and every canvas sings a song. Whether it's the texture of a landscape or the abstraction of a thought, my work is a dialogue with the soul.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                        <div className="text-center">
                            <span className="block text-3xl font-serif font-bold text-accent">5+</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest">Years Exp.</span>
                        </div>
                        <div className="text-center border-l border-border">
                            <span className="block text-3xl font-serif font-bold text-accent">50+</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest">Projects</span>
                        </div>
                        <div className="text-center border-l border-border">
                            <span className="block text-3xl font-serif font-bold text-accent">100%</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest">Passion</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
