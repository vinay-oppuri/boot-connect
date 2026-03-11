"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Zap, Film, Rocket } from "lucide-react"

const features = [
    {
        icon: <Zap className="w-8 h-8 text-[#EFFF00]" />,
        title: "Hire Top Editors",
        description: "Browse verified professional editors with proven track records in audience retention and aesthetic grading.",
    },
    {
        icon: <Film className="w-8 h-8 text-[#EFFF00]" />,
        title: "Professional Editing",
        description: "YouTube intros, high-converting reels, dynamic ads, and jaw-dropping cinematic masterpieces.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-[#EFFF00]" />,
        title: "Fast Delivery",
        description: "Get your videos edited in hours, not weeks. Streamlined workflow for immediate content deployment.",
    },
]

export function Features() {
    return (
        <section className="relative z-10 bg-transparent py-16 sm:py-24" id="how-it-works">
            <div className="container mx-auto max-w-6xl px-6 md:px-4">
                <div className="mb-10 text-center sm:mb-16">
                    <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                        Why Boot<span className="text-[#EFFF00]">Connect?</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-sm text-gray-400 sm:text-base">Everything you need to scale your content production.</p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:border-[#EFFF00]/50 transition-colors group relative overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-br from-[#EFFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <CardHeader className="p-5 sm:p-6">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 transition-colors group-hover:bg-[#EFFF00]/10 sm:h-16 sm:w-16">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-lg text-white sm:text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                                    <CardDescription className="text-sm leading-relaxed text-gray-400 sm:text-base">
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
