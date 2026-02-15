import { Label } from "../ui/label"
import { Input } from "../ui/input"

export default function ImageInput(){
  const name = 'image'

  return (
    <div className="mt-4 flex flex-col gap-4">
      <Label className="capitalize" htmlFor={name}>
        {name}
      </Label>
      <Input 
        id={name}  
        name={name}
        type="file"
        accept="image/*" 
        required
      />
    </div>
  )
}