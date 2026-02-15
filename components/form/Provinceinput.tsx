import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { provinces } from '@/utils/provinces';

type ProvinceInputProps = {
  defaultValue?: string
}

export default function ProvinceInput({ defaultValue }: ProvinceInputProps) {
  const name = 'province'

  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor={name}>Province</Label>
      <Select
        name={name}
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
        required
      >
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Select your province." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {provinces.map(item => (
              <SelectItem value={item.PROVINCE_NAME} key={item.PROVINCE_ID}>
                <span className='capitalize'>{item.PROVINCE_NAME}</span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
