import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories } from '@/utils/categories';

type CategoryInputProps = {
  defaultValue?: string
}

export default function CategoryInput({ defaultValue }: CategoryInputProps) {
  const name = 'category'

  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor={name}>Category</Label>
      <Select
        name={name}
        defaultValue={defaultValue || categories[0].label}
        required
      >
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Select your category." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map(item => (
              <SelectItem value={item.label} key={item.label}>
                <item.icon />
                <span className='capitalize'>{item.label}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
