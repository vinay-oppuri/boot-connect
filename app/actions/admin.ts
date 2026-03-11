"use server"

import { db } from "@/db";
import { editorsTable, usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function login(password: string) {
    if (password === ADMIN_PASSWORD) {
        const cookieStore = await cookies();
        cookieStore.set("admin_session", "authenticated", { 
            secure: process.env.NODE_ENV === "production", 
            httpOnly: true, 
            path: "/" 
        });
        return { success: true };
    }
    return { success: false, error: "Invalid password" };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("admin_session");
}

export async function verifyEditor(id: number, status: boolean) {
    const cookieStore = await cookies();
    if (cookieStore.get("admin_session")?.value !== "authenticated") {
        throw new Error("Unauthorized");
    }
    
    await db.update(editorsTable).set({ isVerified: status }).where(eq(editorsTable.id, id));
    revalidatePath("/admin");
    revalidatePath("/hire"); // Refresh the public hire page when editors change validation
}

export async function deleteEditor(id: number) {
    const cookieStore = await cookies();
    if (cookieStore.get("admin_session")?.value !== "authenticated") {
        throw new Error("Unauthorized");
    }
    
    await db.delete(editorsTable).where(eq(editorsTable.id, id));
    revalidatePath("/admin");
    revalidatePath("/hire");
}

export async function deleteCustomer(id: number) {
    const cookieStore = await cookies();
    if (cookieStore.get("admin_session")?.value !== "authenticated") {
        throw new Error("Unauthorized");
    }
    
    await db.delete(usersTable).where(eq(usersTable.id, id));
    revalidatePath("/admin");
}
