import { getLandmarks } from "@/action/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";
import CategoryList from "./CategoryList";

export default async function LandmarkContainer({ search, category }: { search?: string, category?: string }){
  const landmarks: LandmarkCardProps[] = await getLandmarks({ search, category })

  return (
    <div>
      <Hero landmarks={landmarks} />
      <CategoryList search={search} category={category} />
      <LandmarkList landmarks={landmarks} />
    </div>
  )
}