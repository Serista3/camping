import LandmarkCard from "../card/LandmarkCard"
import { LandmarkCardProps } from "@/utils/types"

export default function LandmarkList({ landmarks }: { landmarks: LandmarkCardProps[] }){
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
      {landmarks.map(landmark => (
        <LandmarkCard key={landmark.id} landmark={landmark} />
      ))}
    </section>
  )
}