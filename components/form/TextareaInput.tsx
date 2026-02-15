import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

type TextareaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
}

export default function TextareaInput({ name, labelText, defaultValue }: TextareaInputProps){
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Label htmlFor={name} className="capitalize">{labelText || name}</Label>
      <Textarea name={name} id={name} defaultValue={defaultValue} rows={50} required />
    </div>
  )
}