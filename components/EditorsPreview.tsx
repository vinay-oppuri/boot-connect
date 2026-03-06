"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
        <section className="py-24 bg-[#050505] relative border-t border-white/5" id="explore">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Meet Top Talent
                        </h2>
                        <p className="text-gray-400 max-w-xl">
                            From fast-paced TikToks to feature-length documentaries. Our creators shape the culture.
                        </p>
                    </div>
                    <Button variant="outline" className="hidden md:flex rounded-full">
                        View All Editors
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {editors.map((editor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-black/40 border-white/10 hover:border-white/30 flex flex-col justify-between transition-all hover:-translate-y-1">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-6 w-full">
                                            <Avatar className="w-16 h-16 border-2 border-[#EFFF00]/20 bg-white/5">
                                                <AvatarImage src={editor.image} alt={editor.name} />
                                                <AvatarFallback>{editor.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full text-sm">
                                                <Star className="w-3.5 h-3.5 text-[#EFFF00] fill-current" />
                                                <span className="text-white font-medium">{editor.rating}</span>
                                            </div>
                                        </div>

                                        <div className="mb-4 w-full">
                                            <h3 className="text-xl font-bold text-white mb-1">{editor.name}</h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-400">
                                                <Video className="w-4 h-4" />
                                                {editor.specialty}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6 text-xs w-full">
                                            {editor.tags.map(tag => (
                                                <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Button className="w-full text-black bg-[#EFFF00] hover:bg-[#EFFF00]/90 mt-auto">
                                        View Profile
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <Button variant="outline" className="w-full mt-8 md:hidden rounded-full">
                    View All Editors
                </Button>
            </div>
        </section>
    )
}
