import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import DarkVeil from "@/components/ui/DarkVeil";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boot Connect | Hire Top Video Editors",
  description: "Hire Top Video Editors",
  icons: {
    icon: "/bootconnect.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#050505] text-white font-sans antialiased selection:bg-[#EFFF00] selection:text-black`}
      >
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 opacity-75 filter-[saturate(0.52)_contrast(1.08)_brightness(0.78)]">
            <DarkVeil
              hueShift={64}
              noiseIntensity={0.008}
              scanlineIntensity={0.012}
              speed={0.22}
              scanlineFrequency={1.2}
              warpAmount={0.06}
              resolutionScale={0.9}
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(239,255,0,0.16),transparent_35%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_50%_120%,rgba(239,255,0,0.08),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.3)_0%,rgba(5,5,5,0.56)_55%,rgba(5,5,5,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,5,5,0.38)_100%)]" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
