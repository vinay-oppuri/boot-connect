"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { ReviewForm } from "./ReviewForm"

const reviews = [
    {
        name: "Michael R.",
        role: "Content Creator",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        text: "BootConnect found me an editor who instantly understood my style. My retention went up by 15% on the first video.",
        rating: 5,
    },
    {
        name: "Jessica T.",
        role: "Marketing Director",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
        text: "The quality of talent here is unmatched. We outsourced our entire ad creative editing and the ROI has been insane.",
        rating: 5,
    },
    {
        name: "David W.",
        role: "YouTuber (2M+ Subs)",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DavidW",
        text: "I was drowning in footage. Found a cinematic editor here who took my documentaries to the next level. Worth every penny.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="relative bg-transparent py-14 sm:py-24" id="reviews">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">

                {/* Heading */}
                <div className="mb-10 text-center sm:mb-14">
                    <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Trusted by Top Creators
                    </h2>
                    <p className="text-xs text-muted-foreground sm:text-sm md:text-base">
                        See what our clients have to say about their editors.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">

                    {/* Reviews — stretch to match form height */}
                    <div className="flex flex-col gap-4 lg:flex-1">
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.12 }}
                                className="group relative flex-1 overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
                            >
                                {/* Accent gradient */}
                                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="relative flex h-full flex-col justify-between gap-4">
                                    {/* Top: quote icon + stars */}
                                    <div className="flex items-start justify-between">
                                        <Quote className="h-7 w-7 text-primary/40" />
                                        <div className="flex gap-0.5">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="h-3.5 w-3.5 fill-current text-primary" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote text */}
                                    <p className="flex-1 text-sm leading-relaxed text-gray-300 sm:text-base">
                                        &ldquo;{review.text}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="h-10 w-10 rounded-full border border-white/10 bg-card"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-white">{review.name}</p>
                                            <p className="text-xs text-muted-foreground">{review.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Review form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-[400px] lg:sticky lg:top-24 lg:self-start"
                    >
                        <ReviewForm />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
