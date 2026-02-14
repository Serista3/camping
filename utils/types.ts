export type FormActionState = {
    message: string;
}

export type ActionFunction = (prevState: FormActionState, formData: FormData) => Promise<FormActionState>