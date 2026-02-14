import { z } from 'zod'

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: 'first name length must > 2' }),
    lastName: z.string().min(2, { message: 'last name length must > 2' }),
    userName: z.string().min(2, { message: 'username length must > 2' }),
})

export const validateWithZod = function<T>(schema: z.ZodType<T>, data: unknown){
    const result = schema.safeParse(data)
    if(!result.success){
        const errors = result.error.issues.map(err => err.message)
        throw new Error(errors.join(','))
    }

    return result.data
}