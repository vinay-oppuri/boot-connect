"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
    { href: "/", label: "Home" },
    { href: "/#how-it-works", label: "Why Us" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#explore", label: "Editors" },
    { href: "/#hire", label: "Hire Now" },
]

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

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
            className="fixed top-0 z-50 w-full transition-all duration-300 py-4 sm:py-6"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background to-transparent -z-10" />
            <div className="container mx-auto max-w-6xl px-4">
                <div className="flex items-center justify-between rounded-full border border-border bg-black/25 px-3 py-2.5 shadow-lg backdrop-blur-md sm:px-3.5 sm:py-3">
                    <Link
                        href="/"
                        className="ml-2 flex items-center gap-2 sm:ml-4"
                        onClick={() => {
                            if (pathname === "/") {
                                window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                        }}
                    >
                        <span className="text-base font-bold tracking-tight text-white sm:text-lg md:text-xl">
                            Boot<span className="text-primary">{" "}Connect</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-card/50 hover:text-white"
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
                            className="hidden h-10 rounded-full px-5 text-sm font-semibold shadow-[0_0_7px_rgba(var(--primary-rgb),0.14)] transition-all hover:shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)] md:inline-flex"
                        >
                            <Link href="/hire" aria-current={pathname === "/hire" ? "page" : undefined}>
                                Hire an Editor
                                <ArrowUpRight className="ml-1 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </Link>
                        </Button>
                        <button
                            type="button"
                            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-white transition-colors hover:bg-white/10 md:hidden"
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
                            <div className="mt-3 overflow-hidden rounded-[28px] border border-border bg-black/90 p-3 shadow-2xl backdrop-blur-xl">
                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card/50 hover:text-white"
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
                                <div className="mt-3 border-t border-border pt-3">
                                    <Button
                                        asChild
                                        className="h-11 w-full rounded-full text-sm font-semibold shadow-[0_0_7px_rgba(var(--primary-rgb),0.14)] transition-all hover:shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]"
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
