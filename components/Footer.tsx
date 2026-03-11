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
        <footer className="relative backdrop-blur-sm">
            <div className="container relative mx-auto max-w-6xl px-6 py-10 md:px-4 sm:py-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-md">
                        <Link href="/" className="text-lg font-bold tracking-tight text-white sm:text-xl">
                            Boot<span className="text-primary">Connect</span>
                        </Link>
                        <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                            A focused network for creators hiring video editors with real taste, speed, and retention instincts.
                        </p>
                    </div>

                    <nav className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm text-gray-300">
                        {quickLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="rounded-full border border-border bg-card/50 px-3 py-1.5 sm:px-4 sm:py-2 transition-colors hover:border-primary/40 hover:text-white"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                    <p>{`\u00A9 ${year} BootConnect. Not a generic marketplace.`}</p>

                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="rounded-full border border-border bg-card/50 p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
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
