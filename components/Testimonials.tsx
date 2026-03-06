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
        <section className="py-24 bg-[#050505] relative border-t border-white/5" id="reviews">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Trusted by Top Creators
                    </h2>
                    <p className="text-gray-400">See what our clients have to say about their editors.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:border-[#EFFF00]/50 transition-colors">
                                <CardContent className="p-8">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-[#EFFF00] fill-current" />
                                        ))}
                                    </div>

                                    <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">
                                        "{review.text}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <Avatar className="w-12 h-12 border border-white/20">
                                            <AvatarImage src={review.image} alt={review.name} />
                                            <AvatarFallback>{review.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="text-white font-bold">{review.name}</h4>
                                            <p className="text-sm text-gray-400">{review.role}</p>
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
