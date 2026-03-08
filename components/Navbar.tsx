"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
    { href: "/", label: "Home" },
    { href: "/#how-it-works", label: "Why Us" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#explore", label: "Editors" },
    { href: "/#hire", label: "Hire Now" },
]

export function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

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
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled ? "py-3 sm:py-4" : "py-4 sm:py-6"
            )}
        >
            <div className="container mx-auto max-w-6xl px-4">
                <div
                    className={cn(
                        "flex items-center justify-between rounded-full border border-white/10 px-3 py-2.5 shadow-lg backdrop-blur-md sm:px-3.5 sm:py-3",
                        scrolled ? "bg-black/70" : "bg-black/25"
                    )}
                >
                    <Link
                        href="/"
                        className="ml-2 flex items-center gap-2 sm:ml-4"
                        onClick={() => {
                            if (pathname === "/") {
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        }}
                    >
                        <span className="text-base font-bold tracking-tight text-white sm:text-xl">
                            Boot<span className="text-[#EFFF00]">Connect</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                                    item.href === "/" && pathname === "/"
                                        ? "bg-white/10 text-white"
                                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                                )}
                                onClick={() => {
                                    if (item.href === "/" && pathname === "/") {
                                        window.scrollTo({ top: 0, behavior: "smooth" })
                                    }
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <Button
                            asChild
                            size="sm"
                            className={cn(
                                "hidden h-10 rounded-full px-5 text-sm font-semibold shadow-[0_0_18px_rgba(239,255,0,0.28)] transition-all hover:shadow-[0_0_32px_rgba(239,255,0,0.5)] md:inline-flex",
                                pathname === "/join" && "ring-1 ring-[#EFFF00]/50 ring-offset-0"
                            )}
                        >
                            <Link href="/join" aria-current={pathname === "/join" ? "page" : undefined}>
                                Join as Editor
                                <ArrowUpRight className="ml-1 h-4 w-4" />
                            </Link>
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
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className={cn(
                                                "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                                                item.href === "/" && pathname === "/"
                                                    ? "bg-white/10 text-white"
                                                    : "text-gray-200 hover:bg-white/5 hover:text-white"
                                            )}
                                            onClick={() => {
                                                setMenuOpen(false)

                                                if (item.href === "/" && pathname === "/") {
                                                    window.scrollTo({ top: 0, behavior: "smooth" })
                                                }
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                                <div className="mt-3 border-t border-white/10 pt-3">
                                    <Button
                                        asChild
                                        className="h-11 w-full rounded-full text-sm font-semibold shadow-[0_0_18px_rgba(239,255,0,0.28)] transition-all hover:shadow-[0_0_32px_rgba(239,255,0,0.5)]"
                                    >
                                        <Link href="/join" onClick={() => setMenuOpen(false)}>
                                            Join as Editor
                                            <ArrowUpRight className="ml-1 h-4 w-4" />
                                        </Link>
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
