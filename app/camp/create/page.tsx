import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import SubmitButton from "@/components/form/SubmitButton"
import CategoryInput from "@/components/form/CategoryInput"
import TextareaInput from "@/components/form/TextareaInput"
import ProvinceInput from "@/components/form/Provinceinput"
import { createLandmarkAction } from "@/action/actions"
import MapLandmark from "@/components/map/MapLandmark"
import ImageInput from "@/components/form/ImageInput"

export default async function CreateCamp(){
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">Create Landmark</h1>
            <div className="p-6 rounded-md border max-w-200">
                <FormContainer action={createLandmarkAction}>
                    <fieldset>
                        <div className="grid md:grid-cols-2 gap-8">
                            <FormInput 
                                name="name" 
                                type="text" 
                                id="name" 
                                label="Landmark Name" 
                                placeholder="enter your Landmark name." 
                            />
                            <CategoryInput />
                        </div>
                        <TextareaInput name="description" />
                        <div className="grid md:grid-cols-2 gap-8 mt-4">
                          <FormInput 
                              name="price" 
                              type="number" 
                              id="price" 
                              label="Price" 
                              placeholder="enter your price." 
                          />
                          <ProvinceInput />
                        </div>
                        <ImageInput />
                        <MapLandmark />
                    </fieldset>
                    <SubmitButton  size="lg" className="mt-10">Create Landmark</SubmitButton>
                </FormContainer>
            </div>
        </section>
    )
}