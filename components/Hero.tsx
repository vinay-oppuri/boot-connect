"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 bg-transparent -z-20">
                {/* Abstract dark mountain/shape gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black to-transparent z-0"></div>
                <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-[#EFFF00]/5 blur-[120px] -z-10 sm:h-125 sm:w-125"></div>
                <div className="absolute top-1/3 right-1/4 h-70 w-70 rounded-full bg-white/5 blur-[100px] -z-10 sm:h-100 sm:w-100"></div>
            </div>

            <div className="container relative z-10 mx-auto flex flex-col items-center px-6 md:px-4 text-center">
                <Link
                    href = 'https://www.instagram.com/jashwanth.naikk/'
                    target="_blank"
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2! py-1 text-xs text-gray-300 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-sm"
                >
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#EFFF00] text-black sm:h-5 sm:w-5">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            alt="Avatar"
                            className="w-full h-full rounded-full"
                        />
                    </span>
                    Jashwanth presents
                    <ArrowUpRight className="h-3 w-3" />
                </Link>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto max-w-4xl text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl"
                >
                    NOT JUST A{" "}
                    <span className="mt-2 block text-[#EFFF00] drop-shadow-[0_0_15px_rgba(239,255,0,0.5)]">
                        VIDEO EDITING MARKETPLACE
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-400 sm:mt-6 sm:max-w-2xl sm:text-lg md:text-xl"
                >
                    Find elite video editors for YouTube, ads, reels and cinematic content.
                    The ultimate platform powered by world-class creative talent.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 sm:mt-10"
                >
                    <Link href="/hire" className="h-11 rounded-full text-base! text-black bg-[#EFFF00] py-3 font-bold shadow-[0_0_20px_rgba(239,255,0,0.4)] transition-all hover:shadow-[0_0_35px_rgba(239,255,0,0.6)] sm:h-12 sm:px-8 sm:text-base md:h-14 md:text-lg">
                        Hire an Editor
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
