"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
    { href: "#", label: "Home" },
    { href: "#how-it-works", label: "Why Us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#explore", label: "Editors" },
    { href: "#hire", label: "Hire Now" },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""

        return () => {
            document.body.style.overflow = ""
        }
    }, [menuOpen])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
                }`}
        >
            <div className="container mx-auto max-w-6xl px-4">
                <div
                    className={`flex items-center justify-between rounded-full border border-white/10 ${scrolled ? "bg-black/60" : "bg-black/20"
                        } px-3 py-2.5 shadow-lg backdrop-blur-md sm:px-3.5 sm:py-3`}
                >
                    {/* Logo */}
                    <Link href="/" className="ml-2 flex items-center gap-2 sm:ml-4">
                        <span className="text-base font-bold tracking-tight text-white sm:text-xl">
                            Boot<span className="text-[#EFFF00]">Connect</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="transition-colors hover:text-white">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <Button className="hidden h-9 rounded-full px-3 text-xs shadow-[0_0_15px_rgba(239,255,0,0.3)] transition-all hover:shadow-[0_0_25px_rgba(239,255,0,0.5)] sm:h-10 sm:px-4 sm:text-sm md:inline-flex">
                            Join Now
                        </Button>
                        <button
                            type="button"
                            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
                        >
                            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden"
                        >
                            <div className="mt-3 overflow-hidden rounded-[28px] border border-white/10 bg-black/90 p-3 shadow-2xl backdrop-blur-xl">
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="rounded-2xl px-4 py-3 text-sm font-medium text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </nav>
                                <div className="mt-3 border-t border-white/10 pt-3">
                                    <Button className="h-10 w-full rounded-full text-sm shadow-[0_0_15px_rgba(239,255,0,0.3)] transition-all hover:shadow-[0_0_25px_rgba(239,255,0,0.5)]">
                                        Join Now
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}
