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
        <section className="py-24 bg-[#050505] relative z-10" id="how-it-works">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Why Boot<span className="text-[#EFFF00]">Connect?</span>
                    </h2>
                    <p className="text-gray-400">Everything you need to scale your content production.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                                <CardHeader>
                                    <div className="mb-4 bg-black/40 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-[#EFFF00]/10 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-gray-400 text-base leading-relaxed">
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
