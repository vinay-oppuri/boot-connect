"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

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
                <div className="mb-8 text-center sm:mb-16">
                    <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Trusted by Top Creators
                    </h2>
                    <p className="text-xs text-muted-foreground sm:text-sm md:text-base">See what our clients have to say about their editors.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="h-full bg-card/50 border-border transition-colors hover:border-primary/50">
                                <CardContent className="p-4 sm:p-6 md:p-8">
                                    <div className="mb-4 flex gap-1 sm:mb-6">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="h-3 w-3 fill-current text-primary sm:h-4 sm:w-4 md:h-5 md:w-5" />
                                        ))}
                                    </div>

                                    <p className="mb-5 text-sm leading-relaxed text-gray-300 italic sm:mb-8 sm:text-base md:text-lg">
                                        &ldquo;{review.text}&rdquo;
                                    </p>

                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border border-white/20">
                                            <AvatarImage src={review.image} alt={review.name} />
                                            <AvatarFallback>{review.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="text-sm font-bold text-white sm:text-base">{review.name}</h4>
                                            <p className="text-xs text-muted-foreground sm:text-sm">{review.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
