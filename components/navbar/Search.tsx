import { Input } from "../ui/input"

export default function Search(){
    return (
        <Input
            type="text"
            placeholder="ค้นหาสถานที่ตั้งแคมป์"
            className="max-w-sm"
        />
    )
}