
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const metadata: Metadata = {
    title: "Join BootConnect | Apply as an Editor",
    description: "Share your best edits and apply to join the BootConnect editor roster.",
}

const inputClassName =
    "mt-2 h-11 w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60"

const textareaClassName =
    "mt-2 min-h-32 w-full rounded-lg border border-border bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60"

export default function JoinPage() {
    return (
        <main className="relative overflow-hidden bg-transparent pt-28 pb-20 sm:pt-32">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/3 to-transparent" />
                <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
            </div>

            <section className="container relative mx-auto max-w-xl px-4">
                {/* Page header */}
                <div className="mb-8 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Join the editor network
                    </p>
                    <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Apply to join the roster
                    </h1>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        Drop the essentials plus a portfolio link for us to review.
                    </p>
                </div>

                {/* Form card */}
                <div
                    id="application"
                    className="rounded-[32px] border border-border bg-white/6 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
                >
                    <form className="space-y-5">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
                        </div>

                        <div>
                            <label htmlFor="portfolio-link" className="text-xs font-medium text-foreground">
                                Portfolio or Google Drive link
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
                                placeholder="Mention tools, turnaround strengths, channels you've edited for, or anything else worth reviewing."
                            />
                        </div>

                        <div className="rounded-2xl border border-primary/15 bg-primary/6 px-4 py-3 text-xs leading-5 text-gray-300">
                            Tip: a tight folder beats a huge folder. Lead with the work that best shows your judgment.
                        </div>

                        <Button
                            type="button"
                            className="h-11 w-full rounded-full text-sm font-semibold shadow-[0_0_8px_rgba(var(--primary-rgb),0.17)] hover:shadow-[0_0_13px_rgba(var(--primary-rgb),0.25)]"
                        >
                            Send application
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                            Looking to hire?{" "}
                            <Link href="/hire" className="text-primary underline-offset-2 hover:underline">
                                Post a project instead
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    )
}
