"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ScrollToTopProps {
    threshold?: number
    className?: string
}

export function ScrollToTop({
    threshold = 260,
    className,
}: ScrollToTopProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > threshold)
        }

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [threshold])

    return (
        <AnimatePresence>
            {isVisible ? (
                <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className={cn("fixed right-5 bottom-5 z-40 sm:right-8 sm:bottom-8", className)}
                >
                    <div className="absolute inset-0 rounded-full bg-[#EFFF00]/20 blur-xl" />
                    <Button
                        type="button"
                        size="icon"
                        aria-label="Scroll to top"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="relative h-12 w-12 rounded-full border border-[#EFFF00]/30 bg-[#EFFF00] text-black shadow-[0_0_24px_rgba(239,255,0,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-[#EFFF00]/90"
                    >
                        <ArrowUp className="h-4 w-4" />
                    </Button>
                </motion.div>
            ) : null}
        </AnimatePresence>
    )
}
