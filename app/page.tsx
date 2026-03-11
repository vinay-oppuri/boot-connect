import { Hero } from "@/components/Hero"
import { VideoShowcase } from "@/components/VideoShowcase"
import { Experience } from "@/components/Experience"
import { Features } from "@/components/Features"
import { EditorsPreview } from "@/components/EditorsPreview"
import { Testimonials } from "@/components/Testimonials"
import { CTA } from "@/components/CTA"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white font-sans selection:bg-[#EFFF00] selection:text-black">
      <Hero />
      <VideoShowcase />
      <Experience />
      <Features />
      <Testimonials />
      <EditorsPreview />
      <CTA />
    </main>
  )
}
