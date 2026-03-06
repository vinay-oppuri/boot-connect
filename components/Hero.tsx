"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 bg-[#050505] -z-20">
                {/* Abstract dark mountain/shape gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black to-transparent z-0"></div>
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#EFFF00]/5 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -z-10"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm"
                >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EFFF00] text-black">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            alt="Avatar"
                            className="w-full h-full rounded-full"
                        />
                    </span>
                    Jashwanth presents
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
                >
                    NOT JUST A{" "}
                    <span className="block mt-2 text-[#EFFF00] drop-shadow-[0_0_15px_rgba(239,255,0,0.5)]">
                        VIDEO EDITING MARKETPLACE
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Find elite video editors for YouTube, ads, reels and cinematic content.
                    The ultimate platform powered by world-class creative talent.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10"
                >
                    <Button size="lg" className="rounded-full px-8 text-lg font-bold shadow-[0_0_20px_rgba(239,255,0,0.4)] hover:shadow-[0_0_35px_rgba(239,255,0,0.6)] transition-all h-14">
                        Hire an Editor
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
