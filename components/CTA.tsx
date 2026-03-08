"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#050505] py-20 sm:py-32" id="hire">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EFFF00]/10 blur-[150px] sm:h-[600px] sm:w-[600px]" />

            <div className="container relative z-10 mx-auto px-6 md:px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-white sm:mb-6 sm:text-5xl md:text-7xl">
                        Ready to upgrade <br /> your videos?
                    </h2>

                    <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-gray-400 sm:mb-12 sm:max-w-2xl sm:text-lg md:text-xl">
                        Join the creators and brands who have already scaled their YouTube channels and socials with our elite editors.
                    </p>

                    <Button
                        size="lg"
                        className="h-11 rounded-full px-6 text-sm font-bold shadow-[0_0_20px_rgba(239,255,0,0.4)] transition-all hover:shadow-[0_0_40px_rgba(239,255,0,0.6)] sm:h-12 sm:px-8 sm:text-base md:h-14 md:text-lg"
                    >
                        Start Hiring Editors
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
