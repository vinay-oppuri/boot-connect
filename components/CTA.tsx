"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="relative overflow-hidden bg-transparent py-16 sm:py-32" id="hire">
            <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:mb-6 sm:text-5xl md:text-7xl">
                        Ready to upgrade <br /> your videos?
                    </h2>

                    <p className="mx-auto mb-6 max-w-xl text-xs sm:text-base leading-relaxed text-muted-foreground sm:mb-12 sm:max-w-2xl md:text-lg lg:text-xl">
                        Join the creators and brands who have already scaled their YouTube channels and socials with our elite editors.
                    </p>

                    <Button
                        size="lg"
                        className="h-11 rounded-full px-6 text-sm font-bold shadow-[0_0_8px_rgba(239,255,0,0.2)] transition-all hover:shadow-[0_0_16px_rgba(239,255,0,0.3)] sm:h-12 sm:px-8 sm:text-base md:h-14 md:text-lg"
                    >
                        Start Hiring Editors
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
