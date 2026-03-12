"use server"

import { db } from "@/db";
import { reviewsTable } from "@/db/schema";

export async function submitReview(data: {
    name: string;
    email: string;
    rating: number;
    comment: string;
}) {
    const { name, email, rating, comment } = data;

    if (!name || !email || !rating || !comment) {
        return { success: false, error: "All fields are required." };
    }

    if (rating < 1 || rating > 5) {
        return { success: false, error: "Rating must be between 1 and 5." };
    }

    try {
        await db.insert(reviewsTable).values({ name, email, rating, comment });
        return { success: true };
    } catch (err: unknown) {
        console.error("Review submission error:", err);
        // Handle duplicate email (unique constraint on reviewsTable)
        if (
            typeof err === "object" &&
            err !== null &&
            "code" in err &&
            (err as { code: string }).code === "23505"
        ) {
            return { success: false, error: "You've already submitted a review with this email." };
        }
        return { success: false, error: "Failed to save your review. Please try again." };
    }
}
