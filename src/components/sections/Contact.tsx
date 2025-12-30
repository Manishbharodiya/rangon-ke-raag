"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-background relative border-t border-border/40">
            <div className="container px-4 max-w-4xl mx-auto text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">Get in Touch</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-8">Commission An Artwork</h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        Interested in a custom piece or collaboration? Let's bring your vision to life on canvas.
                    </p>
                </motion.div>

                {/* Social Links Big */}
                <div className="flex justify-center gap-8 mb-16">
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-[#E1306C] transition-colors duration-300">
                            <Instagram className="w-8 h-8 text-foreground group-hover:text-white" />
                        </div>
                        <span className="text-sm font-medium">Instagram</span>
                    </a>

                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-[#FF0000] transition-colors duration-300">
                            <Youtube className="w-8 h-8 text-foreground group-hover:text-white" />
                        </div>
                        <span className="text-sm font-medium">YouTube</span>
                    </a>

                    <a
                        href="mailto:contact@rangonkeraag.com"
                        className="flex flex-col items-center gap-3 group"
                    >
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                            <Mail className="w-8 h-8 text-foreground group-hover:text-accent-foreground" />
                        </div>
                        <span className="text-sm font-medium">Email</span>
                    </a>
                </div>

                {/* Simple Form UI */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card p-8 rounded-2xl border border-border text-left"
                >
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <input type="text" className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Your Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input type="email" className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="your@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea rows={4} className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors" placeholder="Tell me about the artwork you need..." />
                        </div>
                        <button className="w-full bg-foreground text-background font-bold py-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
