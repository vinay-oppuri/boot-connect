"use client"

import { motion } from "framer-motion"

export function Experience() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#EFFF00]/5 to-transparent blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4">
                        Elite Talent At Your Fingertips
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Access <span className="text-[#EFFF00]">3 YEARS</span> of editing expertise in minutes
                    </h2>

                    <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Stop gambling on unreliable freelancers. Our curated roster of editors has spent years mastering viewer retention, cinematic storytelling, and algorithmic growth so you can focus on creating.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
