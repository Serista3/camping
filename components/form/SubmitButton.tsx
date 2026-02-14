'use client'
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { useFormStatus } from "react-dom"
import { LoaderCircle } from 'lucide-react';

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
                ? <LoaderCircle className="animate-spin" />
                : children
            }
        </Button>
    )
}