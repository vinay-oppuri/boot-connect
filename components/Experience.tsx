"use client"

import { motion } from "framer-motion"

export function Experience() {
    return (
        <section className="relative overflow-hidden bg-transparent py-16 sm:py-24">
            <div className="container relative z-10 mx-auto px-6 md:px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:mb-4 sm:text-xs md:text-sm md:tracking-[0.35em]">
                        Elite Talent At Your Fingertips
                    </div>

                    <h2 className="text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Access <span className="text-primary">4 YEARS</span> of editing expertise in minutes
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-xs sm:text-sm leading-relaxed text-muted-foreground sm:mt-8 md:text-base lg:text-lg">
                        Stop gambling on unreliable freelancers. Our curated roster of editors has spent years mastering viewer retention, cinematic storytelling, and algorithmic growth so you can focus on creating.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
