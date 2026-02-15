import { z } from 'zod'

export const profileSchema = z.object({
    firstName: z.string().min(2, { message: 'first name length must > 2' }),
    lastName: z.string().min(2, { message: 'last name length must > 2' }),
    userName: z.string().min(2, { message: 'username length must > 2' }),
})

const validateImage = function(){
    const maxFile = 1024 * 1024
    return z.instanceof(File).refine(file => {
        return file.size <= maxFile
    }, 'File size must be less than 1MB.')
}

export const imageSchema = z.object({
    image: validateImage()
})

export const landmarkSchema = z.object({
    name: z.string()
        .min(2, { message: 'Name must be greater equa than 2 alphabet.' })
        .max(30, { message: 'Name must be less equa than 30 alphabet.' }),
    category: z.string(),
    description: z.string()
        .min(2, { message: 'Description must be greater equa than 2 alphabet.' })
        .max(30, { message: 'Description must be less equa than 200 alphabet.' }),
    price: z.coerce.number().int().min(0, { message: 'Price must be greater equa than 0 alphabet.' }),
    province: z.string(),
    lat: z.coerce.number(),
    lng: z.coerce.number(),
})

export const validateWithZod = function<T>(schema: z.ZodType<T>, data: unknown){
    const result = schema.safeParse(data)
    if(!result.success){
        const errors = result.error.issues.map(err => err.message)
        throw new Error(errors.join(','))
    }

    return result.data
}