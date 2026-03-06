"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden" id="hire">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EFFF00]/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                        Ready to upgrade <br /> your videos?
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join the creators and brands who have already scaled their YouTube channels and socials with our elite editors.
                    </p>

                    <Button
                        size="lg"
                        className="rounded-full px-8 text-lg font-bold shadow-[0_0_20px_rgba(239,255,0,0.4)] hover:shadow-[0_0_40px_rgba(239,255,0,0.6)] transition-all h-14"
                    >
                        Start Hiring Editors
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>

            {/* Footer minimal */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-gray-600">
                <p>© {new Date().getFullYear()} EditHive. Not a generic marketplace.</p>
            </div>
        </section>
    )
}
