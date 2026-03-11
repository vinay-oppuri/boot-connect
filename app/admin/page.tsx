import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { db } from "@/db"
import { editorsTable, usersTable } from "@/db/schema"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { VerifyEditorButton, DeleteEditorButton, DeleteCustomerButton, LogoutButton } from "./AdminButtons"
import { Badge } from "@/components/ui/badge"

export default async function AdminPage() {
    const cookieStore = await cookies();
    if (cookieStore.get("admin_session")?.value !== "authenticated") {
        redirect("/login");
    }

    const editors = await db.select().from(editorsTable);
    const users = await db.select().from(usersTable);

    return (
        <div className="container mx-auto py-24 px-4 min-h-screen">
            <div className="flex justify-between items-center mb-8">
               <h1 className="text-3xl font-bold">Admin Dashboard</h1>
               <LogoutButton />
            </div>

            <Tabs defaultValue="editors" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="editors">Editors ({editors.length})</TabsTrigger>
                    <TabsTrigger value="users">Customers ({users.length})</TabsTrigger>
                </TabsList>
                
                <TabsContent value="editors">
                    <div className="rounded-md border border-border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {editors.map((editor) => (
                                    <TableRow key={editor.id}>
                                        <TableCell className="font-medium">{editor.name}</TableCell>
                                        <TableCell>{editor.email}</TableCell>
                                        <TableCell>{editor.category}</TableCell>
                                        <TableCell>
                                            <Badge variant={editor.isVerified ? "default" : "secondary"}>
                                                {editor.isVerified ? "Verified" : "Pending"}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <VerifyEditorButton id={editor.id} isVerified={editor.isVerified} />
                                            <DeleteEditorButton id={editor.id} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {editors.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">No editors found.</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </TabsContent>

                <TabsContent value="users">
                    <div className="rounded-md border border-border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Registered</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                                        <TableCell className="text-right">
                                            <DeleteCustomerButton id={user.id} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                                {users.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">No customers found.</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}