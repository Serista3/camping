import { LandmarkCardProps } from "@/utils/types";

export default function OtherInfo({ landmark }: { landmark: LandmarkCardProps }){
  return (
    <div className="text-white">
      <p>{landmark.province}</p>
      <p className="text-4xl font-semibold md:my-3 md:text-6xl md:leading-20">{landmark.name}</p>
      <p className="text-lg">{landmark.description.substring(0, 50)+'...'}</p>
    </div>
  )
}