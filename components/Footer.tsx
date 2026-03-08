import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { BsTwitterX } from "react-icons/bs"

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/#how-it-works", label: "Why Us" },
    { href: "/#reviews", label: "Reviews" },
    { href: "/#explore", label: "Editors" },
    { href: "/join", label: "Join" },
]

const socialLinks = [
    {
        href: "https://www.instagram.com/thebootconnect.in/",
        label: "Instagram",
        icon: <Instagram className="h-4 w-4" />,
    },
    {
        href: "https://x.com",
        label: "X (Twitter)",
        icon: <BsTwitterX className="h-4 w-4" />,
    },
    {
        href: "https://linkedin.com",
        label: "LinkedIn",
        icon: <Linkedin className="h-4 w-4" />,
    },
]

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="relative border-t border-white/10 bg-[#050505]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,255,0,0.1),transparent_38%)]" />

            <div className="container relative mx-auto max-w-6xl px-6 py-10 md:px-4 sm:py-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-md">
                        <Link href="/" className="text-xl font-bold tracking-tight text-white">
                            Boot<span className="text-[#EFFF00]">Connect</span>
                        </Link>
                        <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
                            A focused network for creators hiring video editors with real taste, speed, and retention instincts.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-3 text-sm text-gray-300">
                        {quickLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-[#EFFF00]/40 hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>{`\u00A9 ${year} BootConnect. Not a generic marketplace.`}</p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="rounded-full border border-white/10 bg-white/5 p-2.5 text-gray-400 transition-colors hover:border-[#EFFF00]/40 hover:text-[#EFFF00]"
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
