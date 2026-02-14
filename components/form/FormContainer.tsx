'use client'

import { useActionState, useEffect } from "react"
import { toast } from "sonner"

type FormContainer = {
    action: (formData: FormData) => Promise<FormActionState>
    children: React.ReactNode
}

type FormActionState = {
    message: string;
}

const initState: FormActionState = {
    message: ''
}

export default function FormContainer({ action, children }: FormContainer){
    const [state, formAction] = useActionState(action, initState)

    useEffect(() => {
        if(state.message) toast(state.message)
    }, [state])

    return (
        <form action={formAction}>
            {children}
        </form>
    )
}