"use client"

import { SignOutButton } from "@clerk/nextjs"
import { Button } from "../ui/button"
import { toast } from "sonner"

export default function SignOutLinks(){
    const handleLogout = function(){
        toast.success('Loggout success!')
    }

    return (
        <>
            <SignOutButton redirectUrl="/">
                <Button onClick={handleLogout}>logout</Button>
            </SignOutButton>
        </>
    )
}