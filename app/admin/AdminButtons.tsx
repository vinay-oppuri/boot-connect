"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { verifyEditor, deleteEditor, deleteCustomer, logout } from "@/app/actions/admin"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export function VerifyEditorButton({ id, isVerified }: { id: number, isVerified: boolean }) {
    const [loading, setLoading] = useState(false)
    const handleVerify = async () => {
        setLoading(true)
        try {
            await verifyEditor(id, !isVerified)
            toast.success(isVerified ? "Editor revoked." : "Editor approved.")
        } catch (e) {
            toast.error("Failed to update status")
        }
        setLoading(false)
    }

    return (
        <Button 
            variant={isVerified ? "secondary" : "default"} 
            size="sm" 
            onClick={handleVerify} 
            disabled={loading}
            className={!isVerified ? "bg-primary text-black hover:bg-primary/90" : ""}
        >
            {loading ? "..." : isVerified ? "Revoke" : "Approve"}
        </Button>
    )
}

export function DeleteEditorButton({ id }: { id: number }) {
    const [loading, setLoading] = useState(false)
    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this editor?")) return;
        setLoading(true)
        try {
            await deleteEditor(id)
            toast.success("Editor deleted.")
        } catch (e) {
            toast.error("Failed to delete editor")
        }
        setLoading(false)
    }

    return (
        <Button variant="destructive" size="sm" onClick={handleDelete} disabled={loading}>
            {loading ? "..." : "Delete"}
        </Button>
    )
}

export function DeleteCustomerButton({ id }: { id: number }) {
    const [loading, setLoading] = useState(false)
    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this customer?")) return;
        setLoading(true)
        try {
            await deleteCustomer(id)
            toast.success("Customer deleted.")
        } catch (e) {
            toast.error("Failed to delete customer")
        }
        setLoading(false)
    }

    return (
        <Button variant="destructive" size="sm" onClick={handleDelete} disabled={loading}>
            {loading ? "..." : "Delete"}
        </Button>
    )
}

export function LogoutButton() {
    const router = useRouter()
    const handleLogout = async () => {
        await logout()
        toast.success("Logged out successfully.")
        router.push("/login")
    }

    return (
        <Button variant="destructive" onClick={handleLogout}>
            Logout
        </Button>
    )
}
