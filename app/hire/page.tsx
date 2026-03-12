"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function HirePage() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setTimeout(() => setIsSubmitted(true), 800)
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-transparent pt-28 pb-20 text-white sm:pt-32">
            {/* Ambient glows */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-white/3 to-transparent" />
                <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
            </div>

            <section className="container relative mx-auto max-w-xl px-4">
                {/* Page header */}
                <div className="mb-8 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        BootConnect Creatives
                    </p>
                    <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Hire a top-tier editor
                    </h1>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        Tell us what you need and we&apos;ll match you with a vetted editor from our curated network.
                    </p>
                </div>

                {/* Form card */}
                <div className="rounded-[32px] border border-border bg-white/6 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
                    {isSubmitted ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center justify-center py-16 text-center"
                        >
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                                <CheckCircle2 className="h-10 w-10 text-primary" />
                            </div>
                            <h2 className="mb-3 text-xl font-bold sm:text-2xl">Request Submitted!</h2>
                            <p className="mb-8 max-w-xs text-sm text-muted-foreground">
                                We&apos;ve received your inquiry. Our team will review the details and connect you with an editor shortly.
                            </p>
                            <Button
                                onClick={() => setIsSubmitted(false)}
                                variant="outline"
                                className="rounded-full border-white/20 px-8 py-5 hover:bg-white/10 hover:text-white transition-colors"
                            >
                                Submit Another Request
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="text-xs font-medium text-foreground">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="text"
                                        id="name"
                                        required
                                        className="mt-2 h-11 w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus-visible:ring-0"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-xs font-medium text-foreground">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <Input
                                        type="email"
                                        id="email"
                                        required
                                        className="mt-2 h-11 w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus-visible:ring-0"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="type" className="text-xs font-medium text-foreground">
                                    Type of Editor Needed <span className="text-red-500">*</span>
                                </label>
                                <Select required name="type">
                                    <SelectTrigger id="type" className="mt-2 h-11 w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition data-placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus:ring-0">
                                        <SelectValue placeholder="Select editor type..." />
                                    </SelectTrigger>
                                    <SelectContent className="bg-card border-border text-white rounded-xl shadow-2xl">
                                        <SelectItem value="video" className="py-2.5 px-4 cursor-pointer text-sm">Video Editor (YouTube, TikTok, Reels)</SelectItem>
                                        <SelectItem value="thumbnail" className="py-2.5 px-4 cursor-pointer text-sm">Thumbnail Designer</SelectItem>
                                        <SelectItem value="copywriter" className="py-2.5 px-4 cursor-pointer text-sm">Script Writer / Copywriter</SelectItem>
                                        <SelectItem value="manager" className="py-2.5 px-4 cursor-pointer text-sm">Channel Manager</SelectItem>
                                        <SelectItem value="other" className="py-2.5 px-4 cursor-pointer text-sm">Other / Not Sure</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="budget" className="text-xs font-medium text-foreground">
                                        Estimated Budget
                                    </label>
                                    <Select name="budget">
                                        <SelectTrigger id="budget" className="mt-2 h-11! w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition data-placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus:ring-0">
                                            <SelectValue placeholder="Select budget..." />
                                        </SelectTrigger>
                                        <SelectContent className="bg-card border-border text-white rounded-xl shadow-2xl">
                                            <SelectItem value="<500" className="py-2.5 px-4 cursor-pointer text-sm">Less than $500</SelectItem>
                                            <SelectItem value="500-1k" className="py-2.5 px-4 cursor-pointer text-sm">$500 – $1,000</SelectItem>
                                            <SelectItem value="1k-5k" className="py-2.5 px-4 cursor-pointer text-sm">$1,000 – $5,000</SelectItem>
                                            <SelectItem value=">5k" className="py-2.5 px-4 cursor-pointer text-sm">$5,000+</SelectItem>
                                            <SelectItem value="unsure" className="py-2.5 px-4 cursor-pointer text-sm">Not sure yet</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label htmlFor="timeline" className="text-xs font-medium text-foreground">
                                        Expected Timeline
                                    </label>
                                    <Input
                                        type="text"
                                        id="timeline"
                                        className="mt-2 h-11 w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus-visible:ring-0"
                                        placeholder="e.g. 1 week, ASAP..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="details" className="text-xs font-medium text-foreground">
                                    Project Details <span className="text-red-500">*</span>
                                </label>
                                <Textarea
                                    id="details"
                                    required
                                    rows={4}
                                    className="mt-2 min-h-24 w-full rounded-lg border border-border bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus-visible:ring-0 resize-y"
                                    placeholder="Tell us about your project, style preferences, and any specific goals..."
                                />
                            </div>

                            <div>
                                <label htmlFor="links" className="text-xs font-medium text-foreground">
                                    Reference Links <span className="text-muted-foreground">(Optional)</span>
                                </label>
                                <Input
                                    type="text"
                                    id="links"
                                    className="mt-2 h-11 w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus-visible:ring-0"
                                    placeholder="Links to your channel, examples, or reference material"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="group mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold text-black shadow-[0_0_8px_rgba(239,255,0,0.17)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_13px_rgba(239,255,0,0.25)]"
                            >
                                <Send className="w-4 h-4 -ml-1 group-hover:translate-x-1 transition-transform" />
                                Submit Request
                            </Button>

                            <p className="text-center text-xs text-muted-foreground">
                                Want to join as an editor?{" "}
                                <Link href="/join" className="text-primary underline-offset-2 hover:underline">
                                    Apply here
                                </Link>
                            </p>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}
