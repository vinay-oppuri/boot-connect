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

const hireBenefits = [
    {
        title: "Fast matching",
        description: "Get shortlisted editors based on your niche, style, and turnaround needs.",
    },
    {
        title: "Vetted quality",
        description: "Every recommendation is reviewed for pacing, storytelling, and execution quality.",
    },
    {
        title: "Budget aligned",
        description: "We match based on your expected budget range so conversations start realistic.",
    },
]

const hireSteps = [
    "Submit your project brief with references and goals.",
    "Receive curated editor options tailored to your requirements.",
    "Choose your best fit and start production quickly.",
]

export default function HirePage() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Simulate form submission process
        setTimeout(() => setIsSubmitted(true), 800)
    }

    return (
        <main className="relative min-h-screen overflow-hidden bg-transparent pt-32 pb-20 text-white sm:pt-36">
            <section className="container relative mx-auto max-w-6xl px-6 md:px-4">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    {/* Left Column: Promotions/Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center rounded-full border border-border bg-card/50 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] font-semibold tracking-[0.2em] text-foreground uppercase">
                            BootConnect Creatives
                        </div>
                        <h1 className="mt-5 text-2xl font-extrabold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl md:text-5xl">
                            Scale your content.
                        </h1>
                        <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-primary drop-shadow-[0_0_6px_rgba(239,255,0,0.25)] sm:text-4xl md:text-5xl">
                            Hire a top-tier editor.
                        </h2>
                        <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
                            Stop wasting hours sifting through portfolios. Tell us exactly what you need, and we&apos;ll match you with a vetted professional from our curated network of video editors, thumbnail designers, and copywriters.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-3">
                            {hireBenefits.map((item) => (
                                <div key={item.title} className="rounded-[28px] border border-border bg-card/50 p-5 backdrop-blur-sm">
                                    <h3 className="text-base font-semibold text-white sm:text-lg">{item.title}</h3>
                                    <p className="mt-2 text-xs leading-5 text-muted-foreground sm:text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-[32px] border border-border bg-black/30 p-6 sm:p-8">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                                How hiring works
                            </p>
                            <ul className="mt-5 space-y-4">
                                {hireSteps.map((step) => (
                                    <li key={step} className="flex items-start gap-3 text-xs leading-5 text-gray-300 sm:text-sm">
                                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right Column: Form */}
                    <div className="rounded-[32px] border border-border bg-white/6 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
                        <div className="mb-8">
                            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-muted-foreground">
                                Project Brief
                            </p>
                            <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">
                                Tell us about your needs
                            </h2>
                            <p className="mt-3 text-xs leading-5 text-muted-foreground sm:text-sm">
                                Fill out the details below to help us find the perfect creative match for your brand and budget.
                            </p>
                        </div>

                        {isSubmitted ? (
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center justify-center py-16 text-center"
                            >
                                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                                    <CheckCircle2 className="h-12 w-12 text-primary" />
                                </div>
                                <h2 className="mb-3 text-2xl font-bold md:text-3xl">Request Submitted!</h2>
                                <p className="mb-8 max-w-sm text-base text-muted-foreground md:text-lg">
                                    We&apos;ve successfully received your inquiry. Our team will review the details and connect you with an expert editor shortly.
                                </p>
                                <Button
                                    onClick={() => setIsSubmitted(false)}
                                    variant="outline"
                                    className="rounded-xl border-white/20 px-8 py-6 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    Submit Another Request
                                </Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    {/* Name Input */}
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

                                    {/* Email Input */}
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

                                {/* Type of Editor */}
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

                                {/* Budget and Timeline */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
                                                <SelectItem value="500-1k" className="py-2.5 px-4 cursor-pointer text-sm">$500 - $1,000</SelectItem>
                                                <SelectItem value="1k-5k" className="py-2.5 px-4 cursor-pointer text-sm">$1,000 - $5,000</SelectItem>
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
                                            placeholder="e.g. 1 week, ASAP, etc."
                                        />
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div>
                                    <label htmlFor="details" className="text-xs font-medium text-foreground">
                                        Project Details / Requirements <span className="text-red-500">*</span>
                                    </label>
                                    <Textarea
                                        id="details"
                                        required
                                        rows={4}
                                        className="mt-2 min-h-24 w-full rounded-lg border border-border bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus-visible:ring-0 resize-y custom-scrollbar"
                                        placeholder="Tell us about your project, style preferences, and any specific goals..."
                                    />
                                </div>

                                {/* Links */}
                                <div>
                                    <label htmlFor="links" className="text-xs font-medium text-foreground">
                                        Reference Links (Optional)
                                    </label>
                                    <Input
                                        type="text"
                                        id="links"
                                        className="mt-2 h-11 w-full rounded-lg border border-border bg-black/40 px-4 text-sm text-white outline-none transition placeholder:text-muted-foreground focus:border-primary/50 focus:bg-black/60 shadow-none focus-visible:ring-0"
                                        placeholder="Links to examples, your current channel, or reference material"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="group mt-8 flex h-11 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold text-black shadow-[0_0_8px_rgba(239,255,0,0.17)] transition-transform hover:scale-[1.02] hover:shadow-[0_0_13px_rgba(239,255,0,0.25)]"
                                >
                                    <Send className="w-5 h-5 -ml-1 group-hover:translate-x-1 transition-transform" />
                                    Submit Request
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}
