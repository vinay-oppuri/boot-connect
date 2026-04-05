import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import DarkVeil from "@/components/ui/DarkVeil";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen w-full overflow-x-hidden bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground`}
      >
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 w-full h-full opacity-95 filter-[saturate(0.6)_contrast(1.15)_brightness(0.75)]">
            <DarkVeil
              hueShift={300}
              noiseIntensity={0.008}
              scanlineIntensity={0.012}
              speed={0.22}
              scanlineFrequency={1.2}
              warpAmount={0.06}
              resolutionScale={1}
            />
          </div>
        </div>

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <ScrollToTop />
        </div>
        <Toaster theme="dark" position="bottom-right" richColors />
      </body>
    </html>
  );
}