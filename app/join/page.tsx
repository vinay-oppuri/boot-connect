
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clapperboard, FolderKanban, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "Join BootConnect | Apply as an Editor",
    description: "Share your best edits and apply to join the BootConnect editor roster.",
}

const benefits = [
    {
        icon: Clapperboard,
        title: "Portfolio-first review",
        description: "We care about pacing, story instinct, and polish more than buzzwords.",
    },
    {
        icon: FolderKanban,
        title: "Real creator-fit",
        description: "Show the work that proves you can cut for YouTube, shorts, ads, or documentaries.",
    },
    {
        icon: Sparkles,
        title: "Taste matters",
        description: "Strong hooks, sharp sound design, and clean finishing are what stand out here.",
    },
]

const reviewPoints = [
    "A portfolio site or Drive folder with 2 to 5 finished edits or before/after examples.",
    "Clear specialization so creators know where you are strongest.",
    "Work that shows retention thinking, not just flashy transitions.",
]

const inputClassName =
    "mt-2 h-12 w-full rounded-2xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#EFFF00]/50 focus:bg-black/60"

const textareaClassName =
    "mt-2 min-h-32 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#EFFF00]/50 focus:bg-black/60"

export default function JoinPage() {
    return (
        <main className="relative overflow-hidden bg-[#050505] pt-32 pb-20 sm:pt-36">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/[0.03] to-transparent" />
                <div className="absolute left-[12%] top-36 h-72 w-72 rounded-full bg-[#EFFF00]/10 blur-[140px]" />
                <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-white/[0.06] blur-[120px]" />
            </div>

            <section className="container relative mx-auto max-w-6xl px-6 md:px-4">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div className="max-w-2xl">
                        <Badge variant="secondary" className="border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] tracking-[0.2em] text-gray-200 uppercase">
                            Join the editor network
                        </Badge>

                        <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                            Send your sharpest edits.
                            <span className="mt-2 block text-[#EFFF00] drop-shadow-[0_0_18px_rgba(239,255,0,0.35)]">
                                Get considered for BootConnect.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                            We are building a curated editor roster for creators, brands, and growth teams that need more than basic cuts. Share the work that best represents your taste and range.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg" className="rounded-full px-6 text-sm font-semibold shadow-[0_0_20px_rgba(239,255,0,0.35)] hover:shadow-[0_0_34px_rgba(239,255,0,0.5)]">
                                <a href="#application">
                                    Start your application
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full border-white/15 px-6 text-sm">
                                <Link href="/#explore">Browse the current vibe</Link>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {benefits.map((item) => {
                                const Icon = item.icon

                                return (
                                    <div
                                        key={item.title}
                                        className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40">
                                            <Icon className="h-5 w-5 text-[#EFFF00]" />
                                        </div>
                                        <h2 className="mt-4 text-base font-semibold text-white sm:text-lg">{item.title}</h2>
                                        <p className="mt-2 text-xs leading-5 text-gray-400 sm:text-sm">{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-8 rounded-[32px] border border-white/10 bg-black/30 p-6 sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                                What to include
                            </p>
                            <ul className="mt-5 space-y-4">
                                {reviewPoints.map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-xs leading-5 text-gray-300 sm:text-sm">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#EFFF00]" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        id="application"
                        className="rounded-[32px] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
                    >
                        <div className="mb-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
                                Application form
                            </p>
                            <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                                Apply to join the roster
                            </h2>
                            <p className="mt-3 text-xs leading-5 text-gray-400 sm:text-sm">
                                Drop the essentials plus a portfolio site or Drive link to the work you want us to review.
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-xs font-medium text-gray-200">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    className={inputClassName}
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-xs font-medium text-gray-200">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    className={inputClassName}
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="portfolio-link" className="text-xs font-medium text-gray-200">
                                    Portfolio site or Google Drive link
                                </label>
                                <input
                                    type="url"
                                    id="portfolio-link"
                                    name="portfolio-link"
                                    className={inputClassName}
                                    placeholder="https://yourportfolio.com or https://drive.google.com/..."
                                />
                            </div>

                            <div>
                                <label htmlFor="specialty" className="text-xs font-medium text-gray-200">
                                    Editing specialty
                                </label>
                                <input
                                    type="text"
                                    id="specialty"
                                    name="specialty"
                                    className={inputClassName}
                                    placeholder="YouTube long-form, shorts, ads, cinematic storytelling..."
                                />
                            </div>

                            <div>
                                <label htmlFor="notes" className="text-xs font-medium text-gray-200">
                                    Notes about your work
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    className={textareaClassName}
                                    placeholder="Mention tools, turnaround strengths, channels you have edited for, or anything else worth reviewing."
                                />
                            </div>

                            <div className="rounded-2xl border border-[#EFFF00]/15 bg-[#EFFF00]/[0.06] px-4 py-3 text-xs leading-5 text-gray-300">
                                Tip: a tight folder beats a huge folder. Lead with the work that best shows your judgment.
                            </div>

                            <Button
                                type="button"
                                className="h-12 w-full rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(239,255,0,0.35)] hover:shadow-[0_0_34px_rgba(239,255,0,0.5)]"
                            >
                                Send application
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <p className="text-xs leading-5 text-gray-500">
                                Looking to hire instead? Head back to the home page and explore the editor showcase.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
