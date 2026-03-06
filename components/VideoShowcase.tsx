"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

const showcases = [
    {
        title: "Cinematic Reel",
        category: "Color Grading",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "YouTube Editing",
        category: "Content Creation",
        image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Product Ad",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Gaming Montage",
        category: "VFX & Sound",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Podcast Editing",
        category: "Multi-cam Sync",
        image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80&w=800",
    },
]

export function VideoShowcase() {
    return (
        <section className="py-12 bg-[#050505] overflow-hidden -mt-16 relative z-20">
            <div className="flex overflow-hidden pb-8 relative w-full">
                {/* Gradient Masks for smooth edge fading */}
                <div className="absolute left-0 w-24 h-full bg-linear-to-r from-[#050505] to-transparent z-30 pointer-events-none" />
                <div className="absolute right-0 w-24 h-full bg-linear-to-l from-[#050505] to-transparent z-30 pointer-events-none" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35,
                    }}
                    className="flex gap-4 px-4 w-max shrink-0 hover:[animation-play-state:paused]"
                >
                    {[...showcases, ...showcases].map((item, index) => (
                        <div
                            key={index}
                            className="group relative min-w-[280px] sm:min-w-[320px] max-w-[400px] h-[200px] rounded-xl overflow-hidden cursor-pointer shrink-0 border border-white/5"
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />

                            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
                                <div className="w-12 h-12 rounded-full bg-[#EFFF00]/90 flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(239,255,0,0.5)]">
                                    <Play className="w-5 h-5 text-black ml-1" fill="currentColor" />
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="text-xs font-semibold text-[#EFFF00] mb-1">{item.category}</div>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
