'use server'

import type { FormActionState } from "@/utils/types"
import { profileSchema, validateWithZod, imageSchema, landmarkSchema  } from "@/utils/schemas"
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import db from '@/utils/db'
import { redirect } from "next/navigation"
import { uploadFile } from "@/utils/supabase"

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

export const createLandmarkAction = async function(prevState: FormActionState, formData: FormData): Promise<FormActionState>{
    try { 
        const user = await getAuthUser()
        const rawData = Object.fromEntries(formData)
        const file = formData.get('image') as File

        const validDatedFile = validateWithZod(imageSchema, { image: file })
        const validDatedData = validateWithZod(landmarkSchema, rawData)

        const fullPath = await uploadFile(validDatedFile.image)
        
        await db.landmark.create({
            data: {
                ...validDatedData,
                image: fullPath,
                profileId: user.id,
            }
        })
    }catch(error){
        return renderError(error)
    }

    redirect('/')
}

export const getLandmarks = async function(){
    const landmarks = await db.landmark.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })

    return landmarks
}

export const getFavoriteId = async function({ landmarkId }: { landmarkId: string }){
    const user = await getAuthUser();
    const favorite = await db.favorite.findFirst({
        where: {
            landmarkId,
            profileId: user.id
        },
        select: {
            id: true
        }
    })

    return favorite?.id || null
}

export const toggleFavoriteAction = async function(){
    return { message: 'Add favorite success!' }
}