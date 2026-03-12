"use client"

import { useState } from "react"
import { Star, Send, CheckCircle } from "lucide-react"
import { submitReview } from "@/app/actions/review"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

type FormState = "idle" | "loading" | "success" | "error"

export function ReviewForm() {
    const [formState, setFormState] = useState<FormState>("idle")
    const [errorMsg, setErrorMsg] = useState("")
    const [rating, setRating] = useState(0)
    const [hoverRating, setHoverRating] = useState(0)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (rating === 0) {
            setErrorMsg("Please select a star rating.")
            return
        }

        const form = e.currentTarget
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
            email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
            rating,
            comment: (form.elements.namedItem("comment") as HTMLTextAreaElement).value.trim(),
        }

        setFormState("loading")
        setErrorMsg("")

        const result = await submitReview(data)

        if (result.success) {
            setFormState("success")
        } else {
            setFormState("error")
            setErrorMsg(result.error ?? "Something went wrong.")
        }
    }

    return (
        <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8 shadow-xl backdrop-blur-sm">
            {formState === "success" ? (
                <div className="flex flex-col items-center gap-4 py-10 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                        <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">Thank you for your review!</h3>
                    <p className="max-w-xs text-sm text-muted-foreground">
                        Your review has been submitted and will be published after a quick review by our team.
                    </p>
                    <button
                        onClick={() => { setFormState("idle"); setRating(0); setHoverRating(0); }}
                        className="mt-2 rounded-full border border-border px-5 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-white"
                    >
                        Submit another
                    </button>
                </div>
            ) : (
                <>
                    <div className="mb-6 text-center">
                        <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                            Leave a Review
                        </h3>
                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                            Worked with a BootConnect editor? Share your experience.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="grid grid-cols-1 gap-4">
                            {/* Name */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-muted-foreground" htmlFor="review-name">
                                    Name <span className="text-primary">*</span>
                                </label>
                                <Input
                                    id="review-name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    className="h-11 rounded-lg border border-border bg-background/50 px-3 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-xs font-medium text-muted-foreground" htmlFor="review-email">
                                    Email <span className="text-primary">*</span>
                                </label>
                                <Input
                                    id="review-email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="h-11 rounded-lg border border-border bg-background/50 px-3 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
                                />
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs font-medium text-muted-foreground" htmlFor="review-comment">
                                Your Review <span className="text-primary">*</span>
                            </label>
                            <Textarea
                                id="review-comment"
                                name="comment"
                                required
                                rows={4}
                                placeholder="What was your experience working with a BootConnect editor?"
                                className="min-h-28 sm:min-h-36 resize-none rounded-lg border border-border bg-background/50 px-3 py-2.5 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-all focus:border-primary/60 focus:ring-1 focus:ring-primary/30"
                            />
                        </div>

                        {/* Star Rating */}
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-medium text-muted-foreground">
                                Rating <span className="text-primary">*</span>
                            </span>
                            <div className="flex gap-1.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="transition-transform hover:scale-110 focus:outline-none"
                                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                                    >
                                        <Star
                                            className="h-6 w-6 sm:h-7 sm:w-7 transition-colors"
                                            fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                                            style={{
                                                color:
                                                    (hoverRating || rating) >= star
                                                        ? "hsl(var(--primary))"
                                                        : "hsl(var(--muted-foreground))",
                                            }}
                                        />
                                    </button>
                                ))}
                                {rating > 0 && (
                                    <span className="ml-2 self-center text-xs text-muted-foreground">
                                        {["", "Poor", "Fair", "Good", "Great", "Excellent"][rating]}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Error */}
                        {(formState === "error" || errorMsg) && (
                            <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
                                {errorMsg}
                            </p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={formState === "loading"}
                            className="mt-1 flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        >

                            {formState === "loading" ? (
                                <>
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4" />
                                    Submit Review
                                </>
                            )}
                        </button>
                    </form>
                </>
            )}
        </div>
    )
}
