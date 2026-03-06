"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
                }`}
        >
            <div className="container mx-auto px-4 max-w-6xl">
                <div
                    className={`flex items-center justify-between rounded-full border border-white/10 ${scrolled ? "bg-black/60" : "bg-black/20"
                        } backdrop-blur-md px-3.5 py-3 shadow-lg`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 ml-4">
                        <span className="text-xl font-bold tracking-tight text-white">
                            Boot<span className="text-[#EFFF00]">Connect</span>
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <a href="#" className="hover:text-white transition-colors">
                            Home
                        </a>
                        <a href="#how-it-works" className="hover:text-white transition-colors">
                            Why Us
                        </a>
                        <a href="#reviews" className="hover:text-white transition-colors">
                            Reviews
                        </a>
                        <a href="#explore" className="hover:text-white transition-colors">
                            Editors
                        </a>
                        <a href="#hire" className="hover:text-white transition-colors">
                            Hire Now
                        </a>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <Button className="rounded-full shadow-[0_0_15px_rgba(239,255,0,0.3)] hover:shadow-[0_0_25px_rgba(239,255,0,0.5)] transition-all">
                            Join Now
                        </Button>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}
