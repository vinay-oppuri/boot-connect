"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const Page = () => {
    const [rating, setRating] = useState(0)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <h1 className="text-4xl font-bold">Stars</h1>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button onClick={() => setRating(star)}>
                        <Star
                            className={`transition ${
                                star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-500"
                            }`}
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Page