'use client'
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { useFormStatus } from "react-dom"
import { Heart, LoaderCircle } from 'lucide-react';
import { SignInButton } from "@clerk/nextjs";

// type="submit" size='lg' className="mt-10"

type Size = 'default' | 'lg' | 'sm'

type SubmitButton = {
    className?: string;
    size?: Size;
    children: React.ReactNode;
}

export default function SubmitButton({ className, size='lg', children }: SubmitButton){
    const { pending } = useFormStatus()

    return (
        <Button 
            type="submit" 
            className={cn(className)} 
            size={size}
            disabled={pending}
        >   
            {pending 
                ? 
                    <>
                        <LoaderCircle className="animate-spin" />
                        <span>Please wait...</span>
                    </>
                : children
            }
        </Button>
    )
}

export const SignInCardButton = function(){
    return (
        <SignInButton mode="modal">
            <Button size='icon' variant='outline'>
                <Heart />
            </Button>
        </SignInButton>
    )
}