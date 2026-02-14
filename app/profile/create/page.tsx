import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import SubmitButton from "@/components/form/SubmitButton"
import { createProfileAction } from "@/action/actions"
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function CreateProfile(){
    const user = await currentUser()
    if(user?.privateMetadata.hasProfile) redirect('/')

    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
            <div className="p-6 rounded-md border max-w-200">
                <FormContainer action={createProfileAction}>
                    <fieldset>
                        <legend className="text-xl mb-4 font-semibold">General Information</legend>
                        <div className="grid md:grid-cols-2 gap-8">
                            <FormInput 
                                name="firstName" 
                                type="text" 
                                id="firstName" 
                                label="First Name" 
                                placeholder="enter your first name." 
                            />
                            <FormInput 
                                name="lastName" 
                                type="text" 
                                id="lastName" 
                                label="Last Name" 
                                placeholder="enter your last name." 
                            />
                            <FormInput 
                                name="userName" 
                                type="text" 
                                id="userName" 
                                label="Username" 
                                placeholder="enter your username." 
                            />
                        </div>
                    </fieldset>
                    <SubmitButton  size="lg" className="mt-10">Create Profile</SubmitButton>
                </FormContainer>
            </div>
        </section>
    )
}