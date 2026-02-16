import { categories } from "@/utils/categories";
import Link from "next/link";

export default function CategoryList({ search, category }: { search: string; category: string; }){
  return (
    <div>
      {categories.map(category => (
        <Link key={category.label} href={}>{category.label}</Link>
      ))}
    </div>
  )
}