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
        <section className="relative bg-transparent py-14 sm:py-24" id="explore">
            <div className="container mx-auto max-w-6xl px-4 md:px-6">
                <div className="mb-8 flex flex-col gap-3 sm:mb-12 md:flex-row md:items-end md:justify-between md:gap-6">
                    <div>
                        <h2 className="mb-2 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-5xl">
                            Meet Top Talent
                        </h2>
                        <p className="max-w-xl text-xs text-muted-foreground sm:text-sm md:text-base">
                            From fast-paced TikToks to feature-length documentaries. Our creators shape the culture.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden rounded-full md:flex">
                        View All Editors
                    </Button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                    {editors.map((editor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="flex h-full flex-col justify-between border-border bg-black/40 transition-all hover:-translate-y-1 hover:border-white/30">
                                <CardContent className="flex h-full flex-col p-4 sm:p-6">
                                    <div className="flex-1">
                                        <div className="mb-4 flex w-full items-start justify-between sm:mb-6">
                                            <Avatar className="h-12 w-12 border-2 border-primary/20 bg-card/50 sm:h-16 sm:w-16">
                                                <AvatarImage src={editor.image} alt={editor.name} />
                                                <AvatarFallback>{editor.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex items-center gap-1 rounded-full bg-card/50 px-2 py-1 text-[10px] sm:text-sm">
                                                <Star className="h-3 w-3 fill-current text-primary" />
                                                <span className="text-white font-medium">{editor.rating}</span>
                                            </div>
                                        </div>

                                        <div className="mb-3 w-full">
                                            <h3 className="mb-1 text-base font-bold text-white sm:text-xl">{editor.name}</h3>
                                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground sm:text-sm sm:gap-2">
                                                <Video className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                {editor.specialty}
                                            </div>
                                            <p className="mt-1.5 text-[10px] text-muted-foreground sm:mt-2 sm:text-sm">{editor.jobs}+ successful projects</p>
                                        </div>

                                        <div className="mb-5 flex w-full flex-wrap gap-1.5 text-[10px] sm:mb-6 sm:gap-2 sm:text-xs">
                                            {editor.tags.map(tag => (
                                                <span key={tag} className="rounded-md border border-white/5 bg-card/50 px-1.5 py-0.5 text-gray-300 sm:px-2 sm:py-1">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Button className="mt-auto h-10 w-full bg-primary text-sm text-black hover:bg-primary/90 sm:h-11">
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
