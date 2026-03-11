"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { login } from "@/app/actions/admin"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Lock } from "lucide-react"

export default function LoginPage() {
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await login(password)
            if (res.success) {
                toast.success("Authenticated successfully")
                router.push("/admin")
            } else {
                toast.error(res.error || "Failed to login")
            }
        } catch (err) {
            toast.error("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center px-4 bg-background">
            <div className="w-full max-w-sm rounded-[32px] border border-border bg-card/50 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)] backdrop-blur-xl">
                <div className="mb-6 sm:mb-8 flex flex-col items-center text-center">
                    <div className="mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Lock className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <h1 className="text-xl font-bold text-white sm:text-2xl">Admin Access</h1>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground">Enter master password to continue</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-black/50"
                            required
                        />
                    </div>
                    <Button 
                        type="submit" 
                        className="w-full rounded-full shadow-[0_0_12px_rgba(239,255,0,0.2)] hover:shadow-[0_0_20px_rgba(239,255,0,0.3)] transition-all"
                        disabled={loading}
                    >
                        {loading ? "Authenticating..." : "Login"}
                    </Button>
                </form>
            </div>
        </div>
    )
}