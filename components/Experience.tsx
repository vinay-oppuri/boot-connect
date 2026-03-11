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
                    <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-muted-foreground sm:mb-4 sm:text-sm">
                        Elite Talent At Your Fingertips
                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
                        Access <span className="text-primary">3 YEARS</span> of editing expertise in minutes
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:mt-8 sm:text-lg">
                        Stop gambling on unreliable freelancers. Our curated roster of editors has spent years mastering viewer retention, cinematic storytelling, and algorithmic growth so you can focus on creating.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
