"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Zap, Film, Rocket } from "lucide-react"

const features = [
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Hire Top Editors",
        description: "Browse verified professional editors with proven track records in audience retention and aesthetic grading.",
    },
    {
        icon: <Film className="w-8 h-8 text-primary" />,
        title: "Professional Editing",
        description: "YouTube intros, high-converting reels, dynamic ads, and jaw-dropping cinematic masterpieces.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-primary" />,
        title: "Fast Delivery",
        description: "Get your videos edited in hours, not weeks. Streamlined workflow for immediate content deployment.",
    },
]

export function Features() {
    return (
        <section className="relative z-10 bg-transparent py-14 sm:py-24" id="how-it-works">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
                <div className="mb-8 text-center sm:mb-16">
                    <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Why Boot<span className="text-primary">Connect?</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-xs sm:text-sm text-muted-foreground md:text-base">Everything you need to scale your content production.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-colors group relative overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <CardHeader className="p-4 sm:p-6">
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-black/40 transition-colors group-hover:bg-primary/10 sm:h-16 sm:mb-4 sm:w-16">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-base text-white sm:text-lg md:text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
                                    <CardDescription className="text-xs sm:text-sm leading-relaxed text-muted-foreground md:text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
