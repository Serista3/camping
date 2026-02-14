'use server'

import type { FormActionState } from "@/utils/types"
import { profileSchema, validateWithZod } from "@/utils/schemas"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import db from '@/utils/db'
import { redirect } from "next/navigation"

const getAuthUser = async function(){
    const user = await currentUser();
    
    if(!user) throw new Error('You must Login!')
    if(!user.privateMetadata.hasProfile) redirect('/profile/create')

    return user;
}

const renderError = function(error: unknown): { message: string; } {
    return { message: error instanceof Error ? error.message : 'A server error.'}
}

export const createProfileAction = async function(prevState: FormActionState, formData: FormData){
    try { 
        const user = await currentUser()
        if(!user) throw new Error('Please Login!')

        const rawData = Object.fromEntries(formData)
        const validDateData = validateWithZod(profileSchema, rawData)

        // Insert to db
        await db.profile.create({
            data: {
                clerkId: user.id,
                ...validDateData,
                email: user.emailAddresses.at(0)?.emailAddress || '',
                profileImage: user.imageUrl ?? ''
            }
            
        })

        // Add user metadata
        const client = await clerkClient()
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })

    }catch(error){
        return renderError(error)
    }

    redirect('/')
}