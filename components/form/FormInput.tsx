import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
    type: string
    name: string;
    id: string;
    label: string;
    defaultValue?: string;
    placeholder?: string;
}

export default function FormInput({ name, id, type, label, defaultValue, placeholder }: FormInputProps) {
  return (
    <div className="flex flex-col gap-4">
        <Label htmlFor={id}>{label}</Label>
        <Input 
            type={type} 
            name={name} 
            id={id} 
            defaultValue={defaultValue} 
            placeholder={placeholder} 
        />
    </div>
  );
}
