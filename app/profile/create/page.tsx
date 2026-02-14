import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import SubmitButton from "@/components/form/SubmitButton"


const createProfileAction = async function(prevState: any, formData: FormData){
    'use server'
    const firstName = formData.get('firstName')
    console.log(firstName)

    return { message: 'Create profile success!'}
}

export default function CreateProfile(){
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">new user</h1>
            <div className="p-6 rounded-md border max-w-200">
                <FormContainer action={createProfileAction}>
                    <legend className="text-xl mb-4">General Information</legend>
                    <fieldset className="grid md:grid-cols-2 gap-8">
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
                    </fieldset>
                    <SubmitButton  size="lg" className="mt-10">Create Profile</SubmitButton>
                </FormContainer>
            </div>
        </section>
    )
}