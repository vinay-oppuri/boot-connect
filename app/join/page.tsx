
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clapperboard, FolderKanban, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
    "mt-2 h-11 w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60"

const textareaClassName =
    "mt-2 min-h-32 w-full rounded-lg border border-border bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60"

export default function JoinPage() {
    return (
        <main className="relative overflow-hidden bg-transparent pt-32 pb-20 sm:pt-36">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/3 to-transparent" />
                <div className="absolute left-[12%] top-36 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />
                <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-white/6 blur-[120px]" />
            </div>

            <section className="container relative mx-auto max-w-6xl px-6 md:px-4">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div className="max-w-2xl">
                        <Badge variant="secondary" className="border border-border bg-card/50 px-4 py-1.5 text-[10px] tracking-[0.2em] text-foreground uppercase">
                            Join the editor network
                        </Badge>

                        <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                            Send your sharpest edits.
                            <span className="mt-2 block text-primary drop-shadow-[0_0_7px_rgba(239,255,0,0.17)]">
                                Get considered for BootConnect.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                            We are building a curated editor roster for creators, brands, and growth teams that need more than basic cuts. Share the work that best represents your taste and range.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Button asChild size="lg" className="rounded-full px-6 text-sm font-semibold shadow-[0_0_8px_rgba(239,255,0,0.17)] hover:shadow-[0_0_13px_rgba(239,255,0,0.25)]">
                                <a href="#application">
                                    Start your application
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent border-white/15 px-6 text-sm">
                                <Link href="/#explore">Browse the current vibe</Link>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {benefits.map((item) => {
                                const Icon = item.icon

                                return (
                                    <div
                                        key={item.title}
                                        className="rounded-[28px] border border-border bg-card/50 p-5 backdrop-blur-sm"
                                    >
                                        <div className="flex h-11 w-12 items-center justify-center rounded-2xl border border-border bg-black/40">
                                            <Icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <h2 className="mt-4 text-base font-semibold text-white sm:text-lg">{item.title}</h2>
                                        <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">{item.description}</p>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="mt-8 rounded-[32px] border border-border bg-black/30 p-6 sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                                What to include
                            </p>
                            <ul className="mt-5 space-y-4">
                                {reviewPoints.map((point) => (
                                    <li key={point} className="flex items-start gap-3 text-xs leading-5 text-gray-300 sm:text-sm">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div
                        id="application"
                        className="rounded-[32px] border border-border bg-white/6 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
                    >
                        <div className="mb-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                                Application form
                            </p>
                            <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                                Apply to join the roster
                            </h2>
                            <p className="mt-3 text-xs leading-5 text-muted-foreground sm:text-sm">
                                Drop the essentials plus a portfolio site or Drive link to the work you want us to review.
                            </p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label htmlFor="name" className="text-xs font-medium text-foreground">
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    className={inputClassName}
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-xs font-medium text-foreground">
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    className={inputClassName}
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="portfolio-link" className="text-xs font-medium text-foreground">
                                    Portfolio site or Google Drive link
                                </label>
                                <Input
                                    type="url"
                                    id="portfolio-link"
                                    name="portfolio-link"
                                    className={inputClassName}
                                    placeholder="https://yourportfolio.com or https://drive.google.com/..."
                                />
                            </div>

                            <div>
                                <label htmlFor="specialty" className="text-xs font-medium text-foreground">
                                    Editing specialty
                                </label>
                                <Input
                                    type="text"
                                    id="specialty"
                                    name="specialty"
                                    className={inputClassName}
                                    placeholder="YouTube long-form, shorts, ads, cinematic storytelling..."
                                />
                            </div>

                            <div>
                                <label htmlFor="notes" className="text-xs font-medium text-foreground">
                                    Notes about your work
                                </label>
                                <Textarea
                                    id="notes"
                                    name="notes"
                                    className={textareaClassName}
                                    placeholder="Mention tools, turnaround strengths, channels you have edited for, or anything else worth reviewing."
                                />
                            </div>

                            <div className="rounded-2xl border border-primary/15 bg-primary/6 px-4 py-3 text-xs leading-5 text-gray-300">
                                Tip: a tight folder beats a huge folder. Lead with the work that best shows your judgment.
                            </div>

                            <Button
                                type="button"
                                className="h-11 w-full rounded-full text-sm font-semibold shadow-[0_0_8px_rgba(239,255,0,0.17)] hover:shadow-[0_0_13px_rgba(239,255,0,0.25)]"
                            >
                                Send application
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>

                            <p className="text-xs leading-5 text-muted-foreground">
                                Looking to hire instead? Head back to the home page and explore the editor showcase.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
