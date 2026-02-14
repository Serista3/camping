'use client'

import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import type { ActionFunction, FormActionState } from "@/utils/types"

type FormContainerProps = {
    action: ActionFunction;
    children: React.ReactNode
}

const initState: FormActionState = {
    message: ''
}

export default function FormContainer({ action, children }: FormContainerProps){
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