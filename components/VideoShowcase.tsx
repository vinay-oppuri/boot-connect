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
        <section className="relative z-20 -mt-10 overflow-hidden bg-[#050505] py-8 sm:-mt-16 sm:py-12">
            <div className="relative flex w-full overflow-hidden pb-6 sm:pb-8">
                {/* Gradient Masks for smooth edge fading */}
                <div className="pointer-events-none absolute left-0 z-30 h-full w-12 bg-linear-to-r from-[#050505] to-transparent sm:w-24" />
                <div className="pointer-events-none absolute right-0 z-30 h-full w-12 bg-linear-to-l from-[#050505] to-transparent sm:w-24" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 35,
                    }}
                    className="flex w-max shrink-0 gap-3 px-4 hover:[animation-play-state:paused] sm:gap-4"
                >
                    {[...showcases, ...showcases].map((item, index) => (
                        <div
                            key={index}
                            className="group relative h-[170px] min-w-[240px] max-w-[400px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/5 sm:h-[200px] sm:min-w-[320px]"
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />

                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />

                            <div className="absolute inset-0 z-20 flex scale-50 items-center justify-center opacity-0 transition-opacity duration-300 group-hover:scale-100 group-hover:opacity-100">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFFF00]/90 shadow-[0_0_20px_rgba(239,255,0,0.5)] backdrop-blur-sm sm:h-12 sm:w-12">
                                    <Play className="ml-0.5 h-4 w-4 text-black sm:ml-1 sm:h-5 sm:w-5" fill="currentColor" />
                                </div>
                            </div>

                            <div className="absolute right-4 bottom-4 left-4 z-20 translate-y-2 transform transition-transform duration-300 group-hover:translate-y-0">
                                <div className="mb-1 text-[11px] font-semibold text-[#EFFF00] sm:text-xs">{item.category}</div>
                                <h3 className="text-base font-bold text-white sm:text-lg">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
