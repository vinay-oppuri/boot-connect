"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Video, Star } from "lucide-react"

const editors = [
    {
        name: "Alex V.",
        specialty: "YouTube Editor",
        rating: 4.9,
        jobs: 142,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        tags: ["Retention", "Pacing", "Thumbnail"],
    },
    {
        name: "Sarah M.",
        specialty: "Cinematic Editor",
        rating: 5.0,
        jobs: 89,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        tags: ["Color Grading", "DaVinci", "Story"],
    },
    {
        name: "David K.",
        specialty: "Reels Editor",
        rating: 4.8,
        jobs: 310,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        tags: ["CapCut", "Viral", "Captions"],
    },
    {
        name: "Elena R.",
        specialty: "Podcast Editor",
        rating: 4.9,
        jobs: 215,
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
        tags: ["Multi-cam", "Audio", "Clips"],
    },
]

export function EditorsPreview() {
    return (
        <section className="relative border-t border-white/5 bg-[#050505] py-16 sm:py-24" id="explore">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between md:gap-6">
                    <div>
                        <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-5xl">
                            Meet Top Talent
                        </h2>
                        <p className="max-w-xl text-sm text-gray-400 sm:text-base">
                            From fast-paced TikToks to feature-length documentaries. Our creators shape the culture.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden rounded-full md:flex">
                        View All Editors
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    {editors.map((editor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="flex h-full flex-col justify-between border-white/10 bg-black/40 transition-all hover:-translate-y-1 hover:border-white/30">
                                <CardContent className="flex h-full flex-col p-5 sm:p-6">
                                    <div className="flex-1">
                                        <div className="mb-5 flex w-full items-start justify-between sm:mb-6">
                                            <Avatar className="h-14 w-14 border-2 border-[#EFFF00]/20 bg-white/5 sm:h-16 sm:w-16">
                                                <AvatarImage src={editor.image} alt={editor.name} />
                                                <AvatarFallback>{editor.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs sm:text-sm">
                                                <Star className="h-3.5 w-3.5 fill-current text-[#EFFF00]" />
                                                <span className="text-white font-medium">{editor.rating}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4 w-full">
                                            <h3 className="mb-1 text-lg font-bold text-white sm:text-xl">{editor.name}</h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Video className="h-4 w-4" />
                                                {editor.specialty}
                                            </div>
                                            <p className="mt-2 text-xs text-gray-500 sm:text-sm">{editor.jobs}+ successful projects</p>
                                        </div>

                                        <div className="mb-6 flex w-full flex-wrap gap-2 text-[11px] sm:text-xs">
                                            {editor.tags.map(tag => (
                                                <span key={tag} className="rounded-md border border-white/5 bg-white/5 px-2 py-1 text-gray-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Button className="mt-auto h-10 w-full bg-[#EFFF00] text-sm text-black hover:bg-[#EFFF00]/90 sm:h-11">
                                        View Profile
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <Button variant="outline" className="mt-8 h-10 w-full rounded-full text-sm md:hidden">
                    View All Editors
                </Button>
            </div>
        </section>
    )
}
