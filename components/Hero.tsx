"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export function Hero() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate data/asset fetching
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1200)
        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return (
            <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
                <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-6 text-center">
                    <Skeleton className="mb-4 h-6 w-40 rounded-full sm:mb-6 sm:h-9 sm:w-48" />
                    <Skeleton className="mx-auto h-20 w-[80%] max-w-4xl sm:h-32 md:h-52 md:w-[60%]" />
                    <Skeleton className="mx-auto mt-4 h-12 w-[90%] max-w-xl sm:mt-6 sm:h-20 sm:max-w-2xl" />
                    <Skeleton className="mt-6 flex flex-col sm:flex-row gap-3 h-10 w-36 rounded-full sm:mt-10 sm:h-12" />
                </div>
            </section>
        )
    }

    return (
        <section className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
            <div className="container relative z-10 mx-auto flex flex-col items-center px-4 md:px-6 text-center">
                <Link
                    href='https://www.instagram.com/jashwanth.naikk/'
                    target="_blank"
                    className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-gray-300 backdrop-blur-sm sm:mb-6 sm:px-4 sm:py-1.5 sm:text-sm"
                >
                    <span className="-ml-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-black sm:h-5 sm:w-5">
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
                    className="mx-auto max-w-4xl text-[40px] leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl"
                >
                    NOT JUST A{" "}
                    <span className="mt-2 block text-primary drop-shadow-[0_0_6px_rgba(239,255,0,0.25)]">
                        VIDEO EDITING MARKETPLACE
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-6 max-w-[320px] sm:max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 md:max-w-2xl lg:text-xl"
                >
                    Find elite video editors for YouTube, ads, reels and cinematic content.
                    The ultimate platform powered by world-class creative talent.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center w-full gap-3 px-4 sm:px-0"
                >
                    <Link href="/hire" className="inline-flex w-full sm:w-auto items-center justify-center h-11 sm:h-12 rounded-full text-sm font-semibold text-black bg-primary px-8 shadow-[0_0_8px_rgba(239,255,0,0.2)] transition-all hover:shadow-[0_0_14px_rgba(239,255,0,0.3)] md:text-base">
                        Hire an Editor
                    </Link>
                    <Link href="/join" className="inline-flex w-full sm:w-auto items-center justify-center h-11 sm:h-12 rounded-full text-sm font-normal text-white border border-border bg-card/30 px-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary md:text-base">
                        Join as Editor
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
